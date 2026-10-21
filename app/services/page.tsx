import type { Metadata } from "next";
import ServicesSection from "@/components/ServicesSection";
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
    <main className="relative flex min-h-screen flex-col items-center bg-stone-50 pb-20 overflow-x-hidden">
      {/* Background Shapes strictly isolated at z-0 */}
      <AngledBackgroundShapes />

      {/* Main Content strictly in front at z-10 */}
      <div className="relative z-10 w-full flex flex-col items-center">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <ServicesSection />
        <CtaSection />
        <Footer />
      </div>
    </main>
  );
}
