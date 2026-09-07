"use client";

import { useEffect, useRef } from "react";
import Apple from "./Apple";
import { JOURNEY } from "@/lib/data";

/**
 * Skroll bilan boshqariladigan to'rt sahna.
 *
 * JS yo'q yoki harakat cheklangan bo'lsa, sahnalar oddiy bloklar bo'lib
 * ketma-ket ko'rinadi (CSS'dagi asosiy holat). Effekt faqat `data-fx="on"`
 * qo'yilgandan keyin yoqiladi — shuning uchun kontent hech qachon yo'qolmaydi.
 */
export default function Journey() {
  const trackRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const appleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    const stage = stageRef.current;
    if (!track || !stage) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    track.setAttribute("data-fx", "on");

    const scenes = Array.from(track.querySelectorAll<HTMLElement>("[data-scene]"));
    const bars = Array.from(track.querySelectorAll<HTMLElement>("[data-rail-bar]"));
    const labels = Array.from(track.querySelectorAll<HTMLElement>("[data-rail-label]"));
    const apple = appleRef.current;
    const n = JOURNEY.length;

    let raf = 0;

    const paint = () => {
      raf = 0;
      const rect = track.getBoundingClientRect();
      const span = Math.max(1, rect.height - stage.offsetHeight);
      const p = Math.max(0, Math.min(1, -rect.top / span));

      scenes.forEach((el, i) => {
        const rel = p * (n - 1) - i;
        const o = Math.max(0, Math.min(1, 1 - (Math.abs(rel) - 0.32) / 0.36));
        const eased = o * o * (3 - 2 * o);
        el.style.opacity = String(eased);
        el.style.transform = `translateY(${rel * -30}px)`;
        el.style.pointerEvents = eased > 0.6 ? "auto" : "none";
        el.setAttribute("aria-hidden", eased > 0.5 ? "false" : "true");
      });

      if (apple) {
        const x = (p - 0.5) * 2 * 12;
        const y = Math.sin(p * Math.PI) * -6;
        apple.style.transform =
          `translate3d(${x}vw,${y}vh,0) rotate(${p * 16 - 8}deg) scale(${1.06 - p * 0.22})`;
        apple.style.opacity = String(0.5 + 0.5 * Math.sin(Math.min(1, p + 0.08) * Math.PI * 0.9));
      }

      bars.forEach((bar, i) => {
        const seg = Math.max(0, Math.min(1, p * n - i)) * 100;
        bar.style.background = `linear-gradient(90deg,var(--accent) ${seg}%,var(--line2) ${seg}%)`;
        const label = labels[i];
        if (label) label.style.color = Math.round(p * (n - 1)) === i ? "var(--text)" : "var(--muted)";
      });
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(paint);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    paint();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
      track.removeAttribute("data-fx");
      scenes.forEach((el) => {
        el.removeAttribute("style");
        el.setAttribute("aria-hidden", "false");
      });
    };
  }, []);

  return (
    <div className="journey" ref={trackRef}>
      <div className="journey__stage" ref={stageRef}>
        <div aria-hidden="true" className="journey__mesh">
          <svg viewBox="0 0 1440 900" preserveAspectRatio="none">
            <g fill="none" stroke="var(--mesh)" strokeWidth="1">
              <path d="M-40 300C240 210 440 385 700 335s520-165 820-45" />
              <path d="M-40 470C250 375 450 545 700 495s530-160 830-35" />
              <path d="M-40 650C260 545 460 705 700 655s540-155 840-25" />
            </g>
          </svg>
        </div>

        <div className="journey__apple" ref={appleRef} aria-hidden="true">
          <Apple />
        </div>

        {JOURNEY.map((scene, i) => (
          <section key={scene.num} data-scene={i} className="scene" aria-labelledby={`scene-${scene.num}`}>
            {scene.effect === "scanner" ? (
              <div aria-hidden="true" className="scanner">
                <div className="scanner__ring" />
                <div className="scanner__dash" />
                <div className="scanner__beam" />
              </div>
            ) : null}
            <div className="scene__inner">
              <div className="scene__card">
                <span className="kicker kicker--accent">
                  {scene.num} — {scene.stage}
                </span>
                <h2 id={`scene-${scene.num}`} className="scene__title">
                  {scene.title}
                </h2>
                <p className="scene__text">{scene.text}</p>
              </div>
              <div className="scene__chips">
                {scene.chips.map((c) => (
                  <div key={c.k} className="datachip">
                    <span className={`datachip__dot datachip__dot--${c.tone}`} />
                    <span className="datachip__k">{c.k}</span>
                    <span className="datachip__v">{c.v}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        <div className="rail" aria-hidden="true">
          <div className="rail__inner">
            {JOURNEY.map((scene, i) => (
              <div key={scene.stage} className="rail__item">
                <span data-rail-bar={i} className="rail__bar" />
                <span data-rail-label={i} className="rail__label">
                  {scene.stage}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
