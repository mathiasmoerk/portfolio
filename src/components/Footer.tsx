import { site } from "@/lib/content";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-line bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <p className="font-mono text-xs uppercase tracking-widest text-paper/50">
          Contact
        </p>

        <a
          href={`mailto:${site.email}`}
          className="display mt-5 block text-[clamp(2rem,7vw,5rem)] font-semibold tracking-tight transition-opacity hover:opacity-70"
        >
          Let&apos;s talk.
        </a>

        <div className="mt-12 flex flex-col gap-8 border-t border-paper/15 pt-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-sm text-paper/60">{site.email}</p>
            <p className="mt-1 font-mono text-xs uppercase tracking-widest text-paper/40">
              {site.name} - {site.role}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {site.social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="inline-flex min-h-16 items-center rounded-full border border-paper/20 px-6 font-mono text-xs uppercase tracking-widest text-paper/80 transition-colors hover:border-accent hover:bg-accent hover:text-white"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <p className="mt-12 font-mono text-[11px] text-paper/30">
          © {new Date().getFullYear()} {site.name}. Designed & built with care.
        </p>
      </div>
    </footer>
  );
}
