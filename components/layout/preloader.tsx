"use client";

import { useEffect, useState, type ReactNode } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

export function Preloader(): ReactNode {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Force browser to start from top on page load / refresh
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });

    // Prevent scrolling while preloader is active
    document.body.style.overflow = "hidden";

    let isMounted = true;
    const startTime = Date.now();
    const MIN_DISPLAY_MS = 1000;
    const MAX_TIMEOUT_MS = 4000;

    async function waitForAssetsAndDismiss(): Promise<void> {
      try {
        // 1. Wait for window load event if document is not yet complete
        if (document.readyState !== "complete") {
          await new Promise<void>((resolve) => {
            window.addEventListener("load", () => resolve(), { once: true });
          });
        }

        // 2. Wait for fonts to finish rendering
        if (document.fonts && document.fonts.ready) {
          await document.fonts.ready;
        }

        // 3. Wait for all critical DOM images to complete & decode
        const images = Array.from(document.images);
        if (images.length > 0) {
          await Promise.allSettled(
            images.map((img) => {
              if (img.complete) {
                return typeof img.decode === "function"
                  ? img.decode().catch(() => {})
                  : Promise.resolve();
              }
              return new Promise<void>((resolve) => {
                img.onload = img.onerror = () => resolve();
              });
            })
          );
        }
      } catch {
        // Fallback gracefully on any asset error
      }

      if (!isMounted) return;

      // Ensure minimum display time for smooth visual branding
      const elapsed = Date.now() - startTime;
      const remainingTime = Math.max(0, MIN_DISPLAY_MS - elapsed);

      setTimeout(() => {
        if (!isMounted) return;
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
        setLoading(false);
        document.body.style.overflow = "";
      }, remainingTime);
    }

    waitForAssetsAndDismiss();

    // Absolute fallback safety to prevent hanging
    const safetyTimer = setTimeout(() => {
      if (isMounted) {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
        setLoading(false);
        document.body.style.overflow = "";
      }
    }, MAX_TIMEOUT_MS);

    return () => {
      isMounted = false;
      clearTimeout(safetyTimer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.02,
            transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
          }}
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-white/85 backdrop-blur-2xl select-none"
        >
          {/* Favicon only */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{
              scale: [0.92, 1.04, 1],
              opacity: 1,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="relative flex items-center justify-center p-4"
          >
            <Image
              src="/favicon.png"
              alt="Logo"
              width={80}
              height={80}
              priority
              className="h-16 w-16 sm:h-20 sm:w-20 object-contain drop-shadow-md"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
