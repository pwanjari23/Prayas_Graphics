import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import { BUSINESS_INFO } from "@/lib/business-info";
import { getBreadcrumbSchema, getFaqSchema } from "@/lib/schemas";
import { faqsData } from "@/lib/faqs-data";

export const metadata: Metadata = {
  title: "Customer Support & FAQs — Prayas Graphics Nagpur",
  description:
    "Find answers to frequently asked questions regarding signboard materials, installation, LED warranty, and quote requests in Nagpur.",
  alternates: {
    canonical: `${BUSINESS_INFO.url}/support`,
  },
  openGraph: {
    title: "Customer Support — Prayas Graphics Nagpur",
    description:
      "Get help with your signboard order, warranty claims, or site measurement requests in Nagpur.",
    url: `${BUSINESS_INFO.url}/support`,
  },
};

export default function SupportPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Support", url: "/support" },
  ]);

  const flatFaqs = faqsData.flatMap((f) => f.items);
  const faqSchema = getFaqSchema(flatFaqs);

  return (
    <main className="flex min-h-screen flex-col items-center bg-stone-50 pb-20 overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ContactForm />
      <FaqSection />
      <Footer />
    </main>
  );
}
