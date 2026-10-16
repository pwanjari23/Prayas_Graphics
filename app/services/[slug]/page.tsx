import { notFound } from "next/navigation";
import { servicesData, getServiceBySlug } from "@/lib/services-data";
import { getServiceSchema, getBreadcrumbSchema } from "@/lib/schemas";
import { BUSINESS_INFO } from "@/lib/business-info";
import ServiceDetailView from "@/components/ServiceDetailView";
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

  return (
    <main className="flex min-h-screen flex-col items-center bg-stone-50 pb-20 pt-24 overflow-x-hidden">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <ServiceDetailView slug={service.slug} />
    </main>
  );
}
