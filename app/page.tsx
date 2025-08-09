'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WelcomeCollage from '../components/WelcomeCollage';
import DistrictMap from '../components/DistrictMap';
import WhatWeDoSection from '../components/WhatWeDoSection';
import QuickStatsSection from '../components/QuickStatsSection';
import MeetOurTeamSection from '../components/MeetOurTeamSection';
import LeoClubsSection from '../components/LeoClubsSection';
import RecentUpdatesSection from '../components/RecentUpdatesSection';
import LoadingSpinner from '../components/LoadingSpinner';
import CountdownTimer from '../components/CountdownTimer';
// import ResetButton from '../components/ResetButton';
// import StatusIndicator from '../components/StatusIndicator';
import { LAUNCH_CONFIG, getTimeUntilLaunch } from '../utils/launchConfig';

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [showCountdown, setShowCountdown] = useState(false);
  const [isFirstUser, setIsFirstUser] = useState(false);
  const [isInitializing, setIsInitializing] = useState(true);
  
  const { isLaunched, timeLeft } = getTimeUntilLaunch();
  const launchDate = LAUNCH_CONFIG.launchDate;

  useEffect(() => {
    const checkLaunchStatus = async () => {
      try {
        // Check server-side launch status
        const response = await fetch('/api/launch-status');
        const { hasLaunched, firstUserSeen } = await response.json();
        
        // If already launched, skip countdown
        if (isLaunched || hasLaunched) {
          setIsLoading(false);
          setShowCountdown(false);
          setIsInitializing(false);
          return;
        }

        // If debug mode is enabled, always show countdown
        if (LAUNCH_CONFIG.debugMode) {
          const timer = setTimeout(() => {
            setIsLoading(false);
            setShowCountdown(true);
            setIsInitializing(false);
          }, LAUNCH_CONFIG.loadingDuration);
          return () => clearTimeout(timer);
        }

        // Check if this is the first user
        if (!firstUserSeen) {
          // Mark as first user
          await fetch('/api/launch-status', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ action: 'markFirstUser' })
          });
          
          setIsFirstUser(true);
          
          // Show countdown immediately for first user
          setShowCountdown(true);
          setIsLoading(false);
          setIsInitializing(false);
        } else {
          // Not first user, show loading directly
          setIsLoading(true);
          setIsInitializing(false);
        }
      } catch (error) {
        console.error('Error checking launch status:', error);
        // Fallback: use localStorage to prevent showing countdown and loading again
        const hasSeenCountdown = localStorage.getItem('hasSeenCountdown');
        const hasSeenLoading = localStorage.getItem('hasSeenLoading');
        
        if (hasSeenLoading === 'true' && hasSeenCountdown === 'true') {
          setIsLoading(false);
          setShowCountdown(false);
          setIsInitializing(false);
          return;
        }
        
        // Show countdown only if not seen before (first user only)
        const timer = setTimeout(() => {
          setIsLoading(false);
          localStorage.setItem('hasSeenLoading', 'true');
          
          // Only show countdown if never seen before
          if (LAUNCH_CONFIG.enableCountdown && hasSeenCountdown !== 'true') {
            setShowCountdown(true);
          }
          setIsInitializing(false);
        }, LAUNCH_CONFIG.loadingDuration);
        
        return () => clearTimeout(timer);
      }
    };

    checkLaunchStatus();
  }, [isLaunched]);

  const handleCountdownComplete = async () => {
    setShowCountdown(false);
    // After countdown, show loading
    setIsLoading(true);
  };

  const handleLoadingComplete = async () => {
    setIsLoading(false);
    localStorage.setItem('hasSeenCountdown', 'true');
    localStorage.setItem('hasSeenLoading', 'true');
    
    // Notify server that launch is complete
    try {
      await fetch('/api/launch-status', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'markLaunched' })
      });
    } catch (error) {
      console.error('Error marking launch complete:', error);
    }
  };

  // Show loading spinner while initializing to prevent flash of home page
  if (isInitializing) {
    return <LoadingSpinner onComplete={() => {}} />;
  }

  if (LAUNCH_CONFIG.enableLoading && isLoading) {
    return <LoadingSpinner onComplete={handleLoadingComplete} />;
  }

  if (LAUNCH_CONFIG.enableCountdown && showCountdown) {
    return <CountdownTimer targetDate={launchDate} onComplete={handleCountdownComplete} />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section with Welcome Images */}
      <WelcomeCollage />

      {/* District Map Section */}
      <DistrictMap />

      {/* What We Do Section */}
      <WhatWeDoSection />

      {/* Quick Stats */}
      <QuickStatsSection />

      {/* Meet Our Team */}
      <MeetOurTeamSection />

      {/* Leo Clubs Section */}
      <LeoClubsSection />

      {/* Recent Updates */}
      <RecentUpdatesSection />

      <Footer />
      
      {/* Reset Button for testing */}
      {/* <ResetButton /> */}
      
      {/* Status Indicator for testing */}
      {/* <StatusIndicator /> */}
    </div>
  );
}
