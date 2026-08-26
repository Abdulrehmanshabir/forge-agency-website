
export default function Footer() {
  return (
    <footer className="border-t border-line py-12">
      <div className="mx-auto max-w-7xl px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <a href="/" data-cursor-hover className="flex items-center gap-2 font-display font-semibold text-lg tracking-tight">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-ink">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
          </div>
          Forge<span className="text-primary">&amp;Co</span>
        </a>

        <ul className="flex flex-wrap items-center justify-center gap-8 font-body text-sm font-medium text-muted">
          <li><a href="/" className="hover:text-primary transition-colors">Home</a></li>
          <li><a href="/about" className="hover:text-primary transition-colors">About Us</a></li>
          <li><a href="/services" className="hover:text-primary transition-colors">Our Service</a></li>
          <li><a href="/blog" className="hover:text-primary transition-colors">Our Blog</a></li>
          <li><a href="/contact" className="hover:text-primary transition-colors">Contact</a></li>
        </ul>

        <p className="font-body text-sm text-muted">
          © {new Date().getFullYear()} Forge &amp; Co. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
