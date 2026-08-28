import Reveal from "./Reveal";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-28">
      <Reveal>
        <span className="font-mono text-sm text-teal">02 · Experience</span>
        <h2 className="mt-3 max-w-2xl text-3xl font-bold text-ink sm:text-4xl">
          One company, five roles, zero standing still.
        </h2>
      </Reveal>

      <div className="mt-14">
        {experience.map((e, i) => (
          <Reveal key={e.title} delay={i * 0.08}>
            <div className="group grid grid-cols-[80px_1fr] gap-6 border-t border-line py-6 sm:grid-cols-[120px_1fr_auto] sm:items-center">
              <span className="font-mono text-sm text-mist">{e.year}</span>
              <span className="text-lg font-semibold text-ink transition-colors group-hover:text-gradient">
                {e.title}
              </span>
              <span className="font-mono text-sm text-teal sm:text-right">
                {e.detail}
              </span>
            </div>
          </Reveal>
        ))}
        <div className="border-t border-line" />
      </div>
    </section>
  );
}
