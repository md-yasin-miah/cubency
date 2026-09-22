"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  AnimatePresence,
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
} from "motion/react";
import {
  ArrowUpRightIcon,
  MinusIcon,
  PlusCircleIcon,
} from "@/components/ui/icons";

type ServiceItem = {
  id: string;
  title: string;
  description: string;
  variant: "blue" | "expanded" | "gray" | "dark";
};

const services: ServiceItem[] = [
  {
    id: "organic",
    title: "Organic Growth",
    description:
      "SEO, content and channels that build sustainable traffic over time.",
    variant: "blue",
  },
  {
    id: "strategy",
    title: "Growth Strategy & Insights",
    description:
      "Audits, planning and research that show you exactly where the opportunity is.",
    variant: "expanded",
  },
  {
    id: "paid",
    title: "Paid Growth",
    description:
      "Paid search and social campaigns tuned for measurable returns.",
    variant: "gray",
  },
  {
    id: "creative",
    title: "Creative Solutions",
    description: "Creative and brand work that turns attention into action.",
    variant: "dark",
  },
];

const variantStyles: Record<ServiceItem["variant"], string> = {
  blue: "bg-blue-500 text-grey-50",
  expanded: "bg-blue-50 text-blue-900",
  gray: "bg-black-50 text-blue-900",
  dark: "bg-black-500 text-grey-50",
};

const descriptionStyles: Record<
  ServiceItem["variant"],
  { text: string; arrow: string }
> = {
  blue: { text: "text-grey-50/80", arrow: "border-grey-50/50 text-grey-50/80" },
  dark: { text: "text-grey-50/80", arrow: "border-grey-50/50 text-grey-50/80" },
  gray: { text: "text-black-300", arrow: "border-black-300 text-black-300" },
  expanded: {
    text: "text-black-300",
    arrow: "border-black-300 text-black-300",
  },
};

const SCROLL_DURATION = 18;

type ServiceCardProps = {
  service: ServiceItem;
  cardId: string;
  isHovered: boolean;
  onActivate: (cardId: string) => void;
};

function ServiceCard({
  service,
  cardId,
  isHovered,
  onActivate,
}: ServiceCardProps) {
  const isExpanded = isHovered;
  const cardClass = variantStyles[service.variant];
  const contentStyles = descriptionStyles[service.variant];

  return (
    <motion.div
      layout
      tabIndex={0}
      onMouseEnter={() => onActivate(cardId)}
      onFocus={() => onActivate(cardId)}
      aria-expanded={isHovered}
      className={`relative overflow-hidden rounded-2xl px-[30px] py-5 ${cardClass} ${
        isExpanded ? "min-h-[203px]" : ""
      }`}
      transition={{ layout: { duration: 0.3, ease: "easeOut" } }}
    >
      <div className="flex w-full items-start justify-between gap-3 text-left">
        <span className="text-[26px] font-medium leading-normal">
          {service.title}
        </span>
        <span className="shrink-0">
          {isHovered ? (
            <MinusIcon size={32} className="text-current" />
          ) : (
            <PlusCircleIcon size={32} className="text-current" />
          )}
        </span>
      </div>

      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            key="description"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="mt-4 flex flex-col gap-2.5">
              <p className={`text-base ${contentStyles.text}`}>
                {service.description}
              </p>
              <span
                className={`inline-flex size-5 items-center justify-center rounded-2xl border ${contentStyles.arrow}`}
              >
                <ArrowUpRightIcon size={12} className="text-current" />
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function ServiceMarquee() {
  const reduceMotion = useReducedMotion();
  const y = useMotionValue(0);
  const viewportRef = useRef<HTMLDivElement>(null);
  const segmentRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<ReturnType<typeof animate> | null>(null);
  const pausedRef = useRef(false);
  const [loopHeight, setLoopHeight] = useState(0);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  useEffect(() => {
    const segment = segmentRef.current;
    if (!segment) return;

    const updateHeight = () => {
      setLoopHeight(segment.offsetHeight);
    };

    updateHeight();
    const observer = new ResizeObserver(updateHeight);
    observer.observe(segment);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (hoveredId || reduceMotion || loopHeight === 0) {
      animationRef.current?.stop();
      animationRef.current = null;
      return;
    }

    pausedRef.current = false;

    const step = () => {
      if (pausedRef.current) return;

      let from = y.get();
      if (from <= -loopHeight) {
        y.set(0);
        from = 0;
      }

      const remaining = loopHeight + from;
      const duration = SCROLL_DURATION * (remaining / loopHeight);

      animationRef.current = animate(y, -loopHeight, {
        duration,
        ease: "linear",
        onComplete: () => {
          animationRef.current = null;
          if (pausedRef.current) return;
          y.set(0);
          step();
        },
      });
    };

    step();

    return () => {
      pausedRef.current = true;
      animationRef.current?.stop();
      animationRef.current = null;
    };
  }, [hoveredId, loopHeight, reduceMotion, y]);

  const handleActivate = (cardId: string) => {
    pausedRef.current = true;
    animationRef.current?.stop();
    animationRef.current = null;
    setHoveredId(cardId);
  };

  const handleViewportLeave = () => {
    setHoveredId(null);
  };

  const handleViewportBlur = (event: React.FocusEvent<HTMLDivElement>) => {
    const nextTarget = event.relatedTarget;
    if (
      nextTarget instanceof Node &&
      viewportRef.current?.contains(nextTarget)
    ) {
      return;
    }
    handleViewportLeave();
  };

  return (
    <div
      ref={viewportRef}
      className="relative h-[452px] overflow-hidden"
      onMouseLeave={handleViewportLeave}
      onBlur={handleViewportBlur}
    >
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-[108px] w-full overflow-hidden">
        <Image
          src="/images/home/hero-gradient-top.png"
          alt=""
          fill
          className="object-cover"
          aria-hidden
        />
      </div>
      <div className="pointer-events-none absolute bottom-0 left-0 z-10 h-[123px] w-full overflow-hidden">
        <Image
          src="/images/home/hero-gradient-bottom.png"
          alt=""
          fill
          className="rotate-180 object-cover"
          aria-hidden
        />
      </div>

      {reduceMotion ? (
        <div className="relative z-0 flex flex-col gap-2.5">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              cardId={service.id}
              isHovered={hoveredId === service.id}
              onActivate={handleActivate}
            />
          ))}
        </div>
      ) : (
        <motion.div
          style={{ y }}
          className="relative z-0 flex flex-col gap-2.5"
        >
          <div ref={segmentRef} className="flex flex-col gap-2.5">
            {services.map((service, index) => (
              <ServiceCard
                key={`${service.id}-${index}`}
                service={service}
                cardId={`${service.id}-${index}`}
                isHovered={hoveredId === `${service.id}-${index}`}
                onActivate={handleActivate}
              />
            ))}
          </div>
          <div aria-hidden className="flex flex-col gap-2.5">
            {services.map((service, index) => (
              <ServiceCard
                key={`${service.id}-copy-${index}`}
                service={service}
                cardId={`${service.id}-copy-${index}`}
                isHovered={hoveredId === `${service.id}-copy-${index}`}
                onActivate={handleActivate}
              />
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}
