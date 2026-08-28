import type { Metadata } from "next";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import StatCounter from "@/components/StatCounter";
import { StarIcon } from "@/components/Icons";
import { about } from "@/data/about";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "About LEO District 306 D2  our mission, vision, formation journey, and place in the global Leo movement.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-dark py-16 text-white md:py-20">
        <div className="container-page text-center">
          <h1 className="font-display text-4xl font-extrabold sm:text-5xl">{about.hero.title}</h1>
          <p className="mx-auto mt-4 max-w-2xl text-white/70">{about.hero.subtitle}</p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container-page grid gap-6 md:grid-cols-2">
          <div className="card border-t-4 border-t-brand p-8">
            <h2 className="font-display text-2xl font-bold text-brand">Our Mission</h2>
            <p className="mt-4 leading-relaxed text-muted">{about.mission}</p>
          </div>
          <div className="card border-t-4 border-t-gold p-8">
            <h2 className="font-display text-2xl font-bold text-gold-dark">Our Vision</h2>
            <p className="mt-4 leading-relaxed text-muted">{about.vision}</p>
          </div>
        </div>
      </section>

      {/* Formation journey timeline */}
      <section className="bg-surface py-20">
        <div className="container-page">
          <SectionHeading title="District 306 D2 Formation Journey" subtitle="Our path to excellence in leadership development." />
          <ol className="relative mt-14 border-l-2 border-brand-100 pl-8 md:mx-auto md:max-w-3xl">
            {about.formationJourney.map((e) => (
              <li key={e.year} className="relative mb-10 last:mb-0">
                <span className="absolute -left-[41px] flex h-8 w-8 items-center justify-center rounded-full bg-brand text-xs font-bold text-white ring-4 ring-surface">
                  ●
                </span>
                <span className="font-display text-lg font-bold text-gold-dark">{e.year}</span>
                <h3 className="mt-1 font-display text-xl font-semibold text-ink">{e.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{e.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Key achievements */}
      <section className="py-20">
        <div className="container-page">
          <SectionHeading title="District 306 D2 Key Achievements" subtitle="Milestones that reflect our impact and growth." />
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {about.achievements.map((a) => (
              <div key={a.label} className="card p-8 text-center">
                <StatCounter value={a.value} className="font-display text-4xl font-extrabold text-brand" />
                <p className="mt-1 font-semibold text-ink">{a.label}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{a.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global movement */}
      <section className="bg-brand py-20 text-white">
        <div className="container-page">
          <SectionHeading light title="Part of a Global Movement" subtitle="Leo District 306 D2 is part of the worldwide Leo family under Lions Clubs International." />
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {about.globalMovement.map((g) => (
              <div key={g.title} className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur">
                <p className="font-display text-4xl font-extrabold text-gold">{g.year}</p>
                <p className="mt-2 font-semibold">{g.title}</p>
                <p className="mt-1 text-sm text-white/60">{g.detail}</p>
              </div>
            ))}
          </div>

          {/* Official affiliations */}
          <div className="mt-14">
            <p className="text-center text-sm font-semibold uppercase tracking-wider text-white/60">
              In affiliation with
            </p>
            <div className="mx-auto mt-6 flex max-w-4xl flex-wrap items-center justify-center gap-5">
              {[
                { src: site.logos.lions, alt: "Lions Clubs International", w: 150 },
                { src: site.logos.leoLion, alt: "Leo-Lion", w: 170 },
                { src: site.logos.wordmark, alt: "Leos of Sri Lanka & Maldives", w: 260 },
              ].map((logo) => (
                <div key={logo.alt} className="flex h-24 items-center justify-center rounded-2xl bg-white px-6 shadow-sm">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.w}
                    height={80}
                    className="h-14 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20">
        <div className="container-page">
          <SectionHeading title="District 306 D2 Milestones" subtitle="Key achievements in our journey of leadership development." />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {about.milestones.map((m) => (
              <div key={m.title} className="card card-hover flex gap-4 p-6">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand">
                  <StarIcon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink">{m.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{m.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
