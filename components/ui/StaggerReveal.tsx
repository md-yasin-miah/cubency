"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import {
  getRevealInitial,
  REVEAL_EASE,
  REVEAL_VISIBLE,
  REVEAL_VIEWPORT,
  STAGGER_CHILDREN_DELAY,
  STAGGER_CHILDREN_INITIAL_DELAY,
  STAGGER_ITEM_DURATION,
  type RevealDirection,
} from "@/components/ui/revealMotion";

type StaggerRevealProps = {
  children: ReactNode;
  className?: string;
};

type StaggerItemProps = {
  children: ReactNode;
  direction?: RevealDirection;
  className?: string;
};

export function StaggerReveal({ children, className }: StaggerRevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={REVEAL_VIEWPORT}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: STAGGER_CHILDREN_DELAY,
            delayChildren: STAGGER_CHILDREN_INITIAL_DELAY,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  direction = "up",
  className,
}: StaggerItemProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const initial = getRevealInitial(direction);

  return (
    <motion.div
      className={className}
      variants={{
        hidden: initial,
        visible: {
          ...REVEAL_VISIBLE,
          transition: {
            duration: STAGGER_ITEM_DURATION,
            ease: REVEAL_EASE,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
