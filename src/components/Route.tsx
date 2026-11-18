"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { journey, lines, type LineId } from "@/lib/data";

const ORDER: LineId[] = lines.map((l) => l.id);

/**
 * The route: a transit-style map of the work. Three lines run down the page, and every
 * station is a row. A line is drawn from its first stop to its last; a row where two or
 * more lines stop is an interchange. The big year on the left follows the row you are on.
 */
export default function Route() {
  const [year, setYear] = useState(journey[0].year);
  const rows = useRef<(HTMLLIElement | null)[]>([]);

  // For each line, the first and last row it stops at: the bar runs between them.
  const span = useMemo(() => {
    const out = {} as Record<LineId, [number, number]>;
    for (const id of ORDER) {
      const stops = journey.map((s, i) => (s.on.includes(id) ? i : -1)).filter((i) => i >= 0);
      out[id] = [stops[0], stops[stops.length - 1]];
    }
    return out;
  }, []);

  // The year on the left is the year of the row crossing the middle of the screen.
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setYear((e.target as HTMLElement).dataset.year ?? "");
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    rows.current.forEach((r) => r && io.observe(r));
    return () => io.disconnect();
  }, []);

  return (
    <section id="route" aria-labelledby="route-title" className="rt">
      <div className="rt-head">
        <h2 id="route-title" data-reveal="0">
          The route
        </h2>
        <p data-reveal="1">Three lines, one traveller. Every stop is something I built, shipped or performed.</p>
        <ul className="rt-legend" data-reveal="2" aria-label="Lines">
          {lines.map((l) => (
            <li key={l.id}>
              <i className={`rt-key ${l.id}`} aria-hidden="true" />
              {l.name}
            </li>
          ))}
        </ul>
      </div>

      <div className="rt-body">
        <p className="rt-year" aria-hidden="true">
          {year}
        </p>
        <ol className="rt-list">
          {journey.map((s, i) => {
            const idx = s.on.map((id) => ORDER.indexOf(id));
            const hub = s.on.length > 1;
            return (
              <li key={`${s.year}-${s.title}`} ref={(el) => void (rows.current[i] = el)} data-year={s.year} data-reveal="0" className="rt-row">
                <div className="rt-tracks" aria-hidden="true">
                  {ORDER.map((id) => {
                    const [first, last] = span[id];
                    const open = i >= first && i <= last;
                    const stop = s.on.includes(id);
                    const cls = i === first ? "from" : i === last ? "to" : "mid";
                    return (
                      <span key={id} className={`rt-cell ${id}`}>
                        {open && first !== last && <i className={`rt-bar ${cls}`} />}
                        {stop && <i className={`rt-dot${hub ? " hub" : ""}`} />}
                      </span>
                    );
                  })}
                  {hub && <i className="rt-link" style={{ ["--a" as string]: Math.min(...idx), ["--b" as string]: Math.max(...idx) }} />}
                </div>
                <div className="rt-text">
                  <h3>
                    <span className="rt-y">{s.year}</span>
                    {s.title}
                  </h3>
                  <p>{s.text}</p>
                  {(s.stage !== undefined || s.href) && (
                    <p className="rt-go">
                      {s.stage !== undefined && (
                        <button type="button" className="link" onClick={() => window.dispatchEvent(new CustomEvent("stage:goto", { detail: s.stage }))}>
                          Open it in the stage
                        </button>
                      )}
                      {s.href && (
                        <a className="link" href={s.href}>
                          {s.hrefLabel ?? "More"}
                        </a>
                      )}
                    </p>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
