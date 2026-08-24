import Contact from "@/components/Contact";

export default function ContactPage() {
  return (
    <div className="relative pb-24">
      <div className="pt-16 md:pt-24 pb-12 px-6 md:px-10 max-w-7xl mx-auto">
        <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-6">Contact Us</h1>
        <p className="text-muted text-lg max-w-2xl">Ready to start your next project? Get in touch with our team and let's build something great together.</p>
      </div>
      <Contact />
    </div>
  );
}
