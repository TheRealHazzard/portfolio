"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { profile } from "@/lib/data";
import LinkedinIcon from "./icons/LinkedinIcon";
import { Mail } from "lucide-react";

const SidebarScene = dynamic(() => import("./SidebarScene"), {
  ssr: false,
  loading: () => null,
});

const SECTIONS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function Sidebar() {
  const [active, setActive] = useState("about");
  const ticking = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        const mid = window.innerHeight * 0.4;
        let current = SECTIONS[0].id;
        for (const s of SECTIONS) {
          const el = document.getElementById(s.id);
          if (!el) continue;
          const rect = el.getBoundingClientRect();
          if (rect.top <= mid) current = s.id;
        }
        setActive(current);
        ticking.current = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <aside className="relative lg:fixed lg:inset-y-0 lg:left-0 lg:flex lg:w-[42%] lg:max-w-140 lg:flex-col lg:justify-between lg:py-24 lg:pl-[max(48px,calc((100vw-1280px)/2))] lg:pr-16">
      <div className="relative">
        <div className="pointer-events-none absolute -left-14 -top-16 h-52 w-52 lg:h-60 lg:w-60">
          <SidebarScene />
        </div>

        <div className="relative px-6 pt-16 lg:px-0 lg:pt-0">
          <p className="font-mono text-sm text-teal">Hi, I&apos;m</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            {profile.name}
          </h1>
          <h2 className="mt-2 text-lg font-medium text-mist">
            {profile.role}
          </h2>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate">
            {profile.blurb}
          </p>

          <nav className="mt-14 hidden lg:block">
            <ul className="space-y-4">
              {SECTIONS.map((s) => {
                const isActive = active === s.id;
                return (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="group flex items-center gap-4"
                    >
                      <span
                        className={`h-px transition-all duration-300 ${
                          isActive
                            ? "w-12 bg-teal"
                            : "w-6 bg-line group-hover:w-10 group-hover:bg-mist"
                        }`}
                      />
                      <span
                        className={`font-mono text-xs uppercase tracking-widest transition-colors duration-300 ${
                          isActive
                            ? "text-ink"
                            : "text-slate group-hover:text-mist"
                        }`}
                      >
                        {s.label}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>

      <div className="relative mt-16 flex items-center gap-5 px-6 pb-10 lg:px-0 lg:pb-0">
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate transition-colors hover:text-teal"
          aria-label="GitHub"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.58.1.79-.25.79-.56 0-.27-.01-1.15-.02-2.09-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.7-1.28-1.7-1.04-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.02 1.76 2.68 1.25 3.34.95.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14 0 1.54-.01 2.79-.01 3.17 0 .31.2.67.8.56A10.52 10.52 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5Z" />
          </svg>
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate transition-colors hover:text-teal"
          aria-label="LinkedIn"
        >
          <LinkedinIcon size={20} />
        </a>
        <a
          href={`mailto:${profile.email}`}
          className="text-slate transition-colors hover:text-teal"
          aria-label="Email"
        >
          <Mail size={20} />
        </a>
      </div>
    </aside>
  );
}
