"use client";

import { useState } from "react";
import { sendContactEmail } from "@/app/actions/contact";
import { Loader2, CheckCircle, AlertCircle, Phone, Mail, MapPin, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { BUSINESS_INFO } from "@/lib/business-info";
import { trackPhoneClick, trackEmailClick, trackContactFormSuccess } from "@/lib/analytics";

export default function ContactForm() {
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
    <section className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 pt-24 pb-8 md:px-6">
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="flex flex-1 flex-col justify-center rounded-[32px] bg-white px-6 py-10 md:p-14 shadow-sm min-h-[400px] md:min-h-[500px]">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-[#800080]/10 px-3 py-1 text-xs font-semibold text-[#800080] mb-4">
            Get In Touch
          </span>
          <h1 className="font-heading text-4xl font-extrabold leading-tight tracking-tight text-zinc-900 md:text-5xl">
            Contact Prayas Graphics
          </h1>
          <p className="mt-4 text-[15px] font-medium text-zinc-500 max-w-md">
            Whether you need a full building ACP elevation, 3D backlit letters, or a single shop board, our team in Nagpur responds within 14 hours.
          </p>

          <div className="mt-8 flex w-full max-w-sm flex-col gap-3">
            <a
              href={`mailto:${BUSINESS_INFO.contact.email}`}
              onClick={() => trackEmailClick("contact_card")}
              className="flex items-center justify-between rounded-full border border-zinc-200 px-6 py-3.5 transition-all hover:border-[#800080] hover:bg-stone-50 group"
              aria-label="Send email to Prayas Graphics"
            >
              <span className="flex items-center gap-2 text-sm font-medium text-zinc-500 group-hover:text-zinc-900">
                <Mail className="h-4 w-4 text-[#800080]" /> Email
              </span>
              <span className="text-[13px] font-semibold text-zinc-900 md:text-sm">{BUSINESS_INFO.contact.email}</span>
            </a>

            <a
              href={`tel:${BUSINESS_INFO.contact.phoneRaw}`}
              onClick={() => trackPhoneClick("contact_card")}
              className="flex items-center justify-between rounded-full border border-zinc-200 px-6 py-3.5 transition-all hover:border-[#800080] hover:bg-stone-50 group"
              aria-label="Call Prayas Graphics"
            >
              <span className="flex items-center gap-2 text-sm font-medium text-zinc-500 group-hover:text-zinc-900">
                <Phone className="h-4 w-4 text-[#800080]" /> Phone
              </span>
              <span className="text-[13px] font-semibold text-zinc-900 md:text-sm">{BUSINESS_INFO.contact.phone}</span>
            </a>

            <p className="mt-2 text-center text-xs font-medium text-zinc-400">
              ⚡ Typical response time: Under 14 hours via Call or WhatsApp.
            </p>
          </div>
        </div>

        <div className="flex flex-1 flex-col justify-between rounded-[32px] bg-white p-6 shadow-sm md:p-8">
          <form id="contact-form" action={handleSubmit} className="flex flex-col gap-4 h-full">
            <div className="flex flex-col gap-4 sm:flex-row">
              <input
                required
                name="name"
                type="text"
                placeholder="Your Name"
                className="w-full rounded-full bg-zinc-100 px-6 py-4 text-sm font-medium text-zinc-900 outline-none transition-all focus:bg-zinc-200/70"
              />
              <input
                required
                name="email"
                type="email"
                placeholder="Email Address"
                className="w-full rounded-full bg-zinc-100 px-6 py-4 text-sm font-medium text-zinc-900 outline-none transition-all focus:bg-zinc-200/70"
              />
            </div>
            <textarea
              required
              name="message"
              placeholder="Tell us about your signboard size, location, or requirement..."
              rows={8}
              className="w-full resize-none rounded-2xl bg-zinc-100 p-6 text-sm font-medium text-zinc-900 outline-none transition-all focus:bg-zinc-200/70 md:min-h-auto min-h-[150px] flex-1"
            ></textarea>
            
            <div className="space-y-4 pt-2">
              <button 
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "flex w-full items-center justify-center rounded-full bg-zinc-950 py-4 text-sm font-semibold text-white transition-all hover:bg-zinc-900 shadow-sm active:scale-[0.98] disabled:opacity-70",
                  status?.type === "success" && "bg-green-600",
                  status?.type === "error" && "bg-red-600"
                )}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    <span>Sending Message...</span>
                  </>
                ) : status?.type === "success" ? (
                  <>
                    <CheckCircle className="mr-2 h-4 w-4" />
                    <span>Message Sent! We will get back soon.</span>
                  </>
                ) : status?.type === "error" ? (
                  <>
                    <AlertCircle className="mr-2 h-4 w-4" />
                    <span>Error Occurred. Please call or WhatsApp us.</span>
                  </>
                ) : (
                  "Send Message"
                )}
              </button>

              {status && (
                <p className={cn(
                  "text-center text-xs font-semibold animate-in fade-in slide-in-from-top-1",
                  status.type === "success" ? "text-green-600" : "text-red-500"
                )}>
                  {status.message}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>

      <div className="flex flex-col gap-4 md:flex-row text-center px-2">
         <div className="flex flex-[2] items-center justify-center rounded-2xl md:rounded-full bg-white px-6 py-4 shadow-sm border border-zinc-100/50">
           <span className="flex items-center gap-2 text-xs font-semibold text-zinc-500 leading-relaxed md:leading-normal">
              <MapPin className="h-4 w-4 text-[#800080] shrink-0" />
              Address: <span className="text-zinc-900 inline-block ml-1">{BUSINESS_INFO.address.fullAddress}</span>
           </span>
         </div>
         <div className="flex flex-1 items-center justify-center rounded-2xl md:rounded-full bg-white px-4 py-4 md:py-4 shadow-sm border border-zinc-100/50">
           <span className="flex items-center gap-2 text-xs font-semibold text-zinc-500 leading-relaxed md:leading-normal">
              <Clock className="h-4 w-4 text-[#800080] shrink-0" />
              Store hours: <span className="text-zinc-900 inline-block ml-1">{BUSINESS_INFO.hours.displayHours}</span>
           </span>
         </div>
      </div>

      <div className="mt-8 overflow-hidden rounded-[32px] bg-white p-4 shadow-sm border border-zinc-100/50">
        <iframe 
          src={BUSINESS_INFO.socials.googleMapsEmbed} 
          width="100%" 
          height="450" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-2xl grayscale hover:grayscale-0 transition-all duration-500"
          title="Prayas Graphics Google Maps Location in Nagpur"
        ></iframe>
      </div>
    </section>
  );
}
