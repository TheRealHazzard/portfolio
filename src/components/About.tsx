import SectionHeading from "./SectionHeading";
import { stats } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-16">
      <SectionHeading index="01" title="About" />

      <p className="text-[15px] leading-relaxed text-mist">
        I&apos;m a senior software engineer at Tekion Corporation, where I
        grew from an intern to leading front-end architecture decisions
        across four internal promotions. I work mostly in React,
        TypeScript, and Next.js, and I care about the unglamorous part of
        the job: taking a system nobody wants to touch and turning it into
        something a team can build on for years.
      </p>
      <p className="mt-4 text-[15px] leading-relaxed text-mist">
        Enterprise software has a specific kind of hard, real users, real
        load, real cost of getting it wrong. That&apos;s the environment
        most of my work below comes out of.
      </p>

      <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="border-l border-line pl-4">
            <dt className="text-2xl font-semibold text-ink">{s.value}</dt>
            <dd className="mt-1 text-xs text-slate">{s.label}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
