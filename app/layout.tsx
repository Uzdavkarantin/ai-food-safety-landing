import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Manrope, Space_Grotesk } from "next/font/google";
import { SITE } from "@/lib/data";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.title,
    template: `%s — ${SITE.name}`,
  },
  description:
    "Oziq-ovqat mahsulotlari xavfsizligi qo'mitasining sun'iy intellekt portali: AI Sertifikat, " +
    "AI Call Center, AI Import, AI Reyting va boshqa 13 ta xizmat — daladan dasturxongacha.",
  applicationName: SITE.name,
  authors: [{ name: SITE.org, url: SITE.official }],
  creator: SITE.org,
  publisher: SITE.org,
  keywords: [
    "oziq-ovqat xavfsizligi",
    "sun'iy intellekt",
    "AI portal",
    "Oziq-ovqat mahsulotlari xavfsizligi qo'mitasi",
    "food-safety.uz",
    "ai.food-safety.uz",
    "fitosanitariya",
    "veterinariya",
    "Codex Alimentarius",
    "MRL",
    "traceability",
    "daladan dasturxongacha",
  ],
  alternates: {
    canonical: "/",
    languages: { "uz-UZ": "/" },
  },
  openGraph: {
    type: "website",
    locale: "uz_UZ",
    url: SITE.url,
    siteName: SITE.name,
    title: SITE.title,
    description: SITE.tagline,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.tagline,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  icons: {
    icon: "/assets/logo-qomita.jpeg",
    apple: "/assets/logo-qomita.jpeg",
  },
  category: "government",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafaf9" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0b0a" },
  ],
  width: "device-width",
  initialScale: 1,
};

/** Sahifa chizilgunicha mavzuni qo'yadi — «oq chaqnash» bo'lmaydi. */
const THEME_SCRIPT = `(function(){try{
var s=localStorage.getItem('ai-food-safety-theme');
var t=s||(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');
document.documentElement.setAttribute('data-theme',t);
document.documentElement.style.colorScheme=t;
}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uz" data-theme="light" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
      </head>
      <body className={`${display.variable} ${body.variable} ${mono.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
