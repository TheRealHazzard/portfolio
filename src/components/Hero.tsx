"use client";

import { useEffect, useRef } from "react";
import { asset } from "@/lib/site";
import { profile } from "@/lib/data";
import Race from "./Race";

/**
 * A card over a dim theatre. As the page scrolls, the card shrinks toward the bottom-left
 * corner like a ticket stub. --p (0 to 1) is the only thing script touches.
 */
export default function Hero() {
  const wrap = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    let raf = 0;
    const update = () => {
      const range = el.offsetHeight - window.innerHeight;
      const p = range > 0 ? Math.min(1, Math.max(0, -el.getBoundingClientRect().top / range)) : 0;
      el.style.setProperty("--p", p.toFixed(3));
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section ref={wrap} id="top" className="hero" aria-label="Introduction">
      <div className="hero-stick">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="hero-photo"
          src={asset("/img/theatre.webp")}
          width={1920}
          height={894}
          alt="The gilded, empty auditorium of the Fox Theatre in Detroit, seen from the stage"
          fetchPriority="high"
        />
        <div className="hero-card">
          <div className="hero-body">
            <h1 className="hero-title">
              <span>Robin</span>
              <span>Thomas</span>
            </h1>
            <Race />
            <div className="hero-mid">
              <p className="hero-facts">
                Senior front-end engineer
                <br />
                Tekion, {profile.place}
                <br />
                Five years, four promotions
              </p>
              <p className="hero-line">I make slow, brittle enterprise front-ends fast.</p>
            </div>
            <div className="hero-foot">
              <small>Photo: DDohler, CC BY 2.0</small>
              <a className="btn" href="#work">
                See the work
              </a>
              <a className="link" href={`mailto:${profile.email}`}>
                Email me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
