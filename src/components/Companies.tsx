"use client";

import { useState } from "react";
import { companies } from "@/lib/content";

/*
  Circular company logos (34px) like the reference's "Experience Includes:"
  row. Each tries to load a real logo from /public/companies and falls back to
  a circular monogram badge until the file is added.
*/
function Logo({ name, logo }: { name: string; logo: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span
        title={name}
        className="grid size-[34px] place-items-center rounded-full border border-line bg-paper-2 text-xs font-semibold text-ink-soft"
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
      className="size-[34px] rounded-full border border-line object-cover"
    />
  );
}

export default function Companies() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {companies.map((c) => (
        <Logo key={c.name} name={c.name} logo={c.logo} />
      ))}
    </div>
  );
}
