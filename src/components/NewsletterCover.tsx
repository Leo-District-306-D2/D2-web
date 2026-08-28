import Image from "next/image";
import type { NewsletterIssue } from "@/lib/types";
import { formatMonth } from "@/data/newsletters";

/**
 * An issue's cover art. Falls back to a generated brand panel showing the month, so the
 * rack looks finished before any real cover images exist.
 */
export default function NewsletterCover({
  issue,
  featured = false,
  sizes = "(max-width: 640px) 100vw, 33vw",
}: {
  issue: NewsletterIssue;
  featured?: boolean;
  sizes?: string;
}) {
  if (issue.cover) {
    return (
      <Image
        src={issue.cover}
        alt={issue.title ?? formatMonth(issue.month)}
        fill
        sizes={sizes}
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
    );
  }

  const [year, month] = issue.month.split("-");
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-brand via-brand-deep to-brand-dark text-white">
      <span className={`font-display font-extrabold tracking-tight ${featured ? "text-6xl" : "text-4xl"}`}>
        {month}
      </span>
      <span className={`mt-1 font-semibold text-gold-light ${featured ? "text-lg" : "text-sm"}`}>{year}</span>
      <span className="mt-3 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-white/50">
        Newsletter
      </span>
    </div>
  );
}
