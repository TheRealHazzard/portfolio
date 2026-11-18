// One drawn figure per plate, in the page's own colours. They are cropped tight so a detail
// fills the top half of each plate. All shapes are flat fills.

const T1 = "var(--tone-1)";
const T2 = "var(--tone-2)";
const T3 = "var(--tone-3)";
const INK = "var(--plate-ink, var(--ink))";

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 1600 500" preserveAspectRatio="xMidYMid slice" role="img" className="fig" aria-hidden="true">
      {children}
    </svg>
  );
}

/** A configuration screen: rows of settings with switches, beside the schema that makes them. */
export function ConfigFigure() {
  const rows = [90, 160, 230, 300, 370, 440];
  const on = [true, false, true, true, false, true];
  const widths = [360, 280, 440, 320, 400, 300];
  return (
    <Frame>
      <rect width="1600" height="500" fill={T1} />
      {rows.map((y, i) => (
        <g key={y}>
          <rect x="120" y={y - 22} width="760" height="52" fill={T2} />
          <rect x="150" y={y - 6} width={widths[i]} height="20" fill={T3} />
          <rect x="780" y={y - 8} width="68" height="24" fill={on[i] ? INK : T3} />
          <rect x={on[i] ? 820 : 786} y={y - 4} width="20" height="16" fill="var(--bg)" />
        </g>
      ))}
      {[70, 120, 170, 220, 270, 320, 370, 420].map((y, i) => (
        <rect key={y} x={960 + (i % 3 === 1 ? 40 : 0) + (i === 5 ? 80 : 0)} y={y} width={[420, 300, 360, 220, 380, 260, 340, 200][i]} height="22" fill={i % 4 === 0 ? INK : T3} />
      ))}
    </Frame>
  );
}

/** One block splitting into four that ship on their own. */
export function MfeFigure() {
  return (
    <Frame>
      <rect width="1600" height="500" fill={T1} />
      <rect x="110" y="70" width="520" height="360" fill={T3} />
      <rect x="150" y="110" width="440" height="60" fill={T2} />
      <rect x="150" y="190" width="440" height="60" fill={T2} />
      <rect x="150" y="270" width="440" height="60" fill={T2} />
      <rect x="150" y="350" width="440" height="40" fill={T2} />
      <path d="M690 250h130m-30-40 40 40-40 40" fill="none" stroke={INK} strokeWidth="14" strokeLinecap="square" />
      <rect x="900" y="70" width="280" height="170" fill={INK} />
      <rect x="1220" y="110" width="280" height="130" fill={T3} />
      <rect x="900" y="280" width="190" height="150" fill={T3} />
      <rect x="1130" y="270" width="370" height="160" fill={T2} />
    </Frame>
  );
}

/** Twelve seconds against five, drawn to scale. The bars draw in when the plate enters. */
export function SpeedFigure() {
  return (
    <Frame>
      <rect width="1600" height="500" fill={T1} />
      <g className="bar bar-long">
        <rect x="100" y="90" width="1200" height="120" fill={T3} />
      </g>
      <g className="bar bar-short">
        <rect x="100" y="290" width="500" height="120" fill={INK} />
      </g>
      <text x="1330" y="178" fontSize="104" fill={INK} fontFamily="var(--font-hanken), system-ui, sans-serif" fontWeight="500">
        12 s
      </text>
      <text x="630" y="378" fontSize="104" fill={INK} fontFamily="var(--font-hanken), system-ui, sans-serif" fontWeight="500">
        5 s
      </text>
    </Frame>
  );
}

/** A long list that keeps going: rows drift upward in a loop, one row highlighted. */
export function HistoryFigure() {
  const rows = Array.from({ length: 14 }, (_, i) => i);
  return (
    <Frame>
      <rect width="1600" height="500" fill={T1} />
      <g className="drift">
        {rows.map((i) => (
          <g key={i} transform={`translate(0 ${i * 92})`}>
            <rect x="220" y="10" width="1160" height="72" fill={i % 5 === 2 ? INK : T2} />
            <rect x="256" y="36" width={[300, 220, 380, 260, 340][i % 5]} height="20" fill={i % 5 === 2 ? "var(--bg)" : T3} />
            <rect x="1180" y="36" width={[150, 110, 130, 90, 140][i % 5]} height="20" fill={i % 5 === 2 ? "var(--bg)" : T3} />
          </g>
        ))}
      </g>
    </Frame>
  );
}
