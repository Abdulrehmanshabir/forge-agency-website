import { nav } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-line py-12">
      <div className="mx-auto max-w-7xl px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <span className="font-display font-semibold text-lg">
          Forge<span className="text-primary">&amp;Co</span>
        </span>

        <ul className="flex flex-wrap items-center justify-center gap-6 font-mono text-xs uppercase tracking-wider text-muted">
          {nav.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="focus-ring hover:text-primary transition-colors">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <p className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} Forge &amp; Co. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
