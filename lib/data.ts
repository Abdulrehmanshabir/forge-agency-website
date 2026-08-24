export const nav = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Process", href: "/process" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const services = [
  {
    code: "SD",
    title: "Software Development",
    desc: "Custom platforms and internal tools built to handle real business logic, not just demos.",
    tags: ["Node.js", ".NET", "Python"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=60&w=800",
  },
  {
    code: "WD",
    title: "Web Development",
    desc: "Fast, SEO-ready websites and web apps that convert visitors into qualified leads.",
    tags: ["Next.js", "React", "TypeScript"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=60&w=800",
  },
  {
    code: "MA",
    title: "Mobile App Development",
    desc: "Native-feel iOS and Android apps from a single codebase, shipped to both stores.",
    tags: ["React Native", "Flutter"],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=60&w=800",
  },
  {
    code: "DM",
    title: "Digital Marketing",
    desc: "SEO, paid campaigns and content systems that turn traffic into pipeline.",
    tags: ["SEO", "Meta Ads", "Analytics"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=60&w=800",
  },
  {
    code: "UX",
    title: "UI/UX Design",
    desc: "Interfaces designed around how your users actually think and decide.",
    tags: ["Figma", "Design Systems"],
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=60&w=800",
  },
  {
    code: "EC",
    title: "E-Commerce Solutions",
    desc: "Storefronts built to sell — from catalog to checkout to fulfillment.",
    tags: ["Shopify", "Headless CMS"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=60&w=800",
  },
  {
    code: "AI",
    title: "AI & Automation",
    desc: "Workflow automation and applied AI features that remove manual work.",
    tags: ["LLM APIs", "RPA"],
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=60&w=800",
  },
];

export const whyUs = [
  { title: "Modern technology", desc: "We ship on stacks built for 2026, not 2016." },
  { title: "Business-focused solutions", desc: "Every build is judged by the outcome it creates, not the code it contains." },
  { title: "Fast development", desc: "Structured sprints mean you see working software in weeks, not quarters." },
  { title: "Scalable architecture", desc: "What we build for your MVP still holds at 100x the traffic." },
  { title: "Dedicated support", desc: "A named engineer stays on your project after launch, not a ticket queue." },
];

export const portfolio = [
  {
    slug: "northbridge-capital",
    title: "Northbridge Capital",
    category: "FinTech Platform",
    result: "37% faster loan approvals",
    tags: ["Next.js", "PostgreSQL", "AWS"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=60&w=800",
    content: "We completely rebuilt the core loan origination platform for Northbridge Capital to support their rapid scaling. The new system integrates with multiple financial APIs to pull data in real-time.",
    challenge: "Their legacy system was monolithic and prone to downtime during high-traffic periods, causing lost deals and frustrated loan officers.",
    solution: "Implemented a robust, scalable microservices architecture on AWS. Utilizing Next.js for the frontend ensured a seamless, snappy user experience."
  },
  {
    slug: "loomvale-retail",
    title: "Loomvale Retail",
    category: "E-Commerce",
    result: "2.4x conversion rate",
    tags: ["Shopify", "Headless", "Klaviyo"],
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=60&w=800",
    content: "Loomvale needed a modern e-commerce experience that felt premium while loading instantly. We delivered a headless Shopify setup that completely transformed their online presence.",
    challenge: "Slow load times on their traditional Shopify theme were causing high bounce rates, especially on mobile devices.",
    solution: "Decoupled the frontend using a headless Next.js approach. This allowed for instant page transitions and highly customizable UI components."
  },
  {
    slug: "ferro-logistics",
    title: "Ferro Logistics",
    category: "Internal Tooling",
    result: "18 hrs/week saved per team",
    tags: [".NET", "React", "Azure"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=60&w=800",
    content: "Ferro Logistics relies on complex routing and scheduling. We built a custom internal dashboard that centralizes operations and automates daily reporting.",
    challenge: "Dispatchers were managing fleets using a combination of spreadsheets and legacy software, leading to communication gaps.",
    solution: "Developed a real-time tracking and dispatch dashboard using React and .NET, deployed securely on Azure."
  },
  {
    slug: "halcyon-health",
    title: "Halcyon Health",
    category: "Mobile App",
    result: "50K+ downloads in 90 days",
    tags: ["React Native", "Firebase"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=60&w=800",
    content: "Halcyon Health aimed to make mental health resources more accessible. We partnered with them to design and develop a mobile app from the ground up.",
    challenge: "They needed a cross-platform solution that felt native on both iOS and Android, with stringent data privacy requirements.",
    solution: "Utilized React Native for a unified codebase and Firebase for secure, real-time data synchronization."
  },
  {
    slug: "arcline-studio",
    title: "Arcline Studio",
    category: "Brand + Web",
    result: "3x organic search traffic",
    tags: ["SEO", "Next.js", "CMS"],
    image: "https://images.unsplash.com/photo-1513346940221-6f673d962e97?auto=format&fit=crop&q=60&w=800",
    content: "Arcline Studio is an architecture firm that needed a digital portfolio matching the quality of their physical work. We redesigned their brand and website.",
    challenge: "Their old website was visually outdated and struggled to rank for key local search terms.",
    solution: "Created a visually stunning, image-heavy Next.js site powered by a headless CMS, optimized for technical SEO."
  },
  {
    slug: "vantage-robotics",
    title: "Vantage Robotics",
    category: "AI Automation",
    result: "Cut manual QA time by 70%",
    tags: ["Python", "LLM API", "RPA"],
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=60&w=800",
    content: "Vantage Robotics was scaling fast but getting bottlenecked in quality assurance. We integrated AI automation to review and flag issues.",
    challenge: "Manual QA processes were taking up too many engineering hours, slowing down product release cycles.",
    solution: "Built a Python-based automation pipeline utilizing LLM APIs and RPA to automatically categorize and test edge cases."
  },
];

export const process = [
  { n: "01", title: "Discover", desc: "We audit your goals, users and constraints before writing a line of code." },
  { n: "02", title: "Strategy", desc: "A scoped roadmap with milestones, timelines and clear success metrics." },
  { n: "03", title: "Design", desc: "Wireframes to high-fidelity UI, validated with you at every checkpoint." },
  { n: "04", title: "Develop", desc: "Agile sprints, weekly demos, and a codebase built to be maintained." },
  { n: "05", title: "Launch", desc: "QA, deployment, and support that doesn't disappear the day we ship." },
];

export const technologies = [
  "React", "Next.js", "TypeScript", "Node.js", ".NET", "Python",
  "Firebase", "PostgreSQL", "AWS", "Docker", "Tailwind CSS", "GraphQL",
];

export const testimonials = [
  {
    quote: "They didn't just build what we asked for — they questioned our assumptions and shipped something better.",
    name: "Amina Rashid",
    role: "COO, Northbridge Capital",
  },
  {
    quote: "Our conversion rate more than doubled within the first quarter after the relaunch.",
    name: "Daniel Cho",
    role: "Founder, Loomvale Retail",
  },
  {
    quote: "Communication was clear every step. No surprises, no scope creep, just steady delivery.",
    name: "Priya Nair",
    role: "Head of Product, Ferro Logistics",
  },
];

export const stats = [
  { value: 120, suffix: "+", label: "Projects delivered" },
  { value: 98, suffix: "%", label: "Client retention" },
  { value: 45, suffix: "+", label: "Team engineers & designers" },
  { value: 6, suffix: "", label: "Years in business" },
];

export const faqs = [
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary depending on complexity. A standard web application MVP takes 8-12 weeks, while larger enterprise software can take 4-6 months."
  },
  {
    question: "Do you offer post-launch support?",
    answer: "Yes, we provide ongoing maintenance and support contracts. We ensure your application stays updated, secure, and running smoothly long after launch."
  },
  {
    question: "What is your pricing model?",
    answer: "We typically work on fixed-price contracts for well-defined scopes, or time-and-materials for ongoing, evolving projects. We'll recommend the best approach during our discovery phase."
  },
  {
    question: "Will I own the source code?",
    answer: "Absolutely. Once the project is fully paid for, all intellectual property and source code are completely transferred to you."
  }
];
