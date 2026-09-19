import type { Metadata } from "next";
import { DM_Sans, Bricolage_Grotesque, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import CartPanel from "@/components/CartPanel";
import { CartProvider } from "@/lib/cart-context";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { Analytics } from "@vercel/analytics/react";
import GoogleTracking, { GoogleTagManagerNoscript } from "@/components/analytics/GoogleTracking";
import RouteChangeListener from "@/components/analytics/RouteChangeListener";
import { BUSINESS_INFO } from "@/lib/business-info";
import {
  getLocalBusinessSchema,
  getOrganizationSchema,
  getWebSiteSchema,
} from "@/lib/schemas";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS_INFO.url),
  title: {
    default: `${BUSINESS_INFO.name} — Premium Signboards & LED Signages in Nagpur`,
    template: `%s | ${BUSINESS_INFO.name}`,
  },
  description:
    "Nagpur's leading manufacturer of Acrylic ACP Signboards, 3D LED Letters, Elevation Cladding, Glow Signs, and Flex Printing. Fast turnaround & expert installation.",
  keywords: [
    "signboard makers Nagpur",
    "ACP signboard Nagpur",
    "LED letter signboard Nagpur",
    "acrylic signboard Nagpur",
    "flex printing Nagpur",
    "glow sign board Nagpur",
    "ACP elevation work Nagpur",
    "signboard manufacturer Nagpur",
    "best signboard shop Manewada Nagpur",
    "Prayas Graphics",
  ],
  authors: [{ name: BUSINESS_INFO.name, url: BUSINESS_INFO.url }],
  creator: BUSINESS_INFO.name,
  publisher: BUSINESS_INFO.name,
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BUSINESS_INFO.url,
    siteName: BUSINESS_INFO.name,
    title: `${BUSINESS_INFO.name} — Premium Signboards & Display Solutions in Nagpur`,
    description:
      "Transform your business storefront with high-quality custom signboards, 3D LED letters, and ACP elevation cladding in Nagpur.",
    images: [
      {
        url: "/hero/hero (1).jpg",
        width: 1200,
        height: 630,
        alt: "Prayas Graphics Signboard Manufacturing in Nagpur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${BUSINESS_INFO.name} — Signboards & LED Glow Signs Nagpur`,
    description:
      "Custom acrylic signboards, LED 3D letters, and ACP facades in Nagpur. Get a fast custom quote.",
    images: ["/hero/hero (1).jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessSchema = getLocalBusinessSchema();
  const organizationSchema = getOrganizationSchema();
  const websiteSchema = getWebSiteSchema();

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <GoogleTracking />
        {/* Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body
        className={`${dmSans.variable} ${bricolageGrotesque.variable} ${inter.variable} font-sans antialiased text-zinc-950 bg-stone-50`}
        suppressHydrationWarning
      >
        <GoogleTagManagerNoscript />
        <CartProvider>
          <Navbar />
          {children}
          <CartPanel />
          <FloatingWhatsApp />
          <Analytics />
          <RouteChangeListener />
        </CartProvider>
      </body>
    </html>
  );
}
