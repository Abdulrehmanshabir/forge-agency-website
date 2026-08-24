import { notFound } from "next/navigation";
import { portfolio } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";

export async function generateStaticParams() {
  return portfolio.map((p) => ({
    slug: p.slug,
  }));
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const project = portfolio.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="pt-32 pb-24 min-h-screen">
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <header className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-xs uppercase tracking-widest text-primary">
              {project.category}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-line" />
            <span className="font-mono text-xs uppercase tracking-widest text-muted">
              {project.result}
            </span>
          </div>
          <h1 className="font-display font-semibold text-4xl md:text-6xl mb-6">
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span
                key={t}
                className="font-mono text-[10px] uppercase tracking-wider text-muted border border-line rounded-full px-2.5 py-1"
              >
                {t}
              </span>
            ))}
          </div>
        </header>

        {project.image && (
          <div className="w-full aspect-video rounded-2xl overflow-hidden bg-panel-2 mb-16 border border-line">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div className="prose prose-invert dark:prose-invert prose-lg max-w-none">
          <p className="text-xl leading-relaxed text-fg mb-12">
            {project.content}
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-panel border border-line rounded-2xl p-8">
              <h3 className="font-display font-semibold text-2xl mb-4 text-fg">The Challenge</h3>
              <p className="text-muted leading-relaxed">{project.challenge}</p>
            </div>
            <div className="bg-panel border border-line rounded-2xl p-8">
              <h3 className="font-display font-semibold text-2xl mb-4 text-fg">The Solution</h3>
              <p className="text-muted leading-relaxed">{project.solution}</p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-16 border-t border-line text-center">
          <h2 className="font-display font-semibold text-3xl mb-6">Ready to build something similar?</h2>
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-primary text-ink font-medium text-sm tracking-wide rounded-full px-7 py-3.5 hover:bg-fg transition-colors"
          >
            Start a Project <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </article>
  );
}
