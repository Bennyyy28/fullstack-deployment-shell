import { site } from "@/content/site";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 px-6 py-4 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <a href="#" className="text-sm font-semibold tracking-tight text-white">
          {site.name}
        </a>

        <div className="flex flex-wrap items-center gap-4 text-sm text-white/60">
          <a href="#features" className="transition hover:text-white">
            Patterns
          </a>

          <a href="#stack" className="transition hover:text-white">
            Stack
          </a>

          <a href="#contact" className="transition hover:text-white">
            Demo
          </a>

          <a href="#deploy" className="transition hover:text-white">
            Deploy
          </a>
        </div>
      </nav>
    </header>
  );
}
