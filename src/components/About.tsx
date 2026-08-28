import Reveal from "./Reveal";
import { profile, stats } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-28">
      <Reveal>
        <span className="font-mono text-sm text-teal">01 · About</span>
        <h2 className="mt-3 max-w-2xl text-3xl font-bold text-ink sm:text-4xl">
          Five years of turning ambiguous problems into shipped, scalable
          products.
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-12 md:grid-cols-2">
        <Reveal delay={0.1}>
          <p className="text-lg leading-relaxed text-mist">
            I&apos;m {profile.name}, a {profile.role.toLowerCase()} currently at{" "}
            <span className="text-ink">Tekion Corporation</span>, where I
            grew from an intern to leading front-end architecture decisions
            across four internal promotions. I specialize in React,
            TypeScript, and Next.js, with a focus on systems that hold up
            under real enterprise load, not just demo conditions.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-mist">
            What I actually enjoy is the unglamorous part: taking a system
            nobody wants to touch and making it something a team can build
            on for years. That&apos;s the thread through most of the work on
            this page.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="glow-border rounded-2xl border border-line bg-panel p-6"
              >
                <div className="text-gradient text-3xl font-bold">
                  {s.value}
                </div>
                <div className="mt-2 text-sm text-mist">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
