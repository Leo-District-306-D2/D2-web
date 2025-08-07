'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function WelcomeCollage() {
  return (
    <section className="relative bg-white overflow-hidden py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Section - Welcome Text */}
          <div className="animate-fade-in-left lg:ml-14">
            <h1 className="text-5xl font-bold text-gray-800 mb-6 leading-tight animate-slide-in-bottom">
              Welcome to<br />
              <span className="text-7xl text-[#2388C9]">LEO District 306 D2</span>
            </h1>
            <p className="text-xl mb-8 text-gray-600 leading-relaxed animate-slide-in-bottom-delay">
              Leo District 306 D2 is one of the leading Leo Districts in Sri Lanka. 
              It is sponsored by the Lions Clubs International, 
              District 306 D2 and presently 18 Leo clubs are actively serving 
              the community with the contribution of more than 1000+ Leos under the guidance 
              of multi-talented executive officers. 
              Activities conducted by Leo District 306 D2 include Childcare, 
              Eldercare, Sports, Environmental, Healthcare, Leadership Development Projects and many more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-in-bottom-delay-2">
              <Link href="/about" className="bg-gradient-to-r from-[#2388C9] to-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg animate-pulse-slow">
                Learn More About Us
              </Link>
              <Link href="/clubs" className="border-2 border-[#7B8394] text-[#7B8394] px-8 py-4 rounded-lg font-semibold hover:bg-[#7B8394] hover:text-white transition-all duration-300 transform hover:scale-105 animate-pulse-slow-delay">
                Explore Our Clubs
              </Link>
            </div>
          </div>

          {/* Right Section - Logo */}
          <div className="relative animate-fade-in-right -mt-1">
            <div className="relative max-w-lg mx-auto">
              {/* Main Logo */}
              <div className="relative z-10 float-right ml-8 mb-8 animate-fade-in-up">
                <div className="relative animate-float">
                  <div className="w-85 h-85 flex items-center justify-center p-8">
                    <Image 
                      src="/images/logos/DP logo 25_26_Final.png"
                      alt="LEO District 306 D2 Logo"
                      width={320}
                      height={384}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-[#2388C9] to-[#2C4B78] rounded-full opacity-80 animate-float-slow"></div>
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-br from-[#1D2030] to-[#7B8394] rounded-full opacity-80 animate-float-reverse-slow"></div>
              <div className="absolute top-1/2 -left-12 w-20 h-20 bg-gradient-to-br from-[#2388C9] to-[#2C4B78] rounded-full opacity-80 animate-spin-slow"></div>
              <div className="absolute top-1/2 -right-12 w-16 h-16 bg-gradient-to-br from-[#1D2030] to-[#7B8394] rounded-lg opacity-80 animate-float"></div>
              <div className="absolute top-1/4 -left-6 w-12 h-12 bg-gradient-to-br from-[#2388C9] to-[#2C4B78] rounded-full opacity-80 animate-bounce"></div>
              <div className="absolute bottom-1/4 -right-6 w-10 h-10 bg-gradient-to-br from-[#1D2030] to-[#7B8394] rounded-full opacity-80 animate-pulse"></div>
              
              <div className="clear-both"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 