"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { FadeIn } from "@/components/ui/motion-primitives";
import {
  Calendar,
  CheckCircle2,
  ChevronRight,
  MapPin,
  Sparkles,
  X,
  Zap,
} from "lucide-react";

type ExperienceItem = {
  id: string;
  company: string;
  logo: string;
  role: string;
  stage: string;
  duration: string;
  location: string;
  badge?: string;
  summary: string;
  focus: string;
  responsibilities: string[];
  achievements: string[];
  skills: string[];
  impactMetric: string;
  impactLabel: string;
};

export function ExperienceSection(): ReactNode {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const experiences: ExperienceItem[] = [
    
    {
      id: "Bosch-Rexroth",
      company: "Bosch Rexroth",
      logo: "/bindu ies.jpeg",
      role: "Digitalization Engineer",
      stage: "Currently Working",
      duration: "August 2026 – Present",
      location: "Ahmedabad",
      badge: "August 2026 – Present",
      summary:
        "Developing and deploying real-time data visualization dashboards and automated reporting solutions to drive operational efficiency across the manufacturing plant.",
      focus:
        "End-to-end automation, business intelligence dashboard develop, and application engineering for production workflow.",
      responsibilities: [
        "Write optimized SQL queries and manage ETL workflows to extract, clean, and pipe production data into centralized data models.",
      ],
      achievements: [
        "Enhanced plant data transparency by creating unified cross-department tracking tools for live project reporting.",
      ],
      skills: [
        "Power BI & Dax",
        "Power Apps & Power Automate",
        "SQL & Database Management",
        "Advanced Excel & Data Cleaning",
        "Process Automation",
      ],
      impactMetric: "100%",
      impactLabel: "Real-time visibility achieved for target reporting workflows",
    },
    {
      id: "sun-pharma",
      company: "Sun Pharma",
      logo: "/SunPharma_logo.png",
      role: "Data Analyst | Project Coordinator",
      stage: "Previous Working",
      duration: "June 2025 – July 2026",
      location: "Vadodara",
      badge: "June 2025 – July 2026",
      summary:
        "Support analytics reporting, AI adoption, workforce insights, and cross-functional project coordination across global operations.",
      focus:
        "Spearheading analytics reporting, custom Copilot AI agent development, workforce planning, and cross-functional project coordination across global operations.",
      responsibilities: [
        "Support analytics reporting, AI adoption, workforce insights, and cross-functional project coordination across global operations.",
        "Developed a custom Copilot-based AI business analysis agent using Microsoft Copilot Studio, Copilot API, and Power Automate to support file inputs, data flow, and AI-assisted business responses.",
        "Maintain Excel/Power BI trackers, project status updates, meeting minutes (MOMs), action items, and stakeholder follow-ups across MIS, Site HR, Quality, and API teams.",
        "Perform data cleaning, validation, preparation, and dashboard analysis to support leadership reviews, workforce planning, and decision-making.",
        "Contributed to 5+ projects and initiatives; independently led three end-to-end projects: AI Business Analytics Agent, HR Analytics Dashboard, and DEI Diversity Analysis. Collaborated with teammates on other initiatives.",
      ],
      achievements: [
        "Independently led 3 end-to-end flagship projects: AI Business Analytics Agent, HR Analytics Dashboard, and DEI Diversity Analysis.",
        "Contributed to 5+ enterprise projects and initiatives across global manufacturing and business units.",
        "Engineered automated data pipelines integrating Power Automate and Copilot API for real-time analysis.",
      ],
      skills: [
        "Microsoft Copilot Studio",
        "Power Automate",
        "Power BI",
        "Excel Trackers",
        "Copilot API",
        "HR & Workforce Analytics",
        "Cross-Functional Coordination",
      ],
      impactMetric: "5+ Projects",
      impactLabel: "Initiatives led & supported across global operations",
    },
    {
      id: "inspire-leap",
      company: "InspireLeap",
      logo: "/inspireleap_logo.jpeg",
      role: "Business Development Consultant Intern",
      stage: "Before Previous Working",
      duration: "September 2024 – March 2025",
      location: "Hyderabad",
      badge: "Sept 2024 – Mar 2025",
      summary:
        "Generated insights through online channels to support B2B and B2C growth, and supported process improvement through actionable analytics.",
      focus:
        "Market insights, channel performance analysis, process improvement, and data-driven customer relationship activities.",
      responsibilities: [
        "Generated insights through online channels to support B2B and B2C growth.",
        "Supported process improvement and customer relationship activities through analytical thinking and actionable insights.",
      ],
      achievements: [
        "Identified key channel performance drivers to optimize B2B and B2C outreach.",
        "Introduced actionable analytical frameworks that streamlined customer relationship workflows.",
      ],
      skills: [
        "Market Analytics",
        "Channel Insights",
        "Process Improvement",
        "B2B & B2C Growth",
        "Customer Analytics",
      ],
      impactMetric: "B2B & B2C",
      impactLabel: "Growth and customer process optimization",
    },
  ];

  const selectedExp = experiences.find((exp) => exp.id === selectedId) || null;

  const handleSelect = (id: string) => {
    setSelectedId(id);
    // Smooth scroll to experience section so user sees the detailed view comfortably
    const sectionEl = document.getElementById("experience");
    if (sectionEl) {
      const topOffset = sectionEl.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: topOffset, behavior: "smooth" });
    }
  };

  return (
    <section
      id="experience"
      className="relative w-full py-20 sm:py-28 bg-foreground/[0.015] overflow-hidden"
    >
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-10">
        {/* Section Header */}
        <FadeIn className="flex flex-col items-center text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-foreground/50">
            Career Timeline
          </span>
          <h2 className="mt-2 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Professional Experience
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground/70 sm:text-lg">
            Track my career in descending chronological order. Click any
            timeline card to inspect deep-dive responsibilities, automation
            initiatives, and key impact metrics.
          </p>

          {selectedId && (
            <button
              type="button"
              onClick={() => setSelectedId(null)}
              className="mt-5 inline-flex items-center gap-1.5 rounded-full border border-foreground/10 bg-background/90 px-4 py-1.5 text-xs font-medium text-foreground/75 shadow-sm backdrop-blur-sm hover:border-foreground/25 hover:bg-foreground/5 transition-all"
            >
              <X className="h-3.5 w-3.5" />
              <span>Reset &amp; Center Timeline</span>
            </button>
          )}
        </FadeIn>

        {/* Dynamic Layout: Center Timeline OR Split Layout (Timeline on Left + Details on Right) */}
        <div className="mt-14">
          <div
            className={`transition-all duration-500 ${
              selectedId
                ? "grid grid-cols-1 items-start gap-8 lg:grid-cols-12"
                : "mx-auto max-w-3xl"
            }`}
          >
            {/* Timeline Column */}
            <div
              className={`relative transition-all duration-500 ${
                selectedId ? "lg:col-span-5" : "w-full"
              }`}
            >
              {/* Vertical timeline line down the middle / left */}
              <div
                aria-hidden="true"
                className={`absolute top-4 bottom-4 w-0.5 bg-gradient-to-b from-blue-500 via-emerald-500/50 to-foreground/10 ${
                  selectedId ? "left-5" : "left-5 sm:left-1/2 sm:-translate-x-1/2"
                }`}
              />

              <div className="flex flex-col gap-8 sm:gap-10">
                {experiences.map((exp, idx) => {
                  const isSelected = selectedId === exp.id;
                  const isCurrent = idx === 0;

                  return (
                    <motion.div
                      key={exp.id}
                      initial={{ opacity: 0, y: 35 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false, amount: 0.2 }}
                      transition={{
                        duration: 0.6,
                        delay: idx * 0.1,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className={`relative flex items-start gap-5 ${
                        selectedId
                          ? "flex-row pl-12"
                          : "flex-col sm:flex-row sm:items-center sm:gap-8"
                      }`}
                    >
                      {/* Timeline Node Indicator */}
                      <div
                        onClick={() => handleSelect(exp.id)}
                        className={`absolute z-10 flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-full border-2 bg-white p-1 transition-all duration-300 shadow-sm ${
                          isSelected
                            ? "border-blue-500 shadow-lg shadow-blue-500/25 scale-110"
                            : isCurrent
                            ? "border-blue-500 shadow-md hover:scale-105"
                            : "border-foreground/20 shadow-sm hover:border-foreground/50 hover:scale-105"
                        } ${
                          selectedId
                            ? "left-0 top-3"
                            : "left-0 top-3 sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2"
                        }`}
                        title="Click to view full work details"
                      >
                        <Image
                          src={exp.logo}
                          alt={exp.company}
                          width={28}
                          height={28}
                          className={`h-full w-full object-contain ${
                            exp.id === "sun-pharma" ? "scale-140" : ""
                          }`}
                        />
                      </div>

                      {/* Timeline Card */}
                      <div
                        onClick={() => handleSelect(exp.id)}
                        className={`group relative w-full cursor-pointer rounded-3xl border p-5 sm:p-6 transition-all duration-300 ${
                          isSelected
                            ? "border-blue-500/50 bg-blue-500/[0.04] shadow-[0_8px_30px_rgba(59,130,246,0.15)] ring-2 ring-blue-500/20"
                            : "border-foreground/10 bg-background/90 shadow-[0_4px_20px_rgb(0,0,0,0.05)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.45)] hover:border-foreground/25 hover:bg-foreground/[0.02] hover:shadow-[0_16px_36px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_16px_45px_rgba(0,0,0,0.7)]"
                        } ${
                          selectedId
                            ? "w-full"
                            : "pl-14 sm:pl-6 sm:w-[calc(50%-2rem)]"
                        } ${
                          !selectedId && idx % 2 === 0
                            ? "sm:mr-auto sm:text-right"
                            : !selectedId
                            ? "sm:ml-auto sm:text-left"
                            : ""
                        }`}
                      >
                        {/* Header details */}
                        <div
                          className={`flex flex-wrap items-center gap-2 ${
                            !selectedId && idx % 2 === 0
                              ? "sm:justify-end"
                              : "justify-start"
                          }`}
                        >
                          <span
                            className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold tracking-wide border shadow-xs ${
                              isCurrent
                                ? "border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400"
                                : "border-foreground/10 bg-foreground/4 text-foreground/70"
                            }`}
                          >
                            {exp.badge}
                          </span>
                          <span className="text-xs text-foreground/50">
                            {exp.duration}
                          </span>
                        </div>

                        {/* Company & Role with Logo */}
                        <div
                          className={`mt-3 flex items-center gap-3 ${
                            !selectedId && idx % 2 === 0
                              ? "sm:flex-row-reverse sm:text-right"
                              : "text-left"
                          }`}
                        >
                          <div className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-foreground/10 bg-white p-1.5 shadow-sm">
                            <Image
                              src={exp.logo}
                              alt={exp.company}
                              width={32}
                              height={32}
                              className={`h-full w-full object-contain ${
                                exp.id === "sun-pharma" ? "scale-140" : ""
                              }`}
                            />
                          </div>
                          <div>
                            <h3 className="text-base sm:text-lg font-bold tracking-tight text-foreground group-hover:text-blue-500 transition-colors">
                              {exp.company}
                            </h3>
                            <p className="text-xs sm:text-sm font-medium text-foreground/80">
                              {exp.role}
                            </p>
                          </div>
                        </div>

                        {/* Location */}
                        <div
                          className={`mt-1.5 flex items-center gap-1 text-[11px] text-foreground/50 ${
                            !selectedId && idx % 2 === 0
                              ? "sm:justify-end"
                              : ""
                          }`}
                        >
                          <MapPin className="h-3 w-3" />
                          <span>{exp.location}</span>
                        </div>

                        {/* Short Summary */}
                        <p className="mt-3 text-xs leading-relaxed text-foreground/65 line-clamp-2">
                          {exp.summary}
                        </p>

                        {/* Click to inspect prompt */}
                        <div
                          className={`mt-4 flex items-center gap-1.5 text-xs font-semibold ${
                            isSelected
                              ? "text-blue-500"
                              : "text-foreground/70 group-hover:text-foreground"
                          } ${
                            !selectedId && idx % 2 === 0
                              ? "sm:justify-end"
                              : ""
                          }`}
                        >
                          <span>
                            {isSelected
                              ? "Viewing Details"
                              : "View Work Details"}
                          </span>
                          <ChevronRight
                            className={`h-3.5 w-3.5 transition-transform duration-300 ${
                              isSelected
                                ? "rotate-90 text-blue-500"
                                : "group-hover:translate-x-1"
                            }`}
                          />
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Detailed Experience Element */}
            {selectedId && selectedExp && (
              <div className="lg:col-span-7 lg:sticky lg:top-24">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedExp.id}
                    initial={{ opacity: 0, x: 25, scale: 0.98 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -20, scale: 0.98 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="relative rounded-3xl border border-foreground/15 bg-background/95 p-6 sm:p-9 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.18)] dark:shadow-[0_25px_70px_-15px_rgba(0,0,0,0.9)] backdrop-blur-md"
                  >
                    {/* Close button to return to centered timeline */}
                    <button
                      type="button"
                      onClick={() => setSelectedId(null)}
                      title="Close details and center timeline"
                      className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full border border-foreground/10 bg-foreground/3 text-foreground/60 hover:bg-foreground/8 hover:text-foreground transition-colors"
                    >
                      <X className="h-4 w-4" />
                    </button>

                    {/* Stage & Header */}
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-600 dark:text-blue-400 border border-blue-500/25 shadow-xs">
                        {selectedExp.stage}
                      </span>
                      <span className="flex items-center gap-1 text-xs font-medium text-foreground/60">
                        <Calendar className="h-3.5 w-3.5" />
                        {selectedExp.duration}
                      </span>
                      <span className="flex items-center gap-1 text-xs font-medium text-foreground/60">
                        <MapPin className="h-3.5 w-3.5" />
                        {selectedExp.location}
                      </span>
                    </div>

                    {/* Company, Role & Logo */}
                    <div className="mt-4 flex items-center gap-4">
                      <div className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-foreground/10 bg-white p-2 shadow-md">
                        <Image
                          src={selectedExp.logo}
                          alt={selectedExp.company}
                          width={48}
                          height={48}
                          className={`h-full w-full object-contain ${
                            selectedExp.id === "sun-pharma" ? "scale-140" : ""
                          }`}
                        />
                      </div>
                      <div>
                        <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                          {selectedExp.company}
                        </h3>
                        <p className="mt-0.5 text-base sm:text-lg font-medium text-blue-600 dark:text-blue-400">
                          {selectedExp.role}
                        </p>
                      </div>
                    </div>

                    {/* Core Focus Narrative */}
                    <div className="mt-5 rounded-2xl border border-foreground/8 bg-foreground/2 p-4 text-xs sm:text-sm leading-relaxed text-foreground/80">
                      <span className="font-semibold text-foreground">
                        Core Focus:{" "}
                      </span>
                      {selectedExp.focus}
                    </div>

                    {/* Everything Done / Detailed Responsibilities */}
                    <div className="mt-6">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground/60 flex items-center gap-1.5">
                        <Zap className="h-3.5 w-3.5 text-amber-500" />
                        <span>Work Undertaken &amp; Key Responsibilities</span>
                      </h4>
                      <ul className="mt-3.5 flex flex-col gap-3">
                        {selectedExp.responsibilities.map((item, rIdx) => (
                          <li
                            key={rIdx}
                            className="flex items-start gap-3 text-xs sm:text-sm leading-relaxed text-foreground/75"
                          >
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Key Accomplishments & Business Impact */}
                    <div className="mt-6 border-t border-foreground/8 pt-5">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground/60 flex items-center gap-1.5">
                        <Sparkles className="h-3.5 w-3.5 text-blue-500" />
                        <span>Key Milestones &amp; Quantifiable Impact</span>
                      </h4>
                      <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {selectedExp.achievements.map((ach, aIdx) => (
                          <div
                            key={aIdx}
                            className="rounded-xl border border-foreground/8 bg-foreground/2 p-3 text-xs leading-relaxed text-foreground/70"
                          >
                            &bull; {ach}
                          </div>
                        ))}
                      </div>

                      {/* Impact Highlight Card */}
                      <div className="mt-4 flex items-center gap-3.5 rounded-2xl border border-emerald-500/25 bg-emerald-500/5 p-3.5">
                        <div className="text-2xl font-black text-emerald-600 dark:text-emerald-400">
                          {selectedExp.impactMetric}
                        </div>
                        <div className="text-xs font-medium text-foreground/80 leading-snug">
                          {selectedExp.impactLabel}
                        </div>
                      </div>
                    </div>

                    {/* Tools & Tech Stack */}
                    <div className="mt-6 border-t border-foreground/8 pt-5">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground/60">
                        Tools &amp; Technologies Used
                      </h4>
                      <div className="mt-2.5 flex flex-wrap gap-2">
                        {selectedExp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="rounded-lg border border-foreground/10 bg-foreground/4 px-2.5 py-1 text-xs font-medium text-foreground/75"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
