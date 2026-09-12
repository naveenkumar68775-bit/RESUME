import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiHtml5,
  SiCss,
  SiGit,
  SiGithub,
  SiMysql,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import useReveal from "../hooks/useReveal";
import { skillGroups } from "../data";

const ICONS = {
  Java: FaJava,
  "JavaScript": SiJavascript,
  "React.js": SiReact,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  MongoDB: SiMongodb,
  SQL: SiMysql,
  HTML: SiHtml5,
  CSS: SiCss,
  Git: SiGit,
  GitHub: SiGithub,
};

export default function Skills() {
  const [ref, visible] = useReveal();

  return (
    <section id="skills" className="px-6 py-24 md:py-32 bg-[var(--color-surface)]/30">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <h2 className="font-display text-3xl font-semibold text-[var(--color-ink)]">
          Skills
        </h2>
        <div className="mt-4 h-px w-16 bg-[var(--color-amber)]" />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.label}
              className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-6"
            >
              <h3 className="text-sm text-[var(--color-muted)] font-medium mb-4">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => {
                  const Icon = ICONS[skill];
                  return (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-2 rounded-md border border-[var(--color-border)] bg-[var(--color-surface-2)] px-3 py-1.5 font-mono text-xs text-[var(--color-ink)] hover:border-[var(--color-amber)]/40 hover:text-[var(--color-amber)] transition-colors"
                    >
                      {Icon && <Icon className="text-sm" />}
                      {skill}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
