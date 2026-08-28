"use client";

import { useState } from "react";
import { Check, Copy, Mail } from "lucide-react";
import LinkedinIcon from "./icons/LinkedinIcon";
import Reveal from "./Reveal";
import { profile } from "@/lib/data";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // clipboard API unavailable, the mailto link still works
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-28">
      <Reveal>
        <div className="glow-border relative overflow-hidden rounded-3xl border border-line bg-panel px-8 py-16 text-center sm:px-16">
          <span className="font-mono text-sm text-teal">05 · Contact</span>
          <h2 className="mx-auto mt-4 max-w-xl text-3xl font-bold text-ink sm:text-4xl">
            Have a project that needs someone who&apos;s shipped this before?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-mist">
            I&apos;m open to select freelance work. Tell me what you&apos;re
            building.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-azure to-teal px-6 py-3 text-sm font-semibold text-canvas transition-transform hover:scale-105"
            >
              <Mail size={16} />
              Email me
            </a>
            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-azure hover:text-azure"
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
              {copied ? "Copied" : profile.email}
            </button>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-azure hover:text-azure"
            >
              <LinkedinIcon size={16} />
              LinkedIn
            </a>
          </div>

          <div className="mx-auto mt-16 flex max-w-xs items-center justify-center gap-3 font-mono text-xs text-mist">
            <span className="relative flex h-3.5 w-3.5 flex-none items-center justify-center rounded-full border border-mist border-dashed">
              <span className="absolute inset-0 animate-spin rounded-full border border-dashed border-teal [animation-duration:4s]" />
            </span>
            what&apos;s next is still loading, but there&apos;s always room
            for one more good project
          </div>
        </div>
      </Reveal>
    </section>
  );
}
