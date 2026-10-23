import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { siteConfig, type Locale } from "@/config/site";
import { organizationId, pageMetadata } from "@/config/metadata";
import { JsonLd } from "@/components/JsonLd";
import { Hero } from "@/components/home/Hero";
import { ServicesSection } from "@/components/home/ServicesSection";
import { TechSection } from "@/components/home/TechSection";
import { NumbersSection } from "@/components/home/NumbersSection";
import { JourneySection } from "@/components/home/JourneySection";
import { CursorGlow } from "@/components/CursorGlow";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home.hero" });
  const s = await getTranslations({ locale, namespace: "site" });

  return {
    // The hero headline carries the search terms; the brand follows it.
    title: { absolute: `${t("title")} — ${s("brand")}` },
    ...pageMetadata({
      locale: locale as Locale,
      path: "",
      title: t("title"),
      description: t("lead"),
      siteName: s("name"),
    }),
  };
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);
  const s = await getTranslations({ locale, namespace: "site" });

  return (
    <>
      <Hero />
      <ServicesSection />
      <TechSection />
      <NumbersSection />
      <JourneySection />
      <CursorGlow />
      {/* Gives Google the site name it shows above search results. */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: s("brand"),
          alternateName: siteConfig.url.replace(/^https?:\/\//, ""),
          url: siteConfig.url,
          inLanguage: locale,
          publisher: { "@id": organizationId },
        }}
      />
    </>
  );
}
