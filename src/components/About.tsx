import { stats } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 border-b-4 border-ink">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[auto_1fr] md:gap-16 md:py-24">
        <span
          className="text-[8rem] font-black leading-none text-transparent md:text-[10rem]"
          style={{ WebkitTextStroke: "3px var(--color-ink)" }}
        >
          01
        </span>

        <div>
          <h2 className="mb-6 font-mono text-xs font-bold uppercase tracking-widest">
            About
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed">
            I&apos;m a senior software engineer at Tekion Corporation, where I
            grew from an intern to leading front-end architecture decisions
            across four internal promotions. I work mostly in React,
            TypeScript, and Next.js, and I care about the unglamorous part
            of the job: taking a system nobody wants to touch and turning
            it into something a team can build on for years.
          </p>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed">
            Enterprise software has a specific kind of hard: real users,
            real load, real cost of getting it wrong. That&apos;s the
            environment most of the work below comes out of.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="border-2 border-ink bg-panel p-4 hard-shadow-sm"
              >
                <div className="text-3xl font-black">{s.value}</div>
                <div className="mt-1 text-xs font-bold uppercase tracking-wide">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
