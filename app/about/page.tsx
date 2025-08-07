'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useEffect, useRef, useState } from 'react';

export default function About() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [isTimelineVisible, setIsTimelineVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsTimelineVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-slide-in-left {
          animation: slideInLeft 0.8s ease-out forwards;
        }

        .animate-slide-in-right {
          animation: slideInRight 0.8s ease-out forwards;
        }

        .animate-scale-in {
          animation: scaleIn 0.6s ease-out forwards;
        }

        .timeline-item {
          opacity: 0;
          transform: translateX(-100px);
        }

        .timeline-item:nth-child(even) {
          transform: translateX(100px);
        }

        .timeline-item.animate {
          opacity: 1;
          transform: translateX(0);
          transition: all 0.8s ease-out;
        }

        .timeline-item:nth-child(even).animate {
          transform: translateX(0);
        }

        .timeline-circle {
          opacity: 0;
          transform: scale(0);
        }

        .timeline-circle.animate {
          opacity: 1;
          transform: scale(1);
          transition: all 0.6s ease-out;
        }
      `}</style>
      
      <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-[#2388C9] mb-6">
              About LEO District 306 D2
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Leadership, Experience, Opportunity - Our commitment to developing future leaders
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-blue-50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                To empower young leaders through meaningful service opportunities, leadership development programs, and community engagement initiatives that create lasting positive impact in Sri Lanka and Maldives.
              </p>
            </div>
            
            <div className="bg-green-50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Vision</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                To be the premier youth leadership organization that develops confident, capable, and compassionate leaders who transform communities and inspire positive change worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Journey</h2>
              <p className="text-lg text-gray-600">Leo District 306 D2's path to excellence in leadership development</p>
            </div>

            {/* District Formation Timeline */}
            <div className="mb-16" ref={timelineRef}>
              <h3 className={`text-2xl font-bold text-center text-gray-800 mb-8 transition-all duration-1000 ${isTimelineVisible ? 'animate-fade-in' : 'opacity-0 translate-y-4'}`}>
                District 306 D2 Formation Journey
              </h3>
              <div className="relative">
                {/* Animated timeline line */}
                <div className={`absolute left-1/2 transform -translate-x-0.5 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 via-green-600 to-purple-600 transition-all duration-1000 ${isTimelineVisible ? 'animate-scale-in' : 'opacity-0 scale-y-0'}`}></div>
                
                <div className="space-y-12">
                  <div className={`relative flex items-center group timeline-item ${isTimelineVisible ? 'animate' : ''}`} style={{ transitionDelay: '0.2s' }}>
                    <div className="w-1/2 text-right pr-8">
                      <div className="bg-blue-50 p-6 rounded-lg group-hover:shadow-lg transition-shadow duration-300">
                        <h4 className="text-xl font-semibold mb-2 text-blue-800">Leo Movement Begins</h4>
                        <p className="text-gray-700">The Leo Club of Wattala was established as the first Leo Club in Sri Lanka, laying the foundation for youth leadership development.</p>
                      </div>
                    </div>
                    <div className={`absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center z-10 group-hover:scale-110 transition-transform duration-300 timeline-circle ${isTimelineVisible ? 'animate' : ''}`} style={{ transitionDelay: '0.4s', top: '50%', transform: 'translate(-50%, -50%)' }}>
                      <span className="text-white font-bold">1969</span>
                    </div>
                    <div className="w-1/2 pl-8"></div>
                  </div>

                  <div className={`relative flex items-center group timeline-item ${isTimelineVisible ? 'animate' : ''}`} style={{ transitionDelay: '0.6s' }}>
                    <div className="w-1/2 pr-8"></div>
                    <div className={`absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-green-600 rounded-full flex items-center justify-center z-10 group-hover:scale-110 transition-transform duration-300 timeline-circle ${isTimelineVisible ? 'animate' : ''}`} style={{ transitionDelay: '0.8s', top: '50%', transform: 'translate(-50%, -50%)' }}>
                      <span className="text-white font-bold">1989</span>
                    </div>
                    <div className="w-1/2 text-left pl-8">
                      <div className="bg-green-50 p-6 rounded-lg group-hover:shadow-lg transition-shadow duration-300">
                        <h4 className="text-xl font-semibold mb-2 text-green-800">Three District Formation</h4>
                        <p className="text-gray-700">Multiple 306 was restructured into 3 Districts: A, B, and C, creating more focused regional leadership.</p>
                      </div>
                    </div>
                  </div>

                  <div className={`relative flex items-center group timeline-item ${isTimelineVisible ? 'animate' : ''}`} style={{ transitionDelay: '1.0s' }}>
                    <div className="w-1/2 text-right pr-8">
                      <div className="bg-orange-50 p-6 rounded-lg group-hover:shadow-lg transition-shadow duration-300">
                        <h4 className="text-xl font-semibold mb-2 text-orange-800">Six District Formation</h4>
                        <p className="text-gray-700">Multiple 306 was restructured into 6 Districts: A1, A2, B1, B2, C1, and C2, creating more focused regional leadership.</p>
                      </div>
                    </div>
                    <div className={`absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center z-10 group-hover:scale-110 transition-transform duration-300 timeline-circle ${isTimelineVisible ? 'animate' : ''}`} style={{ transitionDelay: '1.2s', top: '50%', transform: 'translate(-50%, -50%)' }}>
                      <span className="text-white font-bold">2005</span>
                    </div>
                    <div className="w-1/2 pl-8"></div>
                  </div>

                  <div className={`relative flex items-center group timeline-item ${isTimelineVisible ? 'animate' : ''}`} style={{ transitionDelay: '1.4s' }}>
                    <div className="w-1/2 pr-8"></div>
                    <div className={`absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center z-10 group-hover:scale-110 transition-transform duration-300 timeline-circle ${isTimelineVisible ? 'animate' : ''}`} style={{ transitionDelay: '1.6s', top: '50%', transform: 'translate(-50%, -50%)' }}>
                      <span className="text-white font-bold">2025</span>
                    </div>
                    <div className="w-1/2 text-left pl-8">
                      <div className="bg-purple-50 p-6 rounded-lg group-hover:shadow-lg transition-shadow duration-300">
                        <h4 className="text-xl font-semibold mb-2 text-purple-800">District 306 D2 Establishment</h4>
                        <p className="text-gray-700">LEO District 306 D2 was officially formed, creating our dedicated platform for youth leadership development in the region.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* District D2 Achievements */}
            <div className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">District 306 D2 Key Achievements</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-lg group hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold">18</span>
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Active Clubs</h4>
                  <p className="text-gray-600">Leading multiple Leo Clubs across our district with dedicated service programs.</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg group hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold">1000+</span>
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Active Members</h4>
                  <p className="text-gray-600">Empowering hundreds of young leaders with skills and opportunities.</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg group hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold">20+</span>
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Years of Excellence</h4>
                  <p className="text-gray-600">Consistent leadership development and community service since 2010.</p>
                </div>
              </div>
            </div>

            {/* Global Context */}
            <div className="mt-16 text-center">
              <div className="max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Part of a Global Movement</h3>
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    <div>
                      <div className="text-3xl font-bold mb-2">1957</div>
                      <div className="text-blue-100">First Leo Club Founded</div>
                      <div className="text-sm text-blue-200 mt-1">Pennsylvania, USA</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold mb-2">1967</div>
                      <div className="text-blue-100">Official Lions Program</div>
                      <div className="text-sm text-blue-200 mt-1">Lions International Adoption</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold mb-2">150</div>
                      <div className="text-blue-100">Countries Worldwide</div>
                      <div className="text-sm text-blue-200 mt-1">7200+ Clubs Globally</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     
      {/* History */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">District 306 D2 Milestones</h2>
              <p className="text-lg text-gray-600">Key achievements in our journey of leadership development</p>
            </div>

            <div className="space-y-8">
                             <div className="flex items-start space-x-6 group">
                 <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                   <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                     <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                   </svg>
                 </div>
                <div className="bg-white p-6 rounded-lg shadow-lg flex-1 group-hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-xl font-semibold mb-2">District Establishment</h3>
                  <p className="text-gray-600">LEO District 306 D2 was officially established, creating a dedicated platform for youth leadership development in the region.</p>
                </div>
              </div>

                             <div className="flex items-start space-x-6 group">
                 <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                   <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                     <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd" />
                   </svg>
                 </div>
                <div className="bg-white p-6 rounded-lg shadow-lg flex-1 group-hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-xl font-semibold mb-2">Regional Growth</h3>
                  <p className="text-gray-600">Expanded operations with structured leadership programs and established strong community partnerships across multiple regions.</p>
                </div>
              </div>

                             <div className="flex items-start space-x-6 group">
                 <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                   <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                     <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                   </svg>
                 </div>
                <div className="bg-white p-6 rounded-lg shadow-lg flex-1 group-hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-xl font-semibold mb-2">Digital Innovation</h3>
                  <p className="text-gray-600">Successfully adapted to digital platforms, maintaining continuous service and leadership development during challenging times.</p>
                </div>
              </div>

                             <div className="flex items-start space-x-6 group">
                 <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                   <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                     <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                   </svg>
                 </div>
                <div className="bg-white p-6 rounded-lg shadow-lg flex-1 group-hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-xl font-semibold mb-2">Continued Excellence</h3>
                  <p className="text-gray-600">Leading with 25+ active clubs and 350+ dedicated members, creating sustainable positive change across communities.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
    </>
  );
}