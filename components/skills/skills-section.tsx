"use client";

import type { ReactNode } from "react";
import { FadeIn } from "@/components/ui/motion-primitives";
import { BarChart2, Bot, Layers, Check } from "lucide-react";

type SkillCategory = {
  title: string;
  icon: ReactNode;
  description: string;
  skills: string[];
};

export function SkillsSection(): ReactNode {
  const categories: SkillCategory[] = [
    {
      title: "Data Analytics & BI",
      icon: <BarChart2 className="h-6 w-6 text-blue-500" />,
      description: "Extracting actionable clarity from messy enterprise datasets.",
      skills: [
        "Power BI (Desktop & Service)",
        "Advanced Microsoft Excel",
        "DAX & Power Query (M)",
        "Data Modeling & Relationships",
        "SQL Querying & ETL",
        "Executive Dashboard Storytelling",
      ],
    },
    {
      title: "Automation & AI Adoption",
      icon: <Bot className="h-6 w-6 text-amber-500" />,
      description: "Modernizing workflows with generative AI and automated systems.",
      skills: [
        "Microsoft Copilot Studio",
        "Power Automate Workflows",
        "AI Prompts & Custom GPT Agents",
        "SharePoint & Office 365 Automation",
        "Business Process Optimization",
        "Self-Service Analytics Enablement",
      ],
    },
    {
      title: "Project & Process Coordination",
      icon: <Layers className="h-6 w-6 text-emerald-500" />,
      description: "Aligning multi-disciplinary stakeholders to hit strategic milestones.",
      skills: [
        "Cross-Functional Coordination",
        "Stakeholder Management",
        "Business Requirement Gathering",
        "Milestone & Timeline Tracking",
        "Agile / Sprint Execution",
        "Root Cause Analysis & SOPs",
      ],
    },
  ];

  return (
    <section id="skills" className="relative w-full py-20 sm:py-28 bg-foreground/[0.015]">
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-10">
        <FadeIn className="flex flex-col items-center text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-foreground/50">
            Capabilities &amp; Tools
          </span>
          <h2 className="mt-2 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Core Competencies
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground/70 sm:text-lg">
            A balanced toolkit combining analytical precision, process automation, and empathetic cross-team coordination.
          </p>
        </FadeIn>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {categories.map((cat, idx) => (
            <FadeIn
              key={cat.title}
              delay={idx * 0.1}
              className="flex flex-col rounded-3xl border border-foreground/10 bg-background/90 p-6 sm:p-8 shadow-[0_4px_20px_rgb(0,0,0,0.05)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.45)] backdrop-blur-md transition-all duration-300 hover:border-foreground/25 hover:shadow-[0_16px_36px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_16px_45px_rgba(0,0,0,0.7)] hover:-translate-y-1"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-foreground/8 bg-foreground/3">
                {cat.icon}
              </div>

              <h3 className="text-xl font-bold text-foreground">
                {cat.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-foreground/60">
                {cat.description}
              </p>

              <ul className="mt-6 flex flex-col gap-3">
                {cat.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2.5 text-sm font-medium text-foreground/80"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-foreground/5 text-foreground/70">
                      <Check className="h-3 w-3" />
                    </span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
