import Link from "next/link";
import Image from "next/image";
import StatCounter from "@/components/StatCounter";
import LeaderCard from "@/components/LeaderCard";
import ProjectCard from "@/components/ProjectCard";
import { serviceIcons } from "@/components/Icons";
import { site, stats } from "@/data/site";
import { districtOverview } from "@/data/about";
import { services } from "@/data/services";
import { featuredLeaders } from "@/data/leaders";
import { allClubs } from "@/data/clubs";
import { projects } from "@/data/projects";

// Icons for the stats band, in the same order as `stats`.
const statIcons = [
  "/images/leo-svg.svg",
  "/images/club-svgrepo-com.svg",
  "/images/location-svgrepo-com.svg",
  "/images/projects-svgrepo-com.svg",
];

export default function Home() {
  const half = Math.ceil(allClubs.length / 2);
  const clubColumns = [allClubs.slice(0, half), allClubs.slice(half)];

  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="relative overflow-hidden bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="animate-fade-in-left lg:ml-14">
              <h1 className="animate-slide-in-bottom mb-6 text-4xl leading-tight font-bold text-brand-dark sm:text-5xl">
                Welcome to
                <br />
                <span className="text-5xl text-brand sm:text-6xl lg:text-7xl">
                  LEO District 306 D2
                </span>
              </h1>
              <p className="animate-slide-in-bottom-delay mb-8 text-lg leading-relaxed text-gray-600 sm:text-xl">
                {districtOverview.intro}
              </p>
              <div className="animate-slide-in-bottom-delay-2 flex flex-col gap-4 sm:flex-row">
                <Link href="/about" className="btn btn-primary animate-pulse-slow">
                  Learn More About Us
                </Link>
                <Link href="/clubs" className="btn btn-outline animate-pulse-slow-delay">
                  Explore Our Clubs
                </Link>
              </div>
            </div>

            <div className="animate-fade-in-right relative">
              <div className="relative mx-auto max-w-xl">
                <div className="relative z-10 flex justify-center">
                  <div className="animate-float-gentle w-full">
                    <div className="flex w-full items-center justify-center p-8">
                      <div className="relative w-full max-w-105">
                        {/* Soft gold backdrop for depth */}
                        <span
                          aria-hidden="true"
                          className="pointer-events-none absolute -inset-6 rounded-full bg-gold/10 blur-3xl"
                        />
                        <Image
                          src={site.logos.dp}
                          alt="LEO District 306 D2 Logo"
                          width={420}
                          height={420}
                          priority
                          className="relative h-auto w-full object-contain drop-shadow-[0_18px_30px_rgba(20,41,52,0.18)]"
                        />
                        {/* Metallic light-gleam sweeping across the badge, clipped to its shape */}
                        <span
                          aria-hidden="true"
                          className="badge-shine pointer-events-none absolute inset-0"
                          style={{
                            WebkitMaskImage: `url(${site.logos.dp})`,
                            maskImage: `url(${site.logos.dp})`,
                          }}
                        />
                        {/* Twinkling gold glints */}
                        <span aria-hidden="true" className="sparkle sparkle-1" />
                        <span aria-hidden="true" className="sparkle sparkle-2" />
                        <span aria-hidden="true" className="sparkle sparkle-3" />
                        <span aria-hidden="true" className="sparkle sparkle-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- About the district ---------- */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="relative h-[320px] w-full sm:h-[420px] lg:h-[500px]">
                <Image
                  src="/images/D2-map-gold.png"
                  alt="District 306 D2 Map"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="mt-4 flex items-center justify-center">
                <div className="flex items-center space-x-2">
                  <div className="h-4 w-4 rounded border border-white bg-gold" />
                  <span className="text-sm text-gray-600">District 306 D2</span>
                </div>
              </div>
            </div>
            <div>
              <h2 className="mb-6 text-3xl font-bold text-brand sm:text-4xl">
                Leo District 306 D2
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-gray-600 lg:mr-14">
                {districtOverview.coverage}
              </p>
              <a
                href="https://leomd306.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-slate animate-pulse-slow-delay"
              >
                Explore Leo MD 306
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- What We Do ---------- */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <h3 className="mb-6 text-3xl font-bold text-gold-dark sm:text-4xl">What We Do?</h3>
              <h2 className="mb-6 text-3xl font-bold text-brand-dark sm:text-4xl">
                We believe that we can create more impact with you
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {services.map((s, i) => {
                const Icon = serviceIcons[i] ?? serviceIcons[0];
                return (
                  <div
                    key={s.title}
                    className="flex items-start space-x-4 transition-transform duration-500 hover:scale-105"
                  >
                    <div className="shrink-0">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg transition-shadow duration-500 hover:shadow-lg">
                        <Icon width={34} height={34} className="text-gold-deep" />
                      </div>
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-bold text-brand transition-colors duration-300 hover:text-gold-dark">
                        {s.title}
                      </h3>
                      <p className="leading-relaxed text-gray-600">{s.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Stats band ---------- */}
      <section className="relative mt-20 min-h-[200px] overflow-hidden py-24 text-white">
        <div
          className="absolute inset-0 bg-cover bg-fixed bg-center"
          style={{ backgroundImage: "url(/images/projects/embolden-24.jpg)" }}
        />
        <div className="absolute inset-0 bg-brand-dark/85" />
        <div className="relative z-10 container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="transform transition-all duration-300 hover:scale-110"
              >
                <div className="flex flex-col items-center">
                  <div className="mb-4">
                    <Image
                      src={statIcons[i]}
                      alt={`${s.label} icon`}
                      width={64}
                      height={64}
                    />
                  </div>
                  <StatCounter value={s.value} className="mb-2 text-4xl font-bold text-gold" />
                  <div className="text-center text-gold-light/80">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Meet Our Leaders ---------- */}
      <section className="overflow-hidden bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="mb-12 text-center">
            <h3 className="animate-fade-in-up mb-6 text-3xl font-bold text-gold-dark sm:text-4xl">
              Meet Our Leaders
            </h3>
            <h2 className="animate-fade-in-up-delay mb-6 text-3xl font-bold text-brand-dark sm:text-4xl">
              Awesome guys behind our excellence
            </h2>
          </div>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {featuredLeaders.map((leader) => (
              <LeaderCard key={leader.title} leader={leader} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/leaders" className="btn btn-slate">
              Explore More Leaders
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- Clubs ---------- */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <h2 className="mb-6 text-3xl font-bold text-brand sm:text-4xl">
                Leo Clubs in the District
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-x-12 gap-y-4 lg:grid-cols-2">
              {clubColumns.map((column, ci) => (
                <div key={ci} className="space-y-4">
                  {column.map((club) => (
                    <div key={club} className="flex items-start space-x-3">
                      <div className="mt-3 h-2 w-2 shrink-0 rounded-full bg-gray-600" />
                      <p className="text-lg leading-relaxed text-gray-700">{club}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Recent Projects ---------- */}
      <section className="overflow-hidden bg-linear-to-br from-gray-50 to-white py-8 sm:py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="mb-8 text-center sm:mb-12">
            <h2 className="animate-fade-in-up mb-3 text-2xl leading-tight font-bold text-brand-dark sm:mb-4 sm:text-3xl lg:text-4xl">
              Recent Projects
            </h2>
            <p className="animate-fade-in-up-delay px-4 text-base leading-relaxed text-gray-600 sm:px-0 sm:text-lg">
              Explore our latest community initiatives and activities
            </p>
          </div>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
            {projects.map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </div>
          <div className="mt-8 text-center sm:mt-12">
            <Link href="/gallery" className="btn btn-slate">
              View All Projects
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
