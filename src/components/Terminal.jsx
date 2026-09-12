import { useEffect, useState } from "react";

const LINES = [
  { type: "comment", text: "// naveen.dev" },
  { type: "code", text: "const developer = {" },
  { type: "code", text: "  name: 'Naveen',", indent: 1 },
  { type: "code", text: "  role: 'Full Stack Developer',", indent: 1 },
  { type: "code", text: "  stack: ['React', 'Node', 'Express', 'MongoDB'],", indent: 1 },
  { type: "code", text: "  learning: true,", indent: 1 },
  { type: "code", text: "  openToInternships: true,", indent: 1 },
  { type: "code", text: "};" },
];

export default function Terminal() {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setLineIndex(LINES.length);
      setDone(true);
      return;
    }

    if (lineIndex >= LINES.length) {
      setDone(true);
      return;
    }

    const currentLine = LINES[lineIndex].text;

    if (charIndex < currentLine.length) {
      const t = setTimeout(() => setCharIndex((c) => c + 1), 18 + Math.random() * 22);
      return () => clearTimeout(t);
    }

    const t = setTimeout(() => {
      setLineIndex((l) => l + 1);
      setCharIndex(0);
    }, 160);
    return () => clearTimeout(t);
  }, [lineIndex, charIndex]);

  return (
    <div className="w-full max-w-md rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[0_0_60px_-15px_rgba(240,180,41,0.15)] overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--color-border)] bg-[var(--color-surface-2)]">
        <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
        <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
        <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
        <span className="ml-3 font-mono text-xs text-[var(--color-muted)]">
          zsh — naveen.dev
        </span>
      </div>
      <div className="p-5 font-mono text-[13px] leading-relaxed min-h-[220px]">
        {LINES.slice(0, lineIndex).map((line, i) => (
          <Line key={i} line={line} />
        ))}
        {lineIndex < LINES.length && (
          <Line
            line={{ ...LINES[lineIndex], text: LINES[lineIndex].text.slice(0, charIndex) }}
            caret
          />
        )}
        {done && (
          <div className="flex items-center gap-1 mt-1 text-[var(--color-teal)]">
            <span>$</span>
            <span className="cursor-blink">▍</span>
          </div>
        )}
      </div>
    </div>
  );
}

function Line({ line, caret }) {
  const indentClass = line.indent ? "pl-4" : "";
  const colorClass =
    line.type === "comment" ? "text-[var(--color-muted)]" : "text-[var(--color-ink)]";
  return (
    <div className={`${indentClass} ${colorClass} whitespace-pre`}>
      {line.text}
      {caret && <span className="cursor-blink text-[var(--color-amber)]">▍</span>}
    </div>
  );
}
