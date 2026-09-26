"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";
import { nav } from "@/content";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "border-b border-line bg-ink/85 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 md:px-8">
        <div className="flex items-center gap-8">
          <a href="#top" aria-label="AIKO home">
            <Logo />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="hidden items-center gap-3 text-sm text-bone/80 hover:text-bone md:flex lg:hidden"
            aria-expanded={open}
          >
            <MenuGlyph open={open} /> Menu
          </button>
        </div>

        <nav className="hidden lg:block" aria-label="Primary">
          <ul className="flex items-center gap-8 text-sm text-bone/75">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="transition-colors hover:text-bone">
                  <span className="mr-1.5 text-ember">·</span>
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <a href="#contact" className="hidden text-sm text-ember hover:text-ember-soft sm:inline">
            Existing partner?
          </a>
          <a
            href="#contact"
            className="group hidden items-center gap-2.5 rounded-full border border-line bg-panel py-1.5 pl-1.5 pr-4 text-sm transition-colors hover:border-ember/60 sm:flex"
          >
            <span className="grid h-7 w-7 place-items-center rounded-full bg-ember text-ink transition-transform group-hover:translate-x-0.5">
              <Arrow />
            </span>
            Partner with us
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border border-line md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <MenuGlyph open={open} />
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-line bg-ink lg:hidden" aria-label="Mobile">
          <ul className="mx-auto grid max-w-7xl gap-1 px-5 py-4 md:px-8">
            {[...nav, { label: "Contact", href: "#contact" }].map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 font-display text-lg text-bone/85 hover:bg-panel"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

function MenuGlyph({ open }: { open: boolean }) {
  return (
    <span className="relative block h-3 w-6" aria-hidden="true">
      <span
        className={`absolute left-0 h-px w-6 bg-current transition-transform ${
          open ? "top-1.5 rotate-45" : "top-0"
        }`}
      />
      <span
        className={`absolute left-0 h-px bg-current transition-all ${
          open ? "top-1.5 w-6 -rotate-45" : "top-3 w-4"
        }`}
      />
    </span>
  );
}

export function Arrow({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} fill="none" aria-hidden="true">
      <path d="M2 8h11M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
