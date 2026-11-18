"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { more, profile, projects } from "@/lib/data";

type Item = { id: string; label: string; hint: string; keywords: string; run: () => void };

const open = (url: string) => window.open(url, "_blank", "noopener,noreferrer");
const goto = (index: number) => window.dispatchEvent(new CustomEvent("stage:goto", { detail: index }));
const hash = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

/**
 * A command palette: press Ctrl+K (or Cmd+K, or /) from anywhere to jump to a project,
 * a section, or an action. Arrow keys move, Enter runs, Escape closes.
 */
export default function Palette() {
  const [isOpen, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [index, setIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const input = useRef<HTMLInputElement>(null);
  const list = useRef<HTMLUListElement>(null);
  const returnTo = useRef<HTMLElement | null>(null);

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
    setIndex(0);
    returnTo.current?.focus?.();
  }, []);

  const items = useMemo<Item[]>(
    () => [
      ...projects.map((p, i) => ({
        id: p.id,
        label: p.name,
        hint: "Open in the stage",
        keywords: `app project ${p.text}`,
        run: () => goto(i),
      })),
      ...more.map((m) => ({
        id: m.id,
        label: m.name,
        hint: "Read the code",
        keywords: `app project code ${m.text}`,
        run: () => open(m.code),
      })),
      { id: "s-route", label: "The route", hint: "Section", keywords: "route map timeline life journey", run: () => hash("route") },
      { id: "s-work", label: "Work at Tekion", hint: "Section", keywords: "work tekion experience", run: () => hash("work") },
      { id: "s-projects", label: "Projects", hint: "Section", keywords: "projects stage apps", run: () => hash("projects") },
      { id: "s-backstage", label: "Backstage", hint: "Section", keywords: "backstage plays films", run: () => hash("backstage") },
      { id: "s-contact", label: "Contact", hint: "Section", keywords: "contact email", run: () => hash("contact") },
      { id: "a-email", label: "Email Robin", hint: "Opens your mail app", keywords: "email mail hello", run: () => (window.location.href = `mailto:${profile.email}`) },
      {
        id: "a-copy",
        label: copied ? "Copied" : "Copy email address",
        hint: profile.email,
        keywords: "copy email address",
        run: () => {
          navigator.clipboard?.writeText(profile.email).then(() => setCopied(true)).catch(() => {});
        },
      },
      { id: "a-linkedin", label: "LinkedIn", hint: "Opens in a new tab", keywords: "linkedin", run: () => open(profile.linkedin) },
      { id: "a-github", label: "GitHub", hint: "Opens in a new tab", keywords: "github code", run: () => open(profile.github) },
    ],
    [copied],
  );

  const shown = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter((i) => `${i.label} ${i.keywords}`.toLowerCase().includes(q));
  }, [items, query]);

  // Open from anywhere. Digits 1 to 4 jump straight to a stage project.
  useEffect(() => {
    const onOpen = () => {
      returnTo.current = document.activeElement as HTMLElement | null;
      setOpen(true);
    };
    const onKey = (e: KeyboardEvent) => {
      const typing = (e.target as HTMLElement | null)?.closest("input, textarea, select, [contenteditable]");
      if ((e.key === "k" || e.key === "K") && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        if (isOpen) close();
        else onOpen();
      } else if (e.key === "/" && !typing && !isOpen) {
        e.preventDefault();
        onOpen();
      } else if (!typing && !isOpen && !e.ctrlKey && !e.metaKey && !e.altKey && /^[1-4]$/.test(e.key)) {
        goto(Number(e.key) - 1);
      }
    };
    window.addEventListener("palette:open", onOpen);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("palette:open", onOpen);
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, close]);

  useEffect(() => {
    if (isOpen) input.current?.focus();
  }, [isOpen]);

  useEffect(() => {
    list.current?.querySelector<HTMLElement>('[aria-selected="true"]')?.scrollIntoView({ block: "nearest" });
  }, [index, shown]);

  useEffect(() => {
    if (!copied) return;
    const id = setTimeout(() => setCopied(false), 1600);
    return () => clearTimeout(id);
  }, [copied]);

  if (!isOpen) return null;

  const choose = (item: Item | undefined) => {
    if (!item) return;
    item.run();
    if (item.id !== "a-copy") close();
  };

  return (
    <div className="pal" onMouseDown={(e) => e.target === e.currentTarget && close()}>
      <div
        className="pal-box"
        role="dialog"
        aria-modal="true"
        aria-label="Jump to"
        onKeyDown={(e) => {
          if (e.key === "Escape") {
            e.preventDefault();
            close();
          } else if (e.key === "ArrowDown") {
            e.preventDefault();
            setIndex((i) => Math.min(shown.length - 1, i + 1));
          } else if (e.key === "ArrowUp") {
            e.preventDefault();
            setIndex((i) => Math.max(0, i - 1));
          } else if (e.key === "Enter") {
            e.preventDefault();
            choose(shown[index]);
          } else if (e.key === "Tab") {
            e.preventDefault(); // keep focus in the dialog: the input is the only stop
          }
        }}
      >
        <input
          ref={input}
          className="pal-input"
          placeholder="Jump to a project, a section or an action"
          aria-label="Jump to"
          role="combobox"
          aria-expanded="true"
          aria-controls="pal-list"
          aria-activedescendant={shown[index] ? `pal-${shown[index].id}` : undefined}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIndex(0);
          }}
        />
        <ul id="pal-list" ref={list} role="listbox" className="pal-list">
          {shown.length === 0 && <li className="pal-empty">Nothing matches. Try &ldquo;email&rdquo; or &ldquo;ticker&rdquo;.</li>}
          {shown.map((item, i) => (
            <li
              key={item.id}
              id={`pal-${item.id}`}
              role="option"
              aria-selected={i === index}
              className={i === index ? "on" : ""}
              onMouseMove={() => setIndex(i)}
              onClick={() => choose(item)}
            >
              <span>{item.label}</span>
              <small>{item.hint}</small>
            </li>
          ))}
        </ul>
        <p className="pal-keys">Up and down to move, Enter to open, Escape to close. Press 1 to 4 anywhere to open a project.</p>
      </div>
    </div>
  );
}
