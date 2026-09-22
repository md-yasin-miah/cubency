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

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const transition = getRevealTransition(delay);
  const initial = getRevealInitial(direction);

  if (trigger === "mount") {
    return (
      <motion.div
        className={className}
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
      className={className}
      initial={initial}
      whileInView={REVEAL_VISIBLE}
      viewport={REVEAL_VIEWPORT}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}
