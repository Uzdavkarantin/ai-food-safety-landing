const stroke = {
  fill: "none",
  stroke: "var(--motif)",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/** Qalqon + vilka + barg + tasdiq belgisi — portalning asosiy grafik motivi. */
export default function Motif({ parallax = 0 }: { parallax?: number }) {
  return (
    <svg
      viewBox="0 0 360 360"
      aria-hidden="true"
      focusable="false"
      className="motif"
      data-par={parallax || undefined}
    >
      <circle cx={180} cy={180} r={132} fill="var(--motifGlow)" opacity={0.35} />
      <path
        {...stroke}
        strokeWidth={11}
        d="M180 46 296 88v108c0 62-46 104-116 128-70-24-116-66-116-128V88L180 46Z"
      />
      <path {...stroke} strokeWidth={9} d="M132 116v34M148 112v38M164 116v34" />
      <path {...stroke} strokeWidth={9} d="M132 148h32" />
      <path {...stroke} strokeWidth={12} d="M148 150v104" />
      <path d="M198 194c0-44 28-76 68-80 4 40-22 72-68 80Z" fill="var(--motif)" />
      <path d="M256 122 208 186" stroke="var(--bg)" strokeWidth={5} strokeLinecap="round" fill="none" />
      <path {...stroke} strokeWidth={12} d="M210 186 194 254" />
      <circle
        cx={218}
        cy={262}
        r={36}
        fill="var(--motif)"
        style={{ transformOrigin: "218px 262px", animation: "om-shimmer 3.4s ease-in-out infinite" }}
      />
      <path
        d="M202 262 214 275 236 250"
        stroke="var(--bg)"
        strokeWidth={9}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
