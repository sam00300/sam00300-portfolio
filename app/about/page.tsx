import { FadeIn } from "@/components/ui/motion-primitives";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "About",
  description: "About Vivekananda Singh.",
  path: "/about",
});

export default function AboutPage(): ReactNode {
  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <section className="mx-auto w-full max-w-160 px-6 pt-44 pb-24 sm:px-10 sm:pt-56 sm:pb-32">
        <FadeIn>
          <div className="rounded-4xl border border-foreground/5 bg-foreground/1.5 p-8 sm:p-12 dark:bg-foreground/3">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.16em] text-foreground/50">
              About
            </p>
            <h1 className="font-serif text-[2.25rem] font-medium tracking-tight text-foreground sm:text-[3rem]">
              Vivekananda Singh
            </h1>
            <p className="mt-6 max-w-[48ch] text-[17px] leading-[1.7] tracking-tight text-foreground/65 sm:text-[18px]">
              This page is being updated. More about Vivekananda&rsquo;s
              background and work will be added here.
            </p>
          </div>
        </FadeIn>
      </section>

      <div className="h-12 sm:h-16" />
    </main>
  );
}
