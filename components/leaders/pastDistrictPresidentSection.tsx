'use client';

import { useState, useEffect, useRef } from 'react';
import { PastDistrictPresidentSectionProps } from "@/types/leaders";
import { PastDistrictPresidentCard } from "./pastDistrictPresidentCard";

export const PastDistrictPresidentSection: React.FC<PastDistrictPresidentSectionProps> = ({
  title,
  presidents,
}) => {
  console.log('PastDistrictPresidentSection rendering, presidents:', presidents);
  console.log('Presidents length:', presidents?.length);

  return (
    <section className="py-16  overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Presidents Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {presidents && presidents.length > 0 ? (
              presidents.map((president, index) => (
                <div 
                  key={president.id}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <PastDistrictPresidentCard president={president} />
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-8">
                <p className="text-gray-500">No past district presidents found.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
