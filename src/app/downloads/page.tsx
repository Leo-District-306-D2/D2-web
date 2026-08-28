import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import { DownloadIcon } from "@/components/Icons";
import { downloadCategories } from "@/data/downloads";

export const metadata: Metadata = {
  title: "Downloads",
  description: "Official documents, forms, and branding resources for LEO District 306 D2.",
};

export default function DownloadsPage() {
  return (
    <>
      <section className="bg-brand-dark py-16 text-white md:py-20">
        <div className="container-page text-center">
          <h1 className="font-display text-4xl font-extrabold sm:text-5xl">Downloads</h1>
          <p className="mx-auto mt-4 max-w-2xl text-white/70">
            Official documents, forms, and branding resources for clubs and officers.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-page space-y-14">
          {downloadCategories.map((cat) => (
            <div key={cat.title}>
              <SectionHeading align="left" title={cat.title} />
              <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {cat.files.map((file) => {
                  const available = Boolean(file.href);
                  const inner = (
                    <>
                      <span
                        className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                          available ? "bg-brand text-white" : "bg-brand-50 text-brand"
                        }`}
                      >
                        <DownloadIcon className="h-5 w-5" />
                      </span>
                      <div className="min-w-0">
                        <p className="font-display font-semibold text-ink">{file.name}</p>
                        <p className="mt-1 text-sm text-muted">{file.description}</p>
                        <span
                          className={`mt-2 inline-block text-xs font-semibold uppercase tracking-wide ${
                            available ? "text-brand" : "text-muted"
                          }`}
                        >
                          {available ? `Download${file.type ? ` · ${file.type}` : ""}` : "Coming soon"}
                        </span>
                      </div>
                    </>
                  );
                  return available ? (
                    <a
                      key={file.name}
                      href={file.href}
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card card-hover flex cursor-pointer items-start gap-4 p-5"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div key={file.name} className="card flex items-start gap-4 p-5 opacity-75">
                      {inner}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
