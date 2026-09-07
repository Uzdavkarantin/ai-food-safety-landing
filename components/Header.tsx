"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Icon from "./Icon";

type Theme = "light" | "dark";

const STORAGE_KEY = "ai-food-safety-theme";

function readTheme(): Theme {
  if (typeof document === "undefined") return "light";
  return document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
}

export default function Header() {
  const [theme, setTheme] = useState<Theme>("light");

  // Server HTML har doim "light" bilan chiziladi; haqiqiy qiymat layout ichidagi
  // inline skript orqali <html data-theme> ga allaqachon qo'yilgan.
  useEffect(() => setTheme(readTheme()), []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    document.documentElement.style.colorScheme = next;
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* private rejimda localStorage yopiq bo'lishi mumkin */
    }
  };

  const label = theme === "dark" ? "Yorug' rejimga o'tish" : "Qorong'i rejimga o'tish";

  return (
    <header className="header">
      <div className="shell header__inner">
        <a href="#top" className="brand">
          <Image
            src="/assets/logo-qomita.jpeg"
            alt="Oziq-ovqat mahsulotlari xavfsizligi qo'mitasi gerbi"
            width={42}
            height={42}
            className="brand__mark"
            priority
          />
          <span className="brand__name">AI Food Safety</span>
        </a>

        <div className="header__actions">
          <button type="button" className="iconbtn" onClick={toggle} aria-label={label} title={label}>
            <Icon name={theme === "dark" ? "sun" : "moon"} size={19} />
          </button>
          <button type="button" className="iconbtn lang-btn" aria-label="Tilni tanlash" title="O'zbekcha">
            <Icon name="globe" size={19} />
          </button>
          <a className="btn-primary" href="https://cabinet.karantin.uz" rel="noopener">
            Kirish
          </a>
        </div>
      </div>
    </header>
  );
}
