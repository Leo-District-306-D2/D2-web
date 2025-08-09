'use client';

import { useState, useEffect } from 'react';

interface LoadingSpinnerProps {
  onComplete?: () => void;
}

export default function LoadingSpinner({ onComplete }: LoadingSpinnerProps) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsVisible(false);
            onComplete?.();
          }, 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    // Rotate logo continuously
    const rotationTimer = setInterval(() => {
      setRotation((prev) => (prev + 2) % 360);
    }, 50);

    return () => {
      clearInterval(timer);
      clearInterval(rotationTimer);
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="text-center">
        {/* Rotating Logo */}
        <div className="mb-8 relative">
          <img 
            src="/images/logos/DP logo 25_26_Final.png" 
            alt="Leo Logo" 
            className="w-32 h-32 mx-auto transition-transform duration-100 ease-linear"
            // style={{ transform: `rotate(${rotation}deg)` }}
          />
          
          {/* Glowing effect around logo */}
          <div className="absolute inset-0 w-32 h-32 mx-auto rounded-full bg-[#2388C9] opacity-20 blur-xl animate-pulse"></div>
        </div>
        
        {/* Loading Text with enhanced animation */}
        <h2 className="text-3xl font-bold text-gray-800 mb-4 animate-pulse">
          Welcome to<br />
          <span className="text-5xl text-[#2388C9]">LEO District 306 D2</span>
        </h2>
        <p className="text-[#7B8394] mb-8 text-lg animate-bounce">Loading...</p>
        
        {/* Enhanced Progress Bar */}
        <div className="w-80 bg-gray-200 rounded-full h-3 mb-4 relative overflow-hidden">
          <div 
            className="bg-gradient-to-r from-[#2388C9] to-[#2C4B78] h-3 rounded-full transition-all duration-300 ease-out relative"
            style={{ width: `${progress}%` }}
          >
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-pulse"></div>
          </div>
          
          {/* Progress bar glow */}
          <div className="absolute inset-0 rounded-full bg-[#2388C9] opacity-20 blur-sm"></div>
        </div>
        
        {/* Progress Percentage with enhanced styling */}
        <p className="text-gray-800 font-bold text-xl mb-6">
          {Math.round(progress)}%
        </p>
        
        {/* Enhanced Spinning Animation */}
        <div className="mt-6 relative">
          {/* Outer ring */}
          <div className="w-16 h-16 border-4 border-[#2388C9] border-t-transparent rounded-full animate-spin mx-auto"></div>
          
          {/* Inner ring */}
          <div className="absolute inset-2 w-12 h-12 border-4 border-[#7B8394] border-b-transparent rounded-full animate-spin mx-auto" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
          
          {/* Center dot */}
          <div className="absolute inset-6 w-4 h-4 bg-[#2388C9] rounded-full mx-auto animate-pulse"></div>
        </div>
        
        {/* Loading dots */}
        <div className="mt-4 flex justify-center space-x-1">
          <div className="w-2 h-2 bg-[#2388C9] rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-[#7B8394] rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-[#2388C9] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </div>
  );
}
