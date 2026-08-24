"use client";

import { motion } from "framer-motion";
import { services } from "@/lib/data";

export default function Services() {
  return (
    <section id="services" className="relative py-28 md:py-36 border-t border-line">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-primary">
              What we do
            </span>
            <h2 className="font-display font-semibold text-4xl md:text-5xl mt-4 max-w-xl">
              Every discipline a growing product needs.
            </h2>
          </div>
          <p className="text-muted max-w-sm">
            From first line of code to last dollar of ad spend — one team,
            one roadmap, no handoffs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line rounded-2xl overflow-hidden border border-line">
          {services.map((s, i) => (
            <motion.div
              key={s.code}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              data-cursor-hover
              className="group relative bg-panel min-h-[320px] flex flex-col justify-between hover:bg-panel-2 transition-colors overflow-hidden"
            >
              {s.image && (
                <div className="absolute inset-0 z-0">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    className="w-full h-full object-cover opacity-40 transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-panel via-panel/80 to-panel/20" />
                </div>
              )}
              <div className="relative z-10 flex flex-col justify-between h-full p-8">
                <div className="flex items-start justify-between">
                  <span className="font-mono text-xs text-primary">{s.code}</span>
                  <span className="font-mono text-xs text-muted">0{i + 1}</span>
                </div>
                <div>
                  <h3 className="font-display font-semibold text-xl mt-8 mb-3 group-hover:text-primary transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-sm text-fg/80 leading-relaxed mb-5">{s.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[10px] uppercase tracking-wider text-muted border border-line rounded-full px-2.5 py-1 bg-panel/50 backdrop-blur-sm"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 z-20"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
