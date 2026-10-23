import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { languageAlternates, siteConfig } from "../src/config/site.ts";

test("contact numbers are the committee's real ones", () => {
  assert.equal(siteConfig.contactPhone, "+998 71 202 84 84");
  assert.equal(siteConfig.hotline, "1288");
});

test("hreflang links cover every locale, with Uzbek as x-default", () => {
  const url = siteConfig.url;
  assert.deepEqual(languageAlternates(""), {
    uz: `${url}/uz`,
    ru: `${url}/ru`,
    en: `${url}/en`,
    "x-default": `${url}/uz`,
  });
  assert.equal(languageAlternates("/xizmatlar/oshxona")["x-default"], `${url}/uz/xizmatlar/oshxona`);
});

test("the root URL always opens Uzbek, whatever the browser language", () => {
  const routing = readFileSync(new URL("../src/i18n/routing.ts", import.meta.url), "utf8");
  assert.match(routing, /localeDetection:\s*false/);
});
