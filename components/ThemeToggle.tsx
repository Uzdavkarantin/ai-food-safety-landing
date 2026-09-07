"use client";

import { useEffect, useState } from "react";
import Icon from "./Icon";

type Theme = "light" | "dark";

const STORAGE_KEY = "ai-food-safety-theme";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  // Server HTML har doim "light" bilan chiziladi; haqiqiy qiymat layout ichidagi
  // inline skript orqali <html data-theme> ga allaqachon qo'yilgan.
  useEffect(() => {
    setTheme(document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light");
  }, []);

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
    <button type="button" className="iconbtn" onClick={toggle} aria-label={label} title={label}>
      <Icon name={theme === "dark" ? "sun" : "moon"} size={19} />
    </button>
  );
}
