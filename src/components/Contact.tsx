"use client";

import { useState } from "react";
import { profile } from "@/lib/data";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // clipboard API unavailable, mailto link below still works
    }
  };

  return (
    <section id="contact" className="scroll-mt-20 border-b-4 border-ink bg-ink text-white">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <span className="font-mono text-xs font-bold uppercase tracking-widest text-yellow">
          05 / Contact
        </span>

        <h2 className="mt-4 max-w-2xl text-4xl font-black uppercase leading-[0.95] sm:text-6xl">
          Got a problem worth solving properly?
        </h2>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="border-2 border-yellow bg-yellow px-6 py-3 font-mono text-sm font-bold uppercase text-ink transition-transform hover:-translate-y-1"
          >
            {profile.email}
          </a>
          <button
            onClick={copyEmail}
            className="border-2 border-white px-6 py-3 font-mono text-sm font-bold uppercase text-white transition-transform hover:-translate-y-1"
          >
            {copied ? "Copied" : "Copy email"}
          </button>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-white px-6 py-3 font-mono text-sm font-bold uppercase text-white transition-transform hover:-translate-y-1"
          >
            LinkedIn
          </a>
        </div>

        <p className="mt-16 max-w-sm font-mono text-xs text-white/50">
          what&apos;s next is still loading, but there&apos;s always room
          for one more good project.
        </p>
      </div>
    </section>
  );
}
