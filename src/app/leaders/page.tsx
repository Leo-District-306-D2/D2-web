import type { Metadata } from "next";
import Link from "next/link";
import LeaderCard from "@/components/LeaderCard";
import { ArrowRight } from "@/components/Icons";
import { leaderGroups } from "@/data/leaders";

export const metadata: Metadata = {
  title: "Current Leaders",
  description:
    "Meet the district executive officers, council officers, coordinators, region/zone directors, and district directors of LEO District 306 D2.",
};

export default function LeadersPage() {
  return (
    <>
      <section className="bg-brand-dark py-16 text-white md:py-20">
        <div className="container-page text-center">
          <span className="eyebrow text-gold!"><span className="h-px w-6 bg-current" /> Our Leaders</span>
          <h1 className="mt-3 font-display text-4xl font-extrabold sm:text-5xl">Our Leaders</h1>
          <p className="mx-auto mt-4 max-w-2xl text-white/70">
            Dedicated leaders who guide LEO District 306 D2 towards excellence through visionary leadership and
            unwavering commitment to community service.
          </p>
          <Link href="/leaders/past-presidents" className="btn btn-gold mt-7">
            Past District Presidents <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {leaderGroups.map((group, gi) => (
        <section key={group.section} className={gi % 2 === 1 ? "bg-surface py-16" : "py-16"}>
          <div className="container-page">
            <div className="mb-8 flex items-center gap-4">
              <h2 className="font-display text-2xl font-bold text-ink">{group.section}</h2>
              <span className="h-px flex-1 bg-black/10" />
            </div>
            <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
              {group.members.map((leader) => (
                <LeaderCard key={`${leader.name}-${leader.title}`} leader={leader} />
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
