"use client";

import { useState } from "react";
import { companies } from "@/lib/content";

function Logo({ name, logo }: { name: string; logo: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span
        title={name}
        className="grid size-[34px] shrink-0 place-items-center rounded-full border border-line bg-paper-2 text-xs font-semibold text-ink-soft"
      >
        {name.charAt(0)}
      </span>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={logo}
      alt={name}
      title={name}
      loading="lazy"
      onError={() => setFailed(true)}
      className="h-5 w-auto max-w-[120px] object-contain grayscale opacity-60 transition-all duration-200 hover:grayscale-0 hover:opacity-100"
    />
  );
}

export default function Companies() {
  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
      {companies.map((c) => (
        <Logo key={c.name} name={c.name} logo={c.logo} />
      ))}
    </div>
  );
}
