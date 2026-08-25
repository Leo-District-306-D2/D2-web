import Link from "next/link";
import Image from "next/image";
import { site } from "@/data/site";
import { footerNav } from "@/data/navigation";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="mt-auto bg-brand-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand emblems */}
          <div>
            <div className="mb-4 flex items-center space-x-6">
              <div className="relative h-28 w-28 sm:h-40 sm:w-40">
                <Image
                  src="/images/logos/lion-2.png"
                  alt="Lion Logo"
                  fill
                  className="object-contain"
                  sizes="160px"
                />
              </div>
              <div className="relative h-28 w-28 sm:h-40 sm:w-40">
                <Image
                  src={site.logos.dp}
                  alt={`LEO District 306 D2 — ${site.dpTheme.theme} ${site.dpTheme.year}`}
                  fill
                  className="object-contain"
                  sizes="160px"
                />
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="mb-4 font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {footerNav.quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="cursor-pointer text-sm text-gray-400 hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="mb-4 font-semibold">Resources</h4>
            <ul className="space-y-2">
              {footerNav.resources.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="cursor-pointer text-sm text-gray-400 hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-semibold">Contact Info</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href={`mailto:${site.contact.email}`} className="break-all hover:text-white">
                  {site.contact.email}
                </a>
              </li>
              <li>
                <a href={site.contact.phoneHref} className="hover:text-white">
                  {site.contact.phone}
                </a>
              </li>
              <li>
                {site.contact.address.name}, {site.contact.address.line},{" "}
                {site.contact.address.city}, {site.contact.address.country}
              </li>
            </ul>
            <div className="mt-4">
              <p className="mb-3 text-sm font-semibold text-white">Follow Us</p>
              <SocialLinks variant="squares" />
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} LEO District 306 D2. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
