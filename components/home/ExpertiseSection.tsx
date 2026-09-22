"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";
import { PageContainer } from "@/components/ui/PageContainer";
import { REVEAL_EASE } from "@/components/ui/revealMotion";
import { ArrowUpRightIcon } from "@/components/ui/icons";

const services = [
  "Growth Strategy & Insights",
  "Organic Growth",
  "Paid Growth",
  "Creative Solutions",
  "Digital Experience & Web Solutions",
];

const HOVER_TRANSITION = { duration: 0.5, ease: REVEAL_EASE };
const CURSOR_SIZE = 83;
const CURSOR_OFFSET = CURSOR_SIZE / 2;

export function ExpertiseSection() {
  const listRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isListHovered, setIsListHovered] = useState(false);
  const reduceMotion = useReducedMotion();

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const springX = useSpring(cursorX, {
    stiffness: 180,
    damping: 22,
    mass: 0.6,
  });
  const springY = useSpring(cursorY, {
    stiffness: 180,
    damping: 22,
    mass: 0.6,
  });

  const handleListMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (reduceMotion) return;

    const rect = listRef.current?.getBoundingClientRect();
    if (!rect) return;

    cursorX.set(event.clientX - rect.left - CURSOR_OFFSET);
    cursorY.set(event.clientY - rect.top - CURSOR_OFFSET);
  };

  return (
    <section className="bg-black-500 py-16 lg:py-25">
      <PageContainer>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-30">
          <div className="flex shrink-0 items-center gap-1.5">
            <Image
              src="/images/home/check-badge.svg"
              alt=""
              width={22}
              height={22}
              className="invert"
              aria-hidden
            />
            <span className="text-base text-[#f9f9f9]">Our Expertise</span>
          </div>
          <div className="flex flex-1 flex-col gap-6 lg:flex-row lg:gap-17.75">
            <h2 className="max-w-167.25 text-[32px] font-semibold leading-tight text-[#f9f9f9] lg:text-[42px] lg:leading-12.5">
              Five ways we help you grow
            </h2>
            <p className="max-w-84 text-base leading-[22.4px] text-[#f9f9f9]/80">
              Pick one service or combine a few. We&apos;ll tell you honestly
              which ones you need.
            </p>
          </div>
        </div>

        <div
          ref={listRef}
          className="relative mx-auto mt-16 max-w-281.5 lg:mt-25 lg:cursor-none"
          onMouseEnter={() => setIsListHovered(true)}
          onMouseLeave={() => setIsListHovered(false)}
          onMouseMove={handleListMouseMove}
        >
          {!reduceMotion && (
            <motion.div
              aria-hidden
              className="pointer-events-none absolute left-0 top-0 z-10 hidden size-20 items-center justify-center rounded-full bg-blue-500 lg:flex"
              style={{ x: springX, y: springY }}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{
                opacity: isListHovered ? 1 : 0,
                scale: isListHovered ? 1 : 0.85,
              }}
              transition={HOVER_TRANSITION}
            >
              <ArrowUpRightIcon size={36} className="text-white" />
            </motion.div>
          )}

          {services.map((service, index) => {
            const isActive = activeIndex === index;

            return (
              <motion.div
                key={service}
                layout={!reduceMotion}
                className="relative flex items-center border-b border-border-muted py-6 first:border-t lg:h-48 lg:py-2.5"
                animate={{
                  backgroundColor: isActive
                    ? "rgba(255, 255, 255, 0.05)"
                    : "rgba(255, 255, 255, 0)",
                }}
                transition={HOVER_TRANSITION}
                onMouseEnter={() => setActiveIndex(index)}
              >
                <div className="flex items-center gap-8 overflow-hidden px-7.5">
                  <AnimatePresence mode="popLayout" initial={false}>
                    {isActive && (
                      <motion.div
                        key="thumbnail"
                        initial={{ opacity: 0, width: 0, scale: 0.92 }}
                        animate={{ opacity: 1, width: 148, scale: 1 }}
                        exit={{ opacity: 0, width: 0, scale: 0.92 }}
                        transition={HOVER_TRANSITION}
                        className="relative hidden h-35.5 shrink-0 overflow-hidden rounded-2.5 lg:block"
                      >
                        <Image
                          src="/images/home/service-thumb.png"
                          alt=""
                          fill
                          className="object-cover"
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <motion.h3
                    className="text-[32px] font-medium leading-tight lg:text-[64px] lg:leading-[76.8px]"
                    animate={{
                      color: isActive ? "#f9f9f9" : "rgba(249, 249, 249, 0.8)",
                    }}
                    transition={HOVER_TRANSITION}
                  >
                    {service}
                  </motion.h3>
                </div>
              </motion.div>
            );
          })}
        </div>
      </PageContainer>
    </section>
  );
}
