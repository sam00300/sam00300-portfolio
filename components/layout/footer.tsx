"use client";

import type { ReactNode } from "react";
import { ArrowUp } from "lucide-react";
import { StatefulButton } from "@/components/ui/stateful-button";

export function Footer(): ReactNode {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full border-t border-foreground/10 py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row sm:px-10">
        <div className="flex items-center">
          <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] sm:tracking-[0.3em] text-foreground uppercase">
            VIVEKANANDA SINGH
          </span>
        </div>

        <div className="text-xs font-mono text-foreground/50 text-center tracking-wide">
          &ldquo;Another dashboard nobody asked for&rdquo;
        </div>

        <div className="flex items-center gap-4 text-xs text-foreground/60">
          <span>&copy; {new Date().getFullYear()} All rights reserved.</span>
          <StatefulButton
            onClick={scrollToTop}
            variant="icon"
            successText=""
            duration={1200}
            className="h-8 w-8 rounded-full"
          >
            <ArrowUp className="h-4 w-4" />
          </StatefulButton>
        </div>
      </div>
    </footer>
  );
}
