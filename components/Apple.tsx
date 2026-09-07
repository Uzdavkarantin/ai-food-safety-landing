const stroke = {
  fill: "none",
  stroke: "var(--motif)",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/** Sayohat davomida ekran bo'ylab siljiydigan olma — sahifaning qahramoni. */
export default function Apple() {
  return (
    <svg viewBox="0 0 240 260" aria-hidden="true" focusable="false" className="apple">
      <path
        {...stroke}
        strokeWidth={1.6}
        d="M120 74c26-16 58-6 66 22 9 32-8 74-32 96-12 11-22 12-34 6-12-6-22-6-34 0-12 6-22 5-34-6C28 170 11 128 20 96c8-28 40-38 66-22 10 6 24 6 34 0Z"
      />
      <path {...stroke} d="M120 74c0-18 2-30 6-40" />
      <path {...stroke} d="M126 44c14-14 32-16 44-10-2 16-14 28-30 30-8 1-14-1-14-20Z" />
      <path {...stroke} strokeWidth={0.8} opacity={0.6} d="M126 46c8-3 16-3 24-1" />
      <path {...stroke} strokeWidth={0.8} opacity={0.5} d="M60 118c-6 18-4 38 6 54" />
      <circle
        cx={120}
        cy={150}
        r={78}
        fill="none"
        stroke="var(--motif)"
        strokeWidth={0.6}
        strokeDasharray="3 9"
        opacity={0.45}
      />
    </svg>
  );
}
