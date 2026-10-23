# AI Food Safety — `ai.food-safety.uz`

Oziq-ovqat mahsulotlari xavfsizligi qo'mitasining sun'iy intellekt portali:
bosh sahifa va 12 ta AI xizmat sahifasi (namuna ma'lumotlar bilan).
Next.js 16 (App Router) · next-intl (UZ/RU/EN) · Tailwind v4 · next-themes (yorug'/tungi).

## Ishga tushirish

```bash
pnpm install
pnpm dev         # http://localhost:3000
pnpm test        # node:test — tarjimalar, xizmatlar, uslub qoidalari, SEO
                 # (SEO teglari testlari `pnpm build` dan keyin ishlaydi)
pnpm lint
pnpm build       # 39 ta statik sahifa (3 til × (bosh sahifa + 12 xizmat)) + 39 ta ulashish rasmi
pnpm start
```

Sayt manzili `NEXT_PUBLIC_SITE_URL` orqali beriladi; berilmasa
`https://ai.food-safety.uz` ishlatiladi (`src/config/site.ts`).

## Tuzilma

| Yo'l | Mazmuni |
|------|---------|
| `src/app/[locale]/page.tsx` | Bosh sahifa: hero, xizmatlar, texnologiyalar, raqamlar, "Daladan dasturxongacha" |
| `src/app/[locale]/xizmatlar/[slug]/page.tsx` | 12 ta xizmat sahifasi (`dynamicParams = false`, noma'lum slug → 404) |
| `src/components/home/` | Bosh sahifa bo'limlari |
| `src/components/service/` | Xizmat sahifasi shabloni, demo forma, natija bloklari, jonli kamera |
| `src/config/services.ts` | Xizmatlar tartibi, ranglar, bog'liq xizmatlar, zanjir bosqichlari |
| `src/messages/{uz,ru,en}/` | Barcha matnlar va namuna ma'lumotlar (`common`, `home`, `services`) |
| `src/app/globals.css` | Dizayn tokenlari (yorug'/tungi), animatsiyalar |
| `public/images/journey/` | "Daladan dasturxongacha" rasmlari (Gemini) |
| `public/videos/` | AI Oshxona jonli kamera videosi (Gemini) |
| `tests/` | `node --test` testlari |
| `docs/` | Tadqiqot materiallari va dizayn hujjatlari (`docs/superpowers/`) |

Eski `/daladan-dasturxongacha` havolasi bosh sahifadagi `#zanjir` bo'limiga yo'naltiriladi.
