import Header, { Arrow } from "@/components/Header";
import Hero from "@/components/Hero";
import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";
import Logo from "@/components/Logo";
import ContactForm from "@/components/ContactForm";
import { about, capabilities, faqs, nav, partners, platform, quality, site, stats } from "@/content";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <About />
        <Platform />
        <Capabilities />
        <Quality />
        <Partners />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-ember">
      <span className="h-px w-6 bg-ember" />
      {children}
    </span>
  );
}

function SectionTitle({ eyebrow, title, intro, center }: { eyebrow: string; title: string; intro?: string; center?: boolean }) {
  return (
    <Reveal className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-5 font-display text-3xl font-medium leading-tight tracking-tight md:text-5xl">{title}</h2>
      {intro && <p className="mt-5 text-base leading-relaxed text-bone/60 md:text-lg">{intro}</p>}
    </Reveal>
  );
}

function Stats() {
  return (
    <section className="border-y border-line bg-coal">
      <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`px-5 py-9 md:px-8 md:py-12 ${i % 2 === 1 ? "border-l border-line" : ""} ${
              i >= 2 ? "border-t border-line md:border-t-0" : ""
            } ${i === 2 ? "md:border-l" : ""}`}
          >
            <div className="font-display text-3xl font-medium text-bone md:text-5xl">{s.value}</div>
            <div className="mt-2 text-sm text-mute">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 md:px-8 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative">
          <Photo src={about.image} alt={about.imageAlt} className="aspect-[4/5] rounded-3xl" />
          <div className="absolute -bottom-6 right-4 max-w-[240px] rounded-2xl border border-line bg-panel/90 p-5 backdrop-blur md:-right-6">
            <div className="text-xs uppercase tracking-[0.18em] text-mute">Today on the line</div>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="font-display text-3xl">11,480</span>
              <span className="text-xs text-ember">portions</span>
            </div>
            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-line">
              <div className="h-full w-[72%] rounded-full bg-ember" />
            </div>
            <div className="mt-2 text-xs text-mute">72% of forecast · on schedule</div>
          </div>
        </Reveal>
        <div>
          <SectionTitle eyebrow={about.eyebrow} title={about.title} />
          <Reveal delay={100}>
            {about.body.map((p) => (
              <p key={p.slice(0, 24)} className="mt-6 leading-relaxed text-bone/65">
                {p}
              </p>
            ))}
            <ul className="mt-8 grid gap-3">
              {about.points.map((p) => (
                <li key={p} className="flex items-center gap-3 text-sm text-bone/85">
                  <span className="grid h-5 w-5 place-items-center rounded-full border border-ember/50">
                    <span className="h-1.5 w-1.5 rounded-full bg-ember" />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Platform() {
  return (
    <section id="platform" className="relative scroll-mt-20 overflow-hidden border-t border-line bg-coal py-24 md:py-32">
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent_70%)]" />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <SectionTitle eyebrow={platform.eyebrow} title={platform.title} intro={platform.intro} />
          <Reveal className="w-full max-w-sm shrink-0">
            <Photo src={platform.image} alt="Production analytics dashboard" className="aspect-[16/10] rounded-2xl border border-line" imgClassName="opacity-80 grayscale-[30%]" />
          </Reveal>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
          {platform.modules.map((m, i) => (
            <Reveal key={m.key} delay={(i % 3) * 80} className="group bg-coal p-7 transition-colors hover:bg-panel md:p-9">
              <div className="flex items-center justify-between">
                <span className="font-display text-sm text-mute">0{i + 1}</span>
                <span className="rounded-full border border-ember/30 bg-ember/10 px-3 py-1 text-xs text-ember">{m.metric}</span>
              </div>
              <h3 className="mt-8 font-display text-xl font-medium md:text-2xl">{m.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-bone/60">{m.text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16">
          <ol className="grid gap-4 md:grid-cols-5 md:gap-0">
            {platform.flow.map((f, i) => (
              <li key={f.step} className="relative md:pr-6">
                <div className="flex items-center gap-3">
                  <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border text-xs ${i === 2 ? "border-ember bg-ember text-ink" : "border-line bg-panel text-bone/80"}`}>
                    {i + 1}
                  </span>
                  {i < platform.flow.length - 1 && <span className="hidden h-px flex-1 bg-gradient-to-r from-line to-transparent md:block" />}
                </div>
                <div className="mt-4 font-display text-lg">{f.step}</div>
                <p className="mt-1 text-sm text-mute">{f.text}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}

function Capabilities() {
  return (
    <section id="capabilities" className="scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionTitle eyebrow={capabilities.eyebrow} title={capabilities.title} />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.items.map((c, i) => (
            <Reveal key={c.name} delay={i * 80}>
              <article className="group relative overflow-hidden rounded-3xl border border-line">
                <Photo src={c.image} alt={c.name} className="aspect-[3/4]" imgClassName="group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="font-display text-xl font-medium">{c.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-bone/65">{c.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {capabilities.services.map((s, i) => (
            <Reveal key={s.name} delay={i * 80} className="rounded-3xl border border-line bg-coal p-7 md:p-8">
              <h3 className="font-display text-lg font-medium">{s.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-bone/60">{s.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Quality() {
  return (
    <section id="quality" className="scroll-mt-20 border-t border-line bg-coal py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <div>
            <SectionTitle eyebrow={quality.eyebrow} title={quality.title} intro={quality.intro} />
            <Reveal delay={100} className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line">
              {quality.figures.map((f) => (
                <div key={f.label} className="bg-coal p-6">
                  <div className="font-display text-3xl text-ember">{f.value}</div>
                  <div className="mt-2 text-xs leading-relaxed text-mute">{f.label}</div>
                </div>
              ))}
            </Reveal>
          </div>
          <Reveal className="relative hidden lg:block">
            <Photo src={quality.image} alt="Chef inspecting dishes in a commercial kitchen" className="h-full min-h-[460px] rounded-3xl" />
            <div className="absolute left-5 top-5 rounded-full border border-line bg-ink/80 px-4 py-2 text-xs text-bone/80 backdrop-blur">
              <span className="mr-2 inline-block h-2 w-2 rounded-full bg-emerald-400" />
              All CCPs within limits
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {quality.certifications.map((c, i) => (
            <Reveal key={c.code} delay={(i % 4) * 60}>
              <div className="flex h-full items-start gap-4 rounded-2xl border border-line bg-ink/50 p-5 transition-colors hover:border-ember/40">
                <Seal />
                <div>
                  <div className="font-display text-lg font-medium tracking-wide">{c.code}</div>
                  <div className="mt-1 text-xs text-bone/60">{c.name}</div>
                  <div className="mt-2 text-[11px] uppercase tracking-[0.14em] text-ember/80">{c.note}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Seal() {
  return (
    <svg viewBox="0 0 40 40" className="h-10 w-10 shrink-0 text-ember" fill="none" aria-hidden="true">
      <circle cx="20" cy="20" r="17" stroke="currentColor" strokeOpacity=".35" strokeDasharray="2 3" />
      <circle cx="20" cy="20" r="12" stroke="currentColor" strokeWidth="1.4" />
      <path d="M14.5 20.5l3.5 3.5 7.5-8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Partners() {
  return (
    <section id="partners" className="scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionTitle eyebrow={partners.eyebrow} title={partners.title} intro={partners.intro} />
        <div className="mt-14 grid gap-5 lg:grid-cols-[1fr_1.2fr]">
          <Reveal className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line bg-line">
            {partners.sectors.map((s) => (
              <div key={s.name} className="flex flex-col justify-between bg-ink p-6 md:p-7">
                <div className="font-display text-3xl font-medium md:text-4xl">{s.count}</div>
                <div className="mt-6 text-sm text-bone/65">{s.name}</div>
              </div>
            ))}
          </Reveal>
          <Reveal delay={100} className="flex flex-col gap-5">
            <div className="grid grid-cols-3 gap-3">
              {partners.gallery.map((g, i) => (
                <Photo key={g} src={g} alt={`Partner dish ${i + 1}`} className="aspect-square rounded-2xl" />
              ))}
            </div>
            <figure className="flex-1 rounded-3xl border border-line bg-coal p-7 md:p-9">
              <svg viewBox="0 0 32 24" className="h-6 w-8 text-ember" fill="currentColor" aria-hidden="true">
                <path d="M0 24V14C0 6 4 1 12 0l1 3c-4 1-6 4-6 8h5v13zm18 0V14c0-8 4-13 12-14l1 3c-4 1-6 4-6 8h5v13z" />
              </svg>
              <blockquote className="mt-5 font-display text-xl leading-snug text-bone/90 md:text-2xl">{partners.quote.text}</blockquote>
              <figcaption className="mt-5 text-sm text-mute">— {partners.quote.who}</figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section id="faq" className="scroll-mt-20 border-t border-line bg-coal py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-[1fr_1.5fr]">
        <SectionTitle eyebrow="FAQs" title="Questions partners ask us." />
        <Reveal className="divide-y divide-line border-y border-line">
          {faqs.map((f) => (
            <details key={f.q} className="group py-2">
              <summary className="flex cursor-pointer items-center justify-between gap-6 py-4 font-display text-lg text-bone/90 hover:text-bone">
                {f.q}
                <span className="faq-icon grid h-8 w-8 shrink-0 place-items-center rounded-full border border-line text-ember transition-transform">
                  +
                </span>
              </summary>
              <p className="pb-5 pr-12 text-sm leading-relaxed text-bone/60">{f.a}</p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-20 overflow-hidden py-24 md:py-32">
      <div className="ember-glow pointer-events-none absolute inset-0" />
      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 md:px-8 lg:grid-cols-2">
        <div>
          <SectionTitle
            eyebrow="Contact"
            title="Let's plan your next production run."
            intro="Tell us what you need to produce and at what volume. Our team will come back within one business day with next steps and, where useful, a pilot batch proposal."
          />
          <Reveal delay={100} className="mt-10 space-y-4 text-sm">
            <a href={`mailto:${site.email}`} className="flex items-center gap-3 text-bone/85 hover:text-ember">
              <span className="grid h-9 w-9 place-items-center rounded-full border border-line text-ember">
                <Arrow />
              </span>
              {site.email}
            </a>
          </Reveal>
        </div>
        <Reveal delay={100} className="rounded-3xl border border-line bg-coal/80 p-6 backdrop-blur md:p-10">
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-4 text-sm text-mute">
              {site.full}. {site.tagline}
              <br />
              {site.taglineZh}
            </p>
          </div>
          <ul className="grid grid-cols-2 gap-x-12 gap-y-3 text-sm text-bone/70 sm:grid-cols-3">
            {[...nav, { label: "Contact", href: "#contact" }].map((n) => (
              <li key={n.href}>
                <a href={n.href} className="hover:text-bone">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-12 flex flex-col justify-between gap-3 border-t border-line pt-6 text-xs text-mute sm:flex-row">
          <span>© {new Date().getFullYear()} AIKO. All rights reserved.</span>
          <span>Food processing · Central kitchen · AI operations</span>
        </div>
      </div>
    </footer>
  );
}
