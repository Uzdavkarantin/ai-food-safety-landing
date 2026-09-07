import Image from "next/image";
import Link from "next/link";
import Icon from "./Icon";
import ThemeToggle from "./ThemeToggle";
import { SITE } from "@/lib/data";

/**
 * `home` — bosh sahifa sarlavhasi (til tanlash + Kirish tugmasi).
 * `sub` — ichki sahifalar uchun: bosh sahifaga qaytish havolasi.
 */
export default function Header({ variant = "home" }: { variant?: "home" | "sub" }) {
  const size = variant === "home" ? 42 : 40;

  return (
    <header className={`header${variant === "sub" ? " header--sub" : ""}`}>
      <div className="shell header__inner">
        <Link href={variant === "home" ? "#top" : "/"} className="brand">
          <Image
            src="/assets/logo-qomita.jpeg"
            alt="Oziq-ovqat mahsulotlari xavfsizligi qo'mitasi gerbi"
            width={size}
            height={size}
            className="brand__mark"
            style={{ width: size, height: size }}
            priority
          />
          <span className="brand__name">AI Food Safety</span>
        </Link>

        <div className="header__actions">
          <ThemeToggle />
          {variant === "home" ? (
            <>
              <button type="button" className="iconbtn lang-btn" aria-label="Tilni tanlash" title="O'zbekcha">
                <Icon name="globe" size={19} />
              </button>
              <a className="btn-primary" href={SITE.cabinet} rel="noopener">
                Kirish
              </a>
            </>
          ) : (
            <Link className="btn-ghost" href="/">
              Bosh sahifa
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
