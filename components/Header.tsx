'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLeadersDropdownOpen, setIsLeadersDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsLeadersDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <div className="w-72 h-12 relative">
              <Image
                src="/images/logos/Leos-Of-SriLanka-Maldives-Black-Version-1.png"
                alt="LEO District 306 Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          <nav className="hidden md:flex space-x-8">
            <Link 
              href="/" 
              className={`font-medium whitespace-nowrap cursor-pointer transition-colors duration-200 ${
                pathname === "/" ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
              }`}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className={`font-medium whitespace-nowrap cursor-pointer transition-colors duration-200 ${
                pathname === "/about" ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
              }`}
            >
              About
            </Link>
            
            {/* Leaders Dropdown */}
            <div className="relative group" ref={dropdownRef}>
              <button
                className={`font-medium whitespace-nowrap cursor-pointer flex items-center transition-colors duration-200 ${
                  pathname === "/leaders" || pathname === "/leaders/past-presidents" 
                    ? "text-blue-600" 
                    : "text-gray-700 hover:text-blue-600"
                }`}
                onClick={() => setIsLeadersDropdownOpen(!isLeadersDropdownOpen)}
              >
                Leaders
                <i className={`ri-arrow-down-s-line ml-1 transition-transform duration-200 ${isLeadersDropdownOpen ? 'rotate-180' : ''}`}></i>
              </button>
              
              <div 
                className={`absolute top-full left-0 mt-1 bg-white shadow-lg rounded-lg py-2 min-w-48 border border-gray-200 z-50 transition-all duration-200 ${
                  isLeadersDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
              >
                <Link 
                  href="/leaders" 
                  className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 font-medium cursor-pointer transition-colors duration-200"
                  onClick={() => setIsLeadersDropdownOpen(false)}
                >
                  Current Leaders
                </Link>
                                 <Link 
                   href="/leaders/past-presidents" 
                   className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 font-medium cursor-pointer transition-colors duration-200 whitespace-nowrap"
                   onClick={() => setIsLeadersDropdownOpen(false)}
                 >
                   Past District Presidents
                 </Link>
              </div>
            </div>
            
            <Link 
              href="/clubs" 
              className={`font-medium whitespace-nowrap cursor-pointer transition-colors duration-200 ${
                pathname === "/clubs" ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
              }`}
            >
              Clubs
            </Link>
            <Link 
              href="/gallery" 
              className={`font-medium whitespace-nowrap cursor-pointer transition-colors duration-200 ${
                pathname === "/gallery" ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
              }`}
            >
              Gallery
            </Link>
            <Link 
              href="/downloads" 
              className={`font-medium whitespace-nowrap cursor-pointer transition-colors duration-200 ${
                pathname === "/downloads" ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
              }`}
            >
              Downloads
            </Link>
            <Link 
              href="/contact" 
              className={`font-medium whitespace-nowrap cursor-pointer transition-colors duration-200 ${
                pathname === "/contact" ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
              }`}
            >
              Contact
            </Link>
          </nav>

          <button 
            className="md:hidden w-6 h-6 flex items-center justify-center cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className="ri-menu-line text-xl"></i>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <nav className="py-4 space-y-4">
              <Link 
                href="/" 
                className={`block font-medium cursor-pointer transition-colors duration-200 ${
                  pathname === "/" ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
                }`}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className={`block font-medium cursor-pointer transition-colors duration-200 ${
                  pathname === "/about" ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
                }`}
              >
                About
              </Link>
              
              {/* Mobile Leaders Dropdown */}
              <div className="space-y-2">
                <div className={`font-medium ${
                  pathname === "/leaders" || pathname === "/leaders/past-presidents" 
                    ? "text-blue-600" 
                    : "text-gray-700"
                }`}>
                  Leaders
                </div>
                <div className="pl-4 space-y-2">
                  <Link 
                    href="/leaders" 
                    className={`block font-medium cursor-pointer transition-colors duration-200 ${
                      pathname === "/leaders" ? "text-blue-600" : "text-gray-600 hover:text-blue-600"
                    }`}
                  >
                    Current Leaders
                  </Link>
                  <Link 
                    href="/leaders/past-presidents" 
                    className={`block font-medium cursor-pointer transition-colors duration-200 ${
                      pathname === "/leaders/past-presidents" ? "text-blue-600" : "text-gray-600 hover:text-blue-600"
                    }`}
                  >
                    Past District Presidents
                  </Link>
                </div>
              </div>
              
              <Link 
                href="/clubs" 
                className={`block font-medium cursor-pointer transition-colors duration-200 ${
                  pathname === "/clubs" ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
                }`}
              >
                Clubs
              </Link>
              <Link 
                href="/gallery" 
                className={`block font-medium cursor-pointer transition-colors duration-200 ${
                  pathname === "/gallery" ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
                }`}
              >
                Gallery
              </Link>
              <Link 
                href="/downloads" 
                className={`block font-medium cursor-pointer transition-colors duration-200 ${
                  pathname === "/downloads" ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
                }`}
              >
                Downloads
              </Link>
              <Link 
                href="/contact" 
                className={`block font-medium cursor-pointer transition-colors duration-200 ${
                  pathname === "/contact" ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
                }`}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}