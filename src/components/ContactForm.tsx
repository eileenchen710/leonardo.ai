"use client";

import { useState } from "react";
import { site } from "@/content";
import { Arrow } from "./Header";

const interests = ["Central kitchen supply", "Private label / OEM", "Institutional catering", "Something else"];

// No backend yet: the form composes an email in the visitor's mail client.
export default function ContactForm() {
  const [interest, setInterest] = useState(interests[0]);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = [
      `Name: ${f.get("name")}`,
      `Company: ${f.get("company")}`,
      `Email: ${f.get("email")}`,
      `Interest: ${interest}`,
      "",
      `${f.get("message")}`,
    ].join("\n");
    const subject = `Partnership enquiry — ${f.get("company") || f.get("name")}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  const field =
    "w-full rounded-xl border border-line bg-ink/60 px-4 py-3 text-sm text-bone placeholder:text-bone/30 outline-none transition focus:border-ember/70";

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className="flex flex-wrap gap-2">
        {interests.map((it) => (
          <button
            type="button"
            key={it}
            onClick={() => setInterest(it)}
            className={`rounded-full border px-3.5 py-1.5 text-xs transition ${
              interest === it ? "border-ember bg-ember text-ink" : "border-line text-bone/70 hover:border-bone/40"
            }`}
          >
            {it}
          </button>
        ))}
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1.5 text-xs text-mute">
          Name
          <input name="name" required autoComplete="name" className={field} placeholder="Your name" />
        </label>
        <label className="grid gap-1.5 text-xs text-mute">
          Company
          <input name="company" autoComplete="organization" className={field} placeholder="Company" />
        </label>
      </div>
      <label className="grid gap-1.5 text-xs text-mute">
        Work email
        <input name="email" type="email" required autoComplete="email" className={field} placeholder="name@company.com" />
      </label>
      <label className="grid gap-1.5 text-xs text-mute">
        What are you looking to produce?
        <textarea name="message" rows={4} className={field} placeholder="Products, volumes, formats, timing…" />
      </label>
      <button
        type="submit"
        className="group mt-2 inline-flex w-fit items-center gap-3 rounded-full bg-ember py-2 pl-5 pr-2 text-sm font-medium text-ink transition hover:bg-ember-soft"
      >
        Send enquiry
        <span className="grid h-8 w-8 place-items-center rounded-full bg-ink text-ember transition-transform group-hover:translate-x-0.5">
          <Arrow />
        </span>
      </button>
    </form>
  );
}
