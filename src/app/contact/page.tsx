import type { Metadata } from "next";
import SocialLinks from "@/components/SocialLinks";
import { MailIcon, PhoneIcon, MapPinIcon, ClockIcon } from "@/components/Icons";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with LEO District 306 D2 for any inquiries or support.",
};

const { contact } = site;
const mapQuery = encodeURIComponent(
  `${contact.address.name}, ${contact.address.line}, ${contact.address.city}, ${contact.address.country}`,
);

export default function ContactPage() {
  return (
    <>
      <section className="bg-brand-dark py-16 text-white md:py-20">
        <div className="container-page text-center">
          <h1 className="font-display text-4xl font-extrabold sm:text-5xl">Contact Us</h1>
          <p className="mx-auto mt-4 max-w-2xl text-white/70">
            Get in touch with LEO District 306 D2 for any inquiries or support.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          {/* Info */}
          <div>
            <h2 className="font-display text-2xl font-bold text-ink">Contact Information</h2>
            <div className="mt-6 space-y-4">
              <InfoRow icon={<MapPinIcon className="h-5 w-5" />} label="Address">
                LEO District 306 D2<br />
                {contact.address.name}<br />
                {contact.address.line}, {contact.address.city}<br />
                {contact.address.country}
              </InfoRow>
              <InfoRow icon={<PhoneIcon className="h-5 w-5" />} label="Phone">
                <a href={contact.phoneHref} className="hover:text-brand">{contact.phone}</a>
              </InfoRow>
              <InfoRow icon={<MailIcon className="h-5 w-5" />} label="Email">
                <a href={`mailto:${contact.email}`} className="break-all hover:text-brand">{contact.email}</a>
              </InfoRow>
              <InfoRow icon={<ClockIcon className="h-5 w-5" />} label="Office Hours">
                {contact.hours}
              </InfoRow>
            </div>

            <div className="mt-8">
              <h3 className="font-display text-lg font-semibold text-ink">Follow Us</h3>
              <SocialLinks className="mt-3" />
            </div>
          </div>

          {/* Map */}
          <div>
            <h2 className="font-display text-2xl font-bold text-ink">Our Location</h2>
            <p className="mt-1 text-sm text-muted">Visit us at our district office.</p>
            <div className="mt-6 overflow-hidden rounded-2xl border border-black/10 shadow-sm">
              <iframe
                title="LEO District 306 D2 location"
                src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                width="100%"
                height="420"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block h-[420px] w-full border-0"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function InfoRow({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <div className="card flex items-start gap-4 p-5">
      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand">
        {icon}
      </span>
      <div>
        <p className="font-display font-semibold text-ink">{label}</p>
        <p className="mt-1 text-sm leading-relaxed text-muted">{children}</p>
      </div>
    </div>
  );
}
