# 2. AI xizmatlar portfeli

soliq.uz (ai.soliq.uz) modeli asosida, lekin **bajarilish imkoniyati bo'yicha**
saralangan — domen bo'yicha emas. Vanity va laboratoriya/ma'lumot yetukligiga
bog'liq og'ir loyihalar olib tashlandi yoki uzoq muddatga surildi.

Portal: `ai.karantin.uz` — yagona kirish nuqtasi, xizmatlar + AI infratuzilma
qatlamlari.

## 1-bosqich — tez g'alaba (LLM negizida, mavjud ma'lumot yetarli)

| Xizmat | Vazifa | Asos |
|--------|--------|------|
| **AI Sertifikat** | «Qaysi hujjat kerak?» — 24/7 yordamchi, hujjatga havola bilan. Imtiyoz savollari ham shu yerda | PQ-193 jamoatchi inspektor o'qitish; 1288 |
| **AI Call Center** | 1288 birinchi liniya — tipik savollarni yopadi, operator yukini kamaytiradi | 1288 call-markaz |
| **AI Murojaatlar** | Iste'molchi shikoyatlarini tasnif va to'g'ri boshqarmaga yo'naltirish | Iste'molchi himoyasi |

## 2-bosqich — farmon mandati (o'rta murakkablik)

| Xizmat | Vazifa | Asos |
|--------|--------|------|
| **AI Fermer** | Dala daftari + zararkunanda bashorati | PF-84 (nomma-nom: «Agro ko'makchi», elektron «Dala daftari», AI bashorat) |
| **AI Reyting** | 80 000 obyekt xavf-skoringi, tekshiruvni yuqori xavfliga yo'naltirish | PF-84 xavf-tahlil nazorati |
| **AI Import** | Chegarada partiya xavfini bashorat (FDA PREDICT usuli) | PQ-193 muddat qisqartirish |
| **AI Eksport** | Codex/MRL bo'yicha davlatga tayyorlik va rad xavfi bali | Codex moslik rejasi |
| **AI Bozor** | RASFF + OAV/tarmoq monitoringi, recall signali | PF-84 tezkor ogohlantirish/recall |
| **AI Yorliq** | Etiketka/qadoq talablarini surat orqali tekshirish (CV) | Yorliqlash talablari |
| **AI Hisobot** | Codex moslik, qamrov, eksport KPI dashboardi (rahbariyat) | PF-84 monitoring |

## Uzoq muddat — infratuzilma/laboratoriya yetukligiga bog'liq

| Xizmat | Vazifa | Izoh |
|--------|--------|------|
| **AI Kuzatuv** | Daladan-dasturxongacha traceability grafi | Yagona platforma (2027-03) tayyor bo'lgach |
| **AI Patogen** | Genom sekvensash (WGS) + AMR: o'choq manbasini izlash | Institut laboratoriyasiga bog'liq |
| **AI Oshxona** | Kamera + CV gigiyena nazorati | Cheklangan pilot sifatida |

## AI infratuzilma (yadro — yuqoridagilar shu ustida ishlaydi)

| Komponent | Vazifa |
|-----------|--------|
| **Oziq-ovqat LLM** | SanQvaN, O'RQ-1023, reglamentlar bo'yicha domen modeli |
| **Computer Vision** | Zararkunanda, nuqson, yorliq, chegara ko'rigi |
| **STT (ovoz→matn)** | Call-markaz avtomatizatsiyasi va ovozli «Dala daftari» |
| **ML platforma** | Skoring, bashorat, anomaliya modellari serving muhiti |

## Olib tashlandi yoki birlashtirildi — va nega

- **Voice ID** — olib tashlandi. Identifikatsiya OneID/ESI orqali allaqachon yechilgan; o'z ovoz-biometriya tizimini qurish asossiz xarajat.
- **AI Epidemiya (One Health model)** — olib tashlandi. Tadqiqot darajasidagi og'ir loyiha; ishonchli epidemiologik ma'lumot va mutaxassis yetishmaydi. Elementi AI Fermer va AI Patogen ichida qoladi.
- **AI Antibiotik (AMR)** — AI Patogen ichiga birlashtirildi (ikkalasi ham WGS'ga tayanadi).
- **TTS (matn→ovoz)** — alohida komponent olib tashlandi; zarur qismi Call Center ichida. STT esa call-markaz uchun asosiy, qoldi.
- **AI Imtiyoz** — AI Sertifikat ichiga qo'shildi (bir xil LLM, bir xil savol oqimi).
- **AI Kameral** — AI Reyting va AI Import bilan qamrovi ustma-ust; alohida qilinmadi.
- **AI Laboratoriya** — uzoq muddatga surildi (AI Patogen bilan): laboratoriya raqamlashuvi yetuk bo'lmaguncha ma'lumot yo'q.

## Taklif etiladigan ketma-ketlik

1. **Poydevor:** ma'lumotlar arxitekturasi + Oziq-ovqat LLM + ML platforma — yagona platforma muddatiga (2027-03) bog'langan.
2. **Tez g'alaba (parallel):** AI Sertifikat, AI Call Center, AI Murojaatlar — mavjud ma'lumot yetarli.
3. **Farmon mandati:** AI Fermer (nomma-nom yozilgani uchun ustuvor), keyin AI Reyting, AI Import.
4. **Uzoq muddat:** platforma va laboratoriya yetilgach — AI Kuzatuv, AI Patogen.
