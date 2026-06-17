import { site } from "@/content/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-8 text-sm text-white/40">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {new Date().getFullYear()} {site.name}</p>

        <div className="flex gap-4">
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-white"
          >
            GitHub
          </a>

          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-white"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
