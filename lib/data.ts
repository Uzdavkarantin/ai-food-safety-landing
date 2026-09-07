export type Tier = 1 | 2 | 3;

export type Service = {
  slug: string;
  name: string;
  /** Xizmatlar bo'limidagi qisqa tavsif */
  desc: string;
  /** Hero kartochkasidagi juda qisqa tavsif (faqat hero xizmatlari uchun) */
  short?: string;
  icon: string;
  tier: Tier;
  /** 3-bosqich xizmatlari uchun maxsus yorliq ("Uzoq muddat", "Pilot") */
  tierLabel?: string;
  /** Modal ichidagi to'rt qator: nima / nima uchun / qachon / kim uchun */
  info: [string, string, string, string];
};

export const INFO_KEYS = [
  "📌 Nima?",
  "🎯 Nima uchun kerak?",
  "🗓 Qachon ishga tushadi?",
  "👥 Kim uchun?",
] as const;

export const TIER_LABEL: Record<Tier, string> = {
  1: "1-bosqich",
  2: "2-bosqich",
  3: "Uzoq muddat",
};

export const SERVICES: Service[] = [
  {
    slug: "ai-sertifikat",
    name: "AI Sertifikat",
    desc: "Qaysi hujjat kerak? 24/7 yordamchi, havola bilan",
    short: "Qaysi hujjat kerak? 24/7 yordamchi",
    icon: "fileCheck",
    tier: 1,
    info: [
      "Mahsulotingiz nomini yozasiz — qanday sertifikat kerakligini, qaysi idoradan olinishini va taxminiy muddatini havolasi bilan aytib beradi. 24/7 ishlaydi.",
      "Tadbirkor hujjat izlab idoralarni aylanmaydi; noto'g'ri hujjat yig'ish va qayta-qayta murojaat qilish holatlari kamayadi.",
      "1-bosqich — birinchi navbatda, mavjud ma'lumotlar bazasi asosida ishga tushiriladi.",
      "Fermerlar, importchilar, savdo shoxobchalari va yangi biznes boshlayotganlar.",
    ],
  },
  {
    slug: "ai-call-center",
    name: "AI Call Center",
    desc: "1288 birinchi liniya, tipik savollarni yopadi",
    short: "1288 birinchi liniya",
    icon: "headset",
    tier: 1,
    info: [
      "1288 ishonch telefonining birinchi liniyasi: tipik savollarga o'zi javob beradi, murakkab holatni operatorga uzatadi.",
      "Navbatda kutish qisqaradi, kechqurun va dam olish kunlari ham javob bo'ladi.",
      "1-bosqich — ovoz modeli (STT/TTS) tayyor bo'lgani uchun tez yo'lga qo'yiladi.",
      "Aholi, fermerlar va tadbirkorlar.",
    ],
  },
  {
    slug: "ai-murojaatlar",
    name: "AI Murojaatlar",
    desc: "Shikoyatlarni tasnif va to'g'ri boshqarmaga yo'naltirish",
    short: "Shikoyatlarni tasnif qilish",
    icon: "inbox",
    tier: 1,
    info: [
      "Kelib tushgan shikoyat va murojaatlarni mavzusi bo'yicha tasniflab, tegishli boshqarmaga yo'naltiradi.",
      "Murojaat qo'lda taqsimlanmaydi — javob muddati qisqaradi va hech bir murojaat e'tibordan chetda qolmaydi.",
      "1-bosqich — matn tahlili uchun qo'shimcha infratuzilma talab qilmaydi.",
      "Murojaat yuborgan fuqarolar va qo'mita boshqarmalari.",
    ],
  },
  {
    slug: "ai-fermer",
    name: "AI Fermer",
    desc: "Dala daftari va zararkunanda bashorati",
    short: "Dala daftari va bashorat",
    icon: "sprout",
    tier: 2,
    info: [
      "Raqamli dala daftari: ekin, ishlov va dorilash yozuvlari saqlanadi; ob-havo va tarix asosida zararkunanda xavfi oldindan aytiladi.",
      "Hosil yo'qotilishi kamayadi, pestitsid me'yorida ishlatiladi — ya'ni mahsulot xavfsiz bo'ladi.",
      "2-bosqich — Prezident farmoni mandati bo'yicha, dala ma'lumotlari yig'ilgach.",
      "Fermerlar, klaster agronomlari va hududiy mutaxassislar.",
    ],
  },
  {
    slug: "ai-reyting",
    name: "AI Reyting",
    desc: "80 000 obyekt xavf-skoringi",
    short: "80 000 obyekt xavf-skoringi",
    icon: "gauge",
    tier: 2,
    info: [
      "80 000 dan ortiq nazorat obyektini xavf darajasi bo'yicha baholab, tekshiruv navbatini shakllantiradi.",
      "Inspektor eng xavfli obyektga boradi; qoidaga rioya qiladigan biznes ortiqcha tekshiruvdan xalos bo'ladi.",
      "2-bosqich — obyektlar reyestri to'liq raqamlashtirilgandan keyin.",
      "Inspektorlar, hududiy boshqarmalar va tadbirkorlar.",
    ],
  },
  {
    slug: "ai-import",
    name: "AI Import",
    desc: "Chegarada partiya xavfini bashorat qilish",
    short: "Chegarada partiya xavfi",
    icon: "download",
    tier: 2,
    info: [
      "Chegaraga kelayotgan partiyaning xavfini hujjatlar, mamlakat va oldingi buzilishlar tarixi asosida bashorat qiladi.",
      "Past xavfli yuk tez o'tadi, laboratoriya resursi haqiqiy xavf bor partiyalarga yo'naltiriladi — rasmiylashtirish 9 kundan 2 kunga qisqaradi.",
      "2-bosqich — bojxona va laboratoriya tizimlari bilan integratsiyadan so'ng.",
      "Importchilar, bojxona va chegara nazorat punktlari.",
    ],
  },
  {
    slug: "ai-eksport",
    name: "AI Eksport",
    desc: "Codex/MRL bo'yicha tayyorlik va rad xavfi bali",
    icon: "upload",
    tier: 2,
    info: [
      "Mahsulotning Codex va MRL talablariga tayyorligini tekshirib, chetda rad etilish xavfini foizda ko'rsatadi.",
      "Partiya chegarada qaytarilishi, valyuta yo'qotish va mamlakat obro'siga zarar yetishi oldini oladi.",
      "2-bosqich — xalqaro talablar bazasi ulanganidan keyin.",
      "Eksportchilar va eksport klasterlari.",
    ],
  },
  {
    slug: "ai-bozor",
    name: "AI Bozor",
    desc: "RASFF va tarmoq monitoringi, recall signali",
    icon: "store",
    tier: 2,
    info: [
      "RASFF va xalqaro tarmoqlardagi ogohlantirishlarni kuzatib, bozordan olib qo'yish (recall) signalini beradi.",
      "Xavfli deb topilgan mahsulot javonda qolmaydi — reaksiya kunlar emas, soatlar ichida bo'ladi.",
      "2-bosqich — tashqi manbalar monitoringi yo'lga qo'yilgach.",
      "Nazorat xizmati va savdo tarmoqlari.",
    ],
  },
  {
    slug: "ai-yorliq",
    name: "AI Yorliq",
    desc: "Etiketka talablarini surat orqali tekshirish",
    icon: "tag",
    tier: 2,
    info: [
      "Etiketkani suratga olasiz — talablarga mosligini tekshiradi va yetishmayotgan ma'lumotni ko'rsatadi.",
      "Yorliq xatolari sababli jarima, partiya to'xtatilishi va qaytarishlar kamayadi.",
      "2-bosqich — Computer Vision modeli o'qitilgandan so'ng.",
      "Ishlab chiqaruvchilar, importchilar va savdo nuqtalari.",
    ],
  },
  {
    slug: "ai-hisobot",
    name: "AI Hisobot",
    desc: "Codex moslik va KPI dashboardi",
    icon: "report",
    tier: 2,
    info: [
      "Codex moslik darajasi va KPI ko'rsatkichlarini bitta dashboardda jamlaydi.",
      "Rahbariyat qaror qabul qilish uchun qo'lda tayyorlangan hisobotni kutmaydi — ma'lumot real vaqtda ko'rinadi.",
      "2-bosqich — asosiy xizmatlar ma'lumot bera boshlaganda.",
      "Qo'mita rahbariyati va hududiy boshqarmalar.",
    ],
  },
  {
    slug: "ai-kuzatuv",
    name: "AI Kuzatuv",
    desc: "Daladan dasturxongacha kuzatuv (traceability)",
    icon: "trace",
    tier: 3,
    tierLabel: "Uzoq muddat",
    info: [
      "Har bir partiyaning daladan dasturxongacha yo'lini raqamli pasport sifatida saqlaydi (traceability).",
      "Muammo chiqsa, uning manbasi butun bozor emas, aniq partiya darajasida topiladi.",
      "Uzoq muddat — barcha bosqichlar raqamlashtirilishi va integratsiya talab qiladi.",
      "Butun zanjir: fermer, laboratoriya, savdo va xaridor.",
    ],
  },
  {
    slug: "ai-patogen",
    name: "AI Patogen",
    desc: "Genom sekvensash (WGS) va AMR monitoringi",
    icon: "dna",
    tier: 3,
    tierLabel: "Uzoq muddat",
    info: [
      "Genom sekvensash (WGS) natijalarini tahlil qilib, kasallik o'chog'ini va antibiotikka chidamlilikni (AMR) kuzatadi.",
      "Kasallik tarqalishi erta aniqlanadi — ommaviy zaharlanish xavfi kamayadi.",
      "Uzoq muddat — laboratoriya quvvati va sekvensash uskunasi kerak.",
      "Referens laboratoriyalar va epidemiologlar.",
    ],
  },
  {
    slug: "ai-oshxona",
    name: "AI Oshxona",
    desc: "Kamera orqali gigiyena nazorati",
    icon: "camera",
    tier: 3,
    tierLabel: "Pilot",
    info: [
      "Oshxona kameralari orqali gigiyena qoidalari buzilishini aniqlaydi: bosh kiyim, qo'lqop, ish joyi tozaligi.",
      "Ommaviy ovqatlanish joylarida zaharlanish xavfi kamayadi, nazorat doimiy bo'ladi.",
      "Pilot — dastlab tanlangan obyektlarda sinovdan o'tkaziladi.",
      "Restoranlar, maktab va korxona oshxonalari.",
    ],
  },
];

