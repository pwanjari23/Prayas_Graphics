"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import QuoteForm from "./QuoteForm";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceSlug: string;
}

export default function QuoteModal({ isOpen, onClose, serviceSlug }: QuoteModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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

  if (!mounted || !isOpen) return null;

  return createPortal(
    <AnimatePresence>
      <div className="fixed inset-0 z-[150] flex items-center justify-center p-2.5 sm:p-6 overflow-y-auto">
        <motion.div
          key="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-zinc-950/70 backdrop-blur-sm cursor-pointer"
          onClick={onClose}
        />
        <motion.div
          key="modal"
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl z-10 my-auto"
        >
          {/* Close button with high affordance & safe mobile touch target */}
          <div className="absolute right-2.5 top-6 sm:right-4 sm:top-11 z-30">
            <button
              onClick={onClose}
              className="flex h-10 w-10 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-white/95 backdrop-blur-md text-zinc-700 hover:bg-zinc-100 hover:text-zinc-950 border border-zinc-200 transition-all shadow-md active:scale-95 cursor-pointer"
              aria-label="Close modal"
            >
              <X className="h-5 w-5 sm:h-4 sm:w-4" />
            </button>
          </div>
          
          <div className="max-h-[92vh] sm:max-h-[90vh] overflow-y-auto rounded-2xl sm:rounded-[32px] no-scrollbar">
            <QuoteForm inlineService={serviceSlug} onComplete={onClose} />
          </div>
        </motion.div>
      </div>
    </AnimatePresence>,
    document.body
  );
}
