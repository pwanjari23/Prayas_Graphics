"use client";

import { useState } from "react";
import Link from "next/link";
import { sendContactEmail } from "@/app/actions/contact";
import {
  Loader2,
  CheckCircle,
  AlertCircle,
  Phone,
  Mail,
  MapPin,
  Clock,
  Zap,
  ArrowUpRight,
  ShieldCheck,
  Send,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { BUSINESS_INFO } from "@/lib/business-info";
import { trackPhoneClick, trackEmailClick, trackContactFormSuccess } from "@/lib/analytics";

export default function ContactPageTemplate() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true);
    setStatus(null);

    const result = await sendContactEmail(formData);

    if (result.success) {
      setStatus({ type: "success", message: result.message || "Message sent successfully!" });
      trackContactFormSuccess({
        name: formData.get("name")?.toString(),
        email: formData.get("email")?.toString(),
      });
      const form = document.getElementById("contact-form") as HTMLFormElement;
      form?.reset();
    } else {
      setStatus({ type: "error", message: result.error || "Failed to send message." });
    }
    setIsSubmitting(false);

    // Clear status after 8 seconds
    setTimeout(() => {
      setStatus(null);
    }, 8000);
  }

  return (
    <div className="relative w-full max-w-7xl px-4 pt-20 pb-6 sm:px-6 md:pt-24 md:pb-8 lg:px-8">
      {/* Subtle light background ambient glow */}
      <div
        className="pointer-events-none absolute top-12 left-1/2 -translate-x-1/2 h-[380px] w-[650px] rounded-full bg-gradient-to-b from-purple-100/50 via-stone-100/30 to-transparent blur-3xl -z-10"
        aria-hidden="true"
      />

      {/* Hero Header Section - Centered */}
      <div className="mb-10 max-w-3xl mx-auto flex flex-col items-center justify-center text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-4 py-1 text-xs font-bold text-[#800080] mb-2 mt-2">
          <span>Get In Touch</span>
        </div>
        <h1 className="font-heading text-3xl font-extrabold tracking-tight text-zinc-950 sm:text-4xl md:text-5xl lg:text-[52px] leading-[1.12] text-center">
          Let’s Talk Signage
        </h1>
        <p className="mt-3.5 text-base sm:text-lg leading-relaxed text-zinc-600 font-normal text-center max-w-2xl">
          From eye-catching shop boards to 3D backlit letters and ACP elevations, we deliver creative, durable signage solutions that bring your brand vision to life across Nagpur.
        </p>
      </div>

      {/* Quick Highlights Row (Response Time, Location, Hours) */}
      <div className="mb-10 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
        {/* Response Time */}
        <div className="flex items-center gap-3.5 rounded-2xl border border-zinc-200/90 bg-white p-4 shadow-2xs">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-[#800080]">
            <Zap className="h-5 w-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">Response Time</span>
            <span className="text-xs sm:text-sm font-semibold text-zinc-900">Under 14 hours via Call or WhatsApp</span>
          </div>
        </div>

        {/* Central Location */}
        <div className="flex items-center gap-3.5 rounded-2xl border border-zinc-200/90 bg-white p-4 shadow-2xs">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-[#800080]">
            <MapPin className="h-5 w-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">Workshop Location</span>
            <span className="text-xs sm:text-sm font-semibold text-zinc-900">Tukdoji Square, Manewada Road</span>
          </div>
        </div>

        {/* Store Hours */}
        <div className="flex items-center gap-3.5 rounded-2xl border border-zinc-200/90 bg-white p-4 shadow-2xs">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-[#800080]">
            <Clock className="h-5 w-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">Store Hours</span>
            <span className="text-xs sm:text-sm font-semibold text-zinc-900">{BUSINESS_INFO.hours.displayHours}</span>
          </div>
        </div>
      </div>

      {/* Main 2-Column Interface: LEFT = Inquiry Form, RIGHT = Direct Info & Map */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-8 items-start">
        {/* LEFT COLUMN: Architectural Inquiry Form (7 cols) */}
        <div className="flex flex-col rounded-[28px] sm:rounded-[32px] border border-zinc-200/90 bg-white p-6 sm:p-8 md:p-10 shadow-sm lg:col-span-7">
          <div className="mb-6 flex flex-col">
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight mt-1">
              Send Us a Message
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-zinc-500 font-normal leading-relaxed">
              Fill in your details below and our team will get in touch with you right away.
            </p>
          </div>

          <form id="contact-form" action={handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-xs font-bold text-zinc-700">
                  Your Name <span className="text-[#800080]">*</span>
                </label>
                <input
                  required
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  className="w-full rounded-xl border border-zinc-200 bg-zinc-50/50 px-4 py-3.5 text-sm font-medium text-zinc-900 outline-none transition-all placeholder:text-zinc-400 focus:border-zinc-950 focus:bg-white focus:ring-1 focus:ring-zinc-950"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-xs font-bold text-zinc-700">
                  Email Address <span className="text-[#800080]">*</span>
                </label>
                <input
                  required
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  className="w-full rounded-xl border border-zinc-200 bg-zinc-50/50 px-4 py-3.5 text-sm font-medium text-zinc-900 outline-none transition-all placeholder:text-zinc-400 focus:border-zinc-950 focus:bg-white focus:ring-1 focus:ring-zinc-950"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5 mt-1">
              <label htmlFor="message" className="text-xs font-bold text-zinc-700">
                Project Requirement or Message <span className="text-[#800080]">*</span>
              </label>
              <textarea
                required
                id="message"
                name="message"
                placeholder="Tell us about your signboard size, location, or requirement..."
                rows={7}
                className="w-full resize-none rounded-2xl border border-zinc-200 bg-zinc-50/50 p-4 text-sm font-medium text-zinc-900 outline-none transition-all placeholder:text-zinc-400 focus:border-zinc-950 focus:bg-white focus:ring-1 focus:ring-zinc-950 min-h-[160px]"
              ></textarea>
            </div>

            <div className="pt-2 space-y-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "group relative flex w-full items-center justify-center gap-2 rounded-full bg-zinc-950 py-4 text-sm font-bold text-white shadow-md transition-all duration-200 hover:bg-zinc-800 active:scale-[0.99] disabled:opacity-70 cursor-pointer",
                  status?.type === "success" && "bg-emerald-600 hover:bg-emerald-700",
                  status?.type === "error" && "bg-rose-600 hover:bg-rose-700"
                )}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span>Sending Message...</span>
                  </>
                ) : status?.type === "success" ? (
                  <>
                    <CheckCircle className="h-4 w-4" />
                    <span>Message Sent! We will get back soon.</span>
                  </>
                ) : status?.type === "error" ? (
                  <>
                    <AlertCircle className="h-4 w-4" />
                    <span>Error Occurred. Please call or WhatsApp us.</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </>
                )}
              </button>

              {status && (
                <div
                  className={cn(
                    "rounded-xl p-3 text-center text-xs font-bold transition-all",
                    status.type === "success"
                      ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                      : "bg-rose-50 text-rose-700 border border-rose-200"
                  )}
                >
                  {status.message}
                </div>
              )}
            </div>

            <div className="flex items-center gap-2 pt-3 border-t border-zinc-100 text-xs text-zinc-400">
              <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
              <span>Direct delivery to our master signmakers in Nagpur. Zero third-party handoffs.</span>
            </div>
          </form>
        </div>

        {/* RIGHT COLUMN: Direct Communication Channels & Google Map (5 cols) */}
        <div className="flex flex-col gap-5 lg:col-span-5">
          {/* Direct Communication Cards */}
          <div className="flex flex-col gap-3.5 rounded-[28px] border border-zinc-200/90 bg-white p-6 shadow-sm">
            <h2 className="font-heading text-lg font-bold text-zinc-950">Direct Communication</h2>
            <p className="text-xs text-zinc-500 font-medium">Reach our production specialists directly for rapid consultations.</p>

            <div className="flex flex-col gap-3 pt-1">
              {/* Phone Link Card */}
              <a
                href={`tel:${BUSINESS_INFO.contact.phoneRaw}`}
                onClick={() => trackPhoneClick("contact_card")}
                className="group flex items-center justify-between rounded-2xl border border-zinc-200 bg-zinc-50/70 p-4 transition-all duration-200 hover:border-zinc-950 hover:bg-white hover:shadow-xs active:scale-[0.99]"
                aria-label="Call Prayas Graphics"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-zinc-200 text-[#800080] group-hover:bg-zinc-950 group-hover:text-white transition-colors">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">Phone &amp; WhatsApp</span>
                    <span className="text-sm font-bold text-zinc-900">{BUSINESS_INFO.contact.phone}</span>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-zinc-400 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-zinc-950" />
              </a>

              {/* Email Link Card */}
              <a
                href={`mailto:${BUSINESS_INFO.contact.email}`}
                onClick={() => trackEmailClick("contact_card")}
                className="group flex items-center justify-between rounded-2xl border border-zinc-200 bg-zinc-50/70 p-4 transition-all duration-200 hover:border-zinc-950 hover:bg-white hover:shadow-xs active:scale-[0.99]"
                aria-label="Send email to Prayas Graphics"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-zinc-200 text-[#800080] group-hover:bg-zinc-950 group-hover:text-white transition-colors">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">Email Address</span>
                    <span className="text-xs sm:text-sm font-bold text-zinc-900 break-all">{BUSINESS_INFO.contact.email}</span>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-zinc-400 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-zinc-950" />
              </a>
            </div>
          </div>

          {/* Physical Address & Store Location Details with Google Map */}
          <div className="flex flex-col gap-3.5 rounded-[28px] border border-zinc-200/90 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-[#800080]" />
              <h3 className="font-heading text-base font-bold text-zinc-950">Workshop &amp; Store Location</h3>
            </div>
            <p className="text-xs sm:text-sm font-medium leading-relaxed text-zinc-600">
              {BUSINESS_INFO.address.fullAddress}
            </p>

            {/* Embedded Google Map Frame */}
            <div className="mt-1 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 h-64 w-full">
              <iframe
                src={BUSINESS_INFO.socials.googleMapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale contrast-110 hover:grayscale-0 transition-all duration-500"
                title="Prayas Graphics Google Maps Location in Nagpur"
              ></iframe>
            </div>

            <a
              href={BUSINESS_INFO.socials.googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-flex items-center justify-center gap-1.5 text-xs font-bold text-[#800080] hover:underline"
            >
              <MapPin className="h-3.5 w-3.5" /> Rate &amp; Review Us on Google
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
