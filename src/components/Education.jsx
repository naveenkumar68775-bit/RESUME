import { HiOutlineAcademicCap } from "react-icons/hi";
import useReveal from "../hooks/useReveal";
import { education } from "../data";

export default function Education() {
  const [ref, visible] = useReveal();

  return (
    <section id="education" className="px-6 py-24 md:py-32 bg-[var(--color-surface)]/30">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <h2 className="font-display text-3xl font-semibold text-[var(--color-ink)]">
          Education
        </h2>
        <div className="mt-4 h-px w-16 bg-[var(--color-amber)]" />

        <div className="mt-12 max-w-2xl relative pl-10">
          <div className="absolute left-[9px] top-2 bottom-2 w-px bg-[var(--color-border)]" />
          {education.map((edu) => (
            <div key={edu.school} className="relative pb-2">
              <span className="absolute -left-10 top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[var(--color-amber)]/15 border border-[var(--color-amber)]/40">
                <HiOutlineAcademicCap className="text-[var(--color-amber)] text-xs" />
              </span>
              <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
                <p className="font-mono text-xs text-[var(--color-teal)]">{edu.year}</p>
                <h3 className="mt-2 font-display text-lg font-semibold text-[var(--color-ink)]">
                  {edu.school}
                </h3>
                <p className="mt-1 text-sm text-[var(--color-muted)]">{edu.degree}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
