import Image from "next/image";
import Chat from "@/components/Chat";
import Header from "@/components/Header";
import Icon from "@/components/Icon";
import Motif from "@/components/Motif";
import PointerFX from "@/components/PointerFX";
import Reveal from "@/components/Reveal";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import {
  CHAIN_STEPS,
  HERO_SERVICES,
  INFRA,
  SERVICES,
  SITE,
  SOCIALS,
  SPOKES,
  TIER_LABEL,
} from "@/lib/data";

const MESH_PATHS = [
  "M-40 210C220 130 420 300 700 250s500-170 800-60",
  "M-40 290C230 205 430 380 700 330s510-170 810-55",
  "M-40 380C240 290 440 465 700 415s520-165 820-45",
  "M-40 480C250 385 450 555 700 505s530-160 830-35",
  "M-40 590C260 490 460 655 700 605s540-155 840-25",
  "M-40 710C270 605 470 765 700 715s550-150 850-15",
  "M-40 840C280 730 480 885 700 835s560-145 860-5",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "GovernmentOrganization",
      "@id": `${SITE.url}/#org`,
      name: SITE.org,
      alternateName: "AI Food Safety",
      url: SITE.url,
      logo: `${SITE.url}/assets/logo-qomita.jpeg`,
      areaServed: { "@type": "Country", name: "O'zbekiston" },
      sameAs: [SITE.official, SITE.telegram, SITE.cabinet],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: SITE.hotline,
          contactType: "customer service",
          availableLanguage: ["uz", "ru"],
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE.url}/#website`,
      url: SITE.url,
      name: SITE.name,
      description: SITE.tagline,
      inLanguage: "uz",
      publisher: { "@id": `${SITE.url}/#org` },
    },
    {
      "@type": "ItemList",
      name: "AI xizmatlar",
      itemListElement: SERVICES.map((s, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Service",
          name: s.name,
          description: s.info[0],
          serviceType: s.tierLabel ?? TIER_LABEL[s.tier],
          provider: { "@id": `${SITE.url}/#org` },
          areaServed: { "@type": "Country", name: "O'zbekiston" },
        },
      })),
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <a className="skip-link" href="#xizmatlar">
        Asosiy mazmunga o'tish
      </a>

      <Header />

      <main id="top">
        {/* ---------- hero ---------- */}
        <section className="hero" aria-labelledby="hero-h">
          <svg
            aria-hidden="true"
            data-par="14"
            viewBox="0 0 1440 900"
            preserveAspectRatio="none"
            className="hero__mesh"
          >
            <g fill="none" stroke="var(--mesh)" strokeWidth="1">
              {MESH_PATHS.map((d) => (
                <path key={d} d={d} />
              ))}
            </g>
          </svg>

          <div aria-hidden="true" className="hero__glowwrap">
            <div data-par="46" className="hero__glow" />
          </div>

          <div className="shell hero__inner">
            <div className="hero__copy">
              <span className="eyebrow">
                <span className="dot-live" />
                Oziq-ovqat xavfsizligi qo'mitasi
              </span>
              <h1 id="hero-h" className="hero__title">
                AI Food Safety
              </h1>
              <p className="hero__lead">{SITE.tagline}</p>
              <div className="hero__cta">
                <a className="cta" href="#xizmatlar">
                  Xizmatlarni ko'rish
                  <Icon name="arrow" size={18} />
                </a>
              </div>
            </div>

            <div className="stage">
              <svg
                aria-hidden="true"
                focusable="false"
                viewBox="0 0 1152 680"
                preserveAspectRatio="none"
                className="stage__spokes"
              >
                <ellipse cx="576" cy="340" rx="340" ry="252" fill="none" stroke="var(--line)" strokeWidth="1" />
                <ellipse
                  cx="576"
                  cy="340"
                  rx="176"
                  ry="130"
                  fill="none"
                  stroke="var(--line)"
                  strokeWidth="1"
                  strokeDasharray="2 10"
                />
                {SPOKES.map((s) => (
                  <path key={`base-${s.d}`} d={s.d} fill="none" stroke="var(--line2)" strokeWidth="1.2" strokeDasharray="1 5" />
                ))}
                {SPOKES.map((s) => (
                  <path
                    key={`flow-${s.d}`}
                    d={s.d}
                    fill="none"
                    stroke="var(--accent)"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeDasharray="5 21"
                    style={{ animation: "om-dash 3.2s linear infinite" }}
                  />
                ))}
                {SPOKES.map((s) => (
                  <circle
                    key={`node-${s.d}`}
                    cx={s.x}
                    cy={s.y}
                    r="3.2"
                    fill="var(--accent)"
                    style={{ animation: "om-shimmer 2.8s ease-in-out infinite" }}
                  />
                ))}
              </svg>

              <div className="stage__motif">
                <div aria-hidden="true" className="stage__orbit">
                  <span className="orbit-a" />
                  <span className="orbit-b" />
                  <span className="orbit-c" />
                </div>
                <Motif parallax={26} />
              </div>

              <div className="stage__cards">
                {HERO_SERVICES.map((s, i) => (
                  <a
                    key={s.slug}
                    href="#xizmatlar"
                    className="herocard"
                    style={{ "--x": SPOKES[i].left, "--y": SPOKES[i].top } as React.CSSProperties}
                  >
                    <span className="herocard__icon">
                      <Icon name={s.icon} size={21} />
                    </span>
                    <span className="herocard__body">
                      <span className="herocard__name">{s.name}</span>
                      <span className="herocard__short">{s.short}</span>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ---------- xizmatlar ---------- */}
        <section id="xizmatlar" data-reveal className="section" aria-labelledby="xiz-h">
          <div className="section__head section__head--split">
            <div style={{ maxWidth: 640 }}>
              <span className="kicker">02 — Xizmatlar</span>
              <h2 id="xiz-h" className="section__title">
                AI xizmatlar
              </h2>
            </div>
          </div>
          <Services />
        </section>

        {/* ---------- infratuzilma ---------- */}
        <section id="yechimlar" data-reveal className="section" aria-labelledby="yech-h">
          <div className="section__head">
            <span className="kicker">03 — Infratuzilma</span>
            <h2 id="yech-h" className="section__title">
              AI yechimlar
            </h2>
          </div>
          <div className="infra">
            {INFRA.map((i) => (
              <div key={i.name} className="infra__item">
                <span className="infra__icon">
                  <Icon name={i.icon} size={24} />
                </span>
                <span className="infra__name">{i.name}</span>
                <span className="infra__desc">{i.desc}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ---------- raqamlar ---------- */}
        <section id="raqamlar" data-reveal className="section" aria-labelledby="raq-h">
          <div className="section__head">
            <span className="kicker">04 — Ta'sir</span>
            <h2 id="raq-h" className="section__title">
              Raqamlar
            </h2>
          </div>
          <Stats />
        </section>

        {/* ---------- zanjir ---------- */}
        <section id="portal" data-reveal className="section section--last" aria-labelledby="proc-h">
          <div className="section__head">
            <span className="kicker">05 — Zanjir</span>
            <h2 id="proc-h" className="section__title">
              Daladan dasturxongacha
            </h2>
          </div>
          <div className="chain">
            <div className="chain__steps">
              {CHAIN_STEPS.map((p) => (
                <div key={p.num} className="chain__step">
                  <span className="chain__icon">
                    <Icon name={p.icon} size={26} />
                  </span>
                  <span className="chain__num">{p.num}</span>
                  <span className="chain__name">{p.name}</span>
                  <span className="chain__desc">{p.desc}</span>
                </div>
              ))}
            </div>
            <p className="chain__more">Mahsulotning to'liq nazorat zanjiri</p>
          </div>
        </section>
      </main>

      <footer id="aloqa" className="footer">
        <div className="footer__top">
          <div className="footer__about">
            <div className="footer__brand">
              <Image
                src="/assets/logo-qomita.jpeg"
                alt="Qo'mita gerbi"
                width={40}
                height={40}
                className="footer__mark"
              />
              <span className="footer__name">AI Food Safety</span>
            </div>
            <p className="footer__text">{SITE.org} — sun'iy intellekt portali.</p>
            <ul className="footer__links">
              <li>
                <a href={`tel:${SITE.hotline}`}>Ishonch telefoni: {SITE.hotline}</a>
              </li>
              <li>
                <a href={SITE.official} rel="noopener">
                  Rasmiy sahifa: gov.uz/oz/karantin
                </a>
              </li>
              <li>
                <a href={SITE.cabinet} rel="noopener">
                  cabinet.karantin.uz
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__social">
            <div className="kicker">Ijtimoiy tarmoqlar</div>
            <div className="socials">
              {SOCIALS.map((s) => (
                <a key={s.name} href={s.href} className="social" aria-label={s.name} title={s.name} rel="noopener">
                  <Icon name={s.icon} size={19} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <span>© 2026 Oziq-ovqat mahsulotlari xavfsizligi qo'mitasi</span>
          <span>ai.karantin.uz</span>
        </div>
      </footer>

      <Chat />
      <PointerFX />
      <Reveal />
    </>
  );
}
