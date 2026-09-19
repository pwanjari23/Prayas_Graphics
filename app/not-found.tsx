import Link from "next/link";
import { ArrowLeft, Home, ShoppingBag, Phone } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/business-info";

export const metadata = {
  title: "Page Not Found (404) — Prayas Graphics",
  description: "The page you are looking for does not exist or has been moved.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <main className="flex min-h-[80vh] flex-col items-center justify-center bg-stone-50 px-4 py-24 text-center">
      <div className="mx-auto max-w-lg rounded-3xl bg-white p-8 md:p-12 shadow-sm border border-zinc-100">
        <span className="inline-flex items-center gap-2 rounded-full bg-[#800080]/10 px-3 py-1 text-xs font-bold text-[#800080] uppercase tracking-wider mb-6">
          404 Error
        </span>
        <h1 className="font-heading text-4xl font-extrabold text-zinc-900 tracking-tight mb-4">
          Page Not Found
        </h1>
        <p className="text-zinc-500 text-sm leading-relaxed mb-8">
          The page you requested could not be found. It may have been moved, renamed, or is temporarily unavailable.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-zinc-900 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-zinc-800"
          >
            <Home className="h-4 w-4" /> Return Home
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-200 bg-white px-6 py-3.5 text-sm font-semibold text-zinc-700 transition-all hover:bg-zinc-50"
          >
            <ShoppingBag className="h-4 w-4" /> Browse Services
          </Link>
        </div>

        <div className="mt-8 border-t border-zinc-100 pt-6">
          <p className="text-xs text-zinc-400">
            Need urgent assistance? Call us directly at{" "}
            <a
              href={`tel:${BUSINESS_INFO.contact.phoneRaw}`}
              className="font-semibold text-zinc-700 hover:text-[#800080]"
            >
              {BUSINESS_INFO.contact.phone}
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
