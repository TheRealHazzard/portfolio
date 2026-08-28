import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 border-b-4 border-ink">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[auto_1fr] md:gap-16 md:py-24">
        <span
          className="text-[8rem] font-black leading-none text-transparent md:text-[10rem]"
          style={{ WebkitTextStroke: "3px var(--color-ink)" }}
        >
          04
        </span>

        <div>
          <h2 className="mb-6 font-mono text-xs font-bold uppercase tracking-widest">
            Skills
          </h2>

          <div className="space-y-6">
            {Object.entries(skills).map(([group, items]) => (
              <div
                key={group}
                className="flex flex-col gap-3 border-b-2 border-ink pb-6 last:border-0 sm:flex-row sm:items-center"
              >
                <span className="w-36 flex-none font-mono text-xs font-bold uppercase">
                  {group}
                </span>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="border-2 border-ink bg-white px-3 py-1 text-sm font-bold"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
