import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { locales, siteConfig } from "@/config/site";
import { shareImage } from "@/components/share/ShareImage";

export const alt = "AI Food Safety — ai.food-safety.uz";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Rendered once per locale at build time.
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function Image({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!hasLocale(locales, locale)) notFound();
  const t = await getTranslations({ locale, namespace: "home.hero" });
  const s = await getTranslations({ locale, namespace: "site" });
  const f = await getTranslations({ locale, namespace: "footer" });

  return shareImage({
    eyebrow: s("name"),
    title: t("title"),
    text: t("lead"),
    hotline: f("hotline", { phone: siteConfig.hotline }),
  });
}