export const tierServices = (tier: Tier) => SERVICES.filter((s) => s.tier === tier);

/** Hero radial/grid kartochkalari — birinchi olti xizmat */
export const HERO_SERVICES = SERVICES.filter((s) => s.short).slice(0, 6);

export const INFRA = [
  { name: "Oziq-ovqat LLM", desc: "Domen bo'yicha katta til modeli", icon: "cpu" },
  { name: "Computer Vision", desc: "Tasvir va video tahlili", icon: "eye" },
  { name: "STT (ovoz→matn)", desc: "Nutqni matnga aylantirish", icon: "mic" },
  { name: "ML platforma", desc: "Model o'qitish va serving muhiti", icon: "layers" },
];

export type Stat = {
  to: number;
  from?: number;
  format: "spaced" | "days" | "billion";
  label: string;
  accent: string;
};

export const STATS: Stat[] = [
  {
    to: 80000,
    format: "spaced",
    label: "nazorat obyekti yagona tizimda",
    accent: "var(--accent)",
  },
  {
    to: 2,
    from: 9,
    format: "days",
    label: "import bojxona rasmiylashtiruvi qisqaradi",
    accent: "var(--gold)",
  },
  {
    to: 70,
    format: "billion",
    label: "tadbirkorlar yillik tejami",
    accent: "var(--primary)",
  },
];

