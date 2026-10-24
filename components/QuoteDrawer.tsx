"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles } from "lucide-react";
import QuoteForm from "./QuoteForm";

interface QuoteDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  serviceSlug?: string;
  serviceTitle?: string;
}

export default function QuoteDrawer({
  isOpen,
  onClose,
  serviceSlug,
}: QuoteDrawerProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent background scroll while drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!mounted || !isOpen) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="quote-drawer-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[150] bg-zinc-950/60 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Right Slide-out Drawer Panel */}
          <motion.aside
            key="quote-drawer-right-panel"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 260 }}
            className="fixed right-0 top-0 z-[151] flex h-full w-full sm:w-[540px] md:w-[600px] max-w-[100vw] flex-col bg-white shadow-2xl rounded-none sm:rounded-l-[32px] border-l border-zinc-200 overflow-hidden"
            aria-label="Request a custom quote drawer"
          >
            {/* Drawer Top Header (matching reference image) */}
            <div className="relative border-b border-zinc-100 bg-stone-50/80 px-4 py-4 sm:px-8 sm:py-7 shrink-0 text-center">
              <button
                onClick={onClose}
                className="absolute right-3.5 top-3.5 sm:right-4 sm:top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white text-zinc-600 hover:bg-zinc-200 hover:text-zinc-900 transition-colors shadow-xs border border-zinc-200/80 cursor-pointer active:scale-95"
                aria-label="Close drawer"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="inline-flex items-center gap-1.5 rounded-full border border-purple-200 bg-purple-50 px-3 py-1 text-[11px] font-bold text-[#800080] mb-3">
                <Sparkles className="h-3 w-3 text-[#800080]" />
                <span>Quick Estimate</span>
              </div>

              <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight leading-tight">
                Request a Custom Quote
              </h2>

              <p className="mt-2 text-xs sm:text-sm text-zinc-600 font-normal leading-relaxed max-w-md mx-auto">
                Fill out the form below with your requirements, and our team will get back to you with pricing and timelines on WhatsApp.
              </p>
            </div>

            {/* Embedded Quote Form with Live Configuration Fields */}
            <div className="flex-1 overflow-y-auto bg-white flex flex-col justify-between">
              <QuoteForm
                inlineService={serviceSlug}
                onComplete={onClose}
                isDrawer={true}
              />
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
}
