import Link from "next/link";
import type { NewsletterSource } from "@/lib/types";
import { formatMonth, latestIssue } from "@/data/newsletters";
import { ArrowRight, FileTextIcon } from "./Icons";

/**
 * The club shelf on the rack page. A club with no issues is rendered greyed and is not a
 * link, so nobody clicks through into an empty archive.
 */
export default function ClubNewsletterGrid({ sources }: { sources: NewsletterSource[] }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {sources.map((source) => {
        const latest = latestIssue(source);
        const count = source.issues.length;

        const inner = (
          <>
            <span
              className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                latest ? "bg-brand text-white" : "bg-brand-50 text-brand"
              }`}
            >
              <FileTextIcon className="h-5 w-5" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="font-display font-semibold text-ink">{source.name}</p>
              {latest ? (
                <>
                  <p className="mt-1 text-sm text-muted">
                    Latest: <span className="font-medium text-ink">{formatMonth(latest.month)}</span>
                  </p>
                  <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-brand">
                    {count} {count === 1 ? "newsletter" : "newsletters"}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </>
              ) : (
                <p className="mt-1 text-sm text-muted">No newsletters yet</p>
              )}
            </div>
          </>
        );

        return latest ? (
          <Link
            key={source.slug}
            href={`/newsletters/${source.slug}`}
            className="card card-hover flex items-start gap-4 p-5"
          >
            {inner}
          </Link>
        ) : (
          <div key={source.slug} className="card flex items-start gap-4 p-5 opacity-70">
            {inner}
          </div>
        );
      })}
    </div>
  );
}
