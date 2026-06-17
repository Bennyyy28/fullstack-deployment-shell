# Full-Stack Deployment Shell

A reusable [Next.js](https://nextjs.org) (App Router) starter for shipping
frontend pages, API routes, forms, and Vercel deployments. No databases, auth,
or external services — clone it, edit the content files, and deploy.

## What it is

A clean, minimal full-stack starting point. Instead of being tied to one
project, it gives you the structural patterns you reuse on almost every
Next.js app, with the project-specific content stripped out so you can drop
your own in.

## What it demonstrates

- **App Router layout/page structure** — `app/layout.tsx` and `app/page.tsx`
- **Reusable components** — `components/` (e.g. `section-header.tsx`, `feature-card.tsx`)
- **Data-driven content** — `content/` (`features.ts`, `stack.ts`, `site.ts`)
- **Client-side form state** — `components/contact.tsx` (`useState`, validation, loading, fetch)
- **API route POST handling** — `app/api/contact/route.ts`
- **A health check endpoint** — `app/api/health/route.ts`

## Local setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result. Edit
content under `content/` and components under `components/`.

## Available scripts

| Script          | What it does                                  |
| --------------- | --------------------------------------------- |
| `npm run dev`   | Start the dev server (Webpack) on port 3000   |
| `npm run build` | Production build — run this to catch errors   |
| `npm run start` | Serve the production build                    |
| `npm run lint`  | Run ESLint                                     |

## Routes

| Route          | Method | Purpose                                                   |
| -------------- | ------ | --------------------------------------------------------- |
| `/`            | GET    | Home page composed of the section components              |
| `/api/contact` | POST   | Validates a contact form payload and returns a JSON reply |
| `/api/health`  | GET    | Returns app status, timestamp, and environment as JSON    |

## Deploying to GitHub + Vercel

1. Create a new repo on GitHub and push this project:
   ```bash
   git remote add origin https://github.com/<you>/<repo>.git
   git push -u origin main
   ```
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Vercel auto-detects the Next.js preset — no extra config needed.
4. Add any environment variables (see below) in the Vercel project settings.
5. Click **Deploy**. Run `npm run build` locally first to catch issues early.

## Reusing this for a new project

1. Clone or use this repo as a template.
2. Update `package.json` `"name"` to your project.
3. Edit the content files in `content/` (`site.ts`, `features.ts`, `stack.ts`).
4. Adjust or replace components in `components/` to match your design.
5. Keep the `content/ → components/ → app/page.tsx` data flow.
6. Add your own API routes under `app/api/` following the `contact` pattern.

## Environment variables

- Copy `.env.example` to `.env.local` and fill in real values.
- `.env.local` is gitignored — never commit real secrets.
- Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser, so only
  use that prefix for non-sensitive, public values.
- Variables without the prefix (e.g. `API_SECRET_KEY`) stay server-side only.

## What is intentionally not included

This is a deliberately minimal shell. The following are left out so you can add
whatever fits your project:

- **Authentication** — no login/session handling
- **Database** — no ORM, schema, or persistence
- **Payments** — no Stripe or billing
- **External email service** — `/api/contact` validates and returns a stub
  response; wiring it to a real provider is up to you
