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
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-ink/85 backdrop-blur-md border-b border-line" : "bg-transparent"
        }`}
      >
        <nav className="mx-auto max-w-7xl flex items-center justify-between px-6 md:px-10 h-20">
          <a href="/" data-cursor-hover className="font-display font-semibold text-lg tracking-tight">
            Forge<span className="text-primary">&amp;Co</span>
          </a>

          <ul className="hidden md:flex items-center gap-9 font-mono text-[13px] uppercase tracking-wider text-muted">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  data-cursor-hover
                  className="focus-ring hover:text-primary transition-colors relative py-1"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <MagneticButton href="/contact">
              Start a Project <ArrowUpRight size={16} />
            </MagneticButton>
          </div>

          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle />
            <button
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className="focus-ring p-2 -mr-2 text-fg"
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
