"use client";

import { useState } from "react";
import { caseStudies } from "@/lib/data";

export default function CaseStudies() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="work" className="scroll-mt-20 border-b-4 border-ink">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[auto_1fr] md:gap-16 md:py-24">
        <span
          className="text-[8rem] font-black leading-none text-transparent md:text-[10rem]"
          style={{ WebkitTextStroke: "3px var(--color-ink)" }}
        >
          03
        </span>

        <div>
          <h2 className="mb-2 font-mono text-xs font-bold uppercase tracking-widest">
            Case Studies
          </h2>
          <p className="mb-8 max-w-xl text-sm leading-relaxed">
            This work lives inside a production enterprise codebase, so
            there&apos;s no public repo to point to. Here&apos;s the
            problem, what I did, and what changed.
          </p>

          <div className="grid gap-6 sm:grid-cols-2">
            {caseStudies.map((cs, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={cs.title}
                  className="border-2 border-ink bg-panel hard-shadow"
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-start justify-between gap-3 p-5 text-left"
                  >
                    <div>
                      <span className="border-2 border-ink bg-yellow px-2 py-0.5 font-mono text-[10px] font-bold uppercase text-black">
                        {cs.tag}
                      </span>
                      <h3 className="mt-3 text-lg font-bold leading-tight">
                        {cs.title}
                      </h3>
                    </div>
                    <span
                      className={`flex h-8 w-8 flex-none items-center justify-center border-2 border-ink font-mono text-lg font-bold transition-transform ${
                        isOpen ? "rotate-45 bg-red text-white" : "bg-panel"
                      }`}
                    >
                      +
                    </span>
                  </button>

                  {isOpen && (
                    <div className="border-t-2 border-ink p-5">
                      <p className="text-sm leading-relaxed">{cs.problem}</p>
                      <p className="mt-4 font-mono text-[10px] font-bold uppercase tracking-widest">
                        What I did
                      </p>
                      <p className="mt-2 text-sm leading-relaxed">
                        {cs.action}
                      </p>
                      <p className="mt-4 font-mono text-[10px] font-bold uppercase tracking-widest">
                        Impact
                      </p>
                      <ul className="mt-2 space-y-1.5">
                        {cs.impact.map((line) => (
                          <li
                            key={line}
                            className="flex items-start gap-2 text-sm"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 flex-none bg-red" />
                            {line}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {cs.stack.map((s) => (
                          <span
                            key={s}
                            className="border border-ink px-2 py-0.5 font-mono text-[10px] font-bold uppercase"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
