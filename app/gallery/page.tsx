'use client';

import { useState, useEffect, useRef } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<{category: string; title: string; image: string} | null>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const [isGalleryVisible, setIsGalleryVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsGalleryVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (galleryRef.current) {
      observer.observe(galleryRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const galleryImages = [
    {
      category: 'events',
      title: 'A2 Classroom Session',
      image: '/images/projects/A2-classroom.jpeg'
    },
    {
      category: 'events',
      title: 'A2 Sajje Event',
      image: '/images/projects/A2-sajje.jpg'
    },
    {
      category: 'events',
      title: 'D2 Bodhi Pooja',
      image: '/images/projects/bodipujawa.jpg'
    },
    {
      category: 'events',
      title: 'D2 Business Session',
      image: '/images/projects/D2-business-session.jpg'
    },
    {
      category: 'events',
      title: 'Dawn Eight Event',
      image: '/images/projects/dawn-eight.JPG'
    },
    {
      category: 'events',
      title: 'Embolden 24',
      image: '/images/projects/embolden-24.jpg'
    },
    {
      category: 'events',
      title: 'Installation Ceremony',
      image: '/images/projects/installation.jpg'
    },
    {
      category: 'service',
      title: 'Jeewanayathra Project',
      image: '/images/projects/jeewanayathra.jpg'
    },
    {
      category: 'events',
      title: 'Numero Uno Event',
      image: '/images/projects/numero-Uno.jpg'
    },
    {
      category: 'events',
      title: 'Reflexion 25',
      image: '/images/projects/reflexion\'25.jpg'
    },
    {
      category: 'events',
      title: 'Sports Day',
      image: '/images/projects/sportsDay.jpg'
    },
    {
      category: 'events',
      title: 'Youth Camp',
      image: '/images/projects/youth-Camp.jpg'
    }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

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

        .gallery-item {
          opacity: 0;
          transform: translateY(50px);
        }

        .gallery-item.animate {
          opacity: 1;
          transform: translateY(0);
          transition: all 0.8s ease-out;
        }

        .gallery-item:nth-child(even) {
          transition-delay: 0.2s;
        }

        .gallery-item:nth-child(3n) {
          transition-delay: 0.4s;
        }

        .gallery-item:nth-child(4n) {
          transition-delay: 0.6s;
        }
      `}</style>
      
      <div className="min-h-screen bg-white">
        <Header />
        
        {/* Hero Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl font-bold text-[#2388C9] mb-6">
                Projects Gallery
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Capturing moments of service, leadership, and community impact
              </p>
            </div>
          </div>
        </section>



        {/* Gallery Grid */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" ref={galleryRef}>
              {filteredImages.map((image, index) => (
                <div 
                  key={index} 
                  className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer gallery-item ${isGalleryVisible ? 'animate' : ''}`}
                  onClick={() => setSelectedImage(image)}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="relative overflow-hidden group">
                    <img 
                      src={image.image}
                      alt={image.title}
                      className="w-full h-64 object-cover object-top group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.src = '/images/placeholder.jpg';
                      }}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                  </div>
                                     <div className="p-6">
                     <h3 className="font-semibold text-gray-800 text-lg mb-2 group-hover:text-[#2388C9] transition-colors duration-300">{image.title}</h3>
                     <span className="text-sm text-[#2388C9] capitalize font-medium mb-4 block">{image.category}</span>
                     <button 
                       onClick={(e) => {
                         e.stopPropagation();
                         window.open('https://drive.google.com/drive/folders/1C8ZN2E7oCyXIdRLcpTGWVHYaiRwI75hI', '_blank');
                       }}
                                               className="w-full bg-gradient-to-r from-[#2388C9] to-[#1D2030] text-white py-2 px-4 rounded-lg font-medium hover:from-[#1D2030] hover:to-[#2388C9] transition-all duration-300 flex items-center justify-center gap-2"
                     >
                       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                       </svg>
                       Explore More Images
                     </button>
                   </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Image Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="relative max-w-4xl max-h-[90vh] bg-white rounded-lg overflow-hidden shadow-2xl">
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-70 z-10 cursor-pointer transition-all duration-300 hover:scale-110"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <img 
                src={selectedImage.image}
                alt={selectedImage.title}
                className="max-w-full max-h-[80vh] object-contain"
                onError={(e) => {
                  e.currentTarget.src = '/images/placeholder.jpg';
                }}
              />
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{selectedImage.title}</h3>
                <span className="text-[#2388C9] capitalize font-medium">{selectedImage.category}</span>
              </div>
            </div>
          </div>
        )}

        {/* Statistics */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 text-center">
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                <div className="text-4xl font-bold text-[#2388C9] mb-2 group-hover:scale-110 transition-transform duration-300">500+</div>
                <div className="text-gray-600 font-medium">Photos</div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                <div className="text-4xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">20+</div>
                <div className="text-gray-600 font-medium">D2 Events</div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                <div className="text-4xl font-bold text-green-600 mb-2 group-hover:scale-110 transition-transform duration-300">200+</div>
                <div className="text-gray-600 font-medium">Projects</div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                <div className="text-4xl font-bold text-orange-600 mb-2 group-hover:scale-110 transition-transform duration-300">18</div>
                <div className="text-gray-600 font-medium">Clubs</div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}