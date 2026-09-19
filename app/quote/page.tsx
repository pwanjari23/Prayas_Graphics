import type { Metadata } from "next";
import QuoteForm from "@/components/QuoteForm";
import { Suspense } from "react";
import { BUSINESS_INFO } from "@/lib/business-info";
import { getBreadcrumbSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "Get an Instant Signboard Quote in Nagpur — Prayas Graphics",
  description:
    "Calculate your custom signboard, 3D acrylic letters, or ACP elevation cost online. Fast quote turnaround within 14 hours via WhatsApp in Nagpur.",
  alternates: {
    canonical: `${BUSINESS_INFO.url}/quote`,
  },
  openGraph: {
    title: "Instant Signboard Quote Calculator — Prayas Graphics Nagpur",
    description:
      "Select your signage type, input your dimensions, and receive an instant estimate with direct WhatsApp confirmation.",
    url: `${BUSINESS_INFO.url}/quote`,
  },
};

export default function QuotePage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Quote", url: "/quote" },
  ]);

  return (
    <main className="flex min-h-screen flex-col items-center bg-stone-50 pb-20 pt-24 overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="w-full max-w-7xl px-4 md:px-6 relative text-center pt-8">
        <div className="inline-flex w-fit items-center gap-2 rounded-full bg-[#800080]/10 px-3 py-1 text-xs font-semibold text-[#800080] mb-6">
          Quick Estimate
        </div>
        <h1 className="font-heading text-4xl font-extrabold leading-tight tracking-tight text-zinc-950 md:text-5xl max-w-2xl mx-auto">
          Request a Custom Quote
        </h1>
        <p className="mt-4 text-base font-medium text-zinc-500 max-w-lg mx-auto">
          Fill out the form below with your requirements, and our team will get back to you with pricing and timelines on WhatsApp.
        </p>

        <Suspense fallback={<div className="mt-12 text-zinc-500 font-medium">Loading form...</div>}>
          <QuoteForm />
        </Suspense>
      </div>
    </main>
  );
}
