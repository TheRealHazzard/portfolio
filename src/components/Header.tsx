const LINKS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Work History" },
  { href: "#work", label: "Case Studies" },
  { href: "#skills", label: "Skills" },
];

export default function Header() {
  return (
    <header className="border-b-4 border-ink">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="flex h-10 w-10 items-center justify-center border-2 border-ink bg-ink font-mono text-sm font-bold text-yellow"
        >
          RT
        </a>
        <nav className="hidden items-center gap-8 font-mono text-xs font-bold uppercase tracking-wider md:flex">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="hover:underline">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="border-2 border-ink bg-yellow px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider transition-transform hover:-translate-y-0.5 hover:-translate-x-0.5 hard-shadow-sm"
        >
          Contact
        </a>
      </div>
    </header>
  );
}
