<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Portfolio Project Agent Instructions

This is Benny Goldberg's personal portfolio site and first full-stack/agentic development training project.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Motion for React
- npm
- Webpack dev mode

## Commands

Run commands from the project root:

```bash
npm run dev
npm run lint
npm run build
```

The dev script intentionally uses Webpack:

```json
"dev": "next dev --webpack"
```

Do not switch back to Turbopack unless Benny specifically asks.

## Architecture

Use this structure:

```text
app/
  page.tsx

components/
  hero.tsx
  featured-projects.tsx
  project-card.tsx

content/
  projects.ts
```

## Architecture Rules

- `app/page.tsx` should compose page sections.
- Reusable UI belongs in `components/`.
- Static data belongs in `content/`.
- Only client components that use browser behavior or Motion should include `"use client"`.
- Use `motion/react`, not `framer-motion`.
- Do not redesign existing sections unless asked.
- Preserve the black, premium, minimal visual style.
- Prefer small, understandable changes.

## Current Data Flow

Project data flows like this:

```text
content/projects.ts
  → components/featured-projects.tsx
  → components/project-card.tsx
  → app/page.tsx
```

For similar features, prefer the same pattern:

```text
content/data-file.ts
  → components/item-card.tsx
  → components/section.tsx
  → app/page.tsx
```

## Agent Behavior

When working in this repo:

1. Inspect relevant files before editing.
2. Follow existing patterns.
3. Keep changes scoped.
4. Do not add packages unless necessary.
5. Validate with `npm run lint` and `npm run build`.
6. Explain changed files clearly for Benny.

## Benny Learning Context

Benny has limited manual coding experience and is learning to supervise agentic development.

After making changes, explain:

- what files changed
- why they changed
- how the code path works
- how to validate locally
- what could break
- one short check question for Benny
