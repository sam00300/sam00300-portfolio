"use client";

import Image from "next/image";
import { useEffect, useState, type ReactNode } from "react";
import { Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { HeroCtas } from "./hero-ctas";
import { FadeIn, ScaleUnblur } from "@/components/ui/motion-primitives";

const ROTATING_QUOTES = [
  "Making numbers make sense",
  "Data in insights out",
  "I don’t panic—I pivot",
  "Powered by data and coffee",
] as const;

function RotatingQuoteBadge(): ReactNode {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % ROTATING_QUOTES.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      layout
      transition={{
        layout: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
      }}
      className="absolute -top-3.5 -right-2 sm:-right-4 flex items-center gap-1.5 rounded-full border border-foreground/10 bg-background/95 px-3.5 py-1.5 text-xs font-semibold text-foreground shadow-lg backdrop-blur-md z-10 will-change-transform"
    >
      <Sparkles className="h-3.5 w-3.5 text-amber-500 shrink-0" />
      <div className="relative h-4 overflow-hidden flex items-center">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={ROTATING_QUOTES[index]}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{
              duration: 0.42,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="inline-block whitespace-nowrap text-xs font-semibold text-foreground"
          >
            {ROTATING_QUOTES[index]}
          </motion.span>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

function DesignationTypewriter(): ReactNode {
  const titles = ["Project Coordinator", "Data Analyst"] as const;
  const [wordIndex, setWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord: string = titles[wordIndex % titles.length] ?? "Project Coordinator";
    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      if (displayedText.length < currentWord.length) {
        timeout = setTimeout(() => {
          setDisplayedText(currentWord.slice(0, displayedText.length + 1));
        }, 80);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      }
    } else {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(currentWord.slice(0, displayedText.length - 1));
        }, 45);
      } else {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % titles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, wordIndex]);

  return (
    <div className="mt-2 flex items-center min-h-[32px] sm:min-h-[36px]">
      <p className="text-xl font-medium tracking-tight text-foreground/80 sm:text-2xl">
        {displayedText}
      </p>
      <span
        className="inline-block w-[2px] h-5 sm:h-6 ml-1.5 bg-blue-500 rounded-full animate-pulse"
        aria-hidden="true"
      />
    </div>
  );
}

export function Hero(): ReactNode {
  return (
    <section id="home" className="relative w-full overflow-hidden">
      <div className="mx-auto w-full max-w-6xl px-6 pt-36 pb-20 sm:px-10 sm:pt-44 sm:pb-28">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Information, Intro & Actions */}
          <FadeIn className="flex flex-col gap-5 lg:col-span-7">
            {/* Status indicator matching the clean luxury theme */}
            <div className="inline-flex w-fit items-center gap-2.5 rounded-full border border-foreground/10 bg-background/80 px-3.5 py-1.5 text-xs font-medium text-foreground/80 shadow-sm backdrop-blur-md transition-all hover:border-foreground/20 hover:text-foreground">
              <span className="relative flex h-2 w-2 items-center justify-center">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500/50 opacity-75"></span>
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
              </span>
              <span>Open to collaboration &amp; high-impact initiatives</span>
            </div>

            {/* Name */}
            <div>
              <h1 className="font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Samir Pandey
              </h1>
              {/* Designation below Name with dynamic typewriter animation */}
              <DesignationTypewriter />
            </div>

            {/* Two-line intro below designation */}
            <p className="text-base leading-relaxed text-foreground/75 sm:text-lg">
              Digitalization Engineer at Bosch Rexroth, working on AI
              adoption, process automation, dashboards, and cross-functional
              projects. I enjoy turning business needs into simple, practical
              solutions using Power BI, Excel, Power Automate, and Copilot
              Studio.
            </p>

            {/* Action Buttons: Contact, View My Work, Resume */}
            <HeroCtas />
          </FadeIn>

          {/* Right Column: Photo & Sun Pharma element */}
          <ScaleUnblur className="flex justify-center lg:col-span-5 lg:justify-end">
            <div className="relative mx-auto w-full max-w-sm sm:max-w-md">
              {/* Decorative background glow */}
              <div
                aria-hidden="true"
                className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-amber-500/20 via-blue-500/20 to-purple-500/20 blur-2xl opacity-40 dark:opacity-30"
              />

              {/* Main Photo Card */}
              <div className="relative overflow-hidden rounded-3xl border border-foreground/10 bg-background/90 shadow-2xl backdrop-blur-sm transition-transform duration-500 hover:scale-[1.01]">
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-foreground/5">
                  <Image
                    src="/vivekk-portfolio.png"
                    alt="Vivekananda Singh - Data Analyst and Project Coordinator"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 420px"
                    className="object-cover object-top transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>

              {/* Rotating Quote Badge on top right corner */}
              <RotatingQuoteBadge />
            </div>
          </ScaleUnblur>
        </div>
      </div>
    </section>
  );
}
