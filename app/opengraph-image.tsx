import { ImageResponse } from "next/og";
import { SITE } from "@/lib/data";

export const alt = SITE.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#0a0b0a",
          color: "#ecefec",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 26, color: "#35c46a" }}>
          <div style={{ width: 14, height: 14, borderRadius: 999, background: "#35c46a" }} />
          OZIQ-OVQAT XAVFSIZLIGI QO&apos;MITASI
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 104, fontWeight: 700, letterSpacing: -3 }}>AI Food Safety</div>
          <div style={{ fontSize: 36, color: "#9ba29c", maxWidth: 900 }}>{SITE.tagline}</div>
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#9ba29c" }}>ai.karantin.uz</div>
      </div>
    ),
    size,
  );
}
