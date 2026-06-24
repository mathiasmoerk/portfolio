import { projectHref, type Project } from "@/lib/content";
import Chip from "./Chip";
import Thumb from "./Thumb";
import ProjectMedia from "./ProjectMedia";

export default function ProjectCard({ project }: { project: Project }) {
  const isLink = Boolean(project.caseStudy);

  return (
    <a
      href={projectHref(project)}
      className={`group relative flex flex-col overflow-hidden rounded-3xl border border-line bg-card shadow-[var(--shadow-card)] transition-all duration-300 ${
        isLink
          ? "hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
          : "cursor-default"
      }`}
    >
      <div className="overflow-hidden">
        <div className="transition-transform duration-500 group-hover:scale-[1.03]">
          {project.cover ? (
            <div className="aspect-video w-full">
              <ProjectMedia
                src={project.cover}
                alt={project.title}
                fallback={<Thumb thumb={project.thumb} />}
              />
            </div>
          ) : (
            <Thumb thumb={project.thumb} />
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-baseline justify-between gap-4">
          <span className="font-mono text-xs text-muted">{project.index}</span>
          <span className="font-mono text-xs text-muted">
            {project.year}
            {project.client ? ` · ${project.client}` : ` · ${project.role}`}
          </span>
        </div>

        <h3 className="mt-3 text-2xl font-semibold leading-tight tracking-tight">
          {project.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-soft">
          {project.summary}
        </p>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.chips.map((chip) => (
            <Chip key={chip.label} color={chip.color}>
              {chip.label}
            </Chip>
          ))}
        </div>

        <span className="mt-6 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-ink">
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
