import { ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Our Blog | Forge & Co",
  description: "Read our latest thoughts, insights, and news.",
};

const posts = [
  {
    title: "The Future of Web Development in 2026",
    category: "Engineering",
    date: "Aug 24, 2026",
    excerpt: "Explore the emerging trends in frontend architectures and AI-driven development workflows.",
  },
  {
    title: "Designing for Conversion: UI/UX Principles",
    category: "Design",
    date: "Aug 18, 2026",
    excerpt: "How small tweaks in user experience can dramatically improve your conversion rates.",
  },
  {
    title: "Scaling Next.js Applications for Enterprise",
    category: "Engineering",
    date: "Aug 12, 2026",
    excerpt: "Best practices for maintaining performance and reliability when your user base explodes.",
  },
];

export default function BlogPage() {
  return (
    <div className="pt-40 pb-20 px-6 md:px-10 max-w-7xl mx-auto min-h-[80svh]">
      <div className="mb-16">
        <span className="font-body text-xs uppercase tracking-widest text-primary">
          Our Blog
        </span>
        <h1 className="font-display font-semibold text-5xl md:text-7xl mt-4 tracking-tight">
          Latest <span className="text-primary">Insights</span>
        </h1>
        <p className="text-muted text-lg mt-6 max-w-xl">
          Thoughts on software engineering, design patterns, and growing digital businesses.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, i) => (
          <article 
            key={i} 
            className="group flex flex-col justify-between p-8 rounded-3xl border border-line bg-panel hover:bg-panel-2 transition-colors duration-300 relative overflow-hidden"
          >
            <div>
              <div className="flex items-center gap-3 mb-6 text-xs font-body uppercase tracking-wider">
                <span className="text-primary">{post.category}</span>
                <span className="text-muted">• {post.date}</span>
              </div>
              <h2 className="font-display text-2xl font-semibold mb-4 leading-tight group-hover:text-primary transition-colors">
                {post.title}
              </h2>
              <p className="text-muted text-sm leading-relaxed">
                {post.excerpt}
              </p>
            </div>
            
            <div className="mt-10 flex items-center gap-2 text-sm font-medium text-fg group-hover:text-primary transition-colors">
              Read article <ArrowUpRight size={16} />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
