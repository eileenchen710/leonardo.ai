"use client";

import { useCallback, useEffect, useState } from "react";
import Photo from "./Photo";
import { Arrow } from "./Header";
import { heroChips, heroDishes, site } from "@/content";

const stages = ["Forecast", "Source", "Prep", "Cook", "Chill", "Inspect", "Pack", "Dispatch"];

export default function Hero() {
  const [i, setI] = useState(0);
  const total = heroDishes.length;
  const go = useCallback((d: number) => setI((v) => (v + d + total) % total), [total]);

  useEffect(() => {
    const t = setInterval(() => go(1), 7000);
    return () => clearInterval(t);
  }, [go, i]);

  const dish = heroDishes[i];
  const activeStage = 3 + i; // highlights Cook → Chill → Inspect as dishes rotate

  return (
    <section id="top" className="relative overflow-hidden pt-18">
      <div className="grid-lines pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_75%)]" />
      <div className="ember-glow pointer-events-none absolute inset-x-0 bottom-0 h-2/3" />

      {/* production stage index */}
          <ol className="absolute right-6 top-[62%] hidden -translate-y-1/2 space-y-2 text-[11px] min-[1400px]:block" aria-hidden="true">
            {stages.map((s, idx) => (
              <li key={s} className={`flex items-center justify-end gap-3 ${idx === activeStage ? "text-ember" : "text-bone/30"}`}>
                {s}
                <span className={`h-px ${idx === activeStage ? "w-8 bg-ember" : "w-5 bg-bone/20"}`} />
              </li>
            ))}
          </ol>
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="pt-10 text-center md:pt-12">
          <span className="inline-block rounded-full border border-line bg-panel/70 px-4 py-1.5 text-xs tracking-wide text-bone/80">
            {site.tagline}
          </span>
          <h1 className="mx-auto mt-6 max-w-3xl font-display text-[34px] font-medium leading-[1.1] tracking-tight sm:text-5xl md:text-[56px]">
            Food processing &amp; central kitchens <span className="text-bone/50">run on intelligence.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-[15px] leading-relaxed text-bone/55">
            Ready meals, sauces, proteins and prepared produce at scale — planned by machine
            learning, verified by sensors, certified to international standards.
          </p>
        </div>

        {/* Plate stage */}
        <div className="relative mx-auto mt-8 h-[340px] max-w-6xl sm:h-[420px] md:mt-4 md:h-[500px]">
          {/* orbit arcs */}
          <svg
            className="pointer-events-none absolute inset-0 hidden h-full w-full md:block"
            viewBox="0 0 1000 520"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path d="M120 520 C 150 230, 330 90, 500 80 C 670 90, 850 230, 880 520" fill="none" stroke="rgba(255,255,255,0.08)" />
            <path d="M40 520 C 80 180, 300 20, 500 12 C 700 20, 920 180, 960 520" fill="none" stroke="rgba(255,255,255,0.05)" />
          </svg>

          {/* chips */}
          <ChipColumn items={heroChips.left} side="left" />
          <ChipColumn items={heroChips.right} side="right" />

          {/* plate */}
          <div className="absolute left-1/2 top-4 w-[320px] -translate-x-1/2 sm:w-[400px] md:top-8 md:w-[520px]">
            <div className="relative aspect-square rounded-full bg-[#141413] p-3 shadow-[0_40px_120px_-20px_rgba(0,0,0,0.9),inset_0_0_0_1px_rgba(255,255,255,0.06)] md:p-5">
              <div key={i} className="plate-fade h-full w-full">
                <Photo
                  src={dish.image}
                  alt={dish.title}
                  eager
                  className="h-full w-full rounded-full"
                  imgClassName="scale-[1.08]"
                />
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-full shadow-[inset_0_0_60px_20px_rgba(10,10,9,0.75)]" />
            </div>
          </div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />

          {/* arrows */}
          <button
            onClick={() => go(-1)}
            aria-label="Previous dish"
            className="absolute bottom-24 left-0 grid h-11 w-11 place-items-center rounded-full border border-line bg-panel/80 text-bone/80 backdrop-blur transition hover:border-ember/60 hover:text-bone md:left-[12%]"
          >
            <Arrow className="h-4 w-4 rotate-180" />
          </button>
          <button
            onClick={() => go(1)}
            aria-label="Next dish"
            className="absolute bottom-24 right-0 grid h-11 w-11 place-items-center rounded-full border border-line bg-panel/80 text-bone/80 backdrop-blur transition hover:border-ember/60 hover:text-bone md:right-[12%]"
          >
            <Arrow className="h-4 w-4" />
          </button>

        </div>

        {/* caption */}
        <div className="relative -mt-10 pb-16 text-center md:pb-20" aria-live="polite">
          <p className="font-display text-lg text-bone/90 md:text-xl">{dish.title}</p>
          <p className="mt-1 text-sm text-mute">{dish.line}</p>
          <div className="mt-5 flex justify-center gap-2">
            {heroDishes.map((d, idx) => (
              <button
                key={d.title}
                onClick={() => setI(idx)}
                aria-label={`Show ${d.title}`}
                className={`h-1 rounded-full transition-all ${idx === i ? "w-8 bg-ember" : "w-3 bg-bone/20"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const glyphs: Record<string, React.ReactNode> = {
  "Demand Forecast": <path d="M3 17l5-5 4 3 7-8M15 7h4v4" />,
  "Batch Planning": <path d="M4 5h16M4 12h10M4 19h13" />,
  "Recipe Specs": <path d="M6 3h9l3 3v15H6zM9 10h6M9 14h6M9 18h4" />,
  "Cold Chain": <path d="M12 2v20M4 6l16 12M20 6L4 18" />,
  "HACCP Log": <path d="M5 12l4 4 10-10" />,
  Traceability: <path d="M5 6a2 2 0 1 0 0 .1M19 18a2 2 0 1 0 0 .1M7 6h5a3 3 0 0 1 0 6h-2a3 3 0 0 0 0 6h7" />,
};

function ChipColumn({ items, side }: { items: string[]; side: "left" | "right" }) {
  const offsets = side === "left" ? ["md:left-[14%]", "md:left-[8%]", "md:left-[4%]"] : ["md:right-[14%]", "md:right-[8%]", "md:right-[4%]"];
  const tops = ["md:top-[14%]", "md:top-[36%]", "md:top-[58%]"];
  return (
    <>
      {items.map((label, idx) => (
        <div
          key={label}
          className={`absolute hidden md:flex ${offsets[idx]} ${tops[idx]} items-center gap-2.5 rounded-xl border border-line bg-panel/85 py-2 pl-2 pr-4 text-sm text-bone/85 shadow-lg backdrop-blur`}
        >
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-ember/15 text-ember">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              {glyphs[label]}
            </svg>
          </span>
          {label}
        </div>
      ))}
    </>
  );
}
