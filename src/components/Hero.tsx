import { hero, site } from "@/lib/content";
import ProjectMedia from "./ProjectMedia";

export default function Hero() {
  return (
    <section id="top" className="grain relative overflow-hidden">
      <div className="relative z-10 mx-auto max-w-6xl px-5 pb-10 pt-12 sm:px-8 sm:pt-20">
        <p className="eyebrow reveal">{hero.eyebrow}</p>

        <div className="mt-6 grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Headline */}
          <div className="lg:col-span-7">
            <h1 className="display reveal text-[clamp(2.75rem,9vw,6rem)] font-semibold">
              {hero.lead}{" "}
              <span className="relative inline-block">
                <span className="relative z-10 italic">{hero.emphasis}</span>
                <span className="absolute inset-x-0 bottom-1 z-0 h-3 -rotate-1 bg-[#ffe27a] sm:bottom-2 sm:h-4" />
              </span>{" "}
              {hero.trail}
            </h1>

            <p className="reveal mt-7 max-w-md text-base leading-relaxed text-ink-soft sm:text-lg">
              {hero.intro}
            </p>

            <div className="reveal mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="inline-flex min-h-16 items-center justify-center rounded-full bg-accent px-8 font-mono text-xs uppercase tracking-widest text-white transition-all hover:-translate-y-0.5 hover:bg-accent-strong"
              >
                See the work
              </a>
              <a
                href="#contact"
                className="inline-flex min-h-16 items-center justify-center rounded-full border border-accent/30 px-8 font-mono text-xs uppercase tracking-widest text-accent transition-colors hover:bg-accent/5"
              >
                Get in touch
              </a>
            </div>
          </div>

          {/* Portrait */}
          <div className="lg:col-span-5">
            <div className="reveal overflow-hidden rounded-3xl border border-line bg-paper-2 shadow-[var(--shadow-card)]">
              <div className="aspect-[4/5] w-full">
                <ProjectMedia
                  src={hero.portrait.src}
                  alt={hero.portrait.name}
                />
              </div>
              <div className="border-t border-line bg-card px-5 py-4">
                <p className="font-semibold tracking-tight">
                  {hero.portrait.name}
                </p>
                <p className="font-mono text-xs uppercase tracking-widest text-muted">
                  {hero.portrait.role}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* marquee-style ticker as an editorial seam into the work section */}
      <div className="relative z-10 mt-6 overflow-hidden border-y border-line bg-paper-2/60 py-3">
        <div className="flex items-center gap-6 px-5 font-mono text-xs uppercase tracking-widest text-muted sm:px-8">
          {[
            "Product Design",
            "Design Systems",
            "Prototyping",
            "User Research",
            "Interaction",
            site.role,
          ].map((t, i) => (
            <span key={i} className="flex items-center gap-6 whitespace-nowrap">
              {t}
              <span className="text-line-strong">/</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
