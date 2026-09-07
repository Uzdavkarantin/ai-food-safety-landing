"use client";

import { useEffect, useRef } from "react";

const TRAIL = 6;

/**
 * Kursor izi + `data-par` belgisiga ega elementlar uchun parallaks.
 * Faqat sichqoncha bor va harakat cheklanmagan qurilmalarda ishlaydi.
 */
export default function PointerFX() {
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const layer = layerRef.current;
    if (!layer) return;
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !window.matchMedia("(pointer:fine)").matches
    ) {
      layer.style.display = "none";
      return;
    }

    const dots = Array.from(layer.querySelectorAll<HTMLElement>("[data-cursor='dot']"));
    const ring = layer.querySelector<HTMLElement>("[data-cursor='ring']");
    const pars = Array.from(document.querySelectorAll<HTMLElement>("[data-par]"));

    const pts = Array.from({ length: dots.length + 1 }, () => ({ x: -120, y: -120 }));
    const m = { x: -120, y: -120 };
    const par = { x: 0, y: 0, tx: 0, ty: 0 };
    let shown = false;
    let raf = 0;

    const step = () => {
      for (let i = 0; i < pts.length; i++) {
        const target = i === 0 ? m : pts[i - 1];
        const k = 0.36 - i * 0.035;
        pts[i].x += (target.x - pts[i].x) * k;
        pts[i].y += (target.y - pts[i].y) * k;
      }
      dots.forEach((d, i) => {
        const p = pts[i];
        d.style.transform = `translate3d(${p.x}px,${p.y}px,0) scale(${1 - i * 0.13})`;
        d.style.opacity = String(0.5 - i * 0.07);
      });
      if (ring) {
        const p = pts[pts.length - 1];
        ring.style.transform = `translate3d(${p.x}px,${p.y}px,0)`;
      }
      par.x += (par.tx - par.x) * 0.06;
      par.y += (par.ty - par.y) * 0.06;
      pars.forEach((el) => {
        const amt = parseFloat(el.getAttribute("data-par") || "0");
        el.style.transform = `translate3d(${par.x * amt}px,${par.y * amt * 0.55}px,0)`;
      });
      raf = requestAnimationFrame(step);
    };

    const onMove = (e: MouseEvent) => {
      m.x = e.clientX;
      m.y = e.clientY;
      par.tx = (e.clientX / (window.innerWidth || 1) - 0.5) * 2;
      par.ty = (e.clientY / (window.innerHeight || 1) - 0.5) * 2;
      if (!shown) {
        shown = true;
        layer.style.opacity = "1";
      }
    };
    const onLeave = () => {
      layer.style.opacity = "0";
      shown = false;
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    raf = requestAnimationFrame(step);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="cursor" ref={layerRef} aria-hidden="true">
      <span data-cursor="ring" className="cursor__ring" />
      {Array.from({ length: TRAIL }, (_, i) => (
        <span key={i} data-cursor="dot" className="cursor__dot" />
      ))}
    </div>
  );
}
