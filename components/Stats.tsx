"use client";

import { useEffect, useRef, useState } from "react";
import { STATS } from "@/lib/data";

/** 80000 -> "80 000" (ingichka bo'sh joy bilan) */
function spaced(n: number) {
  const s = String(Math.round(n));
  let out = "";
  for (let i = 0; i < s.length; i++) {
    out += s[i];
    const left = s.length - 1 - i;
    if (left > 0 && left % 3 === 0) out += " ";
  }
  return out;
}

function value(stat: (typeof STATS)[number], p: number) {
  const from = stat.from ?? stat.to;
  switch (stat.format) {
    case "spaced":
      return spaced(stat.to * p);
    case "days":
      return `${from} → ${Math.round(from - (from - stat.to) * p)} kun`;
    case "billion":
      return `${Math.round(stat.to * p)} mlrd so’m`;
  }
}

export default function Stats() {
  // SSR va JS'siz holatda darhol yakuniy qiymat ko'rinadi — animatsiya faqat bezak.
  const [p, setP] = useState(1);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const node = ref.current;
    if (!node || !("IntersectionObserver" in window)) return;

    setP(0);
    let raf = 0;

    const run = () => {
      if (started.current) return;
      started.current = true;
      const dur = 1600;
      const t0 = performance.now();
      const tick = (now: number) => {
        const x = Math.min(1, (now - t0) / dur);
        setP(1 - Math.pow(1 - x, 3));
        if (x < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    const obs = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          obs.disconnect();
          run();
        }
      },
      { threshold: 0.25 },
    );
    obs.observe(node);

    const fallback = window.setTimeout(() => {
      obs.disconnect();
      run();
    }, 2600);

    return () => {
      obs.disconnect();
      window.clearTimeout(fallback);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="stats" ref={ref}>
      {STATS.map((stat) => (
        <div key={stat.label} className="stat" style={{ "--stat-accent": stat.accent } as React.CSSProperties}>
          <div className="stat__value">{value(stat, p)}</div>
          <div className="stat__label">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
