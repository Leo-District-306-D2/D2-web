import Link from "next/link";
import { ArrowRight } from "@/components/Icons";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center bg-brand-dark text-white">
      <div className="container-page text-center">
        <p className="font-display text-7xl font-extrabold text-gold sm:text-8xl">404</p>
        <h1 className="mt-4 font-display text-2xl font-bold sm:text-3xl">Page not found</h1>
        <p className="mx-auto mt-3 max-w-md text-white/70">
          The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s get you back on track.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn btn-gold">
            Back to Home <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/contact" className="btn btn-outline border-white/30! text-white! hover:bg-white/10!">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
