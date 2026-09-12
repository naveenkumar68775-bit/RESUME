import { HiOutlineArrowDown, HiOutlineDownload, HiOutlineMail } from "react-icons/hi";
import Terminal from "./Terminal";
import { profile } from "../data";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center pt-28 pb-16 px-6 overflow-hidden"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-0 w-[36rem] h-[36rem] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--color-amber) 0%, transparent 70%)" }}
      />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center w-full">
        <div className="animate-rise">
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1.5 text-xs text-[var(--color-muted)] mb-6">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--color-teal)] opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-teal)]" />
            </span>
            Open to internship opportunities
          </div>

          <h1 className="font-display text-5xl sm:text-6xl font-semibold tracking-tight text-[var(--color-ink)]">
            {profile.shortName}
          </h1>
          <p className="font-display text-2xl sm:text-3xl text-[var(--color-amber)] mt-2">
            {profile.role}
          </p>
          <p className="mt-6 text-lg text-[var(--color-muted)] max-w-md leading-relaxed">
            {profile.tagline}
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-[var(--color-amber)] text-[var(--color-base)] px-5 py-3 text-sm font-semibold hover:bg-[var(--color-amber-dim)] transition-colors"
            >
              View Projects
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-md border border-[var(--color-border)] px-5 py-3 text-sm font-medium text-[var(--color-ink)] hover:border-[var(--color-amber)]/50 transition-colors"
            >
              <HiOutlineDownload className="text-base" />
              Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm font-medium text-[var(--color-muted)] hover:text-[var(--color-ink)] transition-colors"
            >
              <HiOutlineMail className="text-base" />
              Contact Me
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end animate-rise" style={{ animationDelay: "120ms" }}>
          <Terminal />
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About section"
        className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-[var(--color-muted)] hover:text-[var(--color-ink)] transition-colors"
      >
        <span className="text-xs">Scroll</span>
        <HiOutlineArrowDown className="animate-bounce" />
      </a>
    </section>
  );
}
