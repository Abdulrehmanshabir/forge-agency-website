"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { nav } from "@/lib/data";
import MagneticButton from "./MagneticButton";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  
  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="focus-ring w-10 h-10 rounded-full border border-line flex items-center justify-center text-muted hover:text-fg hover:border-fg transition-colors"
    >
      <Sun size={18} className="hidden dark:block" />
      <Moon size={18} className="block dark:hidden" />
    </button>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-6 inset-x-0 z-50 flex justify-center px-6 transition-all duration-300`}
      >
        <nav className="w-full max-w-5xl flex items-center justify-between px-6 py-3 rounded-full bg-panel/70 backdrop-blur-md border border-line shadow-[0_0_20px_rgba(6,182,212,0.05)]">
          {/* Logo */}
          <a href="/" data-cursor-hover className="flex items-center gap-2 font-display font-semibold text-lg tracking-tight">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-ink">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
            </div>
            TECHNEO
          </a>

          {/* Center Links */}
          <ul className="hidden md:flex items-center gap-8 font-body text-sm font-medium text-muted">
            <li><a href="/" className="hover:text-primary transition-colors text-fg">Home</a></li>
            <li><a href="/about" className="hover:text-primary transition-colors">About Us</a></li>
            <li><a href="/services" className="hover:text-primary transition-colors">Our Service</a></li>
            <li><a href="/blog" className="hover:text-primary transition-colors">Our Blog</a></li>
            <li><a href="/contact" className="hover:text-primary transition-colors">Contact</a></li>
          </ul>

          {/* Right section */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-3">
              <a href="/contact" className="focus-ring inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-medium text-sm tracking-wide bg-panel-2 text-fg hover:bg-line transition-colors border border-line">
                Get Started <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center text-ink"><ArrowUpRight size={12} /></div>
              </a>
              <button className="w-10 h-10 rounded-full flex items-center justify-center text-fg hover:text-primary hover:bg-panel-2 transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
              </button>
            </div>
            
            <button
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className="focus-ring p-2 -mr-2 text-fg md:hidden"
            >
              <Menu size={26} />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-ink md:hidden"
          >
            <div className="flex items-center justify-between px-6 h-20">
              <span className="font-display font-semibold text-lg">
                Forge<span className="text-primary">&amp;Co</span>
              </span>
              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="focus-ring p-2 -mr-2"
              >
                <X size={26} />
              </button>
            </div>
            <motion.ul
              initial="closed"
              animate="open"
              variants={{
                open: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
              }}
              className="flex flex-col gap-2 px-6 mt-6"
            >
              {nav.map((item, i) => (
                <motion.li
                  key={item.href}
                  variants={{
                    closed: { opacity: 0, y: 20 },
                    open: { opacity: 1, y: 0 },
                  }}
                >
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-4xl font-medium py-3 flex items-center justify-between border-b border-line"
                  >
                    <span>{item.label}</span>
                    <span className="font-mono text-sm text-muted">0{i + 1}</span>
                  </a>
                </motion.li>
              ))}
            </motion.ul>
            <div className="px-6 mt-10">
              <MagneticButton href="/contact" onClick={() => setOpen(false)} className="w-full justify-center">
                Start a Project <ArrowUpRight size={16} />
              </MagneticButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
