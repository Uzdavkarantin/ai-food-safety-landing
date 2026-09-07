# 3. Chet el tajribasi

Yetakchi regulyatorlar allaqachon joriy etgan yechimlar — bizning xizmatlarga
bevosita ko'chiriladi.

## AQSh — FDA: PREDICT va AI seafood pilot → AI Import

FDA import partiyalarini **PREDICT** (Predictive Risk-based Evaluation for
Dynamic Imports Compliance) tizimi bilan baholaydi va ML pilotida dengiz
mahsulotlariga tatbiq etmoqda (AQSh dengiz mahsuloti 90%+ chetdan keladi).
Model tovar turi, kelib chiqish mamlakati, tarix va ta'minot zanjiri asosida
xavfli partiyani oldindan aniqlaydi.

**Bizga:** AI Import — chegarada har partiyaga real vaqt xavf bali, tekshiruvni
faqat yuqori xavfliga yo'naltirish. PQ-193'ning muddat qisqartirish topshirig'iga
bevosita xizmat qiladi.

Manba: https://www.fda.gov/food/hfp-constituent-updates/fda-moves-third-phase-artificial-intelligence-imported-seafood-pilot-program

## Yevropa Ittifoqi — EFSA + RASFF → AI Bozor

EI 1979-yildan **RASFF** (Rapid Alert System for Food and Feed) tezkor
ogohlantirish tarmog'ini yuritadi. Yangi tadqiqotlar RASFF matnlarini
transformer modellar bilan avtomatik tasniflaydi — **BERT 97.8%**, **RoBERTa
97.9%** aniqlik bilan xavfni real vaqtda ustuvorlashtiradi. EFSA'ning AI@EFSA
dasturi mavjud.

**Bizga:** AI Bozor + tezkor ogohlantirish — xalqaro notifikatsiyalarni NLP
bilan kuzatib, O'zbekistonga aloqador signalni ajratish va recall'ni avtomatik
ishga tushirish. (YI'ning 25 pestitsid ogohlantirishi aynan shu bo'shliq.)

Manba: https://link.springer.com/article/10.1007/s11947-025-03819-4

## AQSh/global — GenomeTrakr: genom sekvensash → AI Patogen

FDA CFSAN **GenomeTrakr** — patogenlarni butun genom sekvensi (WGS) bilan
kuzatuvchi davlat/federal laboratoriyalar tarmog'i. Salmonella, Listeria,
E. coli kabi patogenlarning o'choq manbasini bir necha soatda aniqlaydi
(qaysi ferma/partiyadan chiqqani). Gonkong retail go'shtida Salmonella va AMR
bo'yicha shunday kuzatuv yuritadi.

**Bizga:** uzoq muddatli AI Patogen + AMR monitoringi; qo'mita instituti
laboratoriyasi negizida bosqichma-bosqich qurilishi mumkin.

Manba: https://www.fda.gov/food/whole-genome-sequencing-wgs-program

## Xitoy — kompyuter ko'rish bilan oshxona nazorati → AI Oshxona

KanKan va shunga o'xshash tizimlar kameralar orqali (yuz/obyekt tanish) xodim
gigiyenasini — qo'lqop, bosh kiyim, himoya vositasi — real vaqtda tekshiradi va
buzilishni belgilaydi. Xitoy AI-inspeksiya bozori ~22% CAGR bilan o'smoqda.

**Bizga:** AI Oshxona — bozor, oshxona, ishlab chiqarish obyektlarida
video-nazorat (cheklangan pilot). Iste'molchi ishonchini oshiradi va inspektor
yukini kamaytiradi.

Manba: https://smartfoodsafe.com/role-of-ai-in-food-safety/

## Umumiy xulosa — chet el urg'usi

Uch tendensiya barcha regulyatorlarda takrorlanadi:

1. **Bashoratli, xavfga asoslangan nazorat** — jismoniy tekshiruvdan modelga.
2. **Ma'lumot birlashtirish** — laboratoriya, chegara, tarmoq oqimlari bitta tizimда.
3. **Preventivlik** — muammoni yuz bergunicha bashorat qilish.

O'zbekiston kech kelayotgani — ustunlik: tayyor usullardan sakrab foydalanish,
xatolarni takrorlamaslik mumkin.
