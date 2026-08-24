"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { process } from "@/lib/data";

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section id="process" className="py-28 md:py-36 border-t border-line">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <span className="font-mono text-xs uppercase tracking-widest text-primary">
          How we work
        </span>
        <h2 className="font-display font-semibold text-4xl md:text-5xl mt-4 mb-20 max-w-xl">
          A five-stage build, start to launch.
        </h2>

        <div ref={ref} className="relative">
          {/* connecting line - desktop */}
          <div className="hidden md:block absolute top-6 left-0 right-0 h-px bg-line">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="h-full bg-primary origin-left"
            />
          </div>
          {/* connecting line - mobile */}
          <div className="md:hidden absolute top-0 bottom-0 left-6 w-px bg-line">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="w-full h-full bg-primary origin-top"
            />
          </div>

          <div className="grid md:grid-cols-5 gap-10 md:gap-6">
            {process.map((step, i) => (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative pl-16 md:pl-0"
              >
                <div className="md:mb-6 absolute md:relative top-0 left-0 w-12 h-12 rounded-full bg-ink border-2 border-primary flex items-center justify-center font-mono text-xs text-primary z-10">
                  {step.n}
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
