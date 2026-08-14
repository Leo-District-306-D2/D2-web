"use client";

import { useMemo, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import type { GalleryItem } from "@/lib/types";
import { CloseIcon, ArrowRight } from "./Icons";

const FILTERS = ["all", "events", "service"] as const;
type Filter = (typeof FILTERS)[number];

export default function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const [filter, setFilter] = useState<Filter>("all");
  const [active, setActive] = useState<number | null>(null);

  const filtered = useMemo(
    () => (filter === "all" ? items : items.filter((i) => i.category === filter)),
    [filter, items],
  );

  const close = useCallback(() => setActive(null), []);
  const move = useCallback(
    (dir: number) => setActive((cur) => (cur === null ? cur : (cur + dir + filtered.length) % filtered.length)),
    [filtered.length],
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

  return (
    <div>
      {/* Filters */}
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`rounded-full px-5 py-2 text-sm font-medium capitalize transition-colors ${
              filter === f ? "bg-brand text-white" : "bg-brand-50 text-brand hover:bg-brand-100"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {filtered.map((item, i) => (
          <button
            key={item.title}
            onClick={() => setActive(i)}
            className="card card-hover group relative block overflow-hidden text-left"
          >
            <div className="relative aspect-square overflow-hidden bg-brand-50">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent opacity-90" />
            </div>
            <div className="absolute inset-x-0 bottom-0 p-3">
              <p className="text-sm font-semibold text-white drop-shadow">{item.title}</p>
              <span className="text-xs capitalize text-white/70">{item.category}</span>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {active !== null && filtered[active] && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          onClick={close}
        >
          <button aria-label="Close" onClick={close} className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20">
            <CloseIcon />
          </button>
          <button
            aria-label="Previous"
            onClick={(e) => { e.stopPropagation(); move(-1); }}
            className="absolute left-3 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 md:left-8"
          >
            <ArrowRight className="h-6 w-6 rotate-180" />
          </button>
          <button
            aria-label="Next"
            onClick={(e) => { e.stopPropagation(); move(1); }}
            className="absolute right-3 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 md:right-8"
          >
            <ArrowRight className="h-6 w-6" />
          </button>
          <figure className="relative max-h-[85vh] w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <div className="relative mx-auto aspect-[3/2] w-full">
              <Image src={filtered[active].image} alt={filtered[active].title} fill sizes="90vw" className="object-contain" />
            </div>
            <figcaption className="mt-3 text-center text-white">
              <p className="font-display text-lg font-semibold">{filtered[active].title}</p>
              <p className="text-sm capitalize text-white/60">{filtered[active].category}</p>
            </figcaption>
          </figure>
        </div>
      )}
    </div>
  );
}
