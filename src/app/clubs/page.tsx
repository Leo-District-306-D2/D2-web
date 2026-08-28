import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import ClubsExplorer from "@/components/ClubsExplorer";
import { allClubs, regions } from "@/data/clubs";

export const metadata: Metadata = {
  title: "Clubs",
  description:
    "Explore the organizational structure of LEO District 306 D2 across three regions and six zones.",
};

const glance = [
  { value: regions.length, label: "Regions" },
  { value: regions.reduce((n, r) => n + r.zones.length, 0), label: "Zones" },
  { value: allClubs.length, label: "Total Clubs" },
];

export default function ClubsPage() {
  return (
    <>
      <section className="bg-brand-dark py-16 text-white md:py-20">
        <div className="container-page text-center">
          <h1 className="font-display text-4xl font-extrabold sm:text-5xl">Our LEO Clubs</h1>
          <p className="mx-auto mt-4 max-w-2xl text-white/70">
            Discover our organizational structure across three dynamic regions and six vibrant zones.
          </p>
        </div>
      </section>

      {/* At a glance */}
      <section className="py-16">
        <div className="container-page">
          <SectionHeading title="Spanning multiple regions with dedicated leadership" />
          <div className="mx-auto mt-10 grid max-w-3xl grid-cols-3 gap-4">
            {glance.map((g) => (
              <div key={g.label} className="card p-6 text-center">
                <p className="font-display text-3xl font-extrabold text-brand sm:text-4xl">{g.value}</p>
                <p className="mt-1 text-sm font-medium text-muted">{g.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-muted">
            <span className="font-semibold text-ink">LEO District 306 D2</span> · Established 2025 · Sri Lanka &amp; Maldives
          </p>
        </div>
      </section>

      {/* Explorer */}
      <section className="bg-surface py-16">
        <div className="container-page">
          <SectionHeading title="Select a Region" subtitle="Browse zones, directors, and member clubs region by region." />
          <div className="mt-10">
            <ClubsExplorer regions={regions} />
          </div>
        </div>
      </section>

      {/* Full district overview */}
      <section className="py-16">
        <div className="container-page">
          <SectionHeading title="District Overview" subtitle="Complete structure of LEO District 306 D2 across all regions." />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {regions.map((r) => (
              <div key={r.id} className="card p-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-xl font-bold text-brand">{r.name}</h3>
                  <span className="rounded-full bg-brand px-3 py-1 text-xs font-bold text-white">
                    {r.zones.reduce((n, z) => n + z.clubs.length, 0)} Clubs
                  </span>
                </div>
                <p className="mt-1 text-sm text-muted">
                  Director: <span className="font-medium text-ink">{r.director.replace(/^Leo /, "")}</span>
                </p>
                <ul className="mt-4 space-y-3">
                  {r.zones.map((z) => (
                    <li key={z.id} className="rounded-lg bg-surface p-3">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-ink">Zone {z.id}</span>
                        <span className="text-xs text-muted">{z.clubs.length} clubs</span>
                      </div>
                      <p className="mt-0.5 text-xs text-muted">Director: {z.director.replace(/^Leo /, "")}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
