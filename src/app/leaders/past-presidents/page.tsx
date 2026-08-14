import type { Metadata } from "next";
import Image from "next/image";
import { pastPresidents } from "@/data/pastPresidents";

export const metadata: Metadata = {
  title: "Past District Presidents",
  description:
    "Honoring the legacy of leadership and service from the distinguished past district presidents of LEO District 306 D2, 2005/06 to 2024/25.",
};

export default function PastPresidentsPage() {
  return (
    <>
      <section className="bg-brand-dark py-16 text-white md:py-20">
        <div className="container-page text-center">
          <span className="eyebrow text-gold!"><span className="h-px w-6 bg-current" /> Legacy of Leadership</span>
          <h1 className="mt-3 font-display text-4xl font-extrabold sm:text-5xl">Past District Presidents</h1>
          <p className="mx-auto mt-4 max-w-2xl text-white/70">
            Honoring the legacy of leadership and service from our distinguished past district presidents who have
            shaped our organization&apos;s history.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-page grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pastPresidents.map((p) => (
            <article key={p.term} className="card card-hover overflow-hidden">
              <div className="relative aspect-[4/5] bg-brand-50">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-top"
                />
                <span className="absolute right-3 top-3 rounded-full bg-brand px-3 py-1 text-xs font-bold text-white shadow">
                  {p.term}
                </span>
                <span className="absolute bottom-3 left-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-white/95 p-1 shadow">
                  <Image src={p.logo} alt={`${p.term} term logo`} width={44} height={44} className="h-full w-auto object-contain" />
                </span>
              </div>
              <div className="p-5">
                <h2 className="font-display text-lg font-semibold leading-snug text-ink">{p.name}</h2>
                <p className="mt-1 text-sm text-brand">{p.homeClub}</p>
                <p className="mt-3 border-t border-black/5 pt-3 text-xs font-medium uppercase tracking-wide text-gold-dark">
                  {p.motto}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
