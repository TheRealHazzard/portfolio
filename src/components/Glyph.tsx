/** A small drawn mark for each app, used on the dock. Flat strokes, one colour. */
export function Glyph({ id }: { id: string }) {
  const common = { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "square" as const, width: 24, height: 24, "aria-hidden": true };
  switch (id) {
    case "tickerline":
      return (
        <svg {...common}>
          <path d="M3 17l5-6 4 3 8-9" />
          <path d="M3 21h18" />
        </svg>
      );
    case "schema-ui":
      return (
        <svg {...common}>
          <path d="M4 6h10M4 12h16M4 18h12" />
          <path d="M18 5v2" />
        </svg>
      );
    case "mfe-starter":
      return (
        <svg {...common}>
          <path d="M4 4h7v7H4zM13 4h7v4h-7zM13 11h7v9h-7zM4 14h7v6H4z" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <path d="M5 20V12M12 20V6M19 20V9" />
        </svg>
      );
  }
}
