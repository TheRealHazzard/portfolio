import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-line px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-mist sm:flex-row">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <div className="flex items-center gap-6">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`} className="hover:text-ink">
            Email
          </a>
        </div>
        <span className="font-mono text-xs">
          built with Next.js, TypeScript &amp; Framer Motion
        </span>
      </div>
    </footer>
  );
}
