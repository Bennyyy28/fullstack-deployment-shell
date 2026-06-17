export type StackGroup = {
  title: string;
  description: string;
  tools: string[];
};

export const stack: StackGroup[] = [
  {
    title: "Frontend",
    description: "The pages and UI users see and interact with.",
    tools: ["React 19", "Next.js App Router", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "API & Server",
    description: "Server-side logic handled inside the same app.",
    tools: ["Route Handlers", "Server Components", "JSON APIs"],
  },
  {
    title: "Deployment",
    description: "Build and ship with zero configuration.",
    tools: ["Vercel", "Node.js", "npm", "CI Builds"],
  },
];
