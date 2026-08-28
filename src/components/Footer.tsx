import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="px-6 py-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 font-mono text-[11px] font-bold uppercase tracking-wide sm:flex-row">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span>Built with Next.js + TypeScript</span>
      </div>
    </footer>
  );
}
