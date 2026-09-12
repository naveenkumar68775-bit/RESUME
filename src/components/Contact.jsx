import { useState } from "react";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import useReveal from "../hooks/useReveal";
import { profile } from "../data";

export default function Contact() {
  const [ref, visible] = useReveal();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="px-6 py-24 md:py-32 bg-[var(--color-surface)]/30">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto grid md:grid-cols-[0.8fr_1.2fr] gap-14 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div>
          <h2 className="font-display text-3xl font-semibold text-[var(--color-ink)]">
            Contact
          </h2>
          <div className="mt-4 h-px w-16 bg-[var(--color-amber)]" />
          <p className="mt-6 text-[var(--color-muted)] leading-relaxed max-w-sm">
            Have an opportunity, a project, or just want to say hello? Reach
            out — I usually reply within a day.
          </p>

          <div className="mt-8 flex flex-col gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-3 text-sm text-[var(--color-ink)] hover:text-[var(--color-amber)] transition-colors"
            >
              <HiOutlineMail className="text-lg" />
              {profile.email}
            </a>
            <a
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-3 text-sm text-[var(--color-ink)] hover:text-[var(--color-amber)] transition-colors"
            >
              <HiOutlinePhone className="text-lg" />
              {profile.phone}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-sm text-[var(--color-ink)] hover:text-[var(--color-amber)] transition-colors"
            >
              <FiLinkedin className="text-lg" />
              LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-sm text-[var(--color-ink)] hover:text-[var(--color-amber)] transition-colors"
            >
              <FiGithub className="text-lg" />
              GitHub
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-xs text-[var(--color-muted)] mb-1.5">
                Name
              </label>
              <input
                id="name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2.5 text-sm text-[var(--color-ink)] outline-none focus:border-[var(--color-amber)]/50 transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs text-[var(--color-muted)] mb-1.5">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2.5 text-sm text-[var(--color-ink)] outline-none focus:border-[var(--color-amber)]/50 transition-colors"
                placeholder="you@example.com"
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-xs text-[var(--color-muted)] mb-1.5">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2.5 text-sm text-[var(--color-ink)] outline-none focus:border-[var(--color-amber)]/50 transition-colors resize-none"
              placeholder="Tell me a bit about the opportunity or project..."
            />
          </div>
          <button
            type="submit"
            className="self-start mt-2 inline-flex items-center gap-2 rounded-md bg-[var(--color-amber)] text-[var(--color-base)] px-6 py-3 text-sm font-semibold hover:bg-[var(--color-amber-dim)] transition-colors"
          >
            Send Message
          </button>
          <p className="text-xs text-[var(--color-muted)]">
            Opens your email client with this message pre-filled.
          </p>
        </form>
      </div>
    </section>
  );
}
