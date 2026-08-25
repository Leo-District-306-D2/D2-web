import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site, socials } from "@/data/site";

// The live site uses Geist (Next's default) — matched here so type metrics line up.
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "LEO District 306 D2 — Leadership, Experience, Opportunity",
    template: "%s | LEO District 306 D2",
  },
  description: site.description,
  keywords: ["Leo District 306 D2", "Leo Club", "Sri Lanka", "Lions Clubs International", "youth leadership"],
  openGraph: {
    title: "LEO District 306 D2",
    description: site.description,
    url: site.url,
    siteName: "LEO District 306 D2",
    type: "website",
    // Declared explicitly so search engines and social cards use this image instead of
    // picking one off the page (Google was otherwise auto-selecting the hero DP badge).
    images: [
      {
        url: site.logos.dp,
        width: 1200,
        height: 1200,
        alt: `LEO District 306 D2 — ${site.dpTheme.theme} ${site.dpTheme.year}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LEO District 306 D2",
    description: site.description,
    images: [site.logos.dp],
  },
  // Without max-image-preview:large, Google may show only a small thumbnail or none.
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

// Structured data: tells search engines the district's canonical name and logo rather than
// letting them infer one (Google was rendering the site name as "Leo District 306D2").
// Built from src/data/site.ts so it stays in sync with the rest of the content layer.
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${site.url}/#organization`,
      name: site.name,
      alternateName: site.shortName,
      url: site.url,
      logo: `${site.url}${site.logos.dp}`,
      image: `${site.url}${site.logos.dp}`,
      description: site.description,
      email: site.contact.email,
      telephone: site.contact.phone,
      address: {
        "@type": "PostalAddress",
        name: site.contact.address.name,
        streetAddress: site.contact.address.line,
        addressLocality: site.contact.address.city,
        addressCountry: site.contact.address.country,
      },
      sameAs: socials.map((s) => s.href),
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      name: site.name,
      alternateName: site.shortName,
      url: site.url,
      publisher: { "@id": `${site.url}/#organization` },
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
