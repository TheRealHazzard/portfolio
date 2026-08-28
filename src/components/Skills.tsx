import Reveal from "./Reveal";
import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-28">
      <Reveal>
        <span className="font-mono text-sm text-teal">04 · Skills</span>
        <h2 className="mt-3 max-w-2xl text-3xl font-bold text-ink sm:text-4xl">
          The toolbox.
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {Object.entries(skills).map(([group, items], i) => (
          <Reveal key={group} delay={i * 0.1}>
            <h3 className="font-mono text-sm text-mist">{group}</h3>
            <ul className="mt-4 space-y-3">
              {items.map((item) => (
                <li
                  key={item}
                  className="rounded-lg border border-line bg-panel px-4 py-2.5 text-sm text-ink transition-colors hover:border-azure/60"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
