import React from "react";
import { AdministrativeCardProps as Props } from "./administratives";

const AdministrativeCard = ({
  category,
  title,
  description,
  pdfUrl,
  pdfTitle,
  type,
  size,
  date,
}: Props) => {
  return (
    <>
      <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow group">
        <div className="h-1 bg-gradient-to-r from-blue-500 to-blue-800"></div>
        <div className="p-6">
          {/* First Row  */}
          <div className="flex flex-row items-start justify-between mb-4 gap-x-2">
            <div className="w-1/6">
              <div
                className={`w-12 h-12 rounded-lg flex items-center justify-center text-red-600 bg-gray-50`}
              >
                <i className={`ri-file-pdf-line text-2xl`}></i>
              </div>
            </div>
            <div className="w-5/6">
              <p className="text-xs text-gray-500 mb-1">{category}</p>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {title}
              </h3>
              <p className="text-gray-600 text-sm mb-3">{description}</p>
            </div>
          </div>

          {/* Second Row  */}
          <div className="flex flex-wrap items-center justify-between gap-y-4">
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center">
                <i className="ri-image-line mr-1"></i>
                <span>{type}</span>
              </div>
              <div className="flex items-center">
                <i className="ri-download-line mr-1"></i>
                <span>{size}</span>
              </div>
              <div className="flex items-center">
                <i className="ri-calendar-line mr-1"></i>
                <span>{date}</span>
              </div>
            </div>

            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2 whitespace-nowrap cursor-pointer group-hover:scale-105 transform"
            >
              <i className="ri-download-line"></i>
              <span>Download</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdministrativeCard;
