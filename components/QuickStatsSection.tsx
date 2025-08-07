'use client';

import { useState, useEffect, useRef } from 'react';
import { 
  Assignment 
} from '@mui/icons-material';
import Image from 'next/image';

export default function QuickStatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const sectionRef = useRef<HTMLElement>(null);

  const targetCounts = [1000, 18, 3, 200];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log('QuickStatsSection is visible');
          setIsVisible(true);
          // Start countdown animation
          startCountAnimation();
        } else {
          // Reset when section is out of view
          console.log('QuickStatsSection is hidden');
          setIsVisible(false);
          setCounts([0, 0, 0, 0]);
        }
      },
      { threshold: 0.3, rootMargin: '0px 0px -100px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const startCountAnimation = () => {
    console.log('Starting count animation...');
    const duration = 2000; // 2 seconds
    const steps = 60; // 60 steps for smooth animation
    const stepDuration = duration / steps;

    let currentStep = 0;

    const animate = () => {
      if (currentStep <= steps) {
        const progress = currentStep / steps;
        
        const newCounts = targetCounts.map((target, index) => {
          const currentValue = Math.floor(target * progress);
          return currentValue;
        });

        setCounts(newCounts);
        currentStep++;
        setTimeout(animate, stepDuration);
      } else {
        console.log('Count animation completed');
      }
    };

    animate();
  };

  const stats = [
    {
      number: counts[0],
      label: "Leos",
      showPlus: true,
      icon: Assignment, // Placeholder, won't be used
      isCustomIcon: true,
      customIconPath: "/images/leo-svg.svg"
    },
    {
      number: counts[1],
      label: "LEO Clubs",
      showPlus: false,
      icon: Assignment, // Placeholder, won't be used
      isCustomIcon: true,
      customIconPath: "/images/club-svgrepo-com.svg"
    },
    {
      number: counts[2],
      label: "Regions",
      showPlus: false,
      icon: Assignment, // Placeholder, won't be used
      isCustomIcon: true,
      customIconPath: "/images/location-svgrepo-com.svg"
    },
    {
      number: counts[3],
      label: "Projects Completed",
      showPlus: true,
      icon: Assignment,
      isCustomIcon: true,
      customIconPath: "/images/projects-svgrepo-com.svg"
    }
  ];

  return (
    <section ref={sectionRef} className="relative py-24 text-white mt-20 overflow-hidden min-h-[200px]">
      {/* Background Image with Fixed Position */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url(/images/projects/embolden-24.jpg)',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}
      ></div>
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/70"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className={`transform hover:scale-110 transition-all duration-100 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="flex flex-col items-center">
                {/* Icon */}
                <div className="mb-4">
                  {stat.isCustomIcon ? (
                    <Image 
                      src={stat.customIconPath} 
                      alt={`${stat.label} Icon`} 
                      width={64} 
                      height={64}
                      className="text-[#7B8394]"
                    />
                  ) : (
                    <stat.icon className="text-5xl text-[#7B8394] mb-2" />
                  )}
                </div>
                
                {/* Number */}
                <div className="text-4xl font-bold mb-2">
                  {stat.number}{stat.showPlus ? '+' : ''}
                </div>
                
                {/* Label */}
                <div className="text-blue-100 text-center">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 