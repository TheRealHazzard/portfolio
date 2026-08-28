"use client";

import { useState } from "react";
import SectionHeading from "./SectionHeading";
import { profile } from "@/lib/data";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // clipboard API unavailable, mailto still works below
    }
  };

  return (
    <section id="contact" className="scroll-mt-24 py-16">
      <SectionHeading index="05" title="Contact" />

      <p className="max-w-md text-[15px] leading-relaxed text-mist">
        I&apos;m open to select freelance work. If you&apos;ve got a
        problem that needs someone who has actually shipped this kind of
        thing before, tell me about it.
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-6">
        <a
          href={`mailto:${profile.email}`}
          className="font-mono text-sm text-teal underline decoration-teal/30 underline-offset-4 transition-colors hover:decoration-teal"
        >
          {profile.email}
        </a>
        <button
          onClick={copyEmail}
          className="font-mono text-xs text-slate transition-colors hover:text-ink"
        >
          {copied ? "copied" : "copy"}
        </button>
      </div>

      <p className="mt-16 max-w-sm font-mono text-xs text-slate">
        what&apos;s next is still loading, but there&apos;s always room for
        one more good project.
      </p>
    </section>
  );
}
