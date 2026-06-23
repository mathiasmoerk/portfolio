/*
  Lightweight Instagram embed via the official /embed iframe endpoint.
  No external script needed — the iframe renders the post standalone.
*/
export default function InstagramEmbed({
  url,
  title = "Instagram post",
}: {
  url: string;
  title?: string;
}) {
  // Normalise the permalink to its /embed form (strip query string).
  const clean = url.split("?")[0].replace(/\/$/, "");
  const src = `${clean}/embed`;

  return (
    <div className="mx-auto w-full max-w-[400px]">
      <div className="overflow-hidden rounded-3xl border border-line bg-card shadow-[var(--shadow-card)]">
        <iframe
          src={src}
          title={title}
          loading="lazy"
          scrolling="no"
          className="h-[560px] w-full"
        />
      </div>
    </div>
  );
}
