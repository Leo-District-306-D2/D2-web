import { Member } from "@/types/leaders";
import Image from "next/image";

export const MemberCard: React.FC<{ member: Member }> = ({ member }) => (
  <div className="relative group aspect-[3/4] overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl border border-border bg-card">
    {/* Image Container with Scale Animation */}
    <div className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-110">
      <Image
        src={member.image}
        alt={member.name}
        className="w-full h-full object-cover"
        width={300}
        height={400}
      />
    </div>

    {/* Black shade overlay for text readability */}
    <div className="absolute bottom-0 w-full h-2/5 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

    {/* Content - Always visible, animates on hover */}
    <div className="absolute bottom-0 w-full px-4 py-4 text-white transition-all duration-300 group-hover:py-6 text-center">
      <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
      <p className="text-sm text-white/90 font-medium">{member.role}</p>
    </div>

    {/* Hover Border Glow Effect */}
    <div className="absolute inset-0 rounded-lg border-2 border-transparent transition-all duration-300 group-hover:border-primary/20" />
  </div>
);
