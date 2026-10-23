import { defineRouting } from "next-intl/routing";
import { locales, defaultLocale } from "@/config/site";

export const routing = defineRouting({
  locales,
  defaultLocale,
  localePrefix: "always",
  // `/` always opens Uzbek; the browser language and locale cookie are ignored.
  localeDetection: false,
});
