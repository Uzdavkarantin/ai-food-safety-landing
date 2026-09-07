"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Icon from "./Icon";

type Msg = { role: "ai" | "me"; text: string };

const GREETING: Msg = {
  role: "ai",
  text:
    "Assalomu alaykum! Oziq-ovqat xavfsizligi bo'yicha savolingizni yozing — hujjatlar, " +
    "import-eksport talablari yoki murojaat bo'yicha yordam beraman.",
};

const QUICK = ["Sertifikat kerak", "Import shartlari", "Shikoyat yuborish"];

/**
 * Demo javob mantiqi — kalit so'zlar bo'yicha. Haqiqiy Oziq-ovqat LLM ulanganda
 * shu funksiya API chaqiruviga almashtiriladi.
 */
function aiReply(question: string) {
  const s = question.toLowerCase();
  if (s.includes("sertifikat") || s.includes("hujjat"))
    return "Mahsulot turini yozing — kerakli hujjatlar ro'yxatini va rasmiy havolani yuboraman.";
  if (s.includes("import"))
    return "Import partiyasi uchun shartnoma, sertifikat va laboratoriya bayonnomasi kerak. Chegarada xavf bali avtomatik hisoblanadi.";
  if (s.includes("eksport"))
    return "Eksportda Codex va MRL talablari tekshiriladi. Mahsulot va yo'nalish davlatini yozing — tayyorlik holatini baholayman.";
  if (s.includes("shikoyat") || s.includes("murojaat"))
    return "Murojaatingizni yozing — tasniflab, tegishli boshqarmaga yo'naltiraman. Shoshilinch holatda: 1288.";
  if (s.includes("laboratoriya") || s.includes("tahlil"))
    return "Namuna tahlili uchun eng yaqin akkreditlangan laboratoriyani ko'rsataman. Viloyatni yozing.";
  return "Savolingizni qabul qildim. Aniq javob uchun mahsulot yoki hujjat turini ko'rsatsangiz, batafsil yordam beraman.";
}

export default function Chat() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([GREETING]);
  const [draft, setDraft] = useState("");
  const [typing, setTyping] = useState(false);
  const logRef = useRef<HTMLDivElement>(null);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => {
    const log = logRef.current;
    if (log) log.scrollTop = log.scrollHeight;
  }, [msgs, typing, open]);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const send = (text: string) => {
    const t = text.trim();
    if (!t) return;
    setMsgs((prev) => [...prev, { role: "me", text: t }]);
    setDraft("");
    setTyping(true);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => {
      setMsgs((prev) => [...prev, { role: "ai", text: aiReply(t) }]);
      setTyping(false);
    }, 850);
  };

  return (
    <div className="dock">
      {open ? (
        <section className="chat" aria-label="Agro AI yordamchi">
          <header className="chat__head">
            <Image
              src="/assets/agro-ai-avatar.png"
              alt="Agro AI"
              width={40}
              height={40}
              className="chat__avatar"
            />
            <span style={{ minWidth: 0 }}>
              <span className="chat__name">Agro AI</span>
              <span className="chat__status">
                <span />
                onlayn
              </span>
            </span>
            <button
              type="button"
              className="chat__close"
              onClick={() => setOpen(false)}
              aria-label="Yopish"
            >
              <Icon name="close" size={17} />
            </button>
          </header>

          <div className="chat__log" ref={logRef} aria-live="polite">
            {msgs.map((m, i) => (
              <div key={i} className={`msg${m.role === "me" ? " msg--me" : ""}`}>
                <div className="msg__bubble">{m.text}</div>
              </div>
            ))}
            {typing ? (
              <div className="typing" aria-label="Javob yozilmoqda">
                <span />
                <span />
                <span />
              </div>
            ) : null}
          </div>

          <div className="chat__quick">
            {QUICK.map((q) => (
              <button key={q} type="button" className="chip" onClick={() => send(q)}>
                {q}
              </button>
            ))}
          </div>

          <form
            className="chat__form"
            onSubmit={(e) => {
              e.preventDefault();
              send(draft);
            }}
          >
            <input
              className="chat__input"
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder="Savolingizni yozing..."
              aria-label="Xabar"
            />
            <button type="submit" className="chat__send" aria-label="Yuborish">
              <Icon name="send" size={19} />
            </button>
          </form>
        </section>
      ) : null}

      <div className="fab">
        <span aria-hidden="true" className="fab__halo" />
        <span aria-hidden="true" className="fab__halo fab__halo--b" />
        <button
          type="button"
          className="fab__btn"
          onClick={() => setOpen((v) => !v)}
          aria-label="Agro AI bilan suhbat"
          aria-expanded={open}
          title="Agro AI bilan suhbat"
        >
          <Image src="/assets/agro-ai-avatar.png" alt="" width={46} height={46} className="fab__img" />
        </button>
        <span aria-hidden="true" className="fab__badge" />
      </div>
    </div>
  );
}
