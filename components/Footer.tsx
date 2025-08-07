'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-6 mb-4">
              {/* Lion Logo - First */}
              <div className="w-40 h-40 relative">
                <Image
                  src="/images/logos/lion-2.png"
                  alt="Lion Logo"
                  fill
                  className="object-contain"
                />
              </div>
              {/* LEO Logo - Second */}
              <div className="w-40 h-40 relative">
                <Image
                  src="/images/logos/leo.png"
                  alt="LEO Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white text-sm cursor-pointer">Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white text-sm cursor-pointer">About Us</Link></li>
              <li><Link href="/leaders" className="text-gray-400 hover:text-white text-sm cursor-pointer">Leaders</Link></li>
              <li><Link href="/clubs" className="text-gray-400 hover:text-white text-sm cursor-pointer">Clubs</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link href="/gallery" className="text-gray-400 hover:text-white text-sm cursor-pointer">Gallery</Link></li>
              <li><Link href="/downloads" className="text-gray-400 hover:text-white text-sm cursor-pointer">Downloads</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white text-sm cursor-pointer">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <i className="ri-mail-line"></i>
                <span>thameerad@leodistrict306a2.org</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="ri-phone-line"></i>
                <span>+94 70 120 5186</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="ri-map-pin-line"></i>
                <span>Leo Youth Centre, Vidya Mawatha, Colombo 00700, Sri Lanka</span>
              </div>
            </div>
            
            {/* Social Media Links */}
            <div className="mt-4">
              <h5 className="font-medium mb-3 text-white">Follow Us</h5>
              <div className="flex space-x-3">
                <a href="https://www.facebook.com/leo306a2" className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <i className="ri-facebook-fill text-white text-sm"></i>
                </a>
                <a href="https://x.com/A2Buzz" className="w-8 h-8 bg-blue-400 rounded flex items-center justify-center hover:bg-blue-500 transition-colors">
                  <i className="ri-twitter-fill text-white text-sm"></i>
                </a>
                <a href="https://www.instagram.com/a2leos/" className="w-8 h-8 bg-pink-600 rounded flex items-center justify-center hover:bg-pink-700 transition-colors">
                  <i className="ri-instagram-fill text-white text-sm"></i>
                </a>
                <a href="https://www.linkedin.com/company/leo306a2/" className="w-8 h-8 bg-blue-700 rounded flex items-center justify-center hover:bg-blue-800 transition-colors">
                  <i className="ri-linkedin-fill text-white text-sm"></i>
                </a>
                <a href="https://www.youtube.com/user/leo306a2" className="w-8 h-8 bg-red-600 rounded flex items-center justify-center hover:bg-red-700 transition-colors">
                  <i className="ri-youtube-fill text-white text-sm"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 LEO District 306 D2. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
