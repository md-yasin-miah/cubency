"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { animate, motion, useMotionValue, useReducedMotion } from "motion/react";
import { PageContainer } from "@/components/ui/PageContainer";

type PartnerLogo = "verse" | "exon";

const partnerLogos: PartnerLogo[] = ["verse", "exon", "verse", "verse"];

const SCROLL_DURATION = 25;

const logoMeta: Record<PartnerLogo, { src: string; alt: string }> = {
  verse: {
    src: "/images/home/partner-verse.svg",
    alt: "Verse",
  },
  exon: {
    src: "/images/home/partner-exon.svg",
    alt: "Exon",
  },
};

function PartnerLogoCard({ logo }: { logo: PartnerLogo }) {
  const { src, alt } = logoMeta[logo];

  return (
    <div className="relative h-[120px] w-[280px] shrink-0 overflow-hidden lg:h-[194px] lg:w-[330px]">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 1024px) 280px, 330px"
        className="size-full object-fill"
      />
    </div>
  );
}

type PartnerMarqueeRowProps = {
  logos: PartnerLogo[];
  direction: "rtl" | "ltr";
  className?: string;
};

function PartnerMarqueeRow({
  logos,
  direction,
  className = "",
}: PartnerMarqueeRowProps) {
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const segmentRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<ReturnType<typeof animate> | null>(null);
  const stoppedRef = useRef(false);
  const [loopWidth, setLoopWidth] = useState(0);

  useEffect(() => {
    const segment = segmentRef.current;
    if (!segment) return;

    const updateWidth = () => {
      setLoopWidth(segment.offsetWidth);
    };

    updateWidth();
    const observer = new ResizeObserver(updateWidth);
    observer.observe(segment);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (reduceMotion || loopWidth === 0) {
      animationRef.current?.stop();
      animationRef.current = null;
      return;
    }

    stoppedRef.current = false;

    if (direction === "ltr") {
      x.set(-loopWidth);
    } else {
      x.set(0);
    }

    const step = () => {
      if (stoppedRef.current) return;

      if (direction === "rtl") {
        let from = x.get();
        if (from <= -loopWidth) {
          x.set(0);
          from = 0;
        }

        const remaining = loopWidth + from;
        const duration = SCROLL_DURATION * (remaining / loopWidth);

        animationRef.current = animate(x, -loopWidth, {
          duration,
          ease: "linear",
          onComplete: () => {
            animationRef.current = null;
            if (stoppedRef.current) return;
            x.set(0);
            step();
          },
        });
        return;
      }

      let from = x.get();
      if (from >= 0) {
        x.set(-loopWidth);
        from = -loopWidth;
      }

      const remaining = -from;
      const duration = SCROLL_DURATION * (remaining / loopWidth);

      animationRef.current = animate(x, 0, {
        duration,
        ease: "linear",
        onComplete: () => {
          animationRef.current = null;
          if (stoppedRef.current) return;
          x.set(-loopWidth);
          step();
        },
      });
    };

    step();

    return () => {
      stoppedRef.current = true;
      animationRef.current?.stop();
      animationRef.current = null;
    };
  }, [direction, loopWidth, reduceMotion, x]);

  const renderLogos = (prefix: string) =>
    logos.map((logo, index) => (
      <PartnerLogoCard key={`${prefix}-${logo}-${index}`} logo={logo} />
    ));

  return (
    <div className={`w-full overflow-hidden ${className}`}>
      {reduceMotion ? (
        <div className="flex w-max gap-5">
          {renderLogos("static-a")}
          {renderLogos("static-b")}
        </div>
      ) : (
        <motion.div style={{ x }} className="flex w-max gap-5">
          <div ref={segmentRef} className="flex gap-5">
            {renderLogos("segment-a")}
          </div>
          <div aria-hidden className="flex gap-5">
            {renderLogos("segment-b")}
          </div>
        </motion.div>
      )}
    </div>
  );
}

export function TrustedPartnersSection() {
  return (
    <section className="py-16 lg:py-25">
      <PageContainer>
        <div className="flex items-center gap-1.5">
          <span className="h-px w-[58px] shrink-0 bg-[#454545]" />
          <span className="text-[24px] leading-[27px] tracking-[-0.72px] text-grey-subtle">
            TRUSTED BY GROWING BUSINESSES
          </span>
        </div>
      </PageContainer>

      <div className="mt-10 flex flex-col gap-5">
        <PartnerMarqueeRow
          logos={partnerLogos}
          direction="rtl"
          className="pl-[50px]"
        />
        <PartnerMarqueeRow
          logos={partnerLogos}
          direction="ltr"
          className="pr-[50px]"
        />
      </div>
    </section>
  );
}
