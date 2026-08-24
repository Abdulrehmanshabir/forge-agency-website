"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import MagneticButton from "./MagneticButton";

export default function CTA() {
  return (
    <section className="py-28 md:py-36 border-t border-line relative overflow-hidden">
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary/10 blur-[140px]"
      />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display font-semibold text-4xl md:text-6xl leading-tight"
        >
          Have an idea? Let&apos;s turn it into reality.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-muted mt-6 max-w-lg mx-auto"
        >
          Tell us about your project — most proposals go out within 48 hours.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex justify-center"
        >
          <MagneticButton href="/contact">
            Start a Project <ArrowUpRight size={16} />
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
