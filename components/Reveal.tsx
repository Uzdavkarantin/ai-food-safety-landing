"use client";

import { useEffect } from "react";

/**
 * `data-reveal` belgisiga ega bo'limlarni ko'rinishga kirganda ochadi.
 * Boshlang'ich HTML'da hamma narsa ko'rinadi — JS yo'q bo'lsa ham kontent yo'qolmaydi.
 */
export default function Reveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (!nodes.length) return;
    nodes.forEach((n) => n.setAttribute("data-rv", "out"));

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.setAttribute("data-rv", "in");
            obs.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 },
    );
    nodes.forEach((n) => obs.observe(n));

    const onScroll = () => {
      const h = window.innerHeight || 900;
      nodes.forEach((n) => {
        if (n.getAttribute("data-rv") === "out" && n.getBoundingClientRect().top < h * 0.92) {
          n.setAttribute("data-rv", "in");
        }
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // Kuzatuvchi ishlamay qolsa ham kontent 1.8 soniyada ochiladi.
    const fallback = window.setTimeout(() => nodes.forEach((n) => n.setAttribute("data-rv", "in")), 1800);

    return () => {
      obs.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.clearTimeout(fallback);
    };
  }, []);

  return null;
}
