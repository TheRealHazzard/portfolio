"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import GridSpotlight from "./GridSpotlight";
import RoleCycler from "./RoleCycler";
import { profile } from "@/lib/data";

const Scene3D = dynamic(() => import("./Scene3D"), {
  ssr: false,
  loading: () => null,
});

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <GridSpotlight />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-8 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-panel/60 px-3 py-1 font-mono text-xs text-mist"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-teal" />
            </span>
            available for select freelance work
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-5xl font-bold tracking-tight text-ink sm:text-6xl md:text-7xl"
          >
            {profile.name}
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-2xl font-semibold text-mist sm:text-3xl"
          >
            <RoleCycler roles={profile.roles} />
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-mist"
          >
            {profile.blurb}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#work"
              className="rounded-full bg-gradient-to-r from-azure to-teal px-6 py-3 text-sm font-semibold text-canvas transition-transform hover:scale-105"
            >
              View my work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-line px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-azure hover:text-azure"
            >
              Get in touch
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-[340px] sm:h-[420px] lg:h-[520px]"
        >
          <Scene3D />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-9 w-6 items-start justify-center rounded-full border border-line p-1.5"
        >
          <div className="h-1.5 w-1 rounded-full bg-mist" />
        </motion.div>
      </motion.div>
    </section>
  );
}
