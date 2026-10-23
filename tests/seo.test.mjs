import { test } from "node:test";
import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { existsSync, readFileSync } from "node:fs";
import { loadMessages } from "./helpers.mjs";

// Checks the prerendered pages that crawlers and link previews receive, so the
// build-output tests run after `pnpm build` and are skipped without it.
const app = new URL("../.next/server/app/", import.meta.url);
const skip = !existsSync(new URL("uz.html", app)) && "needs `pnpm build`";

const OG_LOCALE = { uz: "uz_UZ", ru: "ru_RU", en: "en_US" };

const decode = (s) =>
  s
    .replace(/&#x([0-9a-f]+);/gi, (_, hex) => String.fromCodePoint(parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_, dec) => String.fromCodePoint(Number(dec)))
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&");

function page(path) {
  const html = readFileSync(new URL(`${path}.html`, app), "utf8");
  const meta = (key) => {
    const match = html.match(new RegExp(`<meta (?:property|name)="${key}" content="([^"]*)"`));
    return match ? decode(match[1]) : undefined;
  };
  return {
    title: decode(html.match(/<title>([^<]*)<\/title>/)?.[1] ?? ""),
    canonical: html.match(/<link rel="canonical" href="([^"]*)"/)?.[1],
    meta,
    html,
    jsonLd: [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/g)].map((m) =>
      JSON.parse(m[1]),
    ),
  };
}

test("home pages have a keyword title and their own share card", { skip }, () => {
  for (const locale of ["uz", "ru"]) {
    const m = loadMessages(locale);
    const p = page(locale);
    assert.equal(p.title, `${m.home.hero.title} — ${m.site.brand}`);
    assert.equal(p.meta("og:title"), m.home.hero.title);
    assert.equal(p.meta("og:site_name"), m.site.name);
    assert.equal(p.meta("og:url"), p.canonical);
    assert.equal(p.meta("og:locale"), OG_LOCALE[locale]);
    assert.match(p.meta("og:image") ?? "", new RegExp(`/${locale}/opengraph-image`));
    assert.equal(p.meta("og:image:width"), "1200");
    assert.equal(p.meta("twitter:card"), "summary_large_image");
    assert.equal(p.meta("twitter:title"), m.home.hero.title);
  }
});

test("service pages share their own title, text, link and image", { skip }, () => {
  for (const [locale, slug] of [["ru", "oshxona"], ["uz", "sertifikat"], ["en", "fermer"]]) {
    const m = loadMessages(locale);
    const item = m.services.items[slug];
    const p = page(`${locale}/xizmatlar/${slug}`);
    assert.equal(p.title, `${item.name} — ${m.site.name}`);
    assert.ok(p.canonical?.endsWith(`/${locale}/xizmatlar/${slug}`), p.canonical);
    assert.equal(p.meta("description"), item.lead);
    assert.equal(p.meta("og:title"), item.name);
    assert.equal(p.meta("og:description"), item.lead);
    assert.equal(p.meta("og:url"), p.canonical);
    assert.equal(p.meta("og:locale"), OG_LOCALE[locale]);
    assert.match(p.meta("og:image") ?? "", new RegExp(`/${locale}/xizmatlar/${slug}/opengraph-image`));
    assert.equal(p.meta("twitter:title"), item.name);
  }
});

test("structured data: organisation and website on home, service and breadcrumbs on services", { skip }, () => {
  const home = page("uz");
  const types = (p) => p.jsonLd.map((d) => d["@type"]).sort();
  assert.deepEqual(types(home), ["GovernmentOrganization", "WebSite"]);
  const org = home.jsonLd.find((d) => d["@type"] === "GovernmentOrganization");
  assert.equal(org.telephone, "+998 71 202 84 84");
  assert.equal(org.contactPoint.telephone, "1288");
  assert.equal(org.email, undefined, "no placeholder email");

  const m = loadMessages("ru");
  const service = page("ru/xizmatlar/oshxona");
  assert.deepEqual(types(service), ["BreadcrumbList", "GovernmentOrganization", "GovernmentService"]);
  const crumbs = service.jsonLd.find((d) => d["@type"] === "BreadcrumbList").itemListElement;
  assert.deepEqual(crumbs.map((c) => c.name), [m.services.common.home, m.services.items.oshxona.name]);
  assert.deepEqual(crumbs.map((c) => c.position), [1, 2]);
  assert.equal(crumbs[1].item, service.canonical);
  assert.equal(service.jsonLd.find((d) => d["@type"] === "GovernmentService").url, service.canonical);
});

test("browser and search-result icons are the committee emblem", () => {
  const appDir = new URL("../src/app/", import.meta.url);
  for (const file of ["icon.png", "apple-icon.png", "favicon.ico"]) {
    assert.ok(existsSync(new URL(file, appDir)), `src/app/${file} exists`);
  }
  const md5 = createHash("md5").update(readFileSync(new URL("favicon.ico", appDir))).digest("hex");
  assert.notEqual(md5, "c30c7d42707a47a3f4591831641e50dc", "favicon.ico is still the create-next-app triangle");
});
