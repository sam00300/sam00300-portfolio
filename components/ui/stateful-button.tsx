"use client";

import { useState, type ReactNode, type MouseEvent, forwardRef } from "react";
import { Check, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export type StatefulButtonVariant = "primary" | "secondary" | "outline" | "icon";

export interface StatefulButtonProps {
  children: ReactNode;
  variant?: StatefulButtonVariant;
  onClick?: (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void | Promise<void>;
  href?: string;
  download?: string;
  target?: string;
  rel?: string;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
  loadingText?: string;
  successText?: string;
  duration?: number;
}

export const StatefulButton = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  StatefulButtonProps
>(function StatefulButton(
  {
    children,
    variant = "primary",
    onClick,
    href,
    download,
    target,
    rel,
    type = "button",
    className = "",
    disabled = false,
    loadingText,
    successText,
    duration = 1400,
  },
  ref
) {
  const [state, setState] = useState<"idle" | "loading" | "success">("idle");

  const handleClick = async (
    e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => {
    if (disabled || state !== "idle") {
      e.preventDefault();
      return;
    }

    setState("loading");

    try {
      if (onClick) {
        await Promise.resolve(onClick(e));
      } else if (href?.startsWith("#")) {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else if (download && href) {
        // Direct download trigger
        const link = document.createElement("a");
        link.href = href;
        link.download = download;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }

      // Small pause to guarantee visual feedback
      await new Promise((resolve) => setTimeout(resolve, 500));
      setState("success");

      setTimeout(() => {
        setState("idle");
      }, duration);
    } catch {
      setState("idle");
    }
  };

  const getVariantStyles = () => {
    switch (variant) {
      case "primary":
        return `
          bg-foreground text-background font-semibold shadow-md
          hover:opacity-95 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/10
          dark:hover:shadow-[0_0_20px_-3px_rgba(255,255,255,0.25)]
          active:scale-[0.96] active:translate-y-0
        `;
      case "secondary":
      case "outline":
        return `
          border border-foreground/12 bg-background/80 text-foreground font-medium shadow-sm backdrop-blur-md
          hover:border-foreground/30 hover:bg-foreground/[0.04] hover:-translate-y-0.5 hover:shadow-md
          dark:hover:border-white/30 dark:hover:bg-white/[0.06] dark:hover:shadow-[0_0_15px_-3px_rgba(255,255,255,0.12)]
          active:scale-[0.96] active:translate-y-0
        `;
      case "icon":
        return `
          border border-foreground/10 bg-background text-foreground/80 shadow-sm
          hover:bg-foreground/5 hover:text-foreground hover:-translate-y-0.5 hover:shadow-md
          dark:hover:border-white/25 dark:hover:shadow-[0_0_15px_-3px_rgba(255,255,255,0.15)]
          active:scale-[0.94] active:translate-y-0
        `;
    }
  };

  const baseStyles = `
    relative inline-flex items-center justify-center gap-2 cursor-pointer
    transition-all duration-200 select-none overflow-hidden
    disabled:opacity-50 disabled:pointer-events-none
    ${getVariantStyles()}
    ${className}
  `;

  const content = (
    <AnimatePresence mode="wait" initial={false}>
      {state === "loading" ? (
        <motion.span
          key="loading"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.15 }}
          className="inline-flex items-center gap-2"
        >
          <Loader2 className="h-4 w-4 animate-spin text-current shrink-0" />
          <span>{loadingText || "Loading..."}</span>
        </motion.span>
      ) : state === "success" ? (
        <motion.span
          key="success"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.18 }}
          className="inline-flex items-center gap-1.5 font-semibold text-emerald-600 dark:text-emerald-400"
        >
          <Check className="h-4 w-4 shrink-0 text-emerald-500 animate-in zoom-in-75 duration-150" />
          <span>{successText || "Completed!"}</span>
        </motion.span>
      ) : (
        <motion.span
          key="idle"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.15 }}
          className="inline-flex items-center gap-2"
        >
          {children}
        </motion.span>
      )}
    </AnimatePresence>
  );

  if (href && !disabled) {
    return (
      <a
        ref={ref as any}
        href={href}
        target={target}
        rel={rel}
        download={download}
        onClick={handleClick}
        className={baseStyles}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      ref={ref as any}
      type={type}
      disabled={disabled || state !== "idle"}
      onClick={handleClick}
      className={baseStyles}
    >
      {content}
    </button>
  );
});
