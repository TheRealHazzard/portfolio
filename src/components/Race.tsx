"use client";

import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";

const BEFORE = 12;
const AFTER = 5;
const SPEED = 4; // shown four times faster than real life

const REDUCE = "(prefers-reduced-motion: reduce)";
const subscribeReduce = (cb: () => void) => {
  const mq = window.matchMedia(REDUCE);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
};

/**
 * The same screen, before and after: twelve seconds to become interactive against five.
 * It plays once when the page opens and again on request. Real figures, sped up.
 */
export default function Race() {
  const [t, setT] = useState({ a: 0, b: 0 });
  const [done, setDone] = useState(false);
  const raf = useRef(0);
  const reduce = useSyncExternalStore(subscribeReduce, () => window.matchMedia(REDUCE).matches, () => false);

  const run = useCallback(() => {
    cancelAnimationFrame(raf.current);
    setDone(false);
    setT({ a: 0, b: 0 });
    const start = performance.now();
    const tick = (now: number) => {
      const elapsed = ((now - start) / 1000) * SPEED;
      setT({ a: Math.min(BEFORE, elapsed), b: Math.min(AFTER, elapsed) });
      if (elapsed < BEFORE) raf.current = requestAnimationFrame(tick);
      else setDone(true);
    };
    raf.current = requestAnimationFrame(tick);
  }, []);

  useEffect(() => {
    if (reduce) return;
    const id = setTimeout(run, 800);
    return () => {
      clearTimeout(id);
      cancelAnimationFrame(raf.current);
    };
  }, [run, reduce]);

  const shown = reduce ? { a: BEFORE, b: AFTER } : t;
  const finished = reduce || done;

  return (
    <div className="race">
      <p className="sr">The same enterprise screen took 12 seconds to become interactive before the rebuild and 5 seconds after.</p>
      <div className="race-row" aria-hidden="true">
        <span>Before</span>
        <div className="race-track">
          <i className="race-fill before" style={{ transform: `scaleX(${shown.a / BEFORE})` }} />
        </div>
        <b>{shown.a.toFixed(1)} s</b>
      </div>
      <div className="race-row" aria-hidden="true">
        <span>After</span>
        <div className="race-track">
          <i className="race-fill after" style={{ transform: `scaleX(${shown.b / BEFORE})` }} />
        </div>
        <b>{shown.b.toFixed(1)} s</b>
      </div>
      <div className="race-foot">
        <span>Time to interactive on one Tekion screen, shown at 4x speed.</span>
        <button type="button" className="link race-btn" onClick={run} disabled={!finished}>
          Run again
        </button>
      </div>
    </div>
  );
}
