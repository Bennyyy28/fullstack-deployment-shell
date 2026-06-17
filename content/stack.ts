export type StackGroup = {
  title: string;
  description: string;
  tools: string[];
};

export const stack: StackGroup[] = [
  {
    title: "Frontend",
    description: "The parts users see and interact with.",
    tools: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Backend",
    description: "The server-side logic that powers applications.",
    tools: ["Node.js", "APIs", "Databases", "Authentication"],
  },
  {
    title: "AI & Automation",
    description: "Systems that use AI to automate workflows and decisions.",
    tools: [
      "OpenAI API",
      "Prompt Engineering",
      "AI Agents",
      "Workflow Automation",
    ],
  },
];
