import { profile } from "@/lib/content";
import ProjectMedia from "./ProjectMedia";
import Companies from "./Companies";

export default function ProfileCard() {
  return (
    <section
      id="top"
      className="mx-auto max-w-3xl px-5 pb-10 pt-10 sm:px-8 sm:pt-14"
    >
      <div className="reveal relative overflow-hidden rounded-3xl border border-line bg-card p-6 shadow-[var(--shadow-card)] sm:p-8">
        {/* Avatar */}
        <div className="size-[92px] shrink-0 overflow-hidden rounded-full border border-line bg-paper-2 sm:size-[120px]">
          <ProjectMedia src={profile.avatar} alt={profile.name} />
        </div>

        {/* Name + handle · location */}
        <h1 className="mt-5 text-[clamp(1.9rem,5vw,2.5rem)] font-semibold leading-[1.1] tracking-[-0.04em]">
          {profile.name}
        </h1>
        <div className="mt-1.5 flex flex-wrap items-center gap-2 text-sm text-muted">
          <span className="font-medium lowercase">{profile.handle}</span>
          <span className="font-bold text-line-strong">·</span>
          <span className="inline-flex items-center gap-1.5 font-medium">
            <svg viewBox="0 0 24 24" fill="none" className="size-3.5" aria-hidden>
              <path
                d="M12 21s7-5.686 7-11a7 7 0 1 0-14 0c0 5.314 7 11 7 11Z"
                stroke="currentColor"
                strokeWidth="2"
              />
              <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="2" />
            </svg>
            {profile.location}
          </span>
        </div>

        {/* Single CTA, above the About section */}
        <a
          href={profile.cta.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-accent px-7 text-xs font-medium uppercase tracking-widest text-white transition-all hover:-translate-y-0.5 hover:bg-accent-strong"
        >
          {profile.cta.label}
          <span aria-hidden>↗</span>
        </a>

        {/* About */}
        <div className="mt-8">
          <p className="text-lg font-medium capitalize">About</p>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-soft">
            {profile.bio}
          </p>
        </div>

        {/* Experience + company logos */}
        <div className="mt-8">
          <p className="text-lg font-medium">
            {profile.years}
            <span className="text-muted"> · Experience Includes:</span>
          </p>
          <div className="mt-3">
            <Companies />
          </div>
        </div>
      </div>
    </section>
  );
}
