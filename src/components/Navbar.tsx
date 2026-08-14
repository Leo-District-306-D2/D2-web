"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { mainNav } from "@/data/navigation";
import { site } from "@/data/site";
import { ChevronDown, MenuIcon, CloseIcon } from "./Icons";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mobileLeaders, setMobileLeaders] = useState(false);

  // Close the mobile menu on route change.
  useEffect(() => {
    setOpen(false);
    setMobileLeaders(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center">
            <div className="relative h-12 w-56 sm:w-72">
              <Image
                src={site.logos.wordmark}
                alt="LEO District 306 Logo"
                fill
                priority
                className="object-contain"
                sizes="288px"
              />
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden space-x-8 md:flex">
            {mainNav.map((item) => {
              const active = isActive(pathname, item.href);
              if (item.children) {
                return (
                  <div key={item.label} className="group relative">
                    <button
                      type="button"
                      className={`flex cursor-pointer items-center font-medium whitespace-nowrap transition-colors duration-200 ${
                        active ? "text-brand" : "text-gray-700 hover:text-brand"
                      }`}
                    >
                      {item.label}
                      <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                    </button>
                    <div className="invisible absolute left-0 top-full z-50 mt-1 min-w-48 rounded-lg border border-gray-200 bg-white py-2 opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:opacity-100">
                      {item.children.map((c) => (
                        <Link
                          key={c.href}
                          href={c.href}
                          className={`block cursor-pointer whitespace-nowrap px-4 py-2 font-medium transition-colors duration-200 hover:bg-gray-50 hover:text-brand ${
                            pathname === c.href ? "text-brand" : "text-gray-700"
                          }`}
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`cursor-pointer font-medium whitespace-nowrap transition-colors duration-200 ${
                    active ? "text-brand" : "text-gray-700 hover:text-brand"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile toggle */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-6 w-6 cursor-pointer items-center justify-center text-gray-700 md:hidden"
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-gray-200 bg-white md:hidden">
          <ul className="container mx-auto flex flex-col px-4 py-3">
            {mainNav.map((item) => {
              const active = isActive(pathname, item.href);
              if (item.children) {
                return (
                  <li key={item.label} className="py-0.5">
                    <button
                      type="button"
                      onClick={() => setMobileLeaders((v) => !v)}
                      className={`flex w-full items-center justify-between px-1 py-2.5 text-left font-medium ${
                        active ? "text-brand" : "text-gray-700"
                      }`}
                    >
                      {item.label}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${mobileLeaders ? "rotate-180" : ""}`}
                      />
                    </button>
                    {mobileLeaders && (
                      <div className="ml-3 flex flex-col border-l border-gray-200 pl-3">
                        {item.children.map((c) => (
                          <Link
                            key={c.href}
                            href={c.href}
                            className="py-2 text-sm text-gray-600 hover:text-brand"
                          >
                            {c.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </li>
                );
              }
              return (
                <li key={item.label} className="py-0.5">
                  <Link
                    href={item.href}
                    className={`block px-1 py-2.5 font-medium ${
                      active ? "text-brand" : "text-gray-700"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}
