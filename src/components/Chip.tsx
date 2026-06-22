import type { ChipColor } from "@/lib/content";

// Multi-color category chips (per moodboard: "good use of both chips to
// communicate categories", App-Store-style colored tags on a light UI).
const styles: Record<ChipColor, string> = {
  violet: "bg-violet-100 text-violet-700 ring-violet-200/70",
  blue: "bg-sky-100 text-sky-700 ring-sky-200/70",
  green: "bg-emerald-100 text-emerald-700 ring-emerald-200/70",
  orange: "bg-orange-100 text-orange-700 ring-orange-200/70",
  pink: "bg-pink-100 text-pink-700 ring-pink-200/70",
  amber: "bg-amber-100 text-amber-800 ring-amber-200/70",
};

export default function Chip({
  color,
  children,
}: {
  color: ChipColor;
  children: React.ReactNode;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 font-mono text-[11px] leading-none tracking-tight ring-1 ring-inset ${styles[color]}`}
    >
      {children}
    </span>
  );
}
