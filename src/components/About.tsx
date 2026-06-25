import { about, site } from "@/lib/content";

export default function About() {
  return (
    <section
      id="about"
      className="border-t border-line bg-paper-2/40"
    >
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="eyebrow">About</p>

        <div className="mt-6">
          {/* Philosophy - the editorial centerpiece */}
          <div>
            <h2 className="display text-[clamp(1.9rem,4.5vw,3rem)] font-medium leading-[1.1] tracking-tight">
              {about.philosophy[0]}
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft">
              {about.philosophy[1]}
            </p>

            {/* Stats */}
            <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-line pt-8">
              {about.stats.map((s) => (
                <div key={s.label}>
                  <dt className="font-mono text-3xl font-semibold tracking-tight sm:text-4xl">
                    {s.value}
                  </dt>
                  <dd className="mt-1 font-mono text-[11px] uppercase tracking-widest text-muted">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Experience + Education */}
          <div className="mt-10">
            <div className="border border-line bg-card p-6 shadow-[var(--shadow-card)] sm:p-8">
              <h3 className="font-mono text-xs uppercase tracking-widest text-muted">
                Experience
              </h3>
              <ul className="mt-4">
                {about.experience.map((e, i) => (
                  <li
                    key={i}
                    className="flex items-baseline justify-between gap-4 border-b border-line/70 py-3.5 last:border-0"
                  >
                    <div>
                      <p className="font-medium tracking-tight">{e.role}</p>
                      <p className="text-sm text-muted">{e.org}</p>
                    </div>
                    <span className="shrink-0 font-mono text-xs text-muted">
                      {e.period}
                    </span>
                  </li>
                ))}
              </ul>

              <h3 className="mt-8 font-mono text-xs uppercase tracking-widest text-muted">
                Education
              </h3>
              <ul className="mt-4">
                {about.education.map((e, i) => (
                  <li
                    key={i}
                    className="flex items-baseline justify-between gap-4 border-b border-line/70 py-3.5 last:border-0"
                  >
                    <div>
                      <p className="font-medium tracking-tight">{e.school}</p>
                      <p className="text-sm text-muted">{e.program}</p>
                    </div>
                    <span className="shrink-0 font-mono text-xs text-muted">
                      {e.period}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={`mailto:${site.email}`}
                className="mt-8 flex h-11 items-center justify-center bg-accent px-5 text-center text-xs font-medium uppercase tracking-widest text-white transition-all hover:-translate-y-0.5 hover:bg-accent-strong"
              >
                Let&apos;s work together
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
