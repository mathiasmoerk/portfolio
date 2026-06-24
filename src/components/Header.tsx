"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/content";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-colors duration-300 ${
          scrolled
            ? "border-b border-line bg-paper/80 backdrop-blur-md"
            : "border-b border-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5 sm:px-8">
          <a href="#top" aria-label={site.name} className="flex items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt={site.name} className="h-7 w-auto" />
          </a>

          <nav className="hidden items-center gap-1 sm:flex">
            {site.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-3.5 py-2 font-mono text-xs uppercase tracking-widest text-ink-soft transition-colors hover:bg-paper-2 hover:text-ink"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-2 inline-flex min-h-16 items-center justify-center rounded-full bg-accent px-7 font-mono text-xs uppercase tracking-widest text-white transition-all hover:-translate-y-0.5 hover:bg-accent-strong"
            >
              Get in touch
            </a>
          </nav>
        </div>
      </header>

      {/* Material You–style floating menu (mobile only) */}
      <div className="sm:hidden">
        {/* Scrim */}
        {open && (
          <button
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-40 bg-ink/25 backdrop-blur-[2px]"
          />
        )}

        {/* Menu surface, anchored above the FAB */}
        {open && (
          <div className="menu-pop fixed bottom-28 right-5 z-50 w-80 max-w-[calc(100vw-2.5rem)] origin-bottom-right overflow-hidden rounded-3xl border border-line bg-card p-3 shadow-[var(--shadow-lift)]">
            <nav className="flex flex-col gap-1">
              {site.nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-16 items-center rounded-2xl px-5 font-mono text-base uppercase tracking-widest text-ink-soft transition-colors hover:bg-paper-2 hover:text-ink"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-1 flex min-h-16 items-center justify-center rounded-2xl bg-accent px-5 text-center font-mono text-base uppercase tracking-widest text-white"
              >
                Get in touch
              </a>
            </nav>
          </div>
        )}

        {/* The FAB itself - 64px, bottom-right */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="fixed bottom-6 right-5 z-50 flex size-16 items-center justify-center rounded-[20px] bg-accent text-white shadow-[0_6px_16px_rgba(98,50,230,0.4),0_2px_6px_rgba(98,50,230,0.28)] transition-all duration-300 hover:bg-accent-strong hover:shadow-[0_10px_28px_rgba(98,50,230,0.5)] active:scale-95"
        >
          <span className="relative flex h-4 w-5 flex-col justify-between">
            <span
              className={`h-0.5 w-full rounded-full bg-white transition-all duration-300 ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full rounded-full bg-white transition-all duration-200 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`h-0.5 w-full rounded-full bg-white transition-all duration-300 ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>
    </>
  );
}
