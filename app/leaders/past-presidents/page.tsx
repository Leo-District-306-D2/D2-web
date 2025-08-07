import { PastDistrictPresidentSection } from "@/components/leaders/pastDistrictPresidentSection";
import { pastDistrictPresidents } from "@/utils/pastDistrictPresidentData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PastDistrictPresidentsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />
      
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-[#2388C9] mb-6">
              Past District Presidents
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Honoring the legacy of leadership and service from our distinguished past district presidents who have shaped our organization's history.
            </p>
          </div>
        </div>
      </section>

      {/* Past District Presidents Section */}
      <PastDistrictPresidentSection 
        title="Our Past District Presidents"
        presidents={pastDistrictPresidents}
      />
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
