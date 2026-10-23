import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { siteConfig, type Locale } from "@/config/site";
import { getService, serviceSlugs } from "@/config/services";
import { organizationId, pageMetadata } from "@/config/metadata";
import { JsonLd } from "@/components/JsonLd";
import { ServicePage } from "@/components/service/ServicePage";

type Props = { params: Promise<{ locale: string; slug: string }> };

// Only the 12 known services exist; anything else (e.g. /patogen) is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!getService(slug)) return {};
  const t = await getTranslations({ locale, namespace: `services.items.${slug}` });
  const s = await getTranslations({ locale, namespace: "site" });

  return {
    title: t("name"),
    ...pageMetadata({
      locale: locale as Locale,
      path: `/xizmatlar/${slug}`,
      title: t("name"),
      description: t("lead"),
      siteName: s("name"),
    }),
  };
}

export default async function ServiceRoute({ params }: Props) {
  const { locale, slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  setRequestLocale(locale as Locale);
  const t = await getTranslations({ locale, namespace: "services" });
  const name = t(`items.${slug}.name`);
  const url = `${siteConfig.url}/${locale}/xizmatlar/${slug}`;

  return (
    <>
      <ServicePage service={service} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "GovernmentService",
          name,
          description: t(`items.${slug}.lead`),
          url,
          provider: { "@id": organizationId },
          areaServed: { "@type": "Country", name: "Uzbekistan" },
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: t("common.home"), item: `${siteConfig.url}/${locale}` },
            { "@type": "ListItem", position: 2, name, item: url },
          ],
        }}
      />
    </>
  );
}
