export type RevealDirection = "left" | "right" | "up" | "down" | "fade";

export const REVEAL_EASE = [0.22, 1, 0.36, 1] as const;
export const REVEAL_DURATION = 0.85;
export const STAGGER_ITEM_DURATION = 0.7;
export const STAGGER_CHILDREN_DELAY = 0.12;
export const STAGGER_CHILDREN_INITIAL_DELAY = 0.1;
export const HORIZONTAL_OFFSET = 32;
export const VERTICAL_OFFSET = 40;

export const REVEAL_VIEWPORT = {
  once: true,
  amount: 0.2,
  margin: "0px 0px -80px 0px" as const,
};

export function getRevealOffset(direction: RevealDirection) {
  switch (direction) {
    case "left":
      return { x: -HORIZONTAL_OFFSET, y: 0 };
    case "right":
      return { x: HORIZONTAL_OFFSET, y: 0 };
    case "up":
      return { x: 0, y: VERTICAL_OFFSET };
    case "down":
      return { x: 0, y: -VERTICAL_OFFSET };
    case "fade":
    default:
      return { x: 0, y: 0 };
  }
}

export function getRevealInitial(direction: RevealDirection) {
  const offset = getRevealOffset(direction);
  return {
    opacity: 0,
    x: offset.x,
    y: offset.y,
  };
}

export const REVEAL_VISIBLE = {
  opacity: 1,
  x: 0,
  y: 0,
};

export function getRevealTransition(delay = 0, duration = REVEAL_DURATION) {
  return {
    duration,
    ease: REVEAL_EASE,
    delay,
  };
}

export function getReducedMotionRevealProps() {
  return {
    initial: false as const,
    animate: REVEAL_VISIBLE,
    whileInView: undefined,
  };
}
