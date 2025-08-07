import { President } from "@/types/leaders";
import Image from "next/image";

export const PresidentCard: React.FC<{ member: President }> = ({ member }) => (
  <div className="relative group aspect-[2/3] max-w-[300px] overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl mx-auto bg-card border border-border">
    {/* Image Container with Scale Animation */}
    <div className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-110">
      <Image
        src={member.image}
        alt={member.name}
        className="w-full h-full object-cover"
        width={300}
        height={450}
      />
    </div>

    {/* Dark Gradient Overlay */}
    <div className="absolute bottom-0 w-full h-2/5 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

    {/* Presidency Years Badge */}
    <div className="absolute top-4 left-4 text-white px-3 py-1 rounded-full text-sm font-semibold z-30">
      {member.presidencyYears}
    </div>

    {/* Lions Logo */}
    <div className="absolute bottom-20 right-4 bg-white/90 rounded-full p-2 shadow-md z-30 block">
      <Image
        src={member.logo}
        alt="Lions Club Logo"
        width={64}
        height={64}
        className="opacity-80"
      />
    </div>

    {/* Optional Additional Blur/Lighting Overlay (if needed) */}
    <div className="absolute bottom-0 w-full h-full pointer-events-none z-10">
      <div className="absolute bottom-0 w-full h-1/2 opacity-100 transition-all duration-700 ease-out translate-y-1/2 group-hover:translate-y-0">
        <div className="w-full h-full bg-gradient-to-t from-black/100 via-black/80 to-transparent rounded-t-lg" />
      </div>
    </div>

    {/* Animated Content */}
    <div className="absolute bottom-0 w-full px-4 py-5 text-white z-20 translate-y-8 opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-out">
      <h3 className="text-lg font-bold">{member.name}</h3>
      <p className="text-sm text-blue-300 font-medium">{member.role}</p>
      <p className="text-xs mt-2 line-clamp-3">{member.bio}</p>
    </div>
  </div>
);
