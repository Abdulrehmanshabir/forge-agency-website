import WhyUs from "@/components/WhyUs";

export default function AboutPage() {
  return (
    <div className="relative pb-24">
      <div className="pt-16 md:pt-24 pb-12 px-6 md:px-10 max-w-7xl mx-auto">
        <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-6">About Us</h1>
        <p className="text-muted text-lg max-w-2xl">We are a team of passionate engineers, designers, and strategists dedicated to building exceptional digital experiences.</p>
      </div>
      <WhyUs />
    </div>
  );
}
