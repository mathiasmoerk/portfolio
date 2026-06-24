import { projects, projectHref, type Project } from "@/lib/content";
import Chip from "./Chip";
import Thumb from "./Thumb";
import ProjectMedia from "./ProjectMedia";

function WorkRow({ project }: { project: Project }) {
  const isLink = Boolean(project.caseStudy);
  return (
    <a
      href={projectHref(project)}
      className={`group grid grid-cols-1 gap-5 py-8 sm:grid-cols-[15rem_1fr] sm:gap-7 ${
        isLink ? "" : "cursor-default"
      }`}
    >
      {/* Thumbnail */}
      <div className="overflow-hidden rounded-2xl border border-line bg-paper-2">
        <div className="aspect-video w-full transition-transform duration-500 group-hover:scale-[1.03]">
          {project.cover ? (
            <ProjectMedia
              src={project.cover}
              alt={project.title}
              fallback={<Thumb thumb={project.thumb} />}
            />
          ) : (
            <Thumb thumb={project.thumb} />
          )}
        </div>
      </div>

      {/* Meta */}
      <div className="flex flex-col">
        <span className="font-mono text-xs text-muted">
          {project.index} · {project.client ?? project.role} · {project.year}
        </span>
        <h3 className="mt-2 text-2xl font-semibold leading-tight tracking-tight transition-colors group-hover:text-accent">
          {project.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-soft">
          {project.summary}
        </p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.chips.map((chip) => (
            <Chip key={chip.label} color={chip.color}>
              {chip.label}
            </Chip>
          ))}
        </div>
        <span className="mt-5 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-ink">
          {isLink ? "View case study" : "Coming soon"}
          {isLink && (
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          )}
        </span>
      </div>
    </a>
  );
}

export default function WorkList() {
  return (
    <section id="work" className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
      <p className="eyebrow">Selected Work</p>
      <h2 className="display mt-3 text-[clamp(2rem,5vw,3rem)] font-semibold">
        Things I&apos;ve <span className="italic">shipped</span>.
      </h2>

      <div className="mt-8 divide-y divide-line border-y border-line">
        {projects.map((project) => (
          <WorkRow key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
