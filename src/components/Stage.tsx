"use client";

import { useEffect, useRef, useState } from "react";
import { asset } from "@/lib/site";
import { projects } from "@/lib/data";
import { Glyph } from "./Glyph";

const N = projects.length;

/**
 * The stage. One frame stays pinned while the projects change inside it, and the frame holds
 * the real, running site. Plain position: sticky does the pinning; script only reads the
 * scroll position to decide which project is on.
 */
export default function Stage() {
  const wrap = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const [mounted, setMounted] = useState<number[]>([]);
  const activeRef = useRef(0);
  const [armed, setArmed] = useState<number | null>(null);

  useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    let raf = 0;
    const update = () => {
      const range = el.offsetHeight - window.innerHeight;
      const p = range > 0 ? Math.min(0.999, Math.max(0, -el.getBoundingClientRect().top / range)) : 0;
      const next = Math.min(N - 1, Math.floor(p * N));
      // Nothing is requested until the stage is within a screen and a half of the viewport.
      if (el.getBoundingClientRect().top < window.innerHeight * 1.5) {
        setMounted((m) => {
          const want = [next, Math.min(N - 1, next + 1)].filter((i) => !m.includes(i));
          return want.length ? [...m, ...want] : m;
        });
      }
      if (next === activeRef.current) return;
      activeRef.current = next;
      setActive(next);
      setArmed(null);
      // Load a project's live site when it is on, and the next one a step early. Once loaded it stays.
      setMounted((m) => {
        const want = [next, Math.min(N - 1, next + 1)].filter((i) => !m.includes(i));
        return want.length ? [...m, ...want] : m;
      });
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    // The palette, the dock and the number keys all ask the stage to bring a project forward.
    const onGoto = (e: Event) => {
      const i = Math.min(N - 1, Math.max(0, Number((e as CustomEvent<number>).detail)));
      const range = el.offsetHeight - window.innerHeight;
      const top = el.getBoundingClientRect().top + window.scrollY + range * ((i + 0.5) / N);
      window.scrollTo({ top, behavior: "smooth" });
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    window.addEventListener("stage:goto", onGoto);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("stage:goto", onGoto);
    };
  }, []);

  const current = projects[active];

  return (
    <section ref={wrap} id="projects" aria-label="Projects you can use" className="stage" style={{ ["--n" as string]: N }}>
      <div className="stage-stick">
        <p className="stage-corner stage-corner-a" aria-hidden="true">
          Robin
        </p>
        <p className="stage-corner stage-corner-b" aria-hidden="true">
          Thomas
        </p>

        <div className="stage-inner">
          <div className="stage-head">
            <h2 key={current.id} className="stage-title">
              {current.name}
            </h2>
          </div>

          <div className="stage-frame">
            <div className="stage-chrome">
              <span>{current.live ? current.live.replace("https://", "") : "Not hosted. The numbers are in the repo."}</span>
            </div>
            <div className="stage-screen">
              {projects.map((p, i) => (
                <div key={p.id} className={`stage-pane${i === active ? " on" : ""}`} aria-hidden={i !== active}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={asset(p.poster)}
                    alt={i === active ? `${p.name}, running` : ""}
                    className={p.live ? "poster" : "poster poster-fit"}
                    loading="eager"
                    width={1400}
                    height={900}
                  />
                  {p.live && mounted.includes(i) && (
                    <iframe
                      src={p.live}
                      title={`${p.name}, live`}
                      tabIndex={i === active ? 0 : -1}
                      sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                    />
                  )}
                  {p.live && armed !== i && (
                    <button type="button" className="stage-cover" onClick={() => setArmed(i)} tabIndex={i === active ? 0 : -1}>
                      <span>Use it live</span>
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="stage-caption" key={`${current.id}-cap`}>
            <p>{current.text}</p>
            <div className="stage-meta">
              <span>{current.facts}</span>
              {current.live && (
                <a className="link" href={current.live} target="_blank" rel="noopener noreferrer">
                  Open full screen
                </a>
              )}
              <a className="link" href={current.code} target="_blank" rel="noopener noreferrer">
                Read the code
              </a>
            </div>
          </div>
        </div>

        <div className="dock" role="group" aria-label="Apps">
          {projects.map((p, i) => (
            <button
              key={p.id}
              type="button"
              className={`dock-btn${i === active ? " on" : ""}`}
              data-label={p.name}
              aria-label={`Open ${p.name}`}
              aria-pressed={i === active}
              onClick={() => window.dispatchEvent(new CustomEvent("stage:goto", { detail: i }))}
            >
              <Glyph id={p.id} />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
