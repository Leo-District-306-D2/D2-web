import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import NewsletterCover from "@/components/NewsletterCover";
import NewsletterShelf from "@/components/NewsletterShelf";
import ClubNewsletterGrid from "@/components/ClubNewsletterGrid";
import { ArrowRight, DownloadIcon, EyeIcon } from "@/components/Icons";
import { clubNewsletters, districtNewsletter, issueTitle, sortedIssues } from "@/data/newsletters";

export const metadata: Metadata = {
  title: "Newsletter Rack",
  description:
    "Monthly newsletters from LEO District 306 D2 and its member clubs, available to read and download.",
};

export default function NewslettersPage() {
  const districtIssues = sortedIssues(districtNewsletter);
  const [latest, ...backIssues] = districtIssues;

  return (
    <>
      <section className="bg-brand-dark py-16 text-white md:py-20">
        <div className="container-page text-center">
          <h1 className="font-display text-4xl font-extrabold sm:text-5xl">Newsletter Rack</h1>
          <p className="mx-auto mt-4 max-w-2xl text-white/70">
            Every month, the district and our clubs publish what they have been up to. Read them all here.
          </p>
        </div>
      </section>

      {/* District newsletter, given the lead position */}
      <section className="py-16">
        <div className="container-page">
          <SectionHeading
            title="District Newsletter"
            subtitle="The official monthly newsletter of LEO District 306 D2."
          />

          {latest ? (
            <div className="mt-10 grid items-center gap-8 lg:grid-cols-[minmax(0,20rem)_1fr]">
              <div className="card relative mx-auto aspect-[210/297] w-full max-w-xs overflow-hidden bg-brand-dark lg:mx-0">
                <NewsletterCover issue={latest} featured sizes="(max-width: 1024px) 80vw, 20rem" />
              </div>
              <div>
                <span className="inline-block rounded-full bg-gold/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-gold-dark">
                  Latest newsletter
                </span>
                <h3 className="mt-3 font-display text-3xl font-bold text-ink">{issueTitle(latest)}</h3>
                <p className="mt-3 max-w-xl leading-relaxed text-muted">
                  Highlights, project reports and announcements from across the district.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {latest.file ? (
                    <>
                      <Link href="/newsletters/district" className="btn btn-slate">
                        <EyeIcon className="h-4 w-4" /> Read this newsletter
                      </Link>
                      <a href={latest.file} download target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                        <DownloadIcon className="h-4 w-4" /> Download
                      </a>
                    </>
                  ) : (
                    <span className="rounded-lg bg-brand-50 px-4 py-2.5 text-sm font-semibold text-brand">
                      This newsletter is being prepared
                    </span>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <p className="card mt-10 px-6 py-12 text-center text-muted">
              The district newsletter archive is being set up. Check back soon.
            </p>
          )}

          {backIssues.length > 0 && (
            <div className="mt-14">
              <div className="mb-6 flex items-center justify-between gap-4">
                <h3 className="font-display text-xl font-bold text-ink">Previous newsletters</h3>
                <Link
                  href="/newsletters/district"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-brand hover:underline"
                >
                  View all <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <NewsletterShelf issues={backIssues} sourceName={districtNewsletter.name} variant="strip" />
            </div>
          )}
        </div>
      </section>

      {/* Club newsletters */}
      <section className="bg-surface py-16">
        <div className="container-page">
          <SectionHeading
            title="Club Newsletters"
            subtitle="Pick a club to browse its monthly newsletters."
          />
          <div className="mt-10">
            <ClubNewsletterGrid sources={clubNewsletters} />
          </div>
        </div>
      </section>
    </>
  );
}
