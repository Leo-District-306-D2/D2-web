import type { Metadata } from "next";
import GalleryGrid from "@/components/GalleryGrid";
import { galleryItems, galleryStats } from "@/data/gallery";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Capturing moments of service, leadership, and community impact across LEO District 306 D2.",
};

export default function GalleryPage() {
  return (
    <>
      <section className="bg-brand-dark py-16 text-white md:py-20">
        <div className="container-page text-center">
          <span className="eyebrow text-gold!"><span className="h-px w-6 bg-current" /> Projects Gallery</span>
          <h1 className="mt-3 font-display text-4xl font-extrabold sm:text-5xl">Projects Gallery</h1>
          <p className="mx-auto mt-4 max-w-2xl text-white/70">
            Capturing moments of service, leadership, and community impact.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-page">
          <GalleryGrid items={galleryItems} />
        </div>
      </section>

      <section className="bg-brand py-14 text-white">
        <div className="container-page grid grid-cols-2 gap-8 lg:grid-cols-4">
          {galleryStats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-4xl font-extrabold text-gold">{s.value}</p>
              <p className="mt-1 text-sm text-white/70">{s.label}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
