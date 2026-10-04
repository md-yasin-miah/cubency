"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import {
  getRevealInitial,
  getRevealTransition,
  REVEAL_VISIBLE,
  REVEAL_VIEWPORT,
  type RevealDirection,
} from "@/components/ui/revealMotion";

type RevealProps = {
  children: ReactNode;
  direction?: RevealDirection;
  trigger?: "view" | "mount";
  delay?: number;
  className?: string;
};

export function Reveal({
  children,
  direction = "up",
  trigger = "view",
  delay = 0,
  className,
}: RevealProps) {
  const reduceMotion = useReducedMotion();

  const transition = getRevealTransition(delay);
  const initial = getRevealInitial(direction);
  const wrapperClass = ["min-w-0 overflow-x-clip", className]
    .filter(Boolean)
    .join(" ");

  if (reduceMotion) {
    return <div className={wrapperClass}>{children}</div>;
  }

  if (trigger === "mount") {
    return (
      <motion.div
        className={wrapperClass}
        initial={initial}
        animate={REVEAL_VISIBLE}
        transition={transition}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={wrapperClass}
      initial={initial}
      whileInView={REVEAL_VISIBLE}
      viewport={REVEAL_VIEWPORT}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}
