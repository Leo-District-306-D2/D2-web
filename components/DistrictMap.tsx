'use client';

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

interface District {
  id: string;
  name: string;
  color: string;
  isActive: boolean;
}

export default function DistrictMap() {
  const [activeDistrict, setActiveDistrict] = useState('D2');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Section - Sri Lanka Map */}
          <div className={`transition-all duration-1000 transform ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          }`}>
            <div className="relative">
              {/* Sri Lanka Map Outline */}
              <div className="w-full h-[500px] relative overflow-hidden">
                {/* D2 Map Image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image 
                    src="/images/D2-map.png"
                    alt="District 306 D2 Map"
                    width={400}
                    height={300}
                    className="w-full h-full object-contain"
                  />
                </div>
                
              </div>

              {/* District Legend */}
              <div className="mt-4 flex items-center justify-center">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-[#00A8F3] rounded border border-white"></div>
                  <span className="text-sm text-gray-600">District 306 D2</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Content */}
          <div className={`transition-all duration-1000 delay-300 transform ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
          }`} >
            <h2 className="text-4xl font-bold text-[#2388C9] mb-6 ">
              Leo District 306 D2
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8 mr-14">
            Leo District 306 D2 is a vibrant district under the Leo Multiple District Council of 
            Sri Lanka and Maldives. It covers key areas including Colombo City 
            (Milagiriya, Pamankada, Havelock Town), the eastern stretch of Galle Road, and suburbs 
            such as Kesbewa, Homagama, Kalutara, Bandaragama, Horana, Bulathsinhala, Ingiriya, and Matugama. 
                         The district plays a vital role in empowering youth through service and leadership across these 
             diverse communities.
           </p>

           {/* Explore Button */}
           <div className="mb-8">
             <a 
               href="https://leomd306.org/" 
               target="_blank" 
               rel="noopener noreferrer"
               className="inline-block bg-gradient-to-r from-[#7B8394] to-[#1D2030] text-white px-8 py-4 rounded-lg font-semibold hover:from-[#1D2030] hover:to-[#7B8394] transition-all duration-300 transform hover:scale-105 animate-pulse-slow-delay"
             >
               Explore Leo MD 306
             </a>
           </div>
          </div>
        </div>
      </div>
    </section>
  );
}