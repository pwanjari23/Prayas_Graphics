import type { Metadata } from "next";
import GalleryGrid from "@/components/GalleryGrid";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import AngledBackgroundShapes from "@/components/AngledBackgroundShapes";
import { BUSINESS_INFO } from "@/lib/business-info";
import { getBreadcrumbSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "Signboard Projects Gallery — LED Signs & ACP Elevation Work in Nagpur",
  description:
    "View our portfolio of installed LED signboards, ACP elevation facades, 3D acrylic letters, and retail storefront branding completed for 500+ businesses in Nagpur.",
  alternates: {
    canonical: `${BUSINESS_INFO.url}/gallery`,
  },
  openGraph: {
    title: "Signboard Portfolio Gallery — Prayas Graphics Nagpur",
    description:
      "Real photos of completed signboard installations, LED glow boards, and commercial elevation cladding across Nagpur.",
    url: `${BUSINESS_INFO.url}/gallery`,
  },
};

export default function GalleryPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Gallery", url: "/gallery" },
  ]);

  return (
    <main className="relative flex min-h-screen flex-col items-center bg-stone-50 pb-20 overflow-x-hidden pt-24 sm:pt-28">
      {/* Background Shapes strictly isolated at z-0 */}
      <AngledBackgroundShapes />

      {/* Main Content strictly in front at z-10 */}
      <div className="relative z-10 w-full flex flex-col items-center">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <GalleryGrid />
        <CtaSection />
        <Footer />
      </div>
    </main>
  );
}
