/**
 * Centralized business configuration for Prayas Graphics.
 * Single source of truth for NAP (Name, Address, Phone), coordinates, operating hours,
 * social links, and tracking configuration.
 */

export const BUSINESS_INFO = {
  name: "Prayas Graphics",
  legalName: "Prayas Graphics",
  alternateName: "Prayas Graphics Nagpur",
  tagline: "Premium Signboards and Display Advertising Solutions in Nagpur",
  description:
    "Nagpur's premier manufacturer of custom LED signboards, ACP elevation cladding, 3D acrylic letters, flex printing, and commercial building facades with over 10 years of experience.",
  url: "https://prayasgraphics.com",
  logo: "https://prayasgraphics.com/Prayas-Graphics-Logo.svg",
  foundingYear: 2014,
  
  contact: {
    phone: "+91 878 827 0495",
    phoneRaw: "+918788270495",
    whatsappNumber: "918788270495",
    email: "prayasgraphics77@gmail.com",
    supportResponseTime: "Under 14 hours",
  },

  address: {
    streetAddress: "Madhuvatsalya Apartment, Shop no. 3, Tukdoji Square, Manewada Road, opp. MSEB Office",
    addressLocality: "Nagpur",
    addressRegion: "Maharashtra",
    postalCode: "440027",
    addressCountry: "IN",
    fullAddress: "Madhuvatsalya Apartment Shop no 3 Tukdoji Sqr, Manewada Rd, opp. MSEB Office, appt, Nagpur, Maharashtra 440027",
  },

  geo: {
    latitude: 21.122758,
    longitude: 79.102679,
  },

  hours: {
    openingTime: "10:00",
    closingTime: "20:00",
    daysOpen: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    displayHours: "Mon - Sat: 10:00am - 8:00pm, Sun: Closed",
  },

  socials: {
    googleReviewUrl: "https://g.page/r/CbL_ssLkBR47EAI/review",
    googleMapsEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.7443020843207!2d79.10267937420798!3d21.12275798454544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c147e4d218c3%3A0x3b1e05e4c2b2ffb2!2sPRAYAS%20GRAPHICS%20%7C%20ACP%20Sheet%20Work%20%7C%20Signages%20Board%20%7C%20LED%20Glow%20Sign%20Board%20%7C%20Flex%20Printing%20%7C%20Manufacturers%20in%20Nagpur!5e0!3m2!1sen!2sin!4v1775206503124!5m2!1sen!2sin",
    instagram: "https://www.instagram.com/prayas_graphics_77/",
    facebook: "https://www.facebook.com/prayasgraphics/",
  },

  areasServed: [
    "Nagpur",
    "Wardha Road",
    "Manewada",
    "Tukdoji Square",
    "Dharampeth",
    "Sitabuldi",
    "Sadar",
    "MIDC Hingna",
    "Mahal",
    "Nandanvan",
    "Trimurti Nagar",
    "Vidarbha Region",
  ],

  priceRange: "₹₹",
  currenciesAccepted: "INR",
  paymentAccepted: "Cash, UPI, Credit Card, Bank Transfer",

  tracking: {
    googleAdsId: process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || "AW-372297449",
    gtmId: process.env.NEXT_PUBLIC_GTM_ID || "",
    gaId: process.env.NEXT_PUBLIC_GA_ID || "",
  },
};
