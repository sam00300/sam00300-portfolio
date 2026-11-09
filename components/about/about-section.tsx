"use client";

import type { ReactNode } from "react";
import { FadeIn } from "@/components/ui/motion-primitives";
import {
  BarChart3,
  Briefcase,
  Database,
  PieChart,
  Search,
  Sparkles,
  CheckCircle2,
  GraduationCap,
} from "lucide-react";

type ServiceTile = {
  title: string;
  description: string;
  icon: ReactNode;
  accent: string;
};

export function AboutSection(): ReactNode {
  const serviceTiles: ServiceTile[] = [
    {
      title: "Data Analytics",
      description: "Transforming complex data into actionable insights",
      icon: <BarChart3 className="h-5 w-5 text-blue-500" />,
      accent: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    },
    {
      title: "Database Management",
      description: "Reliable database management for meaningful data insights",
      icon: <Database className="h-5 w-5 text-emerald-500" />,
      accent: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
    },
    {
      title: "Exploratory Data Analysis",
      description: "Uncovering trends and patterns to drive business decisions",
      icon: <Search className="h-5 w-5 text-purple-500" />,
      accent: "bg-purple-500/10 text-purple-500 border-purple-500/20",
    },
    {
      title: "Data Visualization",
      description: "Creating compelling visual stories from data",
      icon: <PieChart className="h-5 w-5 text-amber-500" />,
      accent: "bg-amber-500/10 text-amber-500 border-amber-500/20",
    },
    {
      title: "Project Coordination",
      description: "Aligning cross-functional teams and turning business needs into seamless delivery",
      icon: <Briefcase className="h-5 w-5 text-indigo-500" />,
      accent: "bg-indigo-500/10 text-indigo-500 border-indigo-500/20",
    },
  ];

  return (
    <section id="about" className="relative w-full py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-10">
        <FadeIn className="flex flex-col items-center text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-foreground/50">
            About Me
          </span>
          <h2 className="mt-2 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Passionate About Data &amp; Purpose-Driven Solutions
          </h2>
          <p className="mt-3 max-w-2xl text-base text-foreground/70 sm:text-lg">
            Empowering organizations through analytical rigor, process automation, and collaborative project leadership.
          </p>
        </FadeIn>

        {/* 2-Column Layout */}
        <div className="mt-14 grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          {/* Left Side: Big Comprehensive Info Tile */}
          <FadeIn className="flex flex-col justify-between rounded-3xl border border-foreground/10 bg-background/90 p-7 sm:p-9 shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-[0_12px_40px_rgb(0,0,0,0.55)] backdrop-blur-md lg:col-span-7">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-foreground/3 px-3 py-1 text-xs font-medium text-foreground/70">
                <Sparkles className="h-3.5 w-3.5 text-amber-500" />
                <span>Background &amp; Journey</span>
              </div>

              {/* Heading without name or blue subtitle */}
              <h3 className="mt-4 font-serif text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Bridging Business Needs with Actionable Technology
              </h3>

              {/* Detailed Info */}
              <div className="mt-6 flex flex-col gap-4 text-sm leading-relaxed text-foreground/75 sm:text-base">
                <p>
                  As a Data Analyst and Project Coordinator at{" "}
                  <strong className="font-semibold text-foreground">
                    Sun Pharma
                  </strong>
                  , I specialize in bridging the gap between intricate business
                  requirements and practical, high-impact technology solutions. My day-to-day
                  involves architecting intuitive Power BI dashboards, spearheading
                  enterprise AI adoption with Microsoft Copilot Studio, and automating
                  repetitive manual workflows with Power Automate.
                </p>
                <p>
                  I thrive in cross-functional environments where teamwork and clear communication
                  turn complex datasets into actionable strategy. Whether analyzing multi-variable
                  trends, streamlining departmental reporting pipelines, or coordinating project
                  schedules to hit critical milestones, my mission is to deliver clarity, efficiency,
                  and tangible value.
                </p>
              </div>

              {/* Education Section - Horizontal Tiles */}
              <div className="mt-7 border-t border-foreground/8 pt-5">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground/50 mb-3 flex items-center gap-1.5">
                  <GraduationCap className="h-4 w-4 text-blue-500" />
                  <span>Education &amp; Academic Background</span>
                </h4>
                <div className="flex flex-col gap-2.5">
                  {/* B.Tech */}
                  <div className="group flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 rounded-2xl border border-foreground/10 bg-foreground/5 p-4 transition-all duration-300 hover:bg-foreground/10">
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-foreground">
                        B.Tech Computer Science with Big Data Analytics
                      </div>
                      <div className="text-[11px] sm:text-xs text-foreground/60">
                        Parul University, Vadodara, Gujarat &bull; 2021 – 2025
                      </div>
                    </div>
                    <span className="shrink-0 rounded-full border border-blue-500/25 bg-blue-500/10 px-2.5 py-0.5 text-[11px] font-semibold text-blue-600 dark:text-blue-400 self-start sm:self-auto">
                      CGPA: 7.01
                    </span>
                  </div>     
                  </div>
          </FadeIn>

          {/* Right Side: What I Bring to the Table & Horizontal Tiles */}
          <div className="flex flex-col gap-4 lg:col-span-5">
            <FadeIn className="mb-1">
              <div className="inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-foreground/3 px-3 py-1 text-xs font-medium text-foreground/70">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                <span>Core Competencies</span>
              </div>
              <h3 className="mt-3 font-serif text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                What I Bring to the Table
              </h3>
            </FadeIn>

            <div className="flex flex-col gap-3.5">
              {serviceTiles.map((tile, idx) => (
                <FadeIn
                  key={tile.title}
                  delay={idx * 0.08}
                  className="group relative flex items-center gap-4 rounded-2xl border border-foreground/10 bg-background/90 p-4 sm:p-5 shadow-[0_4px_16px_rgb(0,0,0,0.04)] dark:shadow-[0_6px_20px_rgb(0,0,0,0.35)] backdrop-blur-sm transition-all duration-300 hover:border-foreground/25 hover:bg-foreground/4 hover:shadow-[0_12px_28px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_12px_32px_rgba(0,0,0,0.6)] hover:translate-x-1"
                >
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border ${tile.accent} transition-transform duration-300 group-hover:scale-105`}
                  >
                    {tile.icon}
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-base font-semibold text-foreground group-hover:text-blue-500 transition-colors">
                      {tile.title}
                    </h4>
                    <p className="mt-0.5 text-xs sm:text-sm text-foreground/65 leading-snug">
                      {tile.description}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>

        {/* Philosophy Quote at bottom center of About section */}
        <FadeIn delay={0.2} className="mt-12 flex justify-center">
          <div className="relative max-w-3xl rounded-2xl border border-foreground/10 bg-background/80 px-6 py-4 sm:px-10 sm:py-5 text-center text-xs sm:text-sm md:text-base italic text-foreground/75 shadow-sm backdrop-blur-sm">
            <span className="font-serif text-base sm:text-lg text-blue-500 font-normal mr-1">&ldquo;</span>
            The real value of data analytics lies not just in the numbers, but in turning them into simple, everyday decisions that move teams forward.
            <span className="font-serif text-base sm:text-lg text-blue-500 font-normal ml-1">&rdquo;</span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
