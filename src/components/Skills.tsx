import SectionHeading from "./SectionHeading";
import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-16">
      <SectionHeading index="04" title="Skills" />

      <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
        {Object.entries(skills).map(([group, items]) => (
          <div key={group}>
            <h3 className="font-mono text-xs text-slate">{group}</h3>
            <p className="mt-2 text-sm leading-relaxed text-mist">
              {items.join(" · ")}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
