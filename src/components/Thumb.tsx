import type { Project } from "@/lib/content";

/*
  Generative project thumbnails — no photography required.
  Moodboard cues: "thumbnails with depth and eye catching colours due to high
  saturation and contrast" + "Apple style cards carousel with device mockups".
  Each variant floats a device/UI mock on a vivid gradient with soft depth.
*/

export default function Thumb({ thumb }: { thumb: Project["thumb"] }) {
  const bg = {
    backgroundImage: `radial-gradient(120% 120% at 15% 10%, ${thumb.from} 0%, ${thumb.to} 70%)`,
  };

  return (
    <div
      className="relative aspect-[4/3] w-full overflow-hidden"
      style={bg}
      aria-hidden
    >
      {/* contrast bloom for depth */}
      <div className="absolute -right-10 -top-10 size-40 rounded-full bg-white/25 blur-2xl" />
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/15 to-transparent" />

      {thumb.variant === "phone" && <PhoneMock accent={thumb.accent} />}
      {thumb.variant === "browser" && <BrowserMock accent={thumb.accent} />}
      {thumb.variant === "cards" && <CardsMock accent={thumb.accent} />}
    </div>
  );
}

function PhoneMock({ accent }: { accent: string }) {
  return (
    <div className="absolute inset-0 flex items-end justify-center pt-8">
      <div className="h-[88%] w-[44%] translate-y-2 rounded-t-[2rem] border-[6px] border-black/85 bg-white shadow-[0_24px_48px_-12px_rgba(0,0,0,0.5)]">
        <div className="mx-auto mt-2 h-1 w-10 rounded-full bg-black/15" />
        <div className="space-y-2 p-3">
          <div className="h-12 rounded-lg" style={{ background: accent }} />
          <div className="h-2.5 w-3/4 rounded-full bg-black/10" />
          <div className="h-2.5 w-1/2 rounded-full bg-black/10" />
          <div className="grid grid-cols-3 gap-1.5 pt-1">
            <div className="aspect-square rounded-md bg-black/10" />
            <div className="aspect-square rounded-md bg-black/10" />
            <div className="aspect-square rounded-md bg-black/10" />
          </div>
        </div>
      </div>
    </div>
  );
}

function BrowserMock({ accent }: { accent: string }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-6">
      <div className="w-[78%] -rotate-2 rounded-xl bg-white shadow-[0_24px_48px_-12px_rgba(0,0,0,0.5)]">
        <div className="flex items-center gap-1.5 border-b border-black/5 px-3 py-2">
          <span className="size-2 rounded-full bg-black/15" />
          <span className="size-2 rounded-full bg-black/15" />
          <span className="size-2 rounded-full bg-black/15" />
        </div>
        <div className="space-y-2 p-4">
          <div className="h-3 w-1/2 rounded-full" style={{ background: accent }} />
          <div className="h-2 w-3/4 rounded-full bg-black/10" />
          <div className="flex gap-2 pt-1">
            <div className="h-14 flex-1 rounded-lg bg-black/[0.07]" />
            <div className="h-14 flex-1 rounded-lg bg-black/[0.07]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function CardsMock({ accent }: { accent: string }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center gap-3 p-6">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="h-[70%] flex-1 rounded-2xl bg-white/95 p-2 shadow-[0_18px_36px_-14px_rgba(0,0,0,0.45)]"
          style={{ transform: `translateY(${i === 1 ? -10 : 0}px)` }}
        >
          <div
            className="h-1/2 w-full rounded-xl"
            style={{ background: i === 1 ? accent : "rgba(0,0,0,0.08)" }}
          />
          <div className="mt-2 h-2 w-3/4 rounded-full bg-black/10" />
          <div className="mt-1.5 h-2 w-1/2 rounded-full bg-black/10" />
        </div>
      ))}
    </div>
  );
}
