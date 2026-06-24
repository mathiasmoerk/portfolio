"use client";

import { useState } from "react";
import { companies } from "@/lib/content";

/*
  "Worked with" logo strip. Each item tries to load a real logo from
  /public/companies and falls back to a styled text wordmark until the file is
  added, so the row always looks intentional.
*/
function Logo({ name, logo }: { name: string; logo: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span className="font-mono text-sm font-medium tracking-tight text-ink-soft">
        {name}
      </span>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={logo}
      alt={name}
      loading="lazy"
      onError={() => setFailed(true)}
      className="h-7 w-auto object-contain opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0"
    />
  );
}

export default function Companies() {
  return (
    <div className="border-t border-line bg-paper-2/40 px-6 py-5 sm:px-8">
      <p className="font-mono text-[11px] uppercase tracking-widest text-muted">
        Worked with
      </p>
      <div className="mt-3 flex flex-wrap items-center gap-x-8 gap-y-4">
        {companies.map((c) => (
          <Logo key={c.name} name={c.name} logo={c.logo} />
        ))}
      </div>
    </div>
  );
}
