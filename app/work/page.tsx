import Portfolio from "@/components/Portfolio";

export default function WorkPage() {
  return (
    <div className="relative pb-24">
      <div className="pt-16 md:pt-24 pb-12 px-6 md:px-10 max-w-7xl mx-auto">
        <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-6">Our Work</h1>
        <p className="text-muted text-lg max-w-2xl">Explore some of our recent projects and see how we've helped businesses achieve their digital goals.</p>
      </div>
      <Portfolio />
    </div>
  );
}
