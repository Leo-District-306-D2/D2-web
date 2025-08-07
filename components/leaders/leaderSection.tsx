'use client';

import { useState, useEffect, useRef } from 'react';
import { LeaderSectionProps } from "@/types/leaders";
import { MemberCard } from "./memberCard";

export const LeaderSection: React.FC<LeaderSectionProps> = ({
  title,
  members,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log('LeaderSection is visible');
          setIsVisible(true);
        } else {
          console.log('LeaderSection is hidden');
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
            {members.length === 3 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
                <div className="col-span-full flex justify-center gap-16 items-center">
                  {members.map((member, index) => (
                    <div 
                      key={index} 
                      className="w-full max-w-[300px] animate-fade-in-up"
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      <MemberCard member={member} />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {members.length !== 3 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
                {members.map((member, index) => {
                  const isLastRowWith1 =
                    members.length % 4 === 1 && index === members.length - 1;
                  const isLastRowWith2 =
                    members.length % 4 === 2 && index >= members.length - 2;
                  const colClass = isLastRowWith1
                    ? "lg:col-start-2"
                    : isLastRowWith2
                    ? index === members.length - 2
                      ? "lg:col-start-2"
                      : "lg:col-start-3"
                    : "";

                  return (
                    <div 
                      key={index} 
                      className={`${colClass} animate-fade-in-up`}
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      <MemberCard member={member} />
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
