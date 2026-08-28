import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-line py-8 font-mono text-xs text-slate">
      <p>
        © {new Date().getFullYear()} {profile.name}. Built with Next.js,
        TypeScript, and React Three Fiber.
      </p>
    </footer>
  );
}
