"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import Reveal from "./Reveal";
import { caseStudies } from "@/lib/data";

export default function CaseStudies() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-28">
      <Reveal>
        <span className="font-mono text-sm text-teal">03 · Selected Work</span>
        <h2 className="mt-3 max-w-2xl text-3xl font-bold text-ink sm:text-4xl">
          Real problems, real impact. No throwaway demos.
        </h2>
        <p className="mt-4 max-w-2xl text-mist">
          This work was built inside a production enterprise codebase, so
          there&apos;s no public repo to link, so here&apos;s the problem,
          what I did, and what changed.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {caseStudies.map((cs, i) => {
          const isOpen = open === i;
          return (
            <Reveal key={cs.title} delay={i * 0.08}>
              <motion.div
                layout
                className="glow-border overflow-hidden rounded-2xl border border-line bg-panel"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-start justify-between gap-4 p-6 text-left"
                >
                  <div>
                    <span className="font-mono text-xs text-teal">
                      {cs.tag}
                    </span>
                    <h3 className="mt-2 text-xl font-semibold text-ink">
                      {cs.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-mist">
                      {cs.problem}
                    </p>
                  </div>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-1 flex h-8 w-8 flex-none items-center justify-center rounded-full border border-line text-mist"
                  >
                    <Plus size={16} />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-line px-6 py-6">
                        <div>
                          <span className="text-xs font-semibold uppercase tracking-wide text-mist">
                            What I did
                          </span>
                          <p className="mt-2 text-sm leading-relaxed text-ink/90">
                            {cs.action}
                          </p>
                        </div>
                        <div className="mt-5">
                          <span className="text-xs font-semibold uppercase tracking-wide text-mist">
                            Impact
                          </span>
                          <ul className="mt-2 space-y-2">
                            {cs.impact.map((line) => (
                              <li
                                key={line}
                                className="flex items-start gap-2 text-sm text-ink/90"
                              >
                                <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-teal" />
                                {line}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="mt-5 flex flex-wrap gap-2">
                          {cs.stack.map((s) => (
                            <span
                              key={s}
                              className="rounded-full border border-line px-3 py-1 font-mono text-xs text-mist"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
