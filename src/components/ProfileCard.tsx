import { profile } from "@/lib/content";
import ProjectMedia from "./ProjectMedia";
import Companies from "./Companies";

export default function ProfileCard() {
  return (
    <section id="top" className="mx-auto max-w-3xl px-5 pb-10 pt-12 sm:px-8 sm:pt-16">
      <div className="reveal overflow-hidden rounded-3xl border border-line bg-card shadow-[var(--shadow-card)]">
        <div className="p-6 sm:p-8">
          {/* Identity row */}
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="size-20 shrink-0 overflow-hidden rounded-full border border-line bg-paper-2 sm:size-24">
                <ProjectMedia src={profile.avatar} alt={profile.name} />
              </div>
              <div>
                <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  {profile.name}
                </h1>
                <p className="mt-0.5 font-mono text-sm text-muted">
                  {profile.handle}
                </p>
                <p className="mt-2 inline-flex items-center gap-2 rounded-full bg-paper-2 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-ink-soft">
                  <span className="size-1.5 rounded-full bg-accent" />
                  {profile.role}
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-2.5 sm:items-end">
              {profile.actions.map((a) => (
                <a
                  key={a.label}
                  href={a.href}
                  className={`inline-flex min-h-16 items-center justify-center rounded-full px-7 font-mono text-xs uppercase tracking-widest transition-all hover:-translate-y-0.5 ${
                    a.primary
                      ? "bg-accent text-white hover:bg-accent-strong"
                      : "border border-accent/30 text-accent hover:bg-accent/5"
                  }`}
                >
                  {a.label}
                </a>
              ))}
            </div>
          </div>

          {/* Bio */}
          <p className="mt-7 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg">
            {profile.bio}
          </p>
        </div>

        {/* Worked-with strip */}
        <Companies />
      </div>
    </section>
  );
}
