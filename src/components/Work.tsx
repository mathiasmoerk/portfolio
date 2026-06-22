import { projects } from "@/lib/content";
import ProjectCard from "./ProjectCard";

export default function Work() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="eyebrow">Selected Work</p>
          <h2 className="display mt-3 text-[clamp(2.25rem,6vw,3.75rem)] font-semibold">
            Things I&apos;ve <span className="italic">shipped</span>.
          </h2>
        </div>
        <p className="max-w-xs text-sm leading-relaxed text-ink-soft">
          A few projects from the last couple of years. Full case studies are on
          the way.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
