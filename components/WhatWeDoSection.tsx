'use client';

import { useState, useEffect, useRef } from 'react';
import { 
  Psychology, 
  VolunteerActivism, 
  Lightbulb, 
  Nature, 
  School, 
  Favorite,
  AutoAwesome,
  Science,
  Star
} from '@mui/icons-material';

export default function WhatWeDoSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log('WhatWeDoSection is visible');
          setIsVisible(true);
        } else {
          // Reset when section is out of view
          console.log('WhatWeDoSection is hidden');
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

  const services = [
    {
      icon: Psychology,
      title: "Leadership Development",
      description: "Empowering young leaders through practical experience and mentorship programs to create sustainable positive impact in communities."
    },
    {
      icon: VolunteerActivism,
      title: "Community Service",
      description: "Engaging in meaningful community service projects that address local needs and create lasting positive change."
    },
    {
      icon: Lightbulb,
      title: "Skill Building",
      description: "Providing hands-on experience in organizational management, project planning, and team collaboration."
    },
    {
      icon: Nature,
      title: "Environmental Projects",
      description: "Leading environmental conservation initiatives and sustainability projects to protect our planet for future generations."
    },
    {
      icon: School,
      title: "Educational Support",
      description: "Supporting educational initiatives and providing learning opportunities for youth development and growth."
    },
    {
      icon: Favorite,
      title: "Social Impact",
      description: "Creating opportunities for personal growth and fostering connections that strengthen our communities."
    },
    {
      icon: AutoAwesome,
      title: "Creativity",
      description: "Fostering creative thinking and artistic expression through innovative projects and cultural initiatives."
    },
    {
      icon: Science,
      title: "Innovation & Technology",
      description: "Embracing cutting-edge technology and innovative solutions to address modern challenges and opportunities."
    },
    {
      icon: Star,
      title: "Excellence",
      description: "Pursuing excellence in all endeavors through dedication, continuous improvement, and high standards."
    }
  ];

  return (
    <section ref={sectionRef} className="py-15 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className={`text-center mb-12 transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h3 className="text-4xl font-bold text-[#2388C9] mb-6 ">What We Do?</h3>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              We believe that we can create more impact with you
            </h2>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`transition-all duration-800 transform ${
                  isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-95'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="flex items-start space-x-4 hover:scale-105 transition-transform duration-500">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12  rounded-lg flex items-center justify-center hover:shadow-lg transition-shadow duration-500">
                      <service.icon className="text-5xl text-[#00A8F3] scale-150" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <div className="relative">
                      {/* Vertical Line */}
                      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-400 to-yellow-600"></div>
                      
                      <div className="pl-4">
                        <h3 className="text-xl font-bold text-[#2388C9] mb-2 hover:text-blue-600 transition-colors duration-300">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 