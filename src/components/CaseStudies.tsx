"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { caseStudies } from "@/lib/data";

export default function CaseStudies() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="work" className="scroll-mt-24 py-16">
      <SectionHeading index="03" title="Selected Work" />

      <p className="mb-8 text-sm leading-relaxed text-slate">
        This work lives inside a production enterprise codebase, so there&apos;s
        no public repo to point to. Here&apos;s the problem, what I did, and
        what changed, for each one.
      </p>

      <ul>
        {caseStudies.map((cs, i) => {
          const isOpen = open === i;
          return (
            <li key={cs.title} className="border-b border-line last:border-0">
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="group flex w-full items-start justify-between gap-4 py-5 text-left"
              >
                <div>
                  <span className="font-mono text-xs text-teal">{cs.tag}</span>
                  <h3 className="mt-1 text-base font-medium text-ink transition-colors group-hover:text-teal">
                    {cs.title}
                  </h3>
                </div>
                <span
                  className={`mt-1 font-mono text-lg text-slate transition-transform duration-300 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pb-6 pl-0 pr-8">
                      <p className="text-sm leading-relaxed text-mist">
                        {cs.problem}
                      </p>
                      <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-slate">
                        What I did
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-mist">
                        {cs.action}
                      </p>
                      <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-slate">
                        Impact
                      </p>
                      <ul className="mt-2 space-y-1.5">
                        {cs.impact.map((line) => (
                          <li
                            key={line}
                            className="flex items-start gap-2 text-sm text-mist"
                          >
                            <span className="mt-1.5 h-1 w-1 flex-none rounded-full bg-teal" />
                            {line}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-slate">
                        {cs.stack.map((s) => (
                          <span key={s}>{s}</span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
