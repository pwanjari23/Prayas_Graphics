import { MetadataRoute } from "next";
import { BUSINESS_INFO } from "@/lib/business-info";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = BUSINESS_INFO.url;

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/thank-you"],
      },
      {
        // Explicitly welcome AI Answer Engines & Search Bots
        userAgent: [
          "Googlebot",
          "Googlebot-Image",
          "Bingbot",
          "GPTBot",
          "ChatGPT-User",
          "PerplexityBot",
          "ClaudeBot",
          "Applebot",
        ],
        allow: "/",
        disallow: ["/api/", "/thank-you"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
