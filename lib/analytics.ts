/**
 * Universal tracking and analytics utility for Google Tag Manager (GTM)
 * and Google Ads Conversion Tracking.
 */

declare global {
  interface Window {
    dataLayer?: Record<string, any>[];
    gtag?: (...args: any[]) => void;
  }
}

export interface ConversionParams {
  event_category?: string;
  event_label?: string;
  value?: number;
  currency?: string;
  [key: string]: any;
}

/**
 * Pushes event to dataLayer and triggers gtag if available
 */
export function sendEvent(eventName: string, params: Record<string, any> = {}) {
  if (typeof window === "undefined") return;

  // Initialize dataLayer safely
  window.dataLayer = window.dataLayer || [];
  
  const payload = {
    event: eventName,
    ...params,
    timestamp: new Date().toISOString(),
  };

  window.dataLayer.push(payload);

  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }
}

/**
 * Track client-side page views (for Next.js App Router soft navigation)
 */
export function trackPageView(url: string, title?: string) {
  if (typeof window === "undefined") return;

  sendEvent("page_view", {
    page_path: url,
    page_title: title || (typeof document !== "undefined" ? document.title : ""),
  });
}

/**
 * Track meaningful business conversion events
 */
export function trackConversion(action: string, params: ConversionParams = {}) {
  sendEvent(action, {
    event_category: params.event_category || "conversion",
    ...params,
  });
}

// ─── Specific High-Value Conversion Helpers ─────────────────────────────────────

/**
 * WhatsApp CTA click conversion
 */
export function trackWhatsAppClick(source: string = "floating_button") {
  trackConversion("whatsapp_click", {
    event_category: "lead_contact",
    event_label: `WhatsApp clicked from ${source}`,
    source,
  });
}

/**
 * Phone number click-to-call conversion
 */
export function trackPhoneClick(source: string = "website") {
  trackConversion("phone_call_click", {
    event_category: "lead_contact",
    event_label: `Phone call initiated from ${source}`,
    source,
  });
}

/**
 * Email click conversion
 */
export function trackEmailClick(source: string = "website") {
  trackConversion("email_click", {
    event_category: "lead_contact",
    event_label: `Email link clicked from ${source}`,
    source,
  });
}

/**
 * Successful Contact Form submission conversion
 */
export function trackContactFormSuccess(details: { name?: string; email?: string }) {
  trackConversion("contact_form_submit", {
    event_category: "lead_generation",
    event_label: "Contact Form Submitted Successfully",
    lead_type: "contact_enquiry",
  });
}

/**
 * Successful Quote Cart submission conversion
 */
export function trackQuoteSubmitSuccess(details: {
  totalEstimatedPrice: number;
  itemCount: number;
  customerCity: string;
}) {
  trackConversion("quote_request_submit", {
    event_category: "lead_generation",
    event_label: "Custom Quote Request Submitted",
    value: details.totalEstimatedPrice,
    currency: "INR",
    items_count: details.itemCount,
    customer_city: details.customerCity,
  });
}
