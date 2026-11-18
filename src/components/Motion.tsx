"use client";

import { useEffect } from "react";

/**
 * Starts the entrances: anything marked data-reveal rises in once, the first time it
 * scrolls into view. data-reveal="2" waits two steps (80ms each) so the parts of a
 * section arrive in order: heading, then text, then picture.
 */
export default function Motion() {
  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>("[data-reveal]");
    if (!("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          el.style.transitionDelay = `${Number(el.dataset.reveal || 0) * 80}ms`;
          el.classList.add("in");
          io.unobserve(el);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
