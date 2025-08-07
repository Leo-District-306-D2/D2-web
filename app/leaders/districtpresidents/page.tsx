import React from 'react'
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { PresidentSection } from "@/components/leaders/presidentSection";
import { pastDistrictPresidents } from "@/utils/districtPresidentData";

const DistrictLeaders: React.FC = () => {
  return (
    <div className="bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#2388C9] to-[#2C4B78] text-white">
        <div className="relative container mx-auto px-4 py-20">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-5xl font-bold mb-6">
              Our Leaders
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Dedicated leaders who guide LEO District 306 D2 towards excellence through 
              visionary leadership and unwavering commitment to community service
            </p>
          </div>
        </div>
      </section>
      
      <PresidentSection
        title="Past District Presidents"
        members={pastDistrictPresidents}
      />
      <Footer />
    </div>
  );
};

export default DistrictLeaders;