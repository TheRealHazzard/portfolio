import { profile } from "@/lib/data";
import JumpButton from "./JumpButton";

const links = [
  { href: "#route", label: "Route" },
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
      <JumpButton />
      <a className="btn bar-cta" href={`mailto:${profile.email}`}>
        Email
      </a>
    </header>
  );
}
