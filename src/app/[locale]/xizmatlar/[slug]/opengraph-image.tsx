import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { locales, siteConfig } from "@/config/site";
import { getService, serviceSlugs } from "@/config/services";
import { shareImage } from "@/components/share/ShareImage";

export const alt = "AI Food Safety — ai.food-safety.uz";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Rendered once per locale and service at build time.
export function generateStaticParams() {
  return locales.flatMap((locale) => serviceSlugs.map((slug) => ({ locale, slug })));
}

export default async function Image({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!hasLocale(locales, locale) || !getService(slug)) notFound();
  const t = await getTranslations({ locale, namespace: `services.items.${slug}` });
  const s = await getTranslations({ locale, namespace: "site" });
  const f = await getTranslations({ locale, namespace: "footer" });

  return shareImage({
    eyebrow: s("name"),
    title: t("name"),
    text: t("card"),
    hotline: f("hotline", { phone: siteConfig.hotline }),
  });
}
