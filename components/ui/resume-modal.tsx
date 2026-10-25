"use client";

import { useEffect, type ReactNode } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Download,
  ExternalLink,
  Eye,
  FileText,
  X,
} from "lucide-react";

type ResumeModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function ResumeModal({ isOpen, onClose }: ResumeModalProps): ReactNode {
  // Prevent scrolling behind modal when open & support Escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[999999] flex items-center justify-center p-3 sm:p-6 md:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-md cursor-pointer"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 flex h-[90vh] w-full max-w-5xl flex-col rounded-3xl border border-foreground/15 bg-background shadow-2xl overflow-hidden"
            role="dialog"
            aria-modal="true"
            aria-labelledby="resume-dialog-title"
          >
            {/* Header */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-foreground/10 px-5 py-4 sm:px-6 bg-foreground/[0.02]">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-500">
                  <FileText className="h-5 w-5" />
                </div>
                <div>
                  <h3
                    id="resume-dialog-title"
                    className="text-base sm:text-lg font-bold text-foreground leading-tight"
                  >
                    Vivekananda Singh — Resume
                  </h3>
                  <p className="text-xs text-foreground/60">
                    Data Analyst &amp; Project Coordinator
                  </p>
                </div>
              </div>

              {/* Action Buttons: Preview / Download / Close */}
              <div className="flex items-center gap-2">
                {/* Download PDF button */}
                <a
                  href="/resume.pdf"
                  download="Vivekananda_Singh_Resume.pdf"
                  title="Download Resume PDF"
                  className="flex items-center gap-1.5 rounded-xl border border-blue-500/30 bg-blue-500 px-3.5 py-2 text-xs font-semibold text-white shadow-sm hover:bg-blue-600 active:scale-95 transition-all"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>Download PDF</span>
                </a>

                {/* Open Fullscreen in New Tab button */}
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Open in new tab"
                  className="hidden sm:flex items-center gap-1.5 rounded-xl border border-foreground/10 bg-foreground/5 px-3 py-2 text-xs font-semibold text-foreground/80 hover:bg-foreground/10 hover:text-foreground active:scale-95 transition-all"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  <span>Open Fullscreen</span>
                </a>

                {/* Close Button */}
                <button
                  type="button"
                  onClick={onClose}
                  title="Close Preview"
                  className="flex h-8 w-8 items-center justify-center rounded-xl border border-foreground/10 bg-foreground/5 text-foreground/60 hover:bg-foreground/10 hover:text-foreground active:scale-95 transition-all ml-1"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Modal Body / PDF Preview Frame */}
            <div className="relative flex-1 w-full bg-neutral-100 dark:bg-neutral-900 p-2 sm:p-4 overflow-hidden flex flex-col">
              <div className="relative h-full w-full rounded-2xl overflow-hidden border border-foreground/10 bg-white shadow-sm">
                <iframe
                  src="/resume.pdf#view=FitH"
                  className="h-full w-full border-0"
                  title="Vivekananda Singh Resume Preview"
                />
              </div>

              {/* Mobile Fallback note */}
              <div className="mt-2 flex items-center justify-between text-[11px] text-foreground/50 px-2 sm:hidden">
                <span>Having trouble viewing on mobile?</span>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 font-semibold underline underline-offset-2 flex items-center gap-1"
                >
                  <Eye className="h-3 w-3" />
                  <span>Open in native viewer</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
