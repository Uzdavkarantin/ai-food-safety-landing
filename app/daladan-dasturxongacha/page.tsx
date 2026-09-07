import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Icon from "@/components/Icon";
import Journey from "@/components/Journey";
import { JOURNEY, JOURNEY_SUMMARY, SITE } from "@/lib/data";

const TITLE = "Daladan dasturxongacha — bir olma sayohati";
const DESCRIPTION =
  "Bir partiya olmaning to'rt bosqichli yo'li: dala daftaridan laboratoriya tahliliga, " +
  "chegara rasmiylashtiruvidan bozordagi QR kuzatuvigacha — yagona raqamli pasport.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/daladan-dasturxongacha" },
  openGraph: {
    type: "article",
    locale: "uz_UZ",
    url: `${SITE.url}/daladan-dasturxongacha`,
    siteName: SITE.name,
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Daladan dasturxongacha — partiya kuzatuvi",
  description: DESCRIPTION,
  inLanguage: "uz",
  publisher: { "@id": `${SITE.url}/#org` },
  step: JOURNEY.map((scene, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: `${scene.stage} — ${scene.title}`,
    text: scene.text,
  })),
};

export default function JourneyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Header variant="sub" />

      <section className="journey__intro">
        <span className="kicker">Kuzatuv zanjiri · Traceability</span>
        <h1 className="journey__title">Daladan dasturxongacha</h1>
      </section>

      <Journey />

      <section className="outro">
        <div>
          <span className="kicker">Zanjir yopildi</span>
          <h2 className="outro__title">To'rt bosqich, bitta raqamli pasport</h2>
          <p className="outro__text">
            Dala, laboratoriya, chegara va bozor ma'lumotlari bir zanjirda birlashadi — shuning uchun
            har bir partiyani orqaga qarab kuzatish mumkin.
          </p>
          <Link className="cta" href="/#xizmatlar">
            AI xizmatlarni ko'rish
            <Icon name="arrow" size={18} />
          </Link>
        </div>
        <div className="outro__list">
          {JOURNEY_SUMMARY.map((s) => (
            <div key={s.num} className="outro__item">
              <span className="outro__icon">
                <Icon name={s.icon} size={21} />
              </span>
              <span>
                <span className="outro__name">{s.name}</span>
                <span className="outro__desc">{s.desc}</span>
              </span>
              <span className="outro__num">{s.num}</span>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <div className="footer__bottom footer__bottom--flat">
          <span>© 2026 Oziq-ovqat mahsulotlari xavfsizligi qo'mitasi</span>
          <span>{SITE.url.replace("https://", "")}</span>
        </div>
      </footer>
    </>
  );
}
