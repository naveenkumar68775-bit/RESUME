import { useEffect, useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "glass border-b border-[var(--color-border)]" : ""
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="font-mono text-[15px] text-[var(--color-ink)] tracking-tight"
        >
          <span className="text-[var(--color-amber)]">&gt;</span> naveen
          <span className="cursor-blink text-[var(--color-amber)]">_</span>
        </a>

        <ul className="hidden md:flex items-center gap-8 font-body text-sm text-[var(--color-muted)]">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="hover:text-[var(--color-ink)] transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center rounded-md border border-[var(--color-amber)]/40 px-4 py-2 text-sm font-medium text-[var(--color-amber)] hover:bg-[var(--color-amber)]/10 transition-colors"
        >
          Contact Me
        </a>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-[var(--color-ink)] text-2xl"
        >
          {open ? <HiOutlineX /> : <HiOutlineMenu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden glass border-t border-[var(--color-border)] px-6 py-4">
          <ul className="flex flex-col gap-4 font-body text-[var(--color-muted)]">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block hover:text-[var(--color-ink)] transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
