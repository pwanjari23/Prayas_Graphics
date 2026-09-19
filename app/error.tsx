"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertCircle, RotateCcw, Home } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/business-info";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("App runtime error:", error);
  }, [error]);

  return (
    <main className="flex min-h-[80vh] flex-col items-center justify-center bg-stone-50 px-4 py-24 text-center">
      <div className="mx-auto max-w-lg rounded-3xl bg-white p-8 md:p-12 shadow-sm border border-zinc-100">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600 mb-6">
          <AlertCircle className="h-6 w-6" />
        </div>
        <h1 className="font-heading text-3xl font-extrabold text-zinc-900 tracking-tight mb-4">
          Something went wrong
        </h1>
        <p className="text-zinc-500 text-sm leading-relaxed mb-8">
          An unexpected error occurred while loading this page. You can try refreshing the page or head back to the home page.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => reset()}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-zinc-900 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-zinc-800"
          >
            <RotateCcw className="h-4 w-4" /> Try Again
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-200 bg-white px-6 py-3.5 text-sm font-semibold text-zinc-700 transition-all hover:bg-zinc-50"
          >
            <Home className="h-4 w-4" /> Go to Home
          </Link>
        </div>

        <div className="mt-8 border-t border-zinc-100 pt-6">
          <p className="text-xs text-zinc-400">
            For urgent orders, reach our team directly at{" "}
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
