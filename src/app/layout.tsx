import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/data/site";

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
  },
  icons: { icon: site.logos.emblem },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
