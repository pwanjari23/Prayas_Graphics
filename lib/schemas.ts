import { BUSINESS_INFO } from "./business-info";
import { servicesData } from "./services-data";
import type { ServiceData } from "./services-data";
import { faqsData } from "./faqs-data";

/**
 * Generates LocalBusiness Schema (SignShop / ProfessionalService) for Google & AI search
 */
export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService", "SignShop"],
    "@id": `${BUSINESS_INFO.url}/#localbusiness`,
    name: BUSINESS_INFO.name,
    legalName: BUSINESS_INFO.legalName,
    alternateName: BUSINESS_INFO.alternateName,
    description: BUSINESS_INFO.description,
    url: BUSINESS_INFO.url,
    logo: BUSINESS_INFO.logo,
    image: `${BUSINESS_INFO.url}/about/prayasgraphicsshop.jpeg`,
    telephone: BUSINESS_INFO.contact.phoneRaw,
    email: BUSINESS_INFO.contact.email,
    priceRange: BUSINESS_INFO.priceRange,
    currenciesAccepted: BUSINESS_INFO.currenciesAccepted,
    paymentAccepted: BUSINESS_INFO.paymentAccepted,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS_INFO.address.streetAddress,
      addressLocality: BUSINESS_INFO.address.addressLocality,
      addressRegion: BUSINESS_INFO.address.addressRegion,
      postalCode: BUSINESS_INFO.address.postalCode,
      addressCountry: BUSINESS_INFO.address.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS_INFO.geo.latitude,
      longitude: BUSINESS_INFO.geo.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: BUSINESS_INFO.hours.openingTime,
        closes: BUSINESS_INFO.hours.closingTime,
      },
    ],
    areaServed: [
      ...BUSINESS_INFO.areasServed.map((area) => ({
        "@type": "AdministrativeArea",
        name: area,
      })),
      {
        "@type": "GeoCircle",
        geoMidpoint: {
          "@type": "GeoCoordinates",
          latitude: BUSINESS_INFO.geo.latitude,
          longitude: BUSINESS_INFO.geo.longitude,
        },
        geoRadius: "35000",
      },
    ],
    sameAs: [
      BUSINESS_INFO.socials.facebook,
      BUSINESS_INFO.socials.instagram,
      BUSINESS_INFO.socials.googleReviewUrl,
      BUSINESS_INFO.socials.googleMapsUrl,
    ],
    hasMap: BUSINESS_INFO.socials.googleMapsUrl,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Signboard Manufacturing & Architectural Branding Services",
      itemListElement: servicesData.map((service, index) => ({
        "@type": "OfferCatalog",
        name: service.title,
        position: index + 1,
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: `${service.title} in Nagpur`,
              url: `${BUSINESS_INFO.url}/services/${service.slug}`,
              description: service.description,
            },
            priceCurrency: "INR",
            price: service.offerPrice || service.originalPrice || "0",
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: service.offerPrice || service.originalPrice || "0",
              priceCurrency: "INR",
              unitText: "SQFT",
            },
          },
        ],
      })),
    },
  };
}

/**
 * Generates Organization Schema
 */
export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${BUSINESS_INFO.url}/#organization`,
    name: BUSINESS_INFO.name,
    url: BUSINESS_INFO.url,
    logo: BUSINESS_INFO.logo,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: BUSINESS_INFO.contact.phoneRaw,
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi", "Marathi"],
      },
    ],
    sameAs: [
      BUSINESS_INFO.socials.facebook,
      BUSINESS_INFO.socials.instagram,
    ],
  };
}

/**
 * Generates WebSite Schema
 */
export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BUSINESS_INFO.url}/#website`,
    name: BUSINESS_INFO.name,
    url: BUSINESS_INFO.url,
    description: BUSINESS_INFO.tagline,
    publisher: {
      "@id": `${BUSINESS_INFO.url}/#organization`,
    },
  };
}

/**
 * Generates Service Schema for dynamic service pages
 */
export function getServiceSchema(service: ServiceData) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${BUSINESS_INFO.url}/services/${service.slug}/#service`,
    name: `${service.title} in Nagpur`,
    serviceType: service.title,
    description: service.longDescription,
    provider: {
      "@id": `${BUSINESS_INFO.url}/#localbusiness`,
    },
    areaServed: BUSINESS_INFO.areasServed.map((area) => ({
      "@type": "AdministrativeArea",
      name: area,
    })),
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      price: service.offerPrice || service.originalPrice || "0",
      description: service.pricing,
      availability: "https://schema.org/InStock",
      validFrom: "2026-01-01",
    },
    termsOfService: `${BUSINESS_INFO.url}/disclaimer`,
  };
}

/**
 * Generates BreadcrumbList Schema
 */
export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${BUSINESS_INFO.url}${item.url}`,
    })),
  };
}

/**
 * Generates FAQPage Schema
 */
export function getFaqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

/**
 * Generates Global FAQ Schema for Homepage & Services Hubs
 */
export function getGlobalFaqSchema() {
  const flatFaqs = faqsData.flatMap((f) => f.items);
  return getFaqSchema(flatFaqs);
}

