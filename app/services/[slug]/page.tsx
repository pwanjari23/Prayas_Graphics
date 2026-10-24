import { notFound } from "next/navigation";
import { servicesData, getServiceBySlug } from "@/lib/services-data";
import { getServiceSchema, getBreadcrumbSchema, getFaqSchema } from "@/lib/schemas";
import { BUSINESS_INFO } from "@/lib/business-info";
import ServiceDetailView from "@/components/ServiceDetailView";
import DiagonalSlantedDivider from "@/components/DiagonalSlantedDivider";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const p = await params;
  const service = getServiceBySlug(p.slug);
  if (!service) return { title: "Not Found" };

  const title = `${service.title} in Nagpur — Design, Price & Installation`;
  const description = `${service.description} Custom crafted and installed across Nagpur by Prayas Graphics. Pricing: ${service.pricing}.`;
  const url = `${BUSINESS_INFO.url}/services/${service.slug}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      images: [
        {
          url: service.image.startsWith("http") ? service.image : `${BUSINESS_INFO.url}${service.image}`,
          alt: `${service.title} - Prayas Graphics Nagpur`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [service.image.startsWith("http") ? service.image : `${BUSINESS_INFO.url}${service.image}`],
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const p = await params;
  const service = getServiceBySlug(p.slug);

  if (!service) {
    notFound();
  }

  const serviceSchema = getServiceSchema(service);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: service.title, url: `/services/${service.slug}` },
  ]);
  const faqSchema = service.faqs && service.faqs.length > 0 ? getFaqSchema(service.faqs) : null;

  return (
    <main className="relative flex min-h-screen flex-col items-center bg-[#faf8fc] overflow-x-hidden pt-20 sm:pt-24">
      {/* Background Volumetric Lighting & CAD Matrix */}
      <div className="pointer-events-none absolute inset-0 select-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/6 left-1/2 -translate-x-1/2 w-[750px] h-[450px] rounded-full bg-purple-500/[0.10] blur-[140px] transform-gpu" />
        <div className="absolute top-1/3 -left-20 w-[550px] h-[550px] rounded-full bg-fuchsia-500/[0.08] blur-[130px] transform-gpu" />
        <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] rounded-full bg-[#800080]/[0.08] blur-[120px] transform-gpu" />
        
        {/* CAD dot grid */}
        <div className="absolute inset-0 opacity-[0.22] [background-image:radial-gradient(#800080_0.75px,transparent_0.75px)] [background-size:24px_24px]" />

        {/* Delicate Blueprint Alignment Crosshairs */}
        <div className="absolute top-24 left-8 text-purple-400/25 text-xs font-mono font-light select-none hidden sm:block">+ 01_SPECIFICATION</div>
        <div className="absolute top-24 right-8 text-purple-400/25 text-xs font-mono font-light select-none hidden sm:block">+ 02_FABRICATION</div>
      </div>

      <div className="relative z-10 w-full flex flex-col items-center">
        {/* Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        {faqSchema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
          />
        )}

        {/* Flagship Service Detail View */}
        <ServiceDetailView slug={service.slug} />

        {/* Seamless Slanted Separator 1: Light to Dark Obsidian */}
        <DiagonalSlantedDivider
          id="service-detail-to-cta-slant"
          topColor="#faf8fc"
          bottomColor="#0c0617"
          reverse={false}
        />

        {/* High-Converting CTA Section */}
        <CtaSection />

        {/* Seamless Slanted Separator 2: Dark Obsidian to Light Footer */}
        <DiagonalSlantedDivider
          id="cta-to-footer-slant"
          topColor="#0c0617"
          bottomColor="#faf8fc"
          reverse={true}
        />

        {/* Flagship Footer */}
        <Footer />
      </div>
    </main>
  );
}
