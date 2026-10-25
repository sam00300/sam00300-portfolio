"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { ArrowRight, FileText, Mail } from "lucide-react";
import { StatefulButton } from "@/components/ui/stateful-button";
import { ResumeModal } from "@/components/ui/resume-modal";

export function HeroCtas(): ReactNode {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <>
      <div className="mt-4 flex flex-wrap items-center gap-3">
        {/* Contact Button */}
        <StatefulButton
          href="#contact"
          variant="primary"
          loadingText="Navigating..."
          successText="Connected!"
          className="rounded-xl px-5 py-2.5 text-sm"
        >
          <Mail className="h-4 w-4" aria-hidden="true" />
          <span>Contact</span>
        </StatefulButton>

        {/* View My Work Button */}
        <StatefulButton
          href="#projects"
          variant="outline"
          loadingText="Opening..."
          successText="Navigated!"
          className="rounded-xl px-5 py-2.5 text-sm"
        >
          <span>View My Work</span>
          <ArrowRight
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </StatefulButton>

        {/* Resume Button */}
        <button
          type="button"
          onClick={() => setIsResumeModalOpen(true)}
          className="inline-flex items-center gap-2 rounded-xl border border-foreground/15 bg-background px-5 py-2.5 text-sm font-semibold text-foreground shadow-sm hover:border-foreground/30 hover:bg-foreground/5 active:scale-95 transition-all cursor-pointer"
          title="View & Download Resume"
        >
          <FileText className="h-4 w-4 text-foreground/70" aria-hidden="true" />
          <span>Resume</span>
        </button>
      </div>

      {/* Resume Preview & Download Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </>
  );
}
