"use client";

import { motion } from "framer-motion";
import { technologies } from "@/lib/data";

export default function Technologies() {
  const loop = [...technologies, ...technologies];

  return (
    <section className="py-16 border-t border-line overflow-hidden bg-panel/40">
      <div className="mx-auto max-w-7xl px-6 md:px-10 mb-8">
        <span className="font-mono text-xs uppercase tracking-widest text-muted">
          Our stack
        </span>
      </div>
      <div className="relative">
        <div
          aria-hidden
          className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink to-transparent z-10"
        />
        <div
          aria-hidden
          className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink to-transparent z-10"
        />
        <motion.div
          className="flex gap-4 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        >
          {loop.map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="font-mono text-sm text-muted border border-line rounded-full px-5 py-2.5 whitespace-nowrap hover:text-primary hover:border-primary-dim transition-colors"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
