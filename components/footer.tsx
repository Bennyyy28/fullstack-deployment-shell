import { site } from "@/content/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-8 text-sm text-white/40">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {new Date().getFullYear()} {site.name}</p>

        <div className="flex gap-4">
          <a
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-white"
          >
            Next.js Docs
          </a>

          <a
            href="https://vercel.com/new"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-white"
          >
            Deploy
          </a>
        </div>
      </div>
    </footer>
  );
}
