"use client";

import { useState } from "react";

/*
  Loads a real screenshot from /public. While the file is missing it renders a
  fallback - either a passed-in node (the generative Thumb on cards) or a
  tasteful labeled placeholder (in the case study), so the layout always looks
  intentional before the assets land.
*/
export default function ProjectMedia({
  src,
  alt,
  fallback,
  className = "",
}: {
  src: string;
  alt: string;
  fallback?: React.ReactNode;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    if (fallback) return <>{fallback}</>;
    return (
      <div
        className={`flex h-full w-full items-center justify-center bg-paper-2 ${className}`}
      >
        <span className="px-4 text-center font-mono text-[11px] uppercase tracking-widest text-muted">
          {src.split("/").pop()}
        </span>
      </div>
    );
  }

  // Plain <img> (not next/image) so a missing file degrades gracefully via onError.
  // eslint-disable-next-line @next/next/no-img-element
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={`h-full w-full object-cover ${className}`}
    />
  );
}
