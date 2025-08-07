'use client';

import { useState, useEffect, useRef } from 'react';
import { PresidentSectionProps } from "@/types/leaders";
import { PresidentCard } from "./presidentCard";

export const PresidentSection: React.FC<PresidentSectionProps> = ({
  title,
  members,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log('PresidentSection is visible');
          setIsVisible(true);
        } else {
          console.log('PresidentSection is hidden');
          setIsVisible(false);
        }
      },
      { threshold: 0.3, rootMargin: '0px 0px -100px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className={`text-center mb-12 transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-4xl font-bold text-[#2388C9] mb-6">
              {title}
            </h2>
          </div>

          {/* Members Grid */}
          <div className={`transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
              {members.map((member, index) => (
                <div 
                  key={index}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <PresidentCard key={index} member={member} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};