import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 border-b-4 border-ink">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[auto_1fr] md:gap-16 md:py-24">
        <span
          className="text-[8rem] font-black leading-none text-transparent md:text-[10rem]"
          style={{ WebkitTextStroke: "3px var(--color-ink)" }}
        >
          02
        </span>

        <div>
          <h2 className="mb-6 font-mono text-xs font-bold uppercase tracking-widest">
            Work History
          </h2>

          <div className="space-y-4">
            {experience.map((e, i) => (
              <div
                key={e.title}
                className={`flex flex-col gap-2 border-2 border-ink p-4 sm:flex-row sm:items-center sm:justify-between ${
                  i % 2 === 0 ? "bg-panel" : "bg-yellow text-black"
                }`}
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-xs font-bold">{e.year}</span>
                  <span className="text-lg font-bold uppercase">
                    {e.title}
                  </span>
                </div>
                <span className="font-mono text-xs font-bold uppercase">
                  {e.detail}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
