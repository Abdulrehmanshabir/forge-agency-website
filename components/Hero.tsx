"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import MagneticButton from "./MagneticButton";


export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden pt-32 pb-16 md:pt-40">
      {/* Background with Grid and Glowing Orbs */}
      <div className="absolute inset-0 bg-grid pointer-events-none opacity-50 mask-image:linear-gradient(to_bottom,white,transparent)" />
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="bg-glow" />
      </div>

      <div className="relative mx-auto max-w-5xl w-full px-6 flex flex-col items-center text-center z-10">
        
        {/* Rating/Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 bg-panel-2/50 backdrop-blur-md border border-line rounded-full px-4 py-1.5 mb-8"
        >
          <div className="flex -space-x-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="w-6 h-6 rounded-full bg-primary/20 border-2 border-ink flex items-center justify-center text-[8px]">👤</div>
            ))}
          </div>
          <div className="flex items-center gap-1">
            <span className="text-amber text-sm">★★★★★</span>
            <span className="text-xs text-muted font-medium ml-1">125k+ Customer</span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display font-semibold text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.1] max-w-4xl"
        >
          Best Software Solution To <br />
          The Drive <span className="text-primary">Business Forward</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-base md:text-lg text-muted max-w-2xl"
        >
          High-Performance Software Designed To The Streamline Operation Boost Productivity
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-6"
        >
          <MagneticButton href="/contact">
            Book A Free Demo <ArrowUpRight size={16} />
          </MagneticButton>
          
          <button className="group flex items-center gap-3 text-fg hover:text-primary transition-colors focus-ring rounded-full pr-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-ink transition-colors">
              <svg width="14" height="16" viewBox="0 0 14 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 8L0.5 15.7942L0.5 0.205771L14 8Z" />
              </svg>
            </div>
            <span className="font-medium">Play Video</span>
          </button>
        </motion.div>

        {/* Video Thumbnail */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 w-full max-w-4xl aspect-[16/9] rounded-3xl border border-line bg-panel overflow-hidden relative shadow-[0_0_50px_rgba(6,182,212,0.15)] group"
        >
          {/* Mock image placeholder */}
          <div className="absolute inset-0 bg-panel-2 flex items-center justify-center">
            <div className="w-full h-full bg-gradient-to-tr from-panel to-panel-2 opacity-50" />
            <div className="absolute w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center backdrop-blur-sm border border-primary/30 group-hover:scale-110 transition-transform cursor-pointer">
              <svg width="24" height="28" viewBox="0 0 14 16" fill="currentColor" className="text-primary ml-1">
                <path d="M14 8L0.5 15.7942L0.5 0.205771L14 8Z" />
              </svg>
            </div>
          </div>
        </motion.div>

        {/* Brand Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-20 w-full flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-50 grayscale"
        >
          <span className="font-display text-xl font-bold tracking-tight">airbnb</span>
          <span className="font-display text-xl font-bold tracking-tight">amazon</span>
          <span className="font-display text-xl font-bold tracking-tight">FedEx</span>
          <span className="font-display text-xl font-bold tracking-tight">Google</span>
          <span className="font-display text-xl font-bold tracking-tight">Microsoft</span>
        </motion.div>
        
      </div>
    </section>
  );
}
