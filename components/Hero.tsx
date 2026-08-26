"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import MagneticButton from "./MagneticButton";

const buildLines = [
  { t: "$ forge deploy client-brief.json", c: "text-muted" },
  { t: "> resolving requirements... done", c: "text-primary" },
  { t: "> compiling services/software-development", c: "text-muted" },
  { t: "> compiling services/digital-marketing", c: "text-muted" },
  { t: "> compiling services/ui-ux-design", c: "text-muted" },
  { t: "✓ 7 services compiled", c: "text-primary" },
  { t: "> optimizing for conversion...", c: "text-muted" },
  { t: "> running QA across 6 devices", c: "text-muted" },
  { t: "✓ zero critical issues", c: "text-primary" },
  { t: "> deploying to production", c: "text-muted" },
  { t: "✓ build ready — 120+ projects shipped", c: "text-amber" },
];

export default function Hero() {
  const [visible, setVisible] = useState<number>(0);

  useEffect(() => {
    if (visible >= buildLines.length) return;
    const timeout = setTimeout(() => setVisible((v) => v + 1), 420);
    return () => clearTimeout(timeout);
  }, [visible]);

  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden pt-28 pb-16 md:pt-20">
      {/* Premium animated glowing orbs background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -right-[10%] w-[50vw] h-[50vw] max-w-[800px] max-h-[800px] rounded-full bg-primary/15 blur-[120px]"
        />
        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[30%] -left-[10%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] rounded-full bg-primary-dim/20 blur-[120px]"
        />
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[20%] left-[20%] w-[60vw] h-[60vw] max-w-[900px] max-h-[900px] rounded-full bg-[#4338ca]/15 blur-[120px]"
        />
      </div>

      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-transparent via-ink/50 to-ink pointer-events-none"
      />

      <div className="relative mx-auto max-w-7xl w-full px-6 md:px-10 grid md:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-semibold text-[13vw] leading-[0.95] md:text-6xl lg:text-7xl tracking-tight"
          >
            We build digital
            <br />
            experiences that{" "}
            <span className="text-gradient">grow businesses.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-7 text-lg text-muted max-w-lg"
          >
            A software development and digital marketing studio for
            founders and teams who need product, not promises. Strategy,
            design and engineering — under one roof.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <MagneticButton href="/contact">
              Start a Project <ArrowUpRight size={16} />
            </MagneticButton>
            <MagneticButton href="/work" variant="ghost">
              View Our Work
            </MagneticButton>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="rounded-2xl border border-line bg-panel/80 backdrop-blur-sm overflow-hidden shadow-2xl shadow-black/40"
        >
          <div className="flex items-center gap-1.5 px-4 py-3 border-b border-line bg-panel-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
            <span className="ml-3 font-mono text-[11px] text-muted">forge.build</span>
          </div>
          <div className="p-5 font-mono text-[12px] md:text-[13px] leading-relaxed h-[280px] md:h-[320px] term-scroll overflow-y-auto">
            {buildLines.slice(0, visible).map((line, i) => (
              <div key={i} className={line.c}>
                {line.t}
              </div>
            ))}
            {visible < buildLines.length && (
              <span className="inline-block w-2 h-3.5 bg-primary animate-pulse translate-y-0.5" />
            )}
          </div>
        </motion.div>
      </div>

      <motion.a
        href="/services"
        data-cursor-hover
        aria-label="Scroll to services"
        className="focus-ring hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-muted"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
      >
        <span className="font-mono text-[11px] uppercase tracking-widest">Scroll</span>
        <ArrowDown size={16} />
      </motion.a>
    </section>
  );
}
