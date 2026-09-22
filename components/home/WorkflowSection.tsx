"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useReducedMotion } from "motion/react";
import { PageContainer } from "@/components/ui/PageContainer";
import { StaggerItem, StaggerReveal } from "@/components/ui/StaggerReveal";

type Step = {
  number: number;
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    number: 1,
    title: "Assess",
    description: "A short conversation or your Growth Readiness Assessment.",
  },
  {
    number: 2,
    title: "Research",
    description: "We study your business, market and existing data.",
  },
  {
    number: 3,
    title: "Discover",
    description: "We clarify your goals, constraints and priorities together.",
  },
  {
    number: 4,
    title: "Recommend",
    description: "We study your business, market and existing data.",
  },
  {
    number: 5,
    title: "Execute",
    description: "We deliver the agreed work, on the agreed scope.",
  },
  {
    number: 6,
    title: "Optimise & Scale",
    description: "We measure results and expand only where it makes sense.",
  },
];

const workflowRows: [Step, Step][] = [
  [steps[0], steps[1]],
  [steps[2], steps[3]],
  [steps[4], steps[5]],
];

const ACTIVE_INTERVAL_MS = 1000;

type StepCardProps = Step & {
  active?: boolean;
};

function StepCard({ number, title, description, active = false }: StepCardProps) {
  return (
    <div
      className={`flex w-full items-center gap-2.5 overflow-hidden rounded-[20px] transition-colors duration-500 ${
        active ? "bg-blue-50" : "bg-[#f1f1f5]"
      }`}
    >
      <div
        className={`h-40 w-10 shrink-0 self-stretch rounded-bl-[20px] rounded-tl-[20px] transition-colors duration-500 ${
          active ? "bg-blue-900" : "bg-[#d9d8dc]"
        }`}
      />
      <div className="flex min-w-0 flex-1 flex-col gap-3 py-2.5 pr-4">
        <div className="flex items-center gap-[13px]">
          <div
            className={`flex size-10 shrink-0 items-center justify-center rounded-md p-2.5 text-xl font-semibold transition-colors duration-500 ${
              active ? "bg-blue-500 text-white" : "bg-[#d9d8dc] text-[#646466]"
            }`}
          >
            {number}
          </div>
          <p className="text-lg font-semibold leading-normal text-[#0a0a0a]">
            {title}
          </p>
        </div>
        <p
          className={`max-w-[220px] text-[13px] leading-normal transition-colors duration-500 ${
            active ? "text-[#595e66]" : "text-[#646466]"
          }`}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

function HorizontalConnector() {
  return (
    <Image
      src="/images/home/connector-h.svg"
      alt=""
      width={48}
      height={100}
      aria-hidden
      className="pointer-events-none absolute top-20 left-[290px] hidden lg:block"
    />
  );
}

export function WorkflowSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % steps.length);
    }, ACTIVE_INTERVAL_MS);

    return () => window.clearInterval(interval);
  }, [reduceMotion]);

  return (
    <section className="py-16 lg:py-25">
      <PageContainer>
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-center lg:gap-[60px]">
          <div className="flex max-w-[520px] flex-col gap-3 text-left">
            <h2 className="text-[40px] font-semibold leading-[1.1] tracking-tight text-black lg:text-[56px] lg:leading-[61.6px]">
              How we work
            </h2>
            <p className="text-base leading-6 text-grey-subtle">
              A calm, side-by-side comparison, not a swipe at anyone else in the
              market.
            </p>
          </div>

          <StaggerReveal className="relative flex w-full max-w-[628px] flex-col gap-5">
            {workflowRows.map(([leftStep, rightStep], rowIndex) => (
              <StaggerItem key={leftStep.number} direction="up">
                <div className="relative flex flex-col gap-5 lg:flex-row lg:gap-12">
                  <div className="w-full lg:w-[290px]">
                    <StepCard
                      {...leftStep}
                      active={leftStep.number <= activeIndex + 1}
                    />
                  </div>

                  <div className="lg:flex lg:h-[251px] lg:w-[290px] lg:flex-col lg:justify-end lg:pt-[90px]">
                    <StepCard
                      {...rightStep}
                      active={rightStep.number <= activeIndex + 1}
                    />
                  </div>

                  <HorizontalConnector />

                  {rowIndex === 0 && (
                    <div
                      aria-hidden
                      className="pointer-events-none absolute top-[251px] left-[139px] hidden h-5 w-[371px] items-center justify-center lg:flex"
                    >
                      <div className="rotate-90">
                        <Image
                          src="/images/home/connector-v.svg"
                          alt=""
                          width={20}
                          height={373}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </StaggerItem>
            ))}

            <div
              aria-hidden
              className="pointer-events-none absolute top-[522px] left-[149px] hidden h-5 w-[348px] items-center justify-center lg:flex"
            >
              <div className="rotate-90">
                <Image
                  src="/images/home/connector-v2.svg"
                  alt=""
                  width={20}
                  height={350}
                />
              </div>
            </div>
          </StaggerReveal>
        </div>
      </PageContainer>
    </section>
  );
}
