import React from "react";
import { BUSINESS_INFO } from "@/lib/business-info";

interface StructuredDataProps {
  title: string;
  description: string;
  url: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
  authorName?: string;
}

export default function StructuredData({
  title,
  description,
  url,
  image = `${BUSINESS_INFO.url}/hero/hero (1).jpg`,
  datePublished,
  dateModified,
  authorName = BUSINESS_INFO.name,
}: StructuredDataProps) {
  const cleanPath = url.startsWith("/") ? url : `/${url}`;
  const fullUrl = `${BUSINESS_INFO.url}${cleanPath.replace(/\/+/g, "/")}`;
  const imageUrl = image.startsWith("http") ? image : `${BUSINESS_INFO.url}${image.startsWith("/") ? image : `/${image}`}`;

  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": ["Article", "BlogPosting"],
    headline: title,
    description: description,
    image: imageUrl,
    datePublished: datePublished || new Date().toISOString(),
    dateModified: dateModified || new Date().toISOString(),
    author: {
      "@type": "Organization",
      name: authorName,
      url: BUSINESS_INFO.url,
    },
    publisher: {
      "@type": "Organization",
      name: BUSINESS_INFO.name,
      url: BUSINESS_INFO.url,
      logo: {
        "@type": "ImageObject",
        url: BUSINESS_INFO.logo,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": fullUrl,
    },
  };

  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: BUSINESS_INFO.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${BUSINESS_INFO.url}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: title,
        item: fullUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />
    </>
  );
}
