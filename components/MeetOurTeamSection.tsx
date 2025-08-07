'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Facebook, LinkedIn, Email } from '@mui/icons-material';

export default function MeetOurTeamSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log('MeetOurTeamSection is visible');
          setIsVisible(true);
        } else {
          console.log('MeetOurTeamSection is hidden');
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

  const teamMembers = [
    {
      id: 1,
      name: "Leo Thameera Dananjaya",
      title: "District President",
      image: "/images/DP.jpg", 
      socialLinks: []
    },
    {
      id: 2,
      name: "Leo Eshan Kasturiarachchi",
      title: "Past District President",
      image: "/images/IPDP.jpg",
      socialLinks: []
    },
    {
      id: 3,
      name: "Leo Nomin Premarathna",
      title: "District Vice President ",
      image: "/images/DVP.jpeg",
      socialLinks: []
    },
    {
      id: 4,
      name: "Lion Anura Goonetilleke",
      title: "District Leo Club Chairperson ",
      image: "/images/DLCC (2).jpg",
      socialLinks: [
        { type: 'facebook', url: 'https://facebook.com' },
        { type: 'linkedin', url: 'https://linkedin.com' },
        { type: 'email', url: 'mailto:anura@example.com' }
      ]
    },
  ];

  return (
    <section ref={sectionRef} className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="w-full">
          {/* Header with enhanced animations */}
          <div className={`text-center mb-12 transition-all duration-1200 transform ${
            isVisible 
              ? 'translate-y-0 opacity-100 translate-x-0' 
              : 'translate-y-10 opacity-0 translate-x-[-50px]'
          }`}>
            <h3 className="text-4xl font-bold text-[#2388C9] mb-6 animate-fade-in-up">
              Meet Our Leaders
            </h3>
            <h2 className="text-4xl font-bold text-gray-800 mb-6 animate-fade-in-up-delay">
              Awesome guys behind our excellence
            </h2>
          </div>

          {/* Team Grid with enhanced animations and proper margins */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => {
              const isEven = index % 2 === 0;
              const initialTransform = isEven ? 'translate-x-[-100px]' : 'translate-x-[100px]';
              const finalTransform = 'translate-x-0';
              
              return (
                <div
                  key={member.id}
                  className={`transition-all duration-1000 transform ${
                    isVisible 
                      ? `${finalTransform} opacity-100 scale-100` 
                      : `${initialTransform} opacity-0 scale-95`
                  }`}
                  style={{ 
                    transitionDelay: `${index * 150}ms`,
                    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                >
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 group transform hover:scale-105 hover:-translate-y-2 h-full">
                    {/* Image with enhanced hover effects */}
                    <div className="relative h-64 bg-gray-200 overflow-hidden">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover transition-all duration-500 group-hover:scale-110 group-hover:rotate-1"
                        onError={(e) => {
                          // Fallback to placeholder if image doesn't exist
                          e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlPC90ZXh0Pjwvc3ZnPg==';
                        }}
                      />
                      
                      {/* Enhanced hover overlay with social links */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-6">
                        <div className="flex space-x-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          {member.socialLinks.map((link, linkIndex) => (
                            <a
                              key={linkIndex}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/40 transition-all duration-300 transform hover:scale-125 hover:rotate-12"
                              style={{ transitionDelay: `${linkIndex * 100}ms` }}
                            >
                              {link.type === 'facebook' && <Facebook className="text-white text-xl" />}
                              {link.type === 'linkedin' && <LinkedIn className="text-white text-xl" />}
                              {link.type === 'email' && <Email className="text-white text-xl" />}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Card Content with enhanced animations */}
                    <div className="p-6 border-t border-gray-100 bg-gradient-to-br from-white to-gray-50 flex-1">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2 transition-all duration-300 group-hover:text-[#2388C9]">
                        {member.name}
                      </h3>
                      <p className="text-gray-600 transition-all duration-300 group-hover:text-gray-700">
                        {member.title}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Enhanced Explore More Leaders Button */}
          <div className={`text-center mt-12 transition-all duration-1200 transform ${
            isVisible 
              ? 'translate-y-0 opacity-100 translate-x-0' 
              : 'translate-y-10 opacity-0 translate-x-[50px]'
          }`}>
            <Link 
              href="/leaders" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#7B8394] to-[#1D2030] text-white font-semibold rounded-lg hover:from-[#1D2030] hover:to-[#7B8394] transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-xl animate-pulse-slow-delay"
            >
              Explore More Leaders
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 