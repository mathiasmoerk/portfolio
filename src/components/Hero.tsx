import { hero, projects, projectHref, site } from "@/lib/content";
import Chip from "./Chip";
import Thumb from "./Thumb";
import ProjectMedia from "./ProjectMedia";

export default function Hero() {
  const featured = projects[0];

  return (
    <section id="top" className="grain relative overflow-hidden">
      <div className="relative z-10 mx-auto max-w-6xl px-5 pb-10 pt-12 sm:px-8 sm:pt-20">
        <p className="eyebrow reveal">{hero.eyebrow}</p>

        <div className="mt-6 grid gap-10 lg:grid-cols-12 lg:gap-12">
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
                className="rounded-full bg-accent px-5 py-3 font-mono text-xs uppercase tracking-widest text-white transition-all hover:-translate-y-0.5 hover:bg-accent-strong"
              >
                See the work
              </a>
              <a
                href="#contact"
                className="rounded-full border border-accent/30 px-5 py-3 font-mono text-xs uppercase tracking-widest text-accent transition-colors hover:bg-accent/5"
              >
                Get in touch
              </a>
            </div>
          </div>

          {/* Featured work — peeks above the fold */}
          <div className="lg:col-span-5">
            <div className="mb-3 flex items-center justify-between">
              <span className="eyebrow">Featured</span>
              <span className="font-mono text-xs text-muted">
                {featured.index} / {String(projects.length).padStart(2, "0")}
              </span>
            </div>

            <a
              href={projectHref(featured)}
              className="group block overflow-hidden rounded-3xl border border-line bg-card shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
            >
              <div className="overflow-hidden">
                <div className="transition-transform duration-500 group-hover:scale-[1.03]">
                  {featured.cover ? (
                    <div className="aspect-[4/3] w-full">
                      <ProjectMedia
                        src={featured.cover}
                        alt={featured.title}
                        fallback={<Thumb thumb={featured.thumb} />}
                      />
                    </div>
                  ) : (
                    <Thumb thumb={featured.thumb} />
                  )}
                </div>
              </div>
              <div className="p-5">
                <h2 className="text-xl font-semibold tracking-tight">
                  {featured.title}
                </h2>
                <p className="mt-1.5 text-sm text-ink-soft">{featured.summary}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {featured.chips.slice(0, 3).map((chip) => (
                    <Chip key={chip.label} color={chip.color}>
                      {chip.label}
                    </Chip>
                  ))}
                </div>
              </div>
            </a>
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
