function resolveUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  // Vercel provides this at build & runtime (host only, no protocol)
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL)
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  return "https://ai.food-safety.uz";
}

export const siteConfig = {
  url: resolveUrl(),
  cabinetUrl: "https://cabinet.karantin.uz",
  hotline: "1288",
  contactPhone: "+998 71 202 84 84",
  laws: [
    { href: "https://lex.uz/docs/-7789403" },
    { href: "https://lex.uz/docs/-7158604" },
    { href: "https://lex.uz/docs/-8214387" },
    {
      href: "https://anhor.uz/uz/news/ijtimoiy-loyihalar-uchun-ai-infratuzilmasidan-bepul-foydalanish-tartibi-belgilandi",
    },
  ],
  lawsAllUrl: "https://lex.uz",
  social: {
    telegram: "https://t.me/food_safety_uzb",
    facebook: "https://www.facebook.com/foodsafetyuzb",
    instagram: "https://www.instagram.com/uzdavkarantin",
    youtube: "https://www.youtube.com/@Foodsafetyuzb",
    x: "https://x.com/foodsafetyuzb",
  },
};

export const locales = ["uz", "ru", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "uz";

// Open Graph wants language_TERRITORY.
export const ogLocales: Record<Locale, string> = { uz: "uz_UZ", ru: "ru_RU", en: "en_US" };

// hreflang links for a path ("" for the home page); Uzbek is the x-default.
export function languageAlternates(path: string): Record<string, string> {
  return Object.fromEntries([
    ...locales.map((l) => [l, `${siteConfig.url}/${l}${path}`]),
    ["x-default", `${siteConfig.url}/${defaultLocale}${path}`],
  ]);
}
