"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";

// The theme lives on <html class="dark">, so read it from there instead of mirroring it in state.
function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
  return () => observer.disconnect();
}
const getSnapshot = () => document.documentElement.classList.contains("dark");
const getServerSnapshot = () => false;

export default function ThemeToggle() {
  const isDark = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggle = () => {
    const next = !isDark;
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      // storage unavailable: the theme still switches for this visit
    }
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="flex h-10 w-10 flex-none items-center justify-center border-2 border-ink bg-panel text-ink transition-transform hover:-translate-y-0.5 hover:-translate-x-0.5 hard-shadow-sm"
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
