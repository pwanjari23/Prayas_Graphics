import type { Metadata } from "next";
import ServicesSection from "@/components/ServicesSection";
import DiagonalSlantedDivider from "@/components/DiagonalSlantedDivider";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import AngledBackgroundShapes from "@/components/AngledBackgroundShapes";
import { BUSINESS_INFO } from "@/lib/business-info";
import { getBreadcrumbSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "Signboard & Display Services in Nagpur — Acrylic, ACP, LED & Flex",
  description:
    "Explore our complete range of signboard manufacturing services in Nagpur: Acrylic ACP boards, 3D SS Halo letters, Aluminium Channel letters, Flex printing, and ACP Elevation work.",
  alternates: {
    canonical: `${BUSINESS_INFO.url}/services`,
  },
  openGraph: {
    title: "Signboard & Display Solutions in Nagpur — Prayas Graphics",
    description:
      "Explore custom signboard manufacturing in Nagpur. Premium materials, competitive pricing, and fast local delivery.",
    url: `${BUSINESS_INFO.url}/services`,
  },
};

export default function ServicesPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
  ]);

  return (
    <main className="relative flex min-h-screen flex-col items-center bg-stone-50 overflow-x-hidden">
      <div className="relative z-10 w-full flex flex-col items-center">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <ServicesSection />
        <DiagonalSlantedDivider
          id="services-to-cta-slant"
          topColor="#faf8fc"
          bottomColor="#0c0617"
          reverse={false}
        />
        <CtaSection />
        <DiagonalSlantedDivider
          id="cta-to-footer-slant"
          topColor="#0c0617"
          bottomColor="#faf8fc"
          reverse={true}
        />
        <Footer />
      </div>
    </main>
  );
}
