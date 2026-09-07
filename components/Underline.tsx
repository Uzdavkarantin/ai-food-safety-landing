/**
 * Qalamda tortilgandek qo'lyozma chiziq — sarlavhadagi bitta so'z ostiga.
 *
 * Ikki o'tish: asosiy chiziq va biroz siljigan ingichka takror — qalam
 * ikki marta yurgizilgandek ko'rinadi. `vector-effect="non-scaling-stroke"`
 * tufayli sarlavha qanchalik kattalashsa ham chiziq qalinligi o'zgarmaydi.
 */
export default function Underline() {
  return (
    <svg
      className="sketch"
      viewBox="0 0 300 24"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        className="sketch__line"
        d="M4 15.5c26-4.6 54-7.2 84-7.9 38-.9 76 .8 114 3.1 30 1.8 60 4.2 94 8.3"
        fill="none"
        stroke="currentColor"
        strokeWidth={3}
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
      <path
        className="sketch__line sketch__line--second"
        d="M14 19.4c34-3.4 68-5.1 102-5.2 44-.1 88 1.6 132 5"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
