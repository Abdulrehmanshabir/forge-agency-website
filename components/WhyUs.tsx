"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { whyUs, stats } from "@/lib/data";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref} className="font-display font-semibold text-4xl md:text-5xl text-fg">
      {display}
      {suffix}
    </span>
  );
}

export default function WhyUs() {
  return (
    <section id="about" className="py-28 md:py-36 border-t border-line">
      <div className="mx-auto max-w-7xl px-6 md:px-10 grid lg:grid-cols-2 gap-16">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-primary">
            Why teams choose us
          </span>
          <h2 className="font-display font-semibold text-4xl md:text-5xl mt-4 mb-10 max-w-lg">
            We build like it&apos;s our own product on the line.
          </h2>

          <div className="grid grid-cols-2 gap-8 max-w-md">
            {stats.map((s) => (
              <div key={s.label}>
                <Counter value={s.value} suffix={s.suffix} />
                <p className="text-sm text-muted mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col divide-y divide-line border-t border-line">
          {whyUs.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="py-6 flex items-start gap-6"
            >
              <span className="font-mono text-xs text-muted mt-1 w-8 shrink-0">0{i + 1}</span>
              <div>
                <h3 className="font-display font-medium text-lg">{item.title}</h3>
                <p className="text-sm text-muted mt-1.5 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
