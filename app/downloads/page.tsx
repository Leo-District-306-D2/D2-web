"use client";

import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import LogoCard from "./LogoCard";
import logos, { LogoCardProps } from "./logos";
import officers from "./officers";
import OfficerCard from "./OfficerCard";
import { OfficerCardProps } from "./officers";
import administratives from "./administratives";
import AdministrativeCard from "./AdministrativeCard";
import { AdministrativeCardProps } from "./administratives";
import ViewMoreCard from "./ViewMoreCard";

type FilterType = "administratives" | "officers" | "logos";

export default function Downloads() {
  const [selectedCategory, setSelectedCategory] =
    useState<FilterType>("administratives");

  const [logoData, setLogoData] = useState<LogoCardProps[]>([]);
  const [officerData, setOfficerData] = useState<OfficerCardProps[]>([]);
  const [administrativeData, setAdministrativeData] = useState<
    AdministrativeCardProps[]
  >([]);

  useEffect(() => {
    switch (selectedCategory) {
      case "administratives":
        setAdministrativeData(administratives);
        break;
      case "officers":
        setOfficerData(officers);
        break;
      case "logos":
        setLogoData(logos);
        break;
    }
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Filters Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setSelectedCategory("administratives")}
              className={`px-6 py-3 rounded-lg font-medium transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === "administratives"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-blue-50"
              }`}
            >
              Administrative
            </button>

            <button
              onClick={() => setSelectedCategory("officers")}
              className={`px-6 py-3 rounded-lg font-medium transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === "officers"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-blue-50"
              }`}
            >
              Officers
            </button>

            <button
              onClick={() => setSelectedCategory("logos")}
              className={`px-6 py-3 rounded-lg font-medium transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === "logos"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-blue-50"
              }`}
            >
              Logos & Branding
            </button>
          </div>
        </div>
      </section>

      {/* Documents List */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {selectedCategory === "logos" &&
                logoData.map((item, index) => (
                  <LogoCard
                    key={index}
                    title={item.title}
                    description={item.description}
                    src={item.src}
                    type={item.type}
                    size={item.size}
                    date={item.date}
                  />
                ))}
              {selectedCategory === "logos" && <ViewMoreCard />}
              {selectedCategory === "officers" &&
                officerData.map((item, index) => (
                  <OfficerCard
                    key={index}
                    name={item.name}
                    profileImage={item.profileImage}
                    position={item.position}
                    pdfUrl={item.pdfUrl}
                    pdfTitle={item.pdfTitle}
                    type={item.type}
                    size={item.size}
                    date={item.date}
                  />
                ))}
              {selectedCategory === "administratives" &&
                administrativeData.map((item, index) => (
                  <AdministrativeCard
                    key={index}
                    category={item.category}
                    title={item.title}
                    description={item.description}
                    pdfUrl={item.pdfUrl}
                    pdfTitle={item.pdfTitle}
                    type={item.type}
                    size={item.size}
                    date={item.date}
                  />
                ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
