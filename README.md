# Full-Stack Deployment Shell

A reusable [Next.js](https://nextjs.org) (App Router) starter for shipping
frontend pages, API routes, forms, and Vercel deployments. No databases, auth,
or external services — clone it, edit the content files, and deploy.

## What it demonstrates

- **App Router layout/page structure** — `app/layout.tsx` and `app/page.tsx`
- **Reusable components** — `components/` (e.g. `section-header.tsx`, `feature-card.tsx`)
- **Data-driven content** — `content/` (`features.ts`, `stack.ts`, `site.ts`)
- **Client-side form state** — `components/contact.tsx` (`useState`, validation, loading, fetch)
- **API route POST handling** — `app/api/contact/route.ts`

## Getting Started

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result. Edit
content under `content/` and components under `components/`.

## Validate

```bash
npm run lint
npm run build
```

## Deploy on Vercel

Push to Git, import the repo on [Vercel](https://vercel.com/new) (the Next.js
preset is auto-detected), and ship. Run `npm run build` locally first to catch
issues early.
