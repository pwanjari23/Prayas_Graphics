import type { Metadata } from "next";
import ContactPageTemplate from "@/components/ContactPageTemplate";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import { BUSINESS_INFO } from "@/lib/business-info";
import { getBreadcrumbSchema, getFaqSchema } from "@/lib/schemas";
import { faqsData } from "@/lib/faqs-data";

export const metadata: Metadata = {
  title: "Contact Prayas Graphics Nagpur — Signboard Orders, Visits & Quotes",
  description:
    "Get in touch with Prayas Graphics at Tukdoji Square, Manewada Road, Nagpur. Fast quote turnaround under 14 hours. Call +91 878 827 0495 or visit our workshop.",
  alternates: {
    canonical: `${BUSINESS_INFO.url}/contact`,
  },
  openGraph: {
    title: "Contact Prayas Graphics — Signboard Manufacturers Nagpur",
    description:
      "Visit our shop in Nagpur or chat on WhatsApp for custom signboard orders, ACP elevation work, and LED letter quotes.",
    url: `${BUSINESS_INFO.url}/contact`,
  },
};

export default function ContactPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Contact", url: "/contact" },
  ]);

  const flatFaqs = faqsData.flatMap((f) => f.items);
  const faqSchema = getFaqSchema(flatFaqs);

  return (
    <main className="relative flex min-h-screen flex-col items-center bg-[#FAFAF9] pb-16 overflow-x-hidden">
      {/* Subtle light background ambient texture */}
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.035]"
        style={{
          backgroundImage: "radial-gradient(#18181b 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
        aria-hidden="true"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Redesigned Contact Page Template */}
      <ContactPageTemplate />

      {/* FAQ Section */}
      <FaqSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
