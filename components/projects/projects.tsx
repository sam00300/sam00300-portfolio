"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { FadeIn } from "@/components/ui/motion-primitives";
import {
  Calendar,
  CheckCircle2,
  CreditCard,
  Sparkles,
  Zap,
} from "lucide-react";

export type ProjectsProps = {
  withHeadline?: boolean;
};

type ProjectItem = {
  title: string;
  subtitle: string;
  unit: string;
  date: string;
  icon: ReactNode;
  iconBg: string;
  bullets: string[];
  impact?: string;
  tags: string[];
};

export function Projects({ withHeadline = true }: ProjectsProps): ReactNode {
  // Flagship Global Project (Row 1)
  const globalProject: ProjectItem = {
    title: "AI Business Analytics Agent",
    subtitle: "Conversational Analytics & Decision Support",
    unit: "Sun Pharma Global",
    date: "February 2026",
    icon: (
      <Image
        src="/SunPharma_logo.png"
        alt="Sun Pharma logo"
        width={36}
        height={36}
        className="h-full w-full object-contain scale-140"
      />
    ),
    iconBg: "border-purple-500/20 bg-white shadow-sm overflow-hidden",
    bullets: [
      "Built a custom AI-powered business analysis agent using Microsoft Copilot Studio, Copilot API, and Power Automate for conversational analytics support.",
      "Configured the agent to accept scores, user queries, and file-based inputs, then generate AI-assisted answers, insights, and decision-support outputs.",
      "Automated file processing and data flow through Power Automate to reduce manual analysis effort and improve response turnaround for business users.",
      "Created quick-reference notes, prompt examples, and user support documentation to help business users adopt the Copilot-based AI assistant.",
    ],
    impact:
      "Accelerated reporting turnaround by 75% and enabled instantaneous conversational AI answers for enterprise business users.",
    tags: [
      "Microsoft Copilot Studio",
      "Copilot API",
      "Power Automate",
      "AI Decision Support",
      "Enterprise Automation",
    ],
  };

  // Row 2: Data-Derived Insights + HR Analytics
  const row2Projects: ProjectItem[] = [
    {
      title: "Data-Derived Insights",
      subtitle: "Role: Data Analyst & Project Coordinator • Team: 5 Members",
      unit: "Sun Pharma — Pan-India Operations",
      date: "Current Project",
      icon: (
        <Image
          src="/SunPharma_logo.png"
          alt="Sun Pharma logo"
          width={32}
          height={32}
          className="h-full w-full object-contain scale-140"
        />
      ),
      iconBg: "border-blue-500/20 bg-white shadow-sm overflow-hidden",
      bullets: [
        "Develop data models and Quality Index Models to generate actionable business insights.",
        "Coordinate with plant-level stakeholders to identify data gaps and address operational challenges.",
        "Bridge communication between project teams and manufacturing plants to translate business needs into data-driven solutions.",
        "Support real-time problem-solving and data-driven decision-making across pan-India manufacturing operations.",
      ],
      impact:
        "Standardized Quality Index Models and streamlined real-time data problem-solving across pan-India manufacturing plants.",
      tags: [
        "Data Modeling",
        "Quality Index Models",
        "Plant Coordination",
        "Pan-India Operations",
      ],
    },
    {
      title: "HR Analytics Dashboard",
      subtitle: "Workforce Metrics & Tracking",
      unit: "SunPharma - Ind Business",
      date: "June 2025",
      icon: (
        <Image
          src="/SunPharma_logo.png"
          alt="Sun Pharma logo"
          width={32}
          height={32}
          className="h-full w-full object-contain scale-140"
        />
      ),
      iconBg: "border-blue-500/20 bg-white shadow-sm overflow-hidden",
      bullets: [
        "Built a Power BI HR Analytics Dashboard to track workforce metrics, including headcount and attrition.",
        "Cleaned and transformed HR data to support accurate reporting.",
        "Worked with HR and MIS teams to deliver actionable insights for decision-making.",
      ],
      impact:
        "Standardized workforce reporting, delivering clear visibility into headcount and attrition trends to leadership.",
      tags: ["Power BI", "Headcount & Attrition", "HR Data Cleaning", "MIS Collaboration"],
    },
  ];

  // Row 3: Shift Analysis + DEI Diversity Analysis
  const row3Projects: ProjectItem[] = [
    {
      title: "Shift Analysis Dashboard",
      subtitle: "Manufacturing Operational Metrics",
      unit: "SunPharma - Ind Business",
      date: "August 2025",
      icon: (
        <Image
          src="/SunPharma_logo.png"
          alt="Sun Pharma logo"
          width={32}
          height={32}
          className="h-full w-full object-contain scale-140"
        />
      ),
      iconBg: "border-emerald-500/20 bg-white shadow-sm overflow-hidden",
      bullets: [
        "Performed shift-wise analysis across manufacturing sites for three business units: API, SGO, and Quality.",
        "Created dashboards and reports in Excel and Power BI to track manpower distribution and operational metrics.",
        "Provided insights to support workforce planning and operational efficiency.",
      ],
      impact:
        "Optimized manpower allocation and operational planning across API, SGO, and Quality manufacturing sites.",
      tags: ["Power BI", "Excel Reports", "API / SGO / Quality", "Shift Analytics"],
    },
    {
      title: "DEI Diversity Analysis",
      subtitle: "Workforce Diversity Metrics",
      unit: "SunPharma - Ind Business",
      date: "December 2025",
      icon: (
        <Image
          src="/SunPharma_logo.png"
          alt="Sun Pharma logo"
          width={32}
          height={32}
          className="h-full w-full object-contain scale-140"
        />
      ),
      iconBg: "border-amber-500/20 bg-white shadow-sm overflow-hidden",
      bullets: [
        "Conducted Diversity, Equity, and Inclusion (DEI) analysis across manufacturing sites.",
        "Analyzed workforce diversity metrics to support HR and leadership decision-making.",
        "Prepared reports and insights highlighting diversity trends and improvement areas.",
      ],
      impact:
        "Delivered foundational demographic analytics informing HR leadership on site diversity benchmarks.",
      tags: ["DEI Analytics", "Workforce Diversity", "Site Analysis", "Leadership Insights"],
    },
  ];

  // Row 4: Personal Project - Credit Card Fraud Detection (NO business impact)
  const personalProject: ProjectItem = {
    title: "Credit Card Fraud Detection",
    subtitle: "Behavioral Modeling & Security Rules (Personal Project)",
    unit: "Anomaly Detection",
    date: "July 2024",
    icon: <CreditCard className="h-5 w-5 text-rose-500" />,
    iconBg: "border-rose-500/20 bg-rose-500/10 text-rose-500",
    bullets: [
      "Designed a detection concept that studies user behavior patterns and uses location-scanning techniques to identify unusual activity.",
      "Specified alerting and account-blocking behavior after three invalid attempts.",
    ],
    tags: ["Behavior Patterns", "Location Scanning", "Account Blocking", "Risk Rules"],
  };

  return (
    <section id="projects" className="relative w-full py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-10">
        {withHeadline && (
          <FadeIn className="flex flex-col items-center text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-foreground/50">
              Featured Work
            </span>
            <h2 className="mt-2 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Key Projects &amp; Solutions
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground/70 sm:text-lg">
              Explore enterprise AI systems, analytics dashboards, and data-driven solutions built across pharmaceutical manufacturing, workforce planning, and business operations.
            </p>
          </FadeIn>
        )}

        {/* 1 x 2 x 2 (+1) Projects Format */}
        <div className="mt-14 flex flex-col gap-6">
          {/* Row 1: Global Level Flagship Project (Full-Width Card) */}
          <FadeIn
            delay={0.05}
            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-foreground/10 bg-background/90 p-6 sm:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-[0_12px_40px_rgb(0,0,0,0.55)] backdrop-blur-md transition-all duration-300 hover:border-foreground/25 hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_20px_60px_rgba(0,0,0,0.8)] hover:-translate-y-0.5"
          >
            <div>
              {/* Header Badges */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-xs font-semibold text-purple-600 dark:text-purple-400 flex items-center gap-1.5 shadow-sm">
                    <Sparkles className="h-3.5 w-3.5" />
                    <span>Global Level Project</span>
                  </span>
                  <span className="rounded-full border border-foreground/10 bg-foreground/4 px-3 py-1 text-xs font-semibold text-foreground/85">
                    {globalProject.unit}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-xs font-medium text-foreground/50">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>{globalProject.date}</span>
                </div>
              </div>

              {/* Title & Icon Header */}
              <div className="mt-5 flex items-start gap-4">
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border ${globalProject.iconBg}`}
                >
                  {globalProject.icon}
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground group-hover:text-purple-500 transition-colors">
                    {globalProject.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-foreground/60">
                    {globalProject.subtitle}
                  </p>
                </div>
              </div>

              {/* Bullets Grid */}
              <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {globalProject.bullets.map((bullet, bIdx) => (
                  <li
                    key={bIdx}
                    className="flex items-start gap-2.5 text-xs sm:text-sm leading-relaxed text-foreground/75"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-purple-500" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Business Impact Callout */}
              {globalProject.impact && (
                <div className="mt-5 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-3.5 text-xs sm:text-sm text-foreground/80 flex items-start gap-2.5 shadow-sm">
                  <Zap className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                      Business Impact:{" "}
                    </span>
                    {globalProject.impact}
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Tech Tags */}
            <div className="mt-6 flex flex-wrap items-center gap-2 pt-4 border-t border-foreground/8">
              {globalProject.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-lg border border-foreground/8 bg-foreground/3 px-2.5 py-1 text-xs font-medium text-foreground/70"
                >
                  {tag}
                </span>
              ))}
            </div>
          </FadeIn>

          {/* Row 2: Data-Derived Insights + HR Analytics */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {row2Projects.map((proj, idx) => (
              <FadeIn
                key={proj.title}
                delay={0.1 + idx * 0.08}
                className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-foreground/10 bg-background/90 p-6 sm:p-7 shadow-[0_4px_24px_rgb(0,0,0,0.05)] dark:shadow-[0_8px_32px_rgb(0,0,0,0.45)] backdrop-blur-md transition-all duration-300 hover:border-foreground/25 hover:shadow-[0_16px_40px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_16px_45px_rgba(0,0,0,0.75)] hover:-translate-y-1"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="rounded-full border border-foreground/10 bg-foreground/4 px-3 py-1 text-xs font-semibold text-foreground/80">
                      {proj.unit}
                    </span>
                    <div className="flex items-center gap-1 text-xs font-medium text-foreground/50">
                      <Calendar className="h-3 w-3" />
                      <span>{proj.date}</span>
                    </div>
                  </div>

                  {/* Title & Icon */}
                  <div className="mt-5 flex items-start gap-3.5">
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border ${proj.iconBg}`}
                    >
                      {proj.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold tracking-tight text-foreground group-hover:text-blue-500 transition-colors">
                        {proj.title}
                      </h3>
                      <p className="text-xs text-foreground/60">{proj.subtitle}</p>
                    </div>
                  </div>

                  {/* Bullets */}
                  <ul className="mt-5 flex flex-col gap-2.5">
                    {proj.bullets.map((bullet, bIdx) => (
                      <li
                        key={bIdx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm leading-relaxed text-foreground/75"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Business Impact Callout */}
                  {proj.impact && (
                    <div className="mt-5 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-3 text-xs leading-relaxed text-foreground/80 flex items-start gap-2 shadow-sm">
                      <Zap className="h-3.5 w-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                          Business Impact:{" "}
                        </span>
                        {proj.impact}
                      </div>
                    </div>
                  )}
                </div>

                {/* Bottom Tech Tags */}
                <div className="mt-6 flex flex-wrap items-center gap-2 pt-4 border-t border-foreground/8">
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg border border-foreground/8 bg-foreground/3 px-2 py-0.5 text-xs font-medium text-foreground/65"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Row 3: Shift Analysis + DEI Diversity Analysis */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {row3Projects.map((proj, idx) => (
              <FadeIn
                key={proj.title}
                delay={0.2 + idx * 0.08}
                className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-foreground/10 bg-background/90 p-6 sm:p-7 shadow-[0_4px_24px_rgb(0,0,0,0.05)] dark:shadow-[0_8px_32px_rgb(0,0,0,0.45)] backdrop-blur-md transition-all duration-300 hover:border-foreground/25 hover:shadow-[0_16px_40px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_16px_45px_rgba(0,0,0,0.75)] hover:-translate-y-1"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="rounded-full border border-foreground/10 bg-foreground/4 px-3 py-1 text-xs font-semibold text-foreground/80">
                      {proj.unit}
                    </span>
                    <div className="flex items-center gap-1 text-xs font-medium text-foreground/50">
                      <Calendar className="h-3 w-3" />
                      <span>{proj.date}</span>
                    </div>
                  </div>

                  {/* Title & Icon */}
                  <div className="mt-5 flex items-start gap-3.5">
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border ${proj.iconBg}`}
                    >
                      {proj.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold tracking-tight text-foreground group-hover:text-blue-500 transition-colors">
                        {proj.title}
                      </h3>
                      <p className="text-xs text-foreground/60">{proj.subtitle}</p>
                    </div>
                  </div>

                  {/* Bullets */}
                  <ul className="mt-5 flex flex-col gap-2.5">
                    {proj.bullets.map((bullet, bIdx) => (
                      <li
                        key={bIdx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm leading-relaxed text-foreground/75"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Business Impact Callout */}
                  {proj.impact && (
                    <div className="mt-5 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-3 text-xs leading-relaxed text-foreground/80 flex items-start gap-2 shadow-sm">
                      <Zap className="h-3.5 w-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                          Business Impact:{" "}
                        </span>
                        {proj.impact}
                      </div>
                    </div>
                  )}
                </div>

                {/* Bottom Tech Tags */}
                <div className="mt-6 flex flex-wrap items-center gap-2 pt-4 border-t border-foreground/8">
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg border border-foreground/8 bg-foreground/3 px-2 py-0.5 text-xs font-medium text-foreground/65"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Row 4: Personal Project (Credit Card Fraud Detection) - NO business impact */}
          <FadeIn
            delay={0.3}
            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-foreground/10 bg-background/90 p-6 sm:p-7 shadow-[0_4px_24px_rgb(0,0,0,0.05)] dark:shadow-[0_8px_32px_rgb(0,0,0,0.45)] backdrop-blur-md transition-all duration-300 hover:border-foreground/25 hover:shadow-[0_16px_40px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_16px_45px_rgba(0,0,0,0.75)] hover:-translate-y-1"
          >
            <div>
              {/* Top Bar */}
              <div className="flex items-center justify-between gap-2">
                <span className="rounded-full border border-rose-500/20 bg-rose-500/10 px-3 py-1 text-xs font-semibold text-rose-600 dark:text-rose-400">
                  {personalProject.unit}
                </span>
                <div className="flex items-center gap-1 text-xs font-medium text-foreground/50">
                  <Calendar className="h-3 w-3" />
                  <span>{personalProject.date}</span>
                </div>
              </div>

              {/* Title & Icon */}
              <div className="mt-5 flex items-start gap-3.5">
                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border ${personalProject.iconBg}`}
                >
                  {personalProject.icon}
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold tracking-tight text-foreground group-hover:text-rose-500 transition-colors">
                    {personalProject.title}
                  </h3>
                  <p className="text-xs text-foreground/60">
                    {personalProject.subtitle}
                  </p>
                </div>
              </div>

              {/* Bullets */}
              <ul className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-2.5">
                {personalProject.bullets.map((bullet, bIdx) => (
                  <li
                    key={bIdx}
                    className="flex items-start gap-2.5 text-xs sm:text-sm leading-relaxed text-foreground/75"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-rose-500" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Tech Tags */}
            <div className="mt-6 flex flex-wrap items-center gap-2 pt-4 border-t border-foreground/8">
              {personalProject.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-lg border border-foreground/8 bg-foreground/3 px-2 py-0.5 text-xs font-medium text-foreground/65"
                >
                  {tag}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
