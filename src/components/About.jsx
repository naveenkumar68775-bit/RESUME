import useReveal from "../hooks/useReveal";
import { about } from "../data";

export default function About() {
  const [ref, visible] = useReveal();

  return (
    <section id="about" className="px-6 py-24 md:py-32">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto grid md:grid-cols-[0.7fr_1.3fr] gap-10 md:gap-16 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div>
          <h2 className="font-display text-3xl font-semibold text-[var(--color-ink)]">
            About
          </h2>
          <div className="mt-4 h-px w-16 bg-[var(--color-amber)]" />
        </div>

        <div>
          <p className="text-lg leading-relaxed text-[var(--color-muted)] max-w-2xl whitespace-pre-line">
            {about}
          </p>

          <div className="mt-8 flex flex-wrap gap-3 font-mono text-xs text-[var(--color-teal)]">
            <span className="rounded-md border border-[var(--color-border)] px-3 py-1.5">
              B.Tech · Information Technology
            </span>
            <span className="rounded-md border border-[var(--color-border)] px-3 py-1.5">
              MERN Stack
            </span>
            <span className="rounded-md border border-[var(--color-border)] px-3 py-1.5">
              Java
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
