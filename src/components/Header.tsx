import { profile } from "@/lib/data";

const links = [
  { href: "#work", label: "Work" },
  { href: "#projects", label: "Projects" },
  { href: "#backstage", label: "Backstage" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="bar">
      <a href="#top" className="bar-mark">
        {profile.name}
      </a>
      <nav aria-label="Sections" className="bar-nav">
        {links.map((l) => (
          <a key={l.href} href={l.href}>
            {l.label}
          </a>
        ))}
      </nav>
      <a className="btn bar-cta" href={`mailto:${profile.email}`}>
        Email
      </a>
    </header>
  );
}
