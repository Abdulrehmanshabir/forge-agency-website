import Process from "@/components/Process";

export default function ProcessPage() {
  return (
    <div className="relative pb-24">
      <div className="pt-16 md:pt-24 pb-12 px-6 md:px-10 max-w-7xl mx-auto">
        <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-6">Our Process</h1>
        <p className="text-muted text-lg max-w-2xl">We follow a proven, transparent process to ensure every project is delivered on time, on budget, and to the highest standards.</p>
      </div>
      <Process />
    </div>
  );
}
