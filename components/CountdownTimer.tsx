'use client';

import { useState, useEffect } from 'react';
import RocketAnimation from './RocketAnimation';

interface CountdownTimerProps {
  targetDate: Date;
  onComplete?: () => void;
}

export default function CountdownTimer({ targetDate, onComplete }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isComplete, setIsComplete] = useState(false);
  const [showRocket, setShowRocket] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        setIsComplete(true);
        setShowRocket(true);
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  // Calculate progress percentage for circular progress
  const totalDuration = 15 * 1000; // 15 seconds in milliseconds
  const remainingTime = Math.max(0, targetDate.getTime() - new Date().getTime());
  const progressPercentage = Math.max(0, Math.min(100, ((totalDuration - remainingTime) / totalDuration) * 100));
  const circumference = 2 * Math.PI * 60; // radius = 60
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (progressPercentage / 100) * circumference;

  const handleRocketComplete = () => {
    onComplete?.();
  };

  if (showRocket) {
    return <RocketAnimation onComplete={handleRocketComplete} />;
  }

  if (isComplete) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
        <div className="text-center">
          <div className="mb-8">
            <img 
              src="/images/logos/leo.png" 
              alt="Leo Logo" 
              className="w-24 h-24 mx-auto animate-bounce"
            />
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">
            🎉 Launch Complete! 🎉
          </h2>
          <p className="text-blue-200 text-xl">
            Welcome to LEO District 306 D2
          </p>
          <button 
            onClick={() => window.location.reload()}
            className="mt-6 px-6 py-3 bg-yellow-400 text-blue-900 font-bold rounded-lg hover:bg-yellow-300 transition-colors"
          >
            🚀 Enter LEO District 306 D2
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="text-center">
        {/* Logo */}
        <div className="mb-8">
          <img 
            src="/images/logos/DP logo 25_26_Final.png" 
            alt="Leo Logo" 
            className="w-48 h-48 mx-auto animate-pulse"
          />
        </div>
        
        {/* Launch Text */}
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Get Ready for Launch! 🚀
        </h2>
        <p className="text-[#7B8394] mb-8 text-lg">
          Preparing for Launch...
        </p>
        
        {/* Circular Progress with Countdown */}
        <div className="relative mb-8">
          <svg className="w-48 h-48 mx-auto transform -rotate-90" viewBox="0 0 150 150">
            {/* Background circle */}
            <circle
              cx="75"
              cy="75"
              r="60"
              stroke="#e5e7eb"
              strokeWidth="8"
              fill="transparent"
              className="opacity-50"
            />
            {/* Progress circle */}
            <circle
              cx="75"
              cy="75"
              r="60"
              stroke="#2388C9"
              strokeWidth="8"
              fill="transparent"
              strokeLinecap="round"
              strokeDasharray={strokeDasharray}
              strokeDashoffset={strokeDashoffset}
              className="transition-all duration-1000 ease-out"
              style={{
                filter: 'drop-shadow(0 0 10px rgba(35, 136, 201, 0.5))'
              }}
            />
          </svg>
          
          {/* Countdown number in center */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-6xl font-bold text-[#2388C9]">
              {Math.max(1, timeLeft.seconds + 1)}
            </div>
          </div>
        </div>
        
        {/* Progress percentage */}
        <p className="text-gray-800 font-semibold text-lg mb-4">
          {Math.round(progressPercentage)}% Complete
        </p>
        
        {/* Time remaining text */}
        <p className="text-[#7B8394]">
          {Math.max(1, timeLeft.seconds + 1)} seconds remaining
        </p>
      </div>
    </div>
  );
}
