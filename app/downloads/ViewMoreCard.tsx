import React from "react";

const ViewMoreCard = () => {
  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow group">
      <div className="h-1 bg-gradient-to-r from-blue-500 to-blue-800"></div>
      <div className="p-6">
        {/* First Row  */}
        <div className="flex  items-start justify-between mb-4 gap-x-2">
          <div className="w-3/4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Discover More Logos
            </h3>
            <p className="text-gray-600 text-sm mb-3">
              Explore additional official international logos of the Leo Club.
            </p>
          </div>
        </div>

        {/* Second Row  */}
        <div className="flex flex-wrap items-end justify-end gap-y-4">
          <a
            href="https://www.lionsclubs.org/en/discover-our-clubs/about-leos"
            target="_blank"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2 whitespace-nowrap cursor-pointer group-hover:scale-105 transform"
          >
            <span>Explore</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ViewMoreCard;
