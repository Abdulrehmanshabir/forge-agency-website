"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, ArrowUpRight, Send } from "lucide-react";

type IconProps = React.SVGProps<SVGSVGElement> & { size?: number };

function LinkedInIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" {...props}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.11 20.45H3.56V9h3.55v11.45z" />
    </svg>
  );
}
function XIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" {...props}>
      <path d="M18.24 2h3.31l-7.23 8.26L23 22h-6.66l-5.22-6.83L4.9 22H1.58l7.73-8.84L1 2h6.83l4.72 6.24L18.24 2zm-1.16 18h1.83L7.02 3.9H5.06L17.08 20z" />
    </svg>
  );
}
function InstagramIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

const budgets = ["< $5k", "$5k – $15k", "$15k – $50k", "$50k+"];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [budget, setBudget] = useState(budgets[1]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());
    
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data, budget }),
      });
      
      if (res.ok) {
        setSubmitted(true);
      } else {
        console.error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <section id="contact" className="py-28 md:py-36 border-t border-line">
      <div className="mx-auto max-w-7xl px-6 md:px-10 grid lg:grid-cols-[0.9fr_1.1fr] gap-16">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-primary">
            Get in touch
          </span>
          <h2 className="font-display font-semibold text-4xl md:text-5xl mt-4 mb-8">
            Tell us about your project.
          </h2>
          <p className="text-muted leading-relaxed mb-10 max-w-md">
            Fill out the form, or reach us directly. We reply to every
            serious inquiry within one business day.
          </p>

          <div className="space-y-5">
            <a
              href="mailto:hello@forgeandco.dev"
              data-cursor-hover
              className="focus-ring flex items-center gap-3 text-fg hover:text-primary transition-colors"
            >
              <Mail size={18} className="text-primary" />
              hello@forgeandco.dev
            </a>
            <a
              href="https://wa.me/10000000000"
              data-cursor-hover
              className="focus-ring flex items-center gap-3 text-fg hover:text-primary transition-colors"
            >
              <Phone size={18} className="text-primary" />
              +1 (000) 000-0000 · WhatsApp
            </a>
          </div>

          <div className="flex gap-4 mt-10">
            {[LinkedInIcon, XIcon, InstagramIcon].map((Icon, i) => (
              <a
                key={i}
                href="/"
                data-cursor-hover
                aria-label="Social link"
                className="focus-ring w-11 h-11 rounded-full border border-line flex items-center justify-center text-muted hover:text-primary hover:border-primary-dim transition-colors"
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-line bg-panel p-6 md:p-10"
        >
          {submitted ? (
            <div className="h-full min-h-[380px] flex flex-col items-center justify-center text-center">
              <div className="w-14 h-14 rounded-full bg-primary/15 flex items-center justify-center mb-6">
                <Send size={22} className="text-primary" />
              </div>
              <h3 className="font-display font-semibold text-2xl mb-3">Message sent.</h3>
              <p className="text-muted max-w-sm">
                Thanks for reaching out — we&apos;ll get back to you within one
                business day.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="font-mono text-xs uppercase tracking-widest text-muted">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    type="text"
                    placeholder="Jane Doe"
                    className="focus-ring w-full mt-2 bg-transparent border-b border-line py-2.5 text-fg placeholder:text-muted/50 focus:border-primary outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="font-mono text-xs uppercase tracking-widest text-muted">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    required
                    type="email"
                    placeholder="jane@company.com"
                    className="focus-ring w-full mt-2 bg-transparent border-b border-line py-2.5 text-fg placeholder:text-muted/50 focus:border-primary outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="font-mono text-xs uppercase tracking-widest text-muted">
                  Company
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Company name"
                  className="focus-ring w-full mt-2 bg-transparent border-b border-line py-2.5 text-fg placeholder:text-muted/50 focus:border-primary outline-none transition-colors"
                />
              </div>

              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-muted">
                  Project budget
                </span>
                <div className="flex flex-wrap gap-2 mt-3">
                  {budgets.map((b) => (
                    <button
                      type="button"
                      key={b}
                      onClick={() => setBudget(b)}
                      className={`focus-ring font-mono text-xs px-4 py-2 rounded-full border transition-colors ${
                        budget === b
                          ? "border-primary text-primary bg-primary/10"
                          : "border-line text-muted hover:border-primary-dim"
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="font-mono text-xs uppercase tracking-widest text-muted">
                  Project details
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="What are you looking to build?"
                  className="focus-ring w-full mt-2 bg-transparent border-b border-line py-2.5 text-fg placeholder:text-muted/50 focus:border-primary outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                data-cursor-hover
                className="focus-ring w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary text-ink font-medium text-sm tracking-wide rounded-full px-7 py-3.5 hover:bg-fg transition-colors"
              >
                Send Message <ArrowUpRight size={16} />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
