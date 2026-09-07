import type { CSSProperties } from "react";

type Shape = [string, Record<string, string | number>];

const ICONS: Record<string, Shape[]> = {
  leaf: [
    ["path", { d: "M4 20C4 10.6 11 4 20 4c0 9.4-6.6 16-16 16Z" }],
    ["path", { d: "M4.5 19.5 14.5 9.5" }],
  ],
  fileCheck: [
    ["path", { d: "M14 3v5h5" }],
    ["path", { d: "M18 21H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h8l5 5v12a1 1 0 0 1-1 1Z" }],
    ["path", { d: "M8.8 14.6l2 2 3.8-3.8" }],
  ],
  headset: [
    ["path", { d: "M4 14v-2a8 8 0 0 1 16 0v2" }],
    ["rect", { x: 2, y: 13.5, width: 4, height: 6.5, rx: 1.6 }],
    ["rect", { x: 18, y: 13.5, width: 4, height: 6.5, rx: 1.6 }],
    ["path", { d: "M20 20v.6A2.4 2.4 0 0 1 17.6 23H14" }],
  ],
  inbox: [
    ["path", { d: "M21 12v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6" }],
    ["path", { d: "M3 12l3-7h12l3 7" }],
    ["path", { d: "M9.2 12h5.6" }],
  ],
  sprout: [
    ["path", { d: "M12 21v-8" }],
    ["path", { d: "M12 13C12 9.2 9.2 7 5 7c0 3.8 2.8 6 7 6Z" }],
    ["path", { d: "M12 13c0-3.3 2.4-5.2 5.8-5.2 0 3.3-2.4 5.2-5.8 5.2Z" }],
  ],
  gauge: [
    ["path", { d: "M3.8 18a8.2 8.2 0 1 1 16.4 0" }],
    ["path", { d: "M12 18l4.2-5.2" }],
    ["circle", { cx: 12, cy: 18, r: 1.2 }],
  ],
  download: [
    ["path", { d: "M12 3v10" }],
    ["path", { d: "M8 9.2l4 4 4-4" }],
    ["path", { d: "M4 16.5V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2.5" }],
  ],
  upload: [
    ["path", { d: "M12 13.2V3" }],
    ["path", { d: "M8 7l4-4 4 4" }],
    ["path", { d: "M4 16.5V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2.5" }],
  ],
  store: [
    ["path", { d: "M3 9l1.6-5h14.8L21 9" }],
    ["path", { d: "M4.2 9v10a2 2 0 0 0 2 2h11.6a2 2 0 0 0 2-2V9" }],
    ["path", { d: "M3 9h18" }],
    ["path", { d: "M9.2 21v-5.6h5.6V21" }],
  ],
  tag: [
    ["path", { d: "M11 3H5.4A2.4 2.4 0 0 0 3 5.4V11l10 10 8-8L11 3Z" }],
    ["circle", { cx: 7.4, cy: 7.4, r: 1.3 }],
  ],
  report: [
    ["rect", { x: 4.2, y: 3, width: 15.6, height: 18, rx: 2.2 }],
    ["path", { d: "M8.4 13.4V17" }],
    ["path", { d: "M12 9.4V17" }],
    ["path", { d: "M15.6 11.8V17" }],
  ],
  trace: [
    ["circle", { cx: 5, cy: 5, r: 2 }],
    ["circle", { cx: 12, cy: 12, r: 2 }],
    ["circle", { cx: 19, cy: 19, r: 2 }],
    ["path", { d: "M6.5 6.5 10.5 10.5" }],
    ["path", { d: "M13.5 13.5 17.5 17.5" }],
    ["path", { d: "M19 5h-3.4" }],
    ["path", { d: "M5 19v-3.4" }],
  ],
  dna: [
    ["path", { d: "M8 3c0 6.5 8 5.5 8 12" }],
    ["path", { d: "M16 3c0 6.5-8 5.5-8 12" }],
    ["path", { d: "M8 20.4h8" }],
    ["path", { d: "M9 8.2h6" }],
    ["path", { d: "M9.4 14h5.2" }],
  ],
  camera: [
    [
      "path",
      {
        d: "M4 8h3.2l1.5-2.2h6.6L16.8 8H20a1.2 1.2 0 0 1 1.2 1.2v9.6A1.2 1.2 0 0 1 20 20H4a1.2 1.2 0 0 1-1.2-1.2V9.2A1.2 1.2 0 0 1 4 8Z",
      },
    ],
    ["circle", { cx: 12, cy: 13.6, r: 3.2 }],
  ],
  cpu: [
    ["rect", { x: 6, y: 6, width: 12, height: 12, rx: 2.4 }],
    ["path", { d: "M10 3v3M14 3v3M10 18v3M14 18v3M3 10h3M3 14h3M18 10h3M18 14h3" }],
    ["path", { d: "M10.2 10.2h3.6v3.6h-3.6z" }],
  ],
  eye: [
    ["path", { d: "M2.6 12S6.2 5.6 12 5.6 21.4 12 21.4 12 17.8 18.4 12 18.4 2.6 12 2.6 12Z" }],
    ["circle", { cx: 12, cy: 12, r: 3 }],
  ],
  mic: [
    ["rect", { x: 9, y: 2.6, width: 6, height: 11, rx: 3 }],
    ["path", { d: "M5 11a7 7 0 0 0 14 0" }],
    ["path", { d: "M12 18v3.4" }],
  ],
  layers: [
    ["path", { d: "M12 3 3 8l9 5 9-5-9-5Z" }],
    ["path", { d: "M3 13l9 5 9-5" }],
  ],
  flask: [
    ["path", { d: "M9.2 3h5.6" }],
    ["path", { d: "M10.2 3v6.4L5.2 19a1.5 1.5 0 0 0 1.3 2.2h11a1.5 1.5 0 0 0 1.3-2.2l-5-9.6V3" }],
    ["path", { d: "M7.6 15.2h8.8" }],
  ],
  shield: [
    ["path", { d: "M12 3l7 3v6c0 4.6-3 7.6-7 9-4-1.4-7-4.4-7-9V6l7-3Z" }],
    ["path", { d: "M9.2 12.2l2 2 3.6-3.8" }],
  ],
  sun: [
    ["circle", { cx: 12, cy: 12, r: 4.2 }],
    ["path", { d: "M12 2v2.4M12 19.6V22M2 12h2.4M19.6 12H22M5 5l1.7 1.7M17.3 17.3 19 19M19 5l-1.7 1.7M6.7 17.3 5 19" }],
  ],
  moon: [["path", { d: "M20.4 14.4A8.6 8.6 0 0 1 9.6 3.6a8.6 8.6 0 1 0 10.8 10.8Z" }]],
  globe: [
    ["circle", { cx: 12, cy: 12, r: 9 }],
    ["path", { d: "M3 12h18" }],
    ["path", { d: "M12 3c2.4 2.6 3.6 5.6 3.6 9S14.4 18.4 12 21c-2.4-2.6-3.6-5.6-3.6-9S9.6 5.6 12 3Z" }],
  ],
  menu: [["path", { d: "M4 7h16M4 12h16M4 17h16" }]],
  close: [["path", { d: "M6 6l12 12M18 6 6 18" }]],
  chat: [
    ["path", { d: "M21 12a8.4 8.4 0 0 1-8.4 8.4H8.2L3 22.4l1.3-4.4A8.4 8.4 0 1 1 21 12Z" }],
    ["path", { d: "M8.6 11.4h6.8M8.6 14.6h4.4" }],
  ],
  send: [
    ["path", { d: "M4.4 12 20 4.6l-4.4 15.6-3.6-6-7.6-2.2Z" }],
    ["path", { d: "M12 12.2 20 4.6" }],
  ],
  arrow: [
    ["path", { d: "M4 12h15" }],
    ["path", { d: "M13.4 6.4 19 12l-5.6 5.6" }],
  ],
  telegram: [
    [
      "path",
      {
        d: "M21.3 4.3 2.9 11.2c-.7.3-.7 1.2 0 1.4l4.3 1.4 1.6 4.9c.2.6 1 .8 1.4.3l2.3-2.4 4.2 3.1c.5.4 1.3.1 1.4-.6l3-14.2c.1-.7-.6-1.2-1.2-.9Z",
      },
    ],
    ["path", { d: "M7.2 14 18.4 6.6 9.9 14.6l-.1 4.1" }],
  ],
  youtube: [
    ["rect", { x: 2.4, y: 5.4, width: 19.2, height: 13.2, rx: 4 }],
    ["path", { d: "M10.4 9.6 15.4 12l-5 2.4V9.6Z" }],
  ],
  facebook: [
    ["rect", { x: 3, y: 3, width: 18, height: 18, rx: 4.5 }],
    ["path", { d: "M15.4 8.2h-1.6a2 2 0 0 0-2 2V21" }],
    ["path", { d: "M9.4 13.2h4.6" }],
  ],
  instagram: [
    ["rect", { x: 3, y: 3, width: 18, height: 18, rx: 5.2 }],
    ["circle", { cx: 12, cy: 12, r: 4.1 }],
    ["circle", { cx: 17, cy: 7, r: 1.05, fill: "currentColor", stroke: "none" }],
  ],
};

export type IconName = keyof typeof ICONS;

const SVG_STYLE: CSSProperties = { display: "block", flexShrink: 0 };

export default function Icon({ name, size = 20 }: { name: string; size?: number }) {
  const shapes = ICONS[name] ?? [];
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      style={SVG_STYLE}
    >
      {shapes.map(([tag, props], i) => {
        const Tag = tag as keyof React.JSX.IntrinsicElements;
        return <Tag key={i} {...props} />;
      })}
    </svg>
  );
}
