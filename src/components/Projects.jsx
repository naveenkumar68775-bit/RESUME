import { HiOutlineExternalLink } from "react-icons/hi";
import { FiGithub } from "react-icons/fi";
import useReveal from "../hooks/useReveal";
import { projects } from "../data";

function ProjectCard({ project, index }) {
  const [ref, visible] = useReveal();

  return (
    <article
      ref={ref}
      className={`rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] overflow-hidden transition-all duration-700 hover:border-[var(--color-amber)]/40 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: visible ? `${index * 80}ms` : "0ms" }}
    >
      <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--color-border)] bg-[var(--color-surface-2)]">
        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
        <span className="ml-3 font-mono text-xs text-[var(--color-muted)] truncate">
          {project.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
        </span>
      </div>

      <div className="p-6">
        <h3 className="font-display text-xl font-semibold text-[var(--color-ink)]">
          {project.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">
          {project.description}
        </p>

        <ul className="mt-4 space-y-1.5">
          {project.features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-sm text-[var(--color-ink)]">
              <span className="mt-2 h-1 w-1 rounded-full bg-[var(--color-amber)] shrink-0" />
              {f}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-md bg-[var(--color-surface-2)] px-2.5 py-1 font-mono text-[11px] text-[var(--color-teal)]"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 flex gap-3">
          <LinkButton href={project.github} icon={<FiGithub />} label="GitHub" />
          <LinkButton href={project.demo} icon={<HiOutlineExternalLink />} label="Live Demo" />
        </div>
      </div>
    </article>
  );
}

function LinkButton({ href, icon, label }) {
  if (!href) {
    return (
      <span
        title="Link coming soon"
        className="inline-flex items-center gap-1.5 rounded-md border border-[var(--color-border)] px-3 py-2 text-xs font-medium text-[var(--color-muted)]/50 cursor-not-allowed select-none"
      >
        {icon}
        {label}
      </span>
    );
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 rounded-md border border-[var(--color-border)] px-3 py-2 text-xs font-medium text-[var(--color-ink)] hover:border-[var(--color-amber)]/50 hover:text-[var(--color-amber)] transition-colors"
    >
      {icon}
      {label}
    </a>
  );
}

export default function Projects() {
  const [ref, visible] = useReveal();

  return (
    <section id="projects" className="px-6 py-24 md:py-32">
      <div className="max-w-6xl mx-auto">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="font-display text-3xl font-semibold text-[var(--color-ink)]">
            Projects
          </h2>
          <div className="mt-4 h-px w-16 bg-[var(--color-amber)]" />
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
