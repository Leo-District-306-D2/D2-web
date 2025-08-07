'use client';

import { useState, useEffect, useRef } from 'react';

export default function LeoClubsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log('LeoClubsSection is visible');
          setIsVisible(true);
        } else {
          console.log('LeoClubsSection is hidden');
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

  const leoClubs = [
    // Left Column
    [
      "Leo Club of Arawwala",
      "Leo Club of Colombo Monarch",
      "Leo Club of Dehiwala East",
      "Leo Club of Ethos International College Colombo VII",
      "Leo Club of Gampaha Wickramarachchi University of Indigenous Medicine FISSMS",
      "Leo Club of Godigamuwa",
      "Leo Club of Kalubowila",
      "Leo Club of Millaniya",
      "Leo Club of Panadura-Alubomulla",
      "Leo Club of Pepiliyana Woodlands"
    ],
    // Right Column
    [
      "Leo Club of Piliyandala",
      "Leo Club of Piliyandala Central College",
      "Leo Club of Polgasowita",
      "Leo Club of Raththanapitiya",
      "Leo Club of Saegis Campus",
      "Leo Club of Sri Lanka Technological and Research Campus",
      "Leo Club of Taxila Central College II",
      "Leo Club of University of Moratuwa",
      "Leo Club of University of Sri Jayewardenepura"
    ]
  ];

  return (
    <section ref={sectionRef} className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className={`text-center mb-12 transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-4xl font-bold text-[#2388C9] mb-6">
              Leo Clubs in the District
            </h2>
          </div>

          {/* Clubs Grid */}
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            {/* Left Column */}
            <div className="space-y-4">
              {leoClubs[0].map((club, index) => (
                <div
                  key={index}
                  className={`flex items-start space-x-3 transition-all duration-1000 transform ${
                    isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="w-2 h-2 bg-gray-600 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {club}
                  </p>
                </div>
              ))}
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              {leoClubs[1].map((club, index) => (
                <div
                  key={index}
                  className={`flex items-start space-x-3 transition-all duration-1000 transform ${
                    isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${(index + 10) * 100}ms` }}
                >
                  <div className="w-2 h-2 bg-gray-600 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {club}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 