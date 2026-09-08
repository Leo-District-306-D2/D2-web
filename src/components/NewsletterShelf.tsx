"use client";

import { useCallback, useEffect, useState } from "react";
import type { NewsletterIssue } from "@/lib/types";
import { issueTitle } from "@/data/newsletters";
import NewsletterCover from "./NewsletterCover";
import { ArrowRight, CloseIcon, DownloadIcon, ExternalLinkIcon, EyeIcon } from "./Icons";

/**
 * A grid of issues plus the preview modal.
 *
 * Client-side because the modal holds state. Keyboard and scroll-lock behaviour mirrors the
 * gallery lightbox in GalleryGrid.tsx so both overlays feel the same.
 */
export default function NewsletterShelf({
  issues,
  sourceName,
  featureFirst = false,
  variant = "grid",
}: {
  issues: NewsletterIssue[];
  sourceName: string;
  featureFirst?: boolean;
  /**
   * "grid" fills the row, for a full archive. "strip" lays fixed-width covers out like a
   * shelf, so a short back-issue list does not leave a stretched, half-empty row.
   */
  variant?: "grid" | "strip";
}) {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const move = useCallback(
    (dir: number) => setActive((cur) => (cur === null ? cur : (cur + dir + issues.length) % issues.length)),
    [issues.length],
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") move(1);
      if (e.key === "ArrowLeft") move(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close, move]);

  if (issues.length === 0) {
    return (
      <p className="card px-6 py-12 text-center text-muted">
        No newsletters have been published yet. Check back soon.
      </p>
    );
  }

  const current = active === null ? null : issues[active];
  const previewSrc = current?.previewUrl ?? current?.file;

  return (
    <>
      <div
        className={
          variant === "strip"
            ? "flex flex-wrap gap-6"
            : `grid gap-6 sm:grid-cols-2 ${featureFirst ? "lg:grid-cols-3" : "lg:grid-cols-4"}`
        }
      >
        {issues.map((issue, i) => {
          // Readable covers both a local PDF and an external flipbook; only a real file
          // can be downloaded.
          const canRead = Boolean(issue.previewUrl ?? issue.file);
          const canDownload = Boolean(issue.file);
          return (
            <div
              key={issue.month}
              className={`card card-hover group overflow-hidden ${
                variant === "strip" ? "w-44 shrink-0" : ""
              }`}
            >
              <button
                type="button"
                onClick={() => setActive(i)}
                disabled={!canRead}
                aria-label={`Preview ${issueTitle(issue)}`}
                className="relative block aspect-[210/297] w-full overflow-hidden bg-brand-dark disabled:cursor-default"
              >
                <NewsletterCover issue={issue} />
                {canRead && (
                  <span className="absolute inset-0 flex items-center justify-center bg-brand-dark/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-sm font-semibold text-brand">
                      <EyeIcon className="h-4 w-4" /> Preview
                    </span>
                  </span>
                )}
              </button>

              <div className="flex items-center justify-between gap-3 border-t border-black/5 p-4">
                <p className="min-w-0 truncate font-display font-semibold text-ink">{issueTitle(issue)}</p>
                {canDownload ? (
                  <a
                    href={issue.file}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Download ${issueTitle(issue)}`}
                    className="inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-brand-50 px-3 py-1.5 text-xs font-semibold text-brand transition-colors hover:bg-brand hover:text-white"
                  >
                    <DownloadIcon className="h-4 w-4" /> PDF
                  </a>
                ) : canRead ? (
                  <span className="inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-brand-50 px-3 py-1.5 text-xs font-semibold text-brand">
                    <EyeIcon className="h-4 w-4" /> Read
                  </span>
                ) : (
                  <span className="shrink-0 text-xs font-semibold uppercase tracking-wide text-muted">
                    Coming soon
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Preview modal */}
      {current && previewSrc && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          onClick={close}
        >
          <button
            aria-label="Close"
            onClick={close}
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
          >
            <CloseIcon />
          </button>
          {issues.length > 1 && (
            <>
              <button
                aria-label="Previous newsletter"
                onClick={(e) => { e.stopPropagation(); move(-1); }}
                className="absolute left-3 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 md:left-8"
              >
                <ArrowRight className="h-6 w-6 rotate-180" />
              </button>
              <button
                aria-label="Next newsletter"
                onClick={(e) => { e.stopPropagation(); move(1); }}
                className="absolute right-3 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 md:right-8"
              >
                <ArrowRight className="h-6 w-6" />
              </button>
            </>
          )}

          {/* An explicit height is required: with only max-h the column sizes to its content and
                the iframe, which has no intrinsic height, collapses to a thin band. */}
          <div className="flex h-[90vh] w-full max-w-4xl flex-col" onClick={(e) => e.stopPropagation()}>
            <div className="mb-3 text-center text-white">
              <p className="font-display text-lg font-semibold">{issueTitle(current)}</p>
              <p className="text-sm text-white/60">{sourceName}</p>
            </div>
            {/* Browsers render PDFs in an iframe on desktop; the links below are the fallback
                for mobile Safari, which often refuses to. */}
            <iframe
              src={previewSrc}
              title={`${issueTitle(current)} preview`}
              className="min-h-0 w-full flex-1 rounded-lg border-0 bg-white"
            />
            <div className="mt-3 flex flex-wrap justify-center gap-3">
              {current.file && (
                <a
                  href={current.file}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-brand hover:bg-white/90"
                >
                  <DownloadIcon className="h-4 w-4" /> Download
                </a>
              )}
              <a
                href={previewSrc}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/20"
              >
                <ExternalLinkIcon className="h-4 w-4" /> Open in new tab
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
