"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { FadeIn } from "@/components/ui/motion-primitives";
import {
  CheckCircle2,
  Sparkles,
  Trophy,
} from "lucide-react";

type Certification = {
  issuer: string;
  name: string;
  tag: string;
  logo: string;
  accent: string;
};

export function AccomplishmentsSection(): ReactNode {
  const certifications: Certification[] = [
    {
      issuer: "Oracle",
      name: "Oracle Cloud Infrastructure 2026 Generative AI Certified Professional",
      tag: "Generative AI",
      logo: "/oracle.png",
      accent: "border-red-500/25 bg-white text-red-600 dark:text-red-400",
    },
    {
      issuer: "Cisco",
      name: "Data Science and Data Analytics",
      tag: "Data Science",
      logo: "/cisco.png",
      accent: "border-sky-500/25 bg-white text-sky-600 dark:text-sky-400",
    },
    {
      issuer: "Kaggle / HackerRank",
      name: "SQL Basic, Intermediate and Advanced",
      tag: "Database & Querying",
      logo: "/kaggle.png",
      accent: "border-emerald-500/25 bg-white text-emerald-600 dark:text-emerald-400",
    },
    {
      issuer: "AWS",
      name: "Cloud & AI Practitioner",
      tag: "Cloud & AI",
      logo: "/aws.png",
      accent: "border-amber-500/25 bg-white text-amber-600 dark:text-amber-400",
    },
  ];

  return (
    <section id="accomplishments" className="relative w-full py-20 sm:py-28 bg-foreground/[0.015]">
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-10">
        {/* Section Header */}
        <FadeIn className="flex flex-col items-center text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-foreground/50">
            Credentials &amp; Honors
          </span>
          <h2 className="mt-2 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Accomplishments &amp; Accreditations
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground/70 sm:text-lg">
            Professional certifications in Generative AI, Cloud &amp; Analytics, competitive corporate offers, and campus leadership roles.
          </p>
        </FadeIn>

        {/* 2-Column Split: Left Side List Format & Right Side Bento Style */}
        <div className="mt-14 grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
          {/* Left Side: Certifications & Technical Accomplishments in List Format */}
          <div className="flex flex-col gap-4 lg:col-span-5">
            <FadeIn className="mb-2">
              <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-xs font-semibold text-purple-600 dark:text-purple-400">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Verified Credentials</span>
              </div>
              <h3 className="mt-3 text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                Certifications &amp; Technical Accreditations
              </h3>
              <p className="mt-1 text-xs text-foreground/60">
                Industry-recognized certifications in AI, Data Science &amp; Cloud.
              </p>
            </FadeIn>

            {/* List Stack */}
            <div className="flex flex-col gap-3.5">
              {certifications.map((cert, idx) => (
                <FadeIn
                  key={cert.name}
                  delay={idx * 0.08}
                  className="group relative flex items-center gap-4 rounded-2xl border border-foreground/10 bg-background/90 p-4 sm:p-4.5 shadow-[0_4px_16px_rgb(0,0,0,0.04)] dark:shadow-[0_6px_20px_rgb(0,0,0,0.35)] backdrop-blur-sm transition-all duration-300 hover:border-foreground/25 hover:bg-foreground/[0.03] hover:shadow-[0_10px_25px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_10px_30px_rgba(0,0,0,0.6)] hover:translate-x-1"
                >
                  <div
                    className={`relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-foreground/10 bg-white p-2 shadow-xs transition-transform duration-300 group-hover:scale-105`}
                  >
                    <Image
                      src={cert.logo}
                      alt={cert.issuer}
                      width={36}
                      height={36}
                      className="h-full w-full object-contain"
                    />
                  </div>

                  <div className="flex flex-1 flex-col">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-foreground/50">
                        {cert.issuer}
                      </span>
                      <span className="rounded-full bg-foreground/4 px-2 py-0.5 text-[10px] font-semibold text-foreground/70">
                        {cert.tag}
                      </span>
                    </div>
                    <h4 className="mt-0.5 text-xs sm:text-sm font-bold text-foreground leading-snug group-hover:text-blue-500 transition-colors">
                      {cert.name}
                    </h4>
                    <div className="mt-1 flex items-center gap-1 text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">
                      <CheckCircle2 className="h-3 w-3" />
                      <span>Verified Credential</span>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Right Side: Corporate Offers & Leadership Honors in Bento Style */}
          <div className="flex flex-col gap-4 lg:col-span-7">
            <FadeIn className="mb-2">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-600 dark:text-blue-400 shadow-xs">
                <Trophy className="h-3.5 w-3.5" />
                <span>Excellence &amp; Honors</span>
              </div>
              <h3 className="mt-3 text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                Corporate Offers &amp; Leadership Honors
              </h3>
              <p className="mt-1 text-xs text-foreground/60">
                Competitive selections, corporate recognitions, and athletic leadership.
              </p>
            </FadeIn>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Bento Card 1: JSW Offer */}
              <FadeIn
                delay={0.1}
                className="group relative flex flex-col justify-between rounded-3xl border border-foreground/10 bg-background/90 p-5 sm:p-6 shadow-[0_6px_24px_rgb(0,0,0,0.05)] dark:shadow-[0_10px_30px_rgb(0,0,0,0.45)] backdrop-blur-md transition-all duration-300 hover:border-foreground/25 hover:shadow-[0_18px_40px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_18px_45px_rgba(0,0,0,0.75)] hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-foreground/10 bg-white p-2 shadow-sm">
                      <Image
                        src="/jsw.png"
                        alt="JSW logo"
                        width={36}
                        height={36}
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-2.5 py-0.5 text-xs font-semibold text-blue-600 dark:text-blue-400 shadow-xs">
                      Paid Offer
                    </span>
                  </div>

                  <h4 className="mt-4 text-base sm:text-lg font-bold text-foreground group-hover:text-blue-500 transition-colors">
                    JSW Paid Internship
                  </h4>
                  <div className="text-xs font-medium text-foreground/55">
                    India-Based MNC
                  </div>

                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-foreground/75">
                    Received a paid internship offer from India-based MNC company JSW.
                  </p>
                </div>
              </FadeIn>

              {/* Bento Card 2: ONGC Offer */}
              <FadeIn
                delay={0.15}
                className="group relative flex flex-col justify-between rounded-3xl border border-foreground/10 bg-background/90 p-5 sm:p-6 shadow-[0_6px_24px_rgb(0,0,0,0.05)] dark:shadow-[0_10px_30px_rgb(0,0,0,0.45)] backdrop-blur-md transition-all duration-300 hover:border-foreground/25 hover:shadow-[0_18px_40px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_18px_45px_rgba(0,0,0,0.75)] hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-foreground/10 bg-white p-2 shadow-sm">
                      <Image
                        src="/ongc.png"
                        alt="ONGC logo"
                        width={36}
                        height={36}
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-0.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 shadow-xs">
                      Govt PSU Offer
                    </span>
                  </div>

                  <h4 className="mt-4 text-base sm:text-lg font-bold text-foreground group-hover:text-emerald-500 transition-colors">
                    ONGC Paid Internship
                  </h4>
                  <div className="text-xs font-medium text-foreground/55">
                    Government-Owned Enterprise
                  </div>

                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-foreground/75">
                    Received a paid internship offer from government-owned company ONGC.
                  </p>
                </div>
              </FadeIn>

              {/* Bento Card 3: NCC Volleyball Team Captain */}
              <FadeIn
                delay={0.2}
                className="group relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 overflow-hidden rounded-3xl border border-foreground/10 bg-background/90 p-6 sm:p-7 shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-[0_12px_36px_rgb(0,0,0,0.5)] backdrop-blur-md transition-all duration-300 hover:border-foreground/25 hover:shadow-[0_20px_48px_rgba(0,0,0,0.14)] dark:hover:shadow-[0_20px_55px_rgba(0,0,0,0.8)] hover:-translate-y-1 sm:col-span-2"
              >
                {/* Subtle decorative glow */}
                <div
                  aria-hidden="true"
                  className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-amber-500/10 blur-2xl pointer-events-none"
                />

                <div className="flex items-start gap-4">
                  <div className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-foreground/10 bg-white p-1.5 shadow-sm">
                    <Image
                      src="/ncc.png"
                      alt="NCC logo"
                      width={48}
                      height={48}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-amber-500 transition-colors">
                      NCC Volleyball Team Captain
                    </h4>
                    <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-foreground/75 max-w-xl">
                      Captained the college NCC Volleyball team for two consecutive semesters, steering team strategy, rigorous athletic discipline, and collaborative leadership.
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
