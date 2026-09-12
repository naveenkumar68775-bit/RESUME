import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { profile } from "../data";

export default function Footer() {
  return (
    <footer className="px-6 py-10 border-t border-[var(--color-border)]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-sm text-[var(--color-muted)]">
          <span className="text-[var(--color-amber)]">&gt;</span> {profile.shortName}
        </p>

        <div className="flex items-center gap-5 text-[var(--color-muted)]">
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="hover:text-[var(--color-amber)] transition-colors"
          >
            <FiMail />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-[var(--color-amber)] transition-colors"
          >
            <FiLinkedin />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-[var(--color-amber)] transition-colors"
          >
            <FiGithub />
          </a>
        </div>

        <p className="text-xs text-[var(--color-muted)]">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
