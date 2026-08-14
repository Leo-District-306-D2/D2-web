"use client";

import { useState } from "react";
import type { Region } from "@/lib/types";
import { UsersIcon } from "./Icons";

export default function ClubsExplorer({ regions }: { regions: Region[] }) {
  const [activeId, setActiveId] = useState(regions[0]?.id ?? "A");
  const region = regions.find((r) => r.id === activeId) ?? regions[0];

  return (
    <div>
      {/* Region tabs */}
      <div className="flex flex-wrap justify-center gap-2">
        {regions.map((r) => (
          <button
            key={r.id}
            onClick={() => setActiveId(r.id)}
            className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-colors ${
              activeId === r.id ? "bg-brand text-white shadow-md" : "bg-brand-50 text-brand hover:bg-brand-100"
            }`}
          >
            {r.name}
          </button>
        ))}
      </div>

      {/* Active region */}
      <div className="mt-10">
        <div className="flex flex-col items-center gap-1 text-center">
          <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand text-xl font-bold text-white">
            {region.id}
          </span>
          <p className="mt-2 text-sm font-medium text-muted">Region Director</p>
          <p className="font-display text-lg font-semibold text-ink">{region.director}</p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {region.zones.map((zone) => (
            <div key={zone.id} className="card p-6">
              <div className="flex items-center justify-between border-b border-black/5 pb-4">
                <div>
                  <p className="font-display text-lg font-bold text-brand">Zone {zone.id}</p>
                  <p className="text-sm text-muted">
                    Director: <span className="font-medium text-ink">{zone.director}</span>
                  </p>
                </div>
                <span className="rounded-full bg-brand-50 px-3 py-1 text-sm font-semibold text-brand">
                  {zone.clubs.length} {zone.clubs.length === 1 ? "club" : "clubs"}
                </span>
              </div>

              {zone.clubs.length > 0 ? (
                <ul className="mt-4 space-y-3">
                  {zone.clubs.map((club) => (
                    <li key={club.name} className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand">
                        <UsersIcon className="h-4 w-4" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-ink">{club.name}</p>
                        {club.president && (
                          <p className="text-xs text-muted">
                            President: {club.president}
                            {club.members ? ` · ${club.members} Members` : ""}
                          </p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-4 rounded-lg bg-surface px-4 py-6 text-center text-sm text-muted">
                  Club details for this zone are being updated.
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
