export type Feature = {
  title: string;
  description: string;
  tag: string;
};

export const features: Feature[] = [
  {
    tag: "UI",
    title: "Reusable Components",
    description:
      "Composable, typed React components styled with Tailwind CSS. Drop them into any page and keep a consistent design system.",
  },
  {
    tag: "Backend",
    title: "API Routes",
    description:
      "App Router route handlers under app/api accept requests, validate input, and return JSON — no separate server needed.",
  },
  {
    tag: "Forms",
    title: "Client Forms",
    description:
      "Client components manage form state with useState, run validation, show a loading state, and fetch your API routes.",
  },
  {
    tag: "Deploy",
    title: "Vercel Deployment",
    description:
      "Zero-config builds that ship to Vercel (or any Node host) the moment you push. Production-ready out of the box.",
  },
];
