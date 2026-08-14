import Image from "next/image";
import type { Leader } from "@/lib/types";

export default function LeaderCard({ leader }: { leader: Leader }) {
  return (
    <div className="group h-full transform overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl">
      <div className="relative h-64 overflow-hidden bg-gray-200">
        <Image
          src={leader.image}
          alt={leader.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover object-top transition-all duration-500 group-hover:scale-110 group-hover:rotate-1"
        />
        <div className="absolute inset-0 flex items-end justify-center bg-linear-to-t from-black/80 via-black/40 to-transparent pb-6 opacity-0 transition-all duration-500 group-hover:opacity-100" />
      </div>
      <div className="flex-1 border-t border-gray-100 bg-linear-to-br from-white to-gray-50 p-6">
        <h3 className="mb-2 text-lg font-semibold text-gray-800 transition-all duration-300 group-hover:text-brand">
          {leader.name}
        </h3>
        <p className="text-gray-600 transition-all duration-300 group-hover:text-gray-700">
          {leader.title}
        </p>
      </div>
    </div>
  );
}