export const CHAIN_STEPS = [
  { num: "01", name: "Dala", desc: "Fermer daftari, zararkunanda bashorati", icon: "sprout" },
  { num: "02", name: "Laboratoriya", desc: "Namuna, tahlil va MRL tekshiruvi", icon: "flask" },
  { num: "03", name: "Chegara", desc: "Partiya xavfi va tezkor rasmiylashtirish", icon: "shield" },
  { num: "04", name: "Bozor", desc: "Monitoring, recall signali va nazorat", icon: "store" },
];

export const SOCIALS = [
  { name: "Telegram", icon: "telegram", href: "https://t.me/uzdavkarantinuz" },
  { name: "YouTube", icon: "youtube", href: "#aloqa" },
  { name: "Facebook", icon: "facebook", href: "#aloqa" },
  { name: "Instagram", icon: "instagram", href: "#aloqa" },
];

/**
 * Hero radial joylashuvi: markazdagi motiv atrofida olti kartochka.
 * Geometriya build vaqtida hisoblanadi — klientda hech narsa o'lchanmaydi.
 */
const W = 1152;
const H = 680;
const CX = W / 2;
const CY = H / 2;
const RX = 340;
const RY = 252;
const HW = 112;
const HH = 62;

export type Spoke = { x: string; y: string; d: string; left: string; top: string };

