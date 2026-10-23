import type { Metadata } from "next";
import { languageAlternates, locales, ogLocales, siteConfig, type Locale } from "@/config/site";

// Canonical, hreflang, Open Graph and Twitter tags for one page. A page's
// openGraph replaces the layout's whole object, so each page passes the full set.
export function pageMetadata({
  locale,
  path,
  title,
  description,
  siteName,
}: {
  locale: Locale;
  path: string;
  title: string;
  description: string;
  siteName: string;
}): Metadata {
  const url = `${siteConfig.url}/${locale}${path}`;
  return {
    description,
    alternates: { canonical: url, languages: languageAlternates(path) },
    openGraph: {
      type: "website",
      siteName,
      title,
      description,
      url,
      locale: ogLocales[locale],
      alternateLocale: locales.filter((l) => l !== locale).map((l) => ogLocales[l]),
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

// Referenced by the WebSite and GovernmentService nodes on the same page.
export const organizationId = `${siteConfig.url}/#organization`;
