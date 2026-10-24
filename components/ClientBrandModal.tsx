"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { X, Building2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ClientBrand } from "@/lib/client-projects";

interface ClientBrandModalProps {
  brand: ClientBrand | null;
  isOpen: boolean;
  onClose: () => void;
  triggerElementRef?: HTMLElement | null;
}

export default function ClientBrandModal({
  brand,
  isOpen,
  onClose,
  triggerElementRef,
}: ClientBrandModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }

      if (e.key === "Tab" && modalRef.current) {
        const focusable = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      clearTimeout(timer);
      if (triggerElementRef) {
        triggerElementRef.focus();
      }
    };
  }, [isOpen, onClose, triggerElementRef]);

  if (!isOpen || !brand) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6 overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="brand-modal-title"
      >
        {/* Backdrop click to close */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          onClick={onClose}
          className="fixed inset-0 bg-zinc-950/60 backdrop-blur-sm cursor-pointer"
          aria-hidden="true"
        />

        {/* Modal Dialog */}
        <motion.div
          ref={modalRef}
          initial={{ opacity: 0, scale: 0.96, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 12 }}
          transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="relative z-10 w-full max-w-3xl max-h-[88vh] flex flex-col rounded-3xl bg-white border border-zinc-200/90 shadow-2xl overflow-hidden text-left"
        >
          {/* Header: Logo, Brand Name & Close Button */}
          <div className="flex items-center justify-between border-b border-zinc-100 bg-white px-5 sm:px-6 py-4 shrink-0">
            <div className="flex items-center gap-3">
              <div className="relative flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl border border-zinc-200/80 bg-zinc-50 p-1.5 shadow-2xs">
                <Image
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  fill
                  sizes="44px"
                  className="object-contain p-0.5"
                />
              </div>
              <h3
                id="brand-modal-title"
                className="font-heading text-base sm:text-lg font-bold tracking-tight text-zinc-950"
              >
                {brand.name}
              </h3>
            </div>

            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              aria-label={`Close ${brand.name} gallery`}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-zinc-200/70 bg-zinc-100 text-zinc-500 transition-colors hover:bg-zinc-200 hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#800080] cursor-pointer"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Body: Images and 1-line description per image */}
          <div className="flex-1 overflow-y-auto p-5 sm:p-6 bg-stone-50/40">
            {brand.projects && brand.projects.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                {brand.projects.map((proj) => (
                  <div key={proj.id} className="flex flex-col">
                    {/* Project Image */}
                    <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-zinc-100 border border-zinc-200/80 shadow-xs">
                      <Image
                        src={proj.image}
                        alt={proj.alt || proj.description}
                        fill
                        sizes="(max-width: 640px) 100vw, 420px"
                        className="object-cover object-center transition-transform duration-300 hover:scale-103"
                      />
                    </div>
                    {/* 1-Line Description */}
                    <p className="mt-2 text-xs sm:text-[13px] font-medium text-zinc-700 leading-snug line-clamp-1">
                      {proj.description}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center text-center py-12 px-4 rounded-2xl border border-dashed border-zinc-200 bg-white">
                <Building2 className="h-8 w-8 text-zinc-400 mb-2" />
                <p className="text-sm font-semibold text-zinc-700">
                  Project images coming soon
                </p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
