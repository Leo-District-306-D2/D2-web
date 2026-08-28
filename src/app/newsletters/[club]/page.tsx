import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import NewsletterShelf from "@/components/NewsletterShelf";
import { ArrowRight } from "@/components/Icons";
import { findSource, newsletterSources, sortedIssues } from "@/data/newsletters";

// One page per publisher. "district" is just another source, so it is served by this route
// too and needs no separate implementation.
export function generateStaticParams() {
  return newsletterSources.map((s) => ({ club: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ club: string }>;
}): Promise<Metadata> {
  const { club } = await params;
  const source = findSource(club);
  if (!source) return { title: "Newsletters" };
  return {
    title: `${source.name} Newsletters`,
    description: `Monthly newsletters published by ${source.name}.`,
  };
}

export default async function NewsletterSourcePage({
  params,
}: {
  params: Promise<{ club: string }>;
}) {
  const { club } = await params;
  const source = findSource(club);
  if (!source) notFound();

  const issues = sortedIssues(source);
  const isDistrict = source.scope === "district";

  return (
    <>
      <section className="bg-brand-dark py-16 text-white md:py-20">
        <div className="container-page text-center">
          <Link
            href="/newsletters"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold-light hover:text-white"
          >
            <ArrowRight className="h-4 w-4 rotate-180" /> Newsletter Rack
          </Link>
          <h1 className="mt-3 font-display text-4xl font-extrabold sm:text-5xl">{source.name}</h1>
          <p className="mx-auto mt-4 max-w-2xl text-white/70">
            {isDistrict
              ? "Every newsletter published by the district, newest first."
              : `Monthly newsletters published by ${source.name}.`}
          </p>
          {issues.length > 0 && (
            <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-gold-light">
              {issues.length} {issues.length === 1 ? "newsletter" : "newsletters"}
            </p>
          )}
        </div>
      </section>

      <section className="py-16">
        <div className="container-page">
          <NewsletterShelf issues={issues} sourceName={source.name} featureFirst={isDistrict} />
        </div>
      </section>
    </>
  );
}
