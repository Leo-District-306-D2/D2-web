'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function RecentUpdatesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log('RecentUpdatesSection is visible');
          setIsVisible(true);
        } else {
          console.log('RecentUpdatesSection is hidden');
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

  const updates = [
    {
      id: 1,
      title: "D2 Bodhi Pooja",
      description: "A blessing program to welcome the new Leoistic year and set positive intentions for the upcoming activities.",
      date: "March 12, 2024",
      image: "/images/projects/bodipujawa.jpg"
    },
    {
      id: 2,
      title: "D2 Business Session",
      description: "A session to select the new district executives and plan the strategic direction for the Leoistic year.",
      date: "March 10, 2024",
      image: "/images/projects/D2-business-session.jpg"
    },
    {
      id: 3,
      title: "A2 Sajje Project",
      description: "An event to make fellowship among the clubs in districts and Leos with past members. It's conducted at the end of the Leoistic year.",
      date: "March 15, 2024",
      image: "/images/projects/A2-sajje.jpg"
    },
    {
      id: 4,
      title: "Embolden 24 Campaign",
      description: "District conference event bringing together Leos from across the district for networking and collaboration.",
      date: "March 8, 2024",
      image: "/images/projects/embolden-24.jpg"
    },
    {
      id: 5,
      title: "Sports Day Event",
      description: "Sports tournament to make fellowship and improve teamwork, fitness, and leadership among the Leos.",
      date: "March 5, 2024",
      image: "/images/projects/sportsDay.jpg"
    },
    {
      id: 6,
      title: "Youth Camp Program",
      description: "A camp to improve leadership and teamwork among the Leos through outdoor activities and team building exercises.",
      date: "March 3, 2024",
      image: "/images/projects/youth-Camp.jpg"
    }
  ];

  return (
    <section ref={sectionRef} className="py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="w-full">
          {/* Header - Mobile Optimized */}
          <div className="text-center mb-8 sm:mb-12">
            <div className={`transition-all duration-1200 transform ${
              isVisible 
                ? 'translate-y-0 opacity-100 translate-x-0' 
                : 'translate-y-10 opacity-0 translate-x-[-50px]'
            }`}>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4 animate-fade-in-up leading-tight">
                Recent Projects
              </h2>
              <p className="text-base sm:text-lg text-gray-600 animate-fade-in-up-delay px-4 sm:px-0 leading-relaxed">
                Explore our latest community initiatives and activities
              </p>
            </div>
          </div>

          {/* Mobile-First Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
            {updates.map((update, index) => {
              const isEven = index % 2 === 0;
              const initialTransform = isEven ? 'translate-x-[-100px]' : 'translate-x-[100px]';
              const finalTransform = 'translate-x-0';
              
              return (
                <div
                  key={update.id}
                  className={`bg-white rounded-lg sm:rounded-xl shadow-md sm:shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 sm:hover:-translate-y-2 h-full ${
                    isVisible 
                      ? `${finalTransform} opacity-100 scale-100` 
                      : `${initialTransform} opacity-0 scale-95`
                  }`}
                  style={{ 
                    animationDelay: `${index * 150}ms`,
                    transitionDelay: `${index * 100}ms`,
                    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                >
                  <div className="relative overflow-hidden group h-full flex flex-col">
                    {/* Mobile-Optimized Image */}
                    <div className="relative h-40 sm:h-48 lg:h-52 overflow-hidden">
                      <img 
                        src={update.image}
                        alt={update.title}
                        className="w-full h-full object-cover object-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-1"
                        onError={(e) => {
                          // Fallback to placeholder if image doesn't exist
                          e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlPC90ZXh0Pjwvc3ZnPg==';
                        }}
                      />
                      {/* Enhanced hover overlay - Mobile Friendly */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 sm:block hidden"></div>
                    </div>
                    
                    {/* Mobile-Optimized Content */}
                    <div className="p-4 sm:p-6 bg-gradient-to-br from-white to-gray-50 flex-1 flex flex-col">
                      <h3 className="text-base sm:text-lg font-semibold mb-2 text-gray-800 transition-all duration-300 group-hover:text-[#2388C9] leading-tight">
                        {update.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 transition-all duration-300 group-hover:text-gray-700 flex-1 leading-relaxed">
                        {update.description}
                      </p>
                      <div className="text-blue-600 text-xs sm:text-sm font-medium transition-all duration-300 group-hover:text-blue-700 mt-auto">
                        {update.date}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

                     {/* Mobile-Optimized Call to Action */}
           <div className={`text-center mt-8 sm:mt-12 transition-all duration-1200 transform ${
             isVisible 
               ? 'translate-y-0 opacity-100 translate-x-0' 
               : 'translate-y-10 opacity-0 translate-x-[50px]'
           }`}>
             <Link href="/gallery">
               <button className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#2388C9] to-[#1D2030] text-white font-semibold rounded-lg hover:from-[#1D2030] hover:to-[#2388C9] transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl text-sm sm:text-base">
                 View All Projects
               </button>
             </Link>
           </div>
        </div>
      </div>
    </section>
  );
} 