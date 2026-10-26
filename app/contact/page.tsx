import type { Metadata } from "next";
import ContactPageTemplate from "@/components/ContactPageTemplate";
import DiagonalSlantedDivider from "@/components/DiagonalSlantedDivider";
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
    <main className="relative flex min-h-screen flex-col items-center bg-[#F8F8F8] overflow-x-hidden pt-20 sm:pt-24">
      {/* Main Content strictly in front at z-10 */}
      <div className="relative z-10 w-full flex flex-col items-center">
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

        {/* Slanted Divider 1: Light Contact to Dark FAQ */}
        <DiagonalSlantedDivider
          id="contact-to-faq-slant"
          topColor="#f8f8f8"
          bottomColor="#171717"
          reverse={false}
        />

        {/* Dark Obsidian FAQ Section */}
        <FaqSection />

        {/* Slanted Divider 2: Dark FAQ to Light Footer */}
        <DiagonalSlantedDivider
          id="faq-to-footer-slant"
          topColor="#171717"
          bottomColor="#f8f8f8"
          reverse={true}
        />

        {/* Footer */}
        <Footer />
      </div>
    </main>
  );
}
