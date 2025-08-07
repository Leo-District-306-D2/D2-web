"use client";

import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { LeaderSection } from "@/components/leaders/leaderSection";
import { leaderData } from "@/utils/leaderData";

// Main Leaders page component
const Leaders: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="min-h-screen">
        <Header />
        
        {/* Page Title Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-[#2388C9] mb-6">
                Our Leaders
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Dedicated leaders who guide LEO District 306 D2 towards excellence through 
                visionary leadership and unwavering commitment to community service
              </p>
            </div>
          </div>
        </section>

        {/* Leadership Sections */}
        <LeaderSection
          title="District Executive Officers"
          members={leaderData.executiveOfficers}
        />

        <LeaderSection
          title="Key Council Officers"
          members={leaderData.councilOfficers}
        />

        <LeaderSection
          title="Chief Coordinators"
          members={leaderData.councilCoordinators}
        />

        <LeaderSection title="Region A" members={leaderData.regionA} />

        <LeaderSection title="Region B" members={leaderData.regionB} />

        <LeaderSection title="Region C" members={leaderData.regionC} />
        
        <LeaderSection
          title="District Directors"
          members={leaderData.directors}
        />

        {/* <LeaderSection
          title="Key Cabinet Executives"
          members={leaderData.cabinetExecutives}
        /> */}
      </div>
      <Footer />
    </div>
  );
};

export default Leaders;
