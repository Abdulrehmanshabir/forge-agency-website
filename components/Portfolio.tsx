"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { portfolio } from "@/lib/data";

export default function Portfolio() {
  return (
    <section id="work" className="py-28 md:py-36 border-t border-line">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-primary">
              Selected work
            </span>
            <h2 className="font-display font-semibold text-4xl md:text-5xl mt-4 max-w-xl">
              Real projects. Measurable outcomes.
            </h2>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {portfolio.map((p, i) => (
            <motion.a
              href={`/work/${p.slug}`}
              data-cursor-hover
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
              className="group relative rounded-2xl border border-line overflow-hidden bg-panel"
            >
              <div className="relative h-56 overflow-hidden bg-panel-2">
                {p.image ? (
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                ) : (
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-grid opacity-40 transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                )}
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-panel via-transparent to-transparent"
                />
                <div className="absolute top-5 left-6 font-mono text-xs uppercase tracking-widest text-primary">
                  {p.category}
                </div>
                <ArrowUpRight
                  className="absolute top-5 right-6 text-muted group-hover:text-primary group-hover:rotate-45 transition-all duration-300"
                  size={20}
                />
              </div>
              <div className="p-6">
                <h3 className="font-display font-semibold text-xl">{p.title}</h3>
                <p className="text-sm text-primary mt-1.5 font-medium">{p.result}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[10px] uppercase tracking-wider text-muted border border-line rounded-full px-2.5 py-1"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
