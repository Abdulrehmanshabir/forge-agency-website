import Services from "@/components/Services";
import Technologies from "@/components/Technologies";

export default function ServicesPage() {
  return (
    <div className="relative pb-24">
      <div className="pt-16 md:pt-24 pb-12 px-6 md:px-10 max-w-7xl mx-auto">
        <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-6">Our Services</h1>
        <p className="text-muted text-lg max-w-2xl">We offer a full suite of digital services designed to help your business grow and scale efficiently.</p>
      </div>
      <Services />
      <Technologies />
    </div>
  );
}