export const SPOKES: Spoke[] = [0, 60, 120, 180, 240, 300].map((a) => {
  const r = (a * Math.PI) / 180;
  const ux = Math.cos(r);
  const uy = Math.sin(r);
  const px = CX + RX * ux;
  const py = CY + RY * uy;
  const vx = px - CX;
  const vy = py - CY;
  const len = Math.hypot(vx, vy) || 1;
  const nx = vx / len;
  const ny = vy / len;
  const edge = Math.min(
    Math.abs(nx) > 0.001 ? HW / Math.abs(nx) : 1e6,
    Math.abs(ny) > 0.001 ? HH / Math.abs(ny) : 1e6,
  );
  const ex = px - nx * edge;
  const ey = py - ny * edge;
  const sx = CX + 168 * ux;
  const sy = CY + 124 * uy;
  const mx = (sx + ex) / 2 - ny * 16;
  const my = (sy + ey) / 2 + nx * 16;
  return {
    left: ((px / W) * 100).toFixed(3) + "%",
    top: ((py / H) * 100).toFixed(3) + "%",
    d: `M${sx.toFixed(1)} ${sy.toFixed(1)}Q${mx.toFixed(1)} ${my.toFixed(1)} ${ex.toFixed(1)} ${ey.toFixed(1)}`,
    x: ex.toFixed(1),
    y: ey.toFixed(1),
  };
});

export const SITE = {
  name: "AI Food Safety",
  title: "AI Food Safety — Oziq-ovqat xavfsizligi AI portali",
  tagline: "Oziq-ovqat mahsulotlari xavfsizligining sun'iy intellekt portali",
  url: "https://ai.food-safety.uz",
  org: "O'zbekiston Respublikasi Oziq-ovqat mahsulotlari xavfsizligi qo'mitasi",
  hotline: "1288",
  telegram: "https://t.me/uzdavkarantinuz",
  official: "https://gov.uz/oz/karantin",
  cabinet: "https://cabinet.karantin.uz",
};

/* ---------- "Daladan dasturxongacha" sayohati ---------- */

export type Chip = { k: string; v: string; tone: "ok" | "warn" };

export type Scene = {
  num: string;
  stage: string;
  title: string;
  text: string;
  chips: Chip[];
  /** Ikkinchi sahnadagi laboratoriya skaneri kabi maxsus bezak */
  effect?: "scanner";
};

export const JOURNEY: Scene[] = [
  {
    num: "01",
    stage: "Dala",
    title: "Hosil yig'iladi",
    text:
      "Fermer AI daftariga partiyani kiritadi: nav, maydon, ishlov va yig'im sanasi. " +
      "Shu yerda olmaning raqamli pasporti boshlanadi.",
    chips: [
      { k: "Nav", v: "Golden", tone: "ok" },
      { k: "Maydon", v: "4.2 ga", tone: "ok" },
      { k: "Yig'im", v: "12.09.2026", tone: "ok" },
    ],
  },
  {
    num: "02",
    stage: "Laboratoriya",
    title: "Namuna tekshiriladi",
    text:
      "Pestitsid qoldiqlari, MRL chegaralari va patogenlar tahlil qilinadi. " +
      "AI natijalarni Codex normalari bilan bir zumda solishtiradi.",
    effect: "scanner",
    chips: [
      { k: "MRL", v: "normada", tone: "ok" },
      { k: "Pestitsid", v: "0.01 mg/kg", tone: "warn" },
      { k: "Patogen", v: "aniqlanmadi", tone: "ok" },
    ],
  },
  {
    num: "03",
    stage: "Chegara",
    title: "Eksportga tayyor",
    text:
      "Partiya hujjatlari avtomatik shakllanadi, rad etilish xavfi baholanadi. " +
      "Bojxona rasmiylashtiruvi kunlar emas, soatlar ichida.",
    chips: [
      { k: "Codex", v: "mos", tone: "ok" },
      { k: "Rad xavfi", v: "4 %", tone: "warn" },
      { k: "Hujjat", v: "2 kun", tone: "ok" },
    ],
  },
  {
    num: "04",
    stage: "Bozor",
    title: "Dasturxonda",
    text:
      "Har bir partiya yagona bazada saqlanadi. Xaridor QR orqali olmaning butun yo'lini — " +
      "daladan dasturxongacha — ko'radi.",
    chips: [
      { k: "QR", v: "faol", tone: "ok" },
      { k: "Zanjir", v: "4 bosqich", tone: "ok" },
      { k: "Nazorat", v: "real vaqt", tone: "ok" },
    ],
  },
];

export const JOURNEY_SUMMARY = [
  { num: "01", name: "Dala", desc: "Partiya raqamli pasporti ochiladi", icon: "sprout" },
  { num: "02", name: "Laboratoriya", desc: "MRL va patogen tahlili", icon: "flask" },
  { num: "03", name: "Chegara", desc: "Codex moslik va rad xavfi bali", icon: "shield" },
  { num: "04", name: "Bozor", desc: "QR orqali ochiq kuzatuv", icon: "store" },
];
