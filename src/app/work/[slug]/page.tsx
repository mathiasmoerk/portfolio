import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Chip from "@/components/Chip";
import ProjectMedia from "@/components/ProjectMedia";
import InstagramEmbed from "@/components/InstagramEmbed";
import { projects } from "@/lib/content";

export function generateStaticParams() {
  return projects
    .filter((p) => p.caseStudy)
    .map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — Mathias Mørk`,
    description: project.summary,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project || !project.caseStudy) notFound();

  const cs = project.caseStudy;
  const next = projects.find((p) => p.caseStudy && p.slug !== slug);

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Title block */}
        <article className="mx-auto max-w-4xl px-5 pb-16 pt-12 sm:px-8 sm:pt-16">
          <a
            href="/#work"
            className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:text-ink"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">
              ←
            </span>
            All work
          </a>

          <p className="eyebrow mt-8">
            {project.index} — {project.client ?? project.role} · {project.year}
          </p>

          <h1 className="display mt-4 text-[clamp(2.25rem,6vw,4.25rem)] font-semibold">
            {project.title}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
            {cs.lead}
          </p>

          <div className="mt-7 flex flex-wrap gap-1.5">
            {project.chips.map((chip) => (
              <Chip key={chip.label} color={chip.color}>
                {chip.label}
              </Chip>
            ))}
          </div>
        </article>

        {/* Cover */}
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="overflow-hidden rounded-3xl border border-line bg-paper-2 shadow-[var(--shadow-card)]">
            <div className="aspect-[16/10]">
              <ProjectMedia src={cs.cover.src} alt={cs.cover.alt} />
            </div>
          </div>
        </div>

        {/* Facts */}
        <section className="mx-auto max-w-4xl px-5 pt-16 sm:px-8">
          <dl className="grid grid-cols-2 gap-x-6 gap-y-8 rounded-3xl border border-line bg-card p-6 shadow-[var(--shadow-card)] sm:grid-cols-4 sm:p-8">
            {cs.facts.map((f) => (
              <div key={f.label}>
                <dt className="font-mono text-[11px] uppercase tracking-widest text-muted">
                  {f.label}
                </dt>
                <dd className="mt-1.5 font-medium tracking-tight">{f.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Introduction */}
        <section className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-20">
          <p className="eyebrow">Introduction</p>
          <p className="display mt-5 text-[clamp(1.5rem,3.2vw,2.25rem)] font-medium leading-[1.18] tracking-tight">
            {cs.intro}
          </p>

          {cs.problem && (
            <div className="mt-10 border-l-2 border-ink pl-5 sm:pl-6">
              <p className="font-mono text-[11px] uppercase tracking-widest text-muted">
                Research question
              </p>
              <p className="mt-2 text-lg font-medium leading-snug tracking-tight sm:text-xl">
                {cs.problem}
              </p>
            </div>
          )}
        </section>

        {/* Overview image (first gallery item) */}
        {cs.gallery[0] && (
          <Figure figure={cs.gallery[0]} wide />
        )}

        {/* Process — studies / workstreams */}
        {cs.process && (
          <section className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-20">
            <p className="eyebrow">Process</p>
            <h2 className="display mt-4 text-[clamp(1.9rem,4.5vw,3rem)] font-semibold">
              {cs.processHeading ?? "Five studies, each feeding the next."}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft">
              {cs.processLead ??
                "A mixed-methods approach where each study built on the last — so decisions stayed grounded in real behaviour, not assumptions."}
            </p>

            <ol className="mt-12 space-y-px overflow-hidden rounded-3xl border border-line bg-line">
              {cs.process.map((step) => (
                <li
                  key={step.phase}
                  className="grid gap-2 bg-card p-6 sm:grid-cols-[200px_1fr] sm:gap-6 sm:p-8"
                >
                  <div>
                    <span className="font-mono text-xs uppercase tracking-widest text-muted">
                      {step.phase}
                    </span>
                    <h3 className="mt-1 text-lg font-semibold tracking-tight">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-ink-soft">
                    {step.body}
                  </p>
                </li>
              ))}
            </ol>
          </section>
        )}

        {/* Results / metrics */}
        {cs.metrics && (
          <section className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="rounded-3xl bg-ink px-6 py-10 text-paper sm:px-10 sm:py-12">
              <p className="font-mono text-[11px] uppercase tracking-widest text-paper/50">
                Results
              </p>
              <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
                {cs.metrics.map((m) => (
                  <div key={m.label}>
                    <dt className="display text-4xl font-semibold sm:text-5xl">
                      {m.value}
                    </dt>
                    <dd className="mt-2 font-mono text-[11px] uppercase tracking-widest text-paper/60">
                      {m.label}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>
        )}

        {/* Key features */}
        {cs.features && (
        <section className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-20">
          <p className="eyebrow">Key features</p>
          <h2 className="display mt-4 text-[clamp(1.9rem,4.5vw,3rem)] font-semibold">
            {cs.featuresHeading ?? "Collaboration, woven into the catalog."}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft">
            {cs.featuresLead ??
              "A high-fidelity prototype layering community features onto familiar workflows."}
          </p>

          <ol className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2">
            {cs.features.map((f, i) => (
              <li key={f.title} className="flex flex-col bg-card p-6 sm:p-8">
                <span className="font-mono text-sm text-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-xl font-semibold tracking-tight">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {f.body}
                </p>
              </li>
            ))}
          </ol>
        </section>
        )}

        {/* Grounded in — design principles */}
        {cs.principles && (
          <section className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-20">
            <p className="eyebrow">Grounded in</p>
            <h2 className="display mt-4 text-[clamp(1.9rem,4.5vw,3rem)] font-semibold">
              {cs.principlesHeading ?? "Decisions backed by principle."}
            </h2>
            <ul className="mt-10 divide-y divide-line border-y border-line">
              {cs.principles.map((p) => (
                <li
                  key={p.name}
                  className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
                >
                  <span className="font-medium tracking-tight">{p.name}</span>
                  <span className="text-sm text-ink-soft sm:max-w-sm sm:text-right">
                    {p.note}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Remaining gallery */}
        <section className="mx-auto max-w-6xl px-5 pb-8 sm:px-8">
          <div className="grid gap-6 sm:grid-cols-2">
            {cs.gallery.slice(1).map((g) => (
              <Figure key={g.src} figure={g} />
            ))}
          </div>
        </section>

        {/* Embedded social post (e.g. Instagram reel) */}
        {cs.embed && cs.embed.kind === "instagram" && (
          <section className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-20">
            <p className="eyebrow">{cs.embed.heading ?? "Featured"}</p>
            {cs.embed.caption && (
              <p className="display mt-4 max-w-2xl text-[clamp(1.5rem,3.2vw,2.25rem)] font-medium leading-[1.2] tracking-tight">
                {cs.embed.caption}
              </p>
            )}
            <div className="mt-10">
              <InstagramEmbed url={cs.embed.url} title={cs.embed.caption} />
            </div>
          </section>
        )}

        {/* User quote */}
        {cs.quote && (
          <section className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-20">
            <figure>
              <blockquote className="display text-[clamp(1.5rem,3.6vw,2.5rem)] font-medium leading-[1.2] tracking-tight">
                <span className="text-muted">“</span>
                {cs.quote.text}
                <span className="text-muted">”</span>
              </blockquote>
              <figcaption className="mt-5 font-mono text-xs uppercase tracking-widest text-muted">
                {cs.quote.author}
              </figcaption>
            </figure>
          </section>
        )}

        {/* Validation */}
        {cs.method && (
          <section className="mx-auto max-w-4xl px-5 pb-4 sm:px-8">
            <div className="rounded-3xl border border-line bg-paper-2/50 p-6 sm:p-10">
              <p className="eyebrow">Validation</p>
              <p className="mt-5 text-[clamp(1.15rem,2.4vw,1.6rem)] font-medium leading-snug tracking-tight">
                {cs.method}
              </p>
            </div>
          </section>
        )}

        {/* Reflection / next steps */}
        {cs.reflection && (
          <section className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-20">
            <p className="eyebrow">Reflection</p>
            <p className="display mt-4 text-[clamp(1.5rem,3.2vw,2.25rem)] font-medium leading-[1.2] tracking-tight">
              {cs.reflection.intro}
            </p>
            <ul className="mt-8 space-y-4">
              {cs.reflection.points.map((point, i) => (
                <li key={i} className="flex gap-4">
                  <span className="mt-1 font-mono text-xs text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-base leading-relaxed text-ink-soft">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Next project */}
        {next && (
          <section className="rule mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
            <p className="eyebrow">Next</p>
            <a
              href={`/work/${next.slug}`}
              className="group mt-4 flex items-baseline justify-between gap-6"
            >
              <h2 className="display text-[clamp(1.75rem,5vw,3.25rem)] font-semibold transition-opacity group-hover:opacity-60">
                {next.title}
              </h2>
              <span className="hidden font-mono text-xl transition-transform duration-300 group-hover:translate-x-1 sm:inline">
                →
              </span>
            </a>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}

function Figure({
  figure,
  wide = false,
}: {
  figure: { src: string; alt: string; caption?: string };
  wide?: boolean;
}) {
  return (
    <figure
      className={`mx-auto px-5 sm:px-8 ${wide ? "max-w-6xl" : ""}`}
    >
      <div className="overflow-hidden rounded-3xl border border-line bg-paper-2 shadow-[var(--shadow-card)]">
        <div className={wide ? "aspect-[16/9]" : "aspect-[4/3]"}>
          <ProjectMedia src={figure.src} alt={figure.alt} />
        </div>
      </div>
      {figure.caption && (
        <figcaption className="mt-3 font-mono text-xs text-muted">
          {figure.caption}
        </figcaption>
      )}
    </figure>
  );
}
