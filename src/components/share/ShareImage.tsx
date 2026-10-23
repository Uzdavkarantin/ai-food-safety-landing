import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";
import { sharePalette as c } from "./palette";

// Link-preview card (Telegram, Facebook, X): committee name, headline, short
// text and the emblem on navy. next/og's built-in Geist font covers Cyrillic.
export const shareImageSize = { width: 1200, height: 630 };

const emblem = readFile(join(process.cwd(), "public/logo.jpg")).then(
  (data) => `data:image/jpeg;base64,${data.toString("base64")}`,
);

export async function shareImage({
  eyebrow,
  title,
  text,
  hotline,
}: {
  eyebrow: string;
  title: string;
  text: string;
  hotline: string;
}) {
  const src = await emblem;
  // Big for short service names, smaller for long headlines, and never so big
  // that the longest word overflows the ~660px text column (Geist ≈ 0.6em a glyph).
  const longestWord = Math.max(...title.split(/\s+/).map((word) => word.length));
  const titleSize = Math.min(title.length > 28 ? 58 : 88, Math.floor(660 / (longestWord * 0.6)));
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 56,
          padding: "60px 72px",
          background: `linear-gradient(135deg, ${c.navy} 0%, ${c.navy2} 100%)`,
          color: c.onNavy,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            flex: 1,
            height: "100%",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 24, color: c.onNavyMuted }}>
            <div style={{ width: 12, height: 12, borderRadius: 999, background: c.mint }} />
            {eyebrow}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
            <div style={{ fontSize: titleSize, lineHeight: 1.08, letterSpacing: "-0.02em" }}>
              {title}
            </div>
            <div style={{ fontSize: 26, lineHeight: 1.4, color: c.onNavyMuted }}>{text}</div>
          </div>
          <div style={{ display: "flex", gap: 32, fontSize: 24 }}>
            <span style={{ color: c.mint }}>{siteConfig.url.replace(/^https?:\/\//, "")}</span>
            <span style={{ color: c.gold }}>{hotline}</span>
          </div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse renders plain img */}
        <img
          src={src}
          alt=""
          width={320}
          height={320}
          style={{ borderRadius: 999, border: `6px solid ${c.navyBorder}` }}
        />
      </div>
    ),
    shareImageSize,
  );
}
