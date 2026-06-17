export type Project = {
  slug: string;
  title: string;
  description: string;
  category: string;
  status: string;
  stack: string[];
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    slug: "ai-workflow-system",
    title: "AI Workflow System",
    description:
      "A practical operating system for using AI agents to inspect, plan, build, validate, and explain software work.",
    category: "Agentic Development",
    status: "In progress",
    stack: ["Next.js", "TypeScript", "Agent Workflows"],
    github: "https://github.com/Bennyyy28",
  },
  {
    slug: "lead-capture-lab",
    title: "Lead Capture Lab",
    description:
      "A small full-stack lab for collecting, validating, and reviewing lead data inside the portfolio app.",
    category: "Full-stack Lab",
    status: "Live locally",
    stack: ["Server Actions", "TypeScript", "JSON Storage"],
  },
  {
    slug: "personal-portfolio-system",
    title: "Personal Portfolio System",
    description:
      "A premium black portfolio site used as a training ground for frontend polish, content structure, and agentic development.",
    category: "Portfolio",
    status: "Active",
    stack: ["Next.js", "Tailwind CSS", "Motion"],
    github: "https://github.com/Bennyyy28",
    demo: "/",
  },
];
