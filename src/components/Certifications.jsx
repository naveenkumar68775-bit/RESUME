import { HiOutlineBadgeCheck } from "react-icons/hi";
import useReveal from "../hooks/useReveal";
import { certifications } from "../data";

export default function Certifications() {
  const [ref, visible] = useReveal();

  return (
    <section id="certifications" className="px-6 py-24 md:py-32">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <h2 className="font-display text-3xl font-semibold text-[var(--color-ink)]">
          Certifications
        </h2>
        <div className="mt-4 h-px w-16 bg-[var(--color-amber)]" />

        {certifications.length === 0 ? (
          <div className="mt-10 max-w-xl rounded-lg border border-dashed border-[var(--color-border)] p-8 text-center">
            <HiOutlineBadgeCheck className="mx-auto text-3xl text-[var(--color-muted)]" />
            <p className="mt-3 text-sm text-[var(--color-muted)]">
              No certifications added yet. This section is ready — add your
              certifications to <code className="font-mono text-[var(--color-teal)]">src/data.js</code> and
              they'll appear here.
            </p>
          </div>
        ) : (
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((c) => (
              <div
                key={c.name}
                className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-6"
              >
                <h3 className="font-display text-base font-semibold text-[var(--color-ink)]">
                  {c.name}
                </h3>
                <p className="mt-1 text-sm text-[var(--color-muted)]">
                  {c.issuer} · {c.year}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
