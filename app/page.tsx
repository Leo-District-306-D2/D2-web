'use client';

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

export default function Home() {
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
    </div>
  );
}
