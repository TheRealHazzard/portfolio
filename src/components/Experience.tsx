import SectionHeading from "./SectionHeading";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-16">
      <SectionHeading index="02" title="Experience" />

      <ol>
        {experience.map((e) => (
          <li
            key={e.title}
            className="group grid grid-cols-[92px_1fr] gap-4 border-b border-line py-5 first:pt-0 last:border-0 sm:grid-cols-[110px_1fr_auto]"
          >
            <span className="font-mono text-xs text-slate">{e.year}</span>
            <span className="text-sm font-medium text-ink transition-colors group-hover:text-teal">
              {e.title}
            </span>
            <span className="font-mono text-xs text-slate sm:text-right">
              {e.detail}
            </span>
          </li>
        ))}
      </ol>
    </section>
  );
}
