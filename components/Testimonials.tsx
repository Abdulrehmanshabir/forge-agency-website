"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="py-28 md:py-36 border-t border-line">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <span className="font-mono text-xs uppercase tracking-widest text-primary">
          Client voices
        </span>
        <h2 className="font-display font-semibold text-4xl md:text-5xl mt-4 mb-16 max-w-xl">
          Don&apos;t take our word for it.
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-line bg-panel p-8 flex flex-col justify-between min-h-[260px]"
            >
              <Quote className="text-primary mb-6" size={28} />
              <p className="text-fg leading-relaxed mb-8">&ldquo;{t.quote}&rdquo;</p>
              <div>
                <p className="font-display font-medium">{t.name}</p>
                <p className="font-mono text-xs text-muted mt-1">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
