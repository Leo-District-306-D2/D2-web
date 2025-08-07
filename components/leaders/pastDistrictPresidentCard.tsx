import { PastDistrictPresident } from "@/types/leaders";
import Image from "next/image";

export const PastDistrictPresidentCard: React.FC<{ president: PastDistrictPresident }> = ({ president }) => (
  <div className="relative group aspect-[2/3] max-w-[300px] overflow-hidden rounded-lg shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl mx-auto bg-gradient-to-b from-gray-900 to-black border border-gray-700">
    {/* Image Container with Scale Animation */}
    <div className="absolute inset-0 -top-2 transition-transform duration-700 ease-out group-hover:scale-110">
      <Image
        src={president.image}
        alt={president.name}
        className="w-full h-full object-cover"
        width={300}
        height={450}
        onError={(e) => {
          console.error(`Failed to load image: ${president.image}`);
          e.currentTarget.src = "/images/unknown person.jpg";
        }}
      />
    </div>

    {/* Enhanced Gradient Overlay */}
    <div className="absolute bottom-0 w-full h-[80%] bg-gradient-to-t from-black/95 via-black/80 via-black/60 via-gray-900/30 to-transparent" />
    <div className="absolute bottom-0 w-full h-[60%] bg-gradient-to-t from-blue-900/30 via-blue-800/15 via-transparent to-transparent" />

    {/* Presidency Years Badge */}
    <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold z-30 shadow-lg">
      {president.presidencyYears}
    </div>

    {/* Content Container */}
    <div className="absolute bottom-0 w-full px-4 py-6 text-white z-20">
      
      
      {/* Name */}
      <div className="mb-2">
        <h3 className="text-lg font-bold text-white">
          {president.name}
        </h3>
      </div>
      
      
      {/* Presidency Years */}
      <div className="mb-2">
        <p className="text-sm text-gray-300 font-medium">
          {president.presidencyYears}
        </p>
      </div>

             {/* Club */}
       <div className="mb-3">
         <p className="text-xs text-gray-400 font-medium">
           {president.club}
         </p>
       </div>
       
       {/* Circular Logo with Animation */}
       <div className="flex justify-center">
         <div className="w-24 h-24 rounded-full overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
           <Image
             src={president.logo}
             alt="District Logo"
             width={80}
             height={80}
             className="w-full h-full object-cover"
             onError={(e) => {
               console.error(`Failed to load logo: ${president.logo}`);
               e.currentTarget.src = "/images/logos/leo.png";
             }}
           />
         </div>
       </div>
       
               {/* Quote - Centered below logo */}
        <div className="flex justify-center mt-3">
          <p className="text-xs font-bold uppercase tracking-wider text-white opacity-90 text-center italic">
            {president.quote}
          </p>
        </div>
    </div>

    {/* Enhanced Hover Effect Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 via-blue-800/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />
    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />
  </div>
);
