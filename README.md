# AI Food Safety — `ai.food-safety.uz`

Oziq-ovqat mahsulotlari xavfsizligi qo'mitasining sun'iy intellekt portali uchun
bosh sahifa. Claude Design'dagi `AI Xavfsizlik Landing.dc.html` maketi Next.js
(App Router, TypeScript) ilovasi sifatida qayta yozilgan.

## Ishga tushirish

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # ishlab chiqarish uchun yig'ish
npm start        # yig'ilgan versiyani ishga tushirish
npm run typecheck
```

## Tuzilma

| Yo'l | Mazmuni |
|------|---------|
| `app/layout.tsx` | Shriftlar, SEO metama'lumotlari, mavzu skripti |
| `app/page.tsx` | Bosh sahifa: hero, xizmatlar, infratuzilma, raqamlar, zanjir, futer, JSON-LD |
| `app/globals.css` | Dizayn tokenlari (light/dark), animatsiyalar, barcha komponent uslublari |
| `lib/data.ts` | 13 ta AI xizmat, infratuzilma, statistika, zanjir bosqichlari, hero geometriyasi |
| `components/` | Header, Services (+modal), Stats, Chat, Motif, Icon, PointerFX, Reveal |
| `public/assets/` | Qo'mita gerbi va Agro AI avatari |
| `docs/` | Tadqiqot materiallari (qo'mita tahlili, xizmatlar portfeli, chet el tajribasi) |

## SEO

- Butun kontent server tomonida chiziladi (`next build` — barcha sahifalar statik).
- `schema.org` JSON-LD: `GovernmentOrganization`, `WebSite`, 13 ta `Service` dan iborat `ItemList`.
- `app/sitemap.ts`, `app/robots.ts`, `app/opengraph-image.tsx` (1200×630 OG rasm).
- `lang="uz"`, kanonik URL, OpenGraph/Twitter kartalari, `themeColor` (light/dark).

## Eslatmalar

- Chat oynasidagi javoblar hozircha kalit so'zlarga asoslangan demo
  (`components/Chat.tsx` → `aiReply`). Haqiqiy Oziq-ovqat LLM ulanganda shu
  funksiya API chaqiruviga almashtiriladi.
- Mavzu (light/dark) `localStorage` da saqlanadi, boshlang'ich qiymat tizim
  sozlamasidan olinadi — sahifa chizilishida "oq chaqnash" bo'lmaydi.
