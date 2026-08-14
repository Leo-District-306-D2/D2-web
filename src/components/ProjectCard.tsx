import Image from "next/image";
import type { Project } from "@/lib/types";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="h-full transform overflow-hidden rounded-lg bg-white shadow-md transition-all duration-500 hover:-translate-y-1 hover:scale-105 hover:shadow-xl sm:rounded-xl sm:shadow-lg sm:hover:-translate-y-2">
      <div className="group flex h-full flex-col overflow-hidden">
        <div className="relative h-40 overflow-hidden sm:h-48 lg:h-52">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover object-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-1"
          />
          <div className="absolute inset-0 hidden bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100 sm:block" />
        </div>
        <div className="flex flex-1 flex-col bg-linear-to-br from-white to-gray-50 p-4 sm:p-6">
          <h3 className="mb-2 text-base font-semibold text-gray-800 transition-all duration-300 group-hover:text-brand sm:text-lg">
            {project.title}
          </h3>
          <p className="mb-3 flex-1 text-xs leading-relaxed text-gray-600 sm:mb-4 sm:text-sm">
            {project.description}
          </p>
          <p className="text-xs text-gray-500">{project.date}</p>
        </div>
      </div>
    </div>
  );
}
