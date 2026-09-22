import Image from "next/image";
import { PageContainer } from "@/components/ui/PageContainer";
import { Reveal } from "@/components/ui/Reveal";
import { PlayIcon } from "@/components/ui/icons";

const avatars = [
  "/images/home/avatar-1.png",
  "/images/home/avatar-2.png",
  "/images/home/avatar-3.png",
  "/images/home/avatar-4.png",
];

export function AboutSection() {
  return (
    <section className="py-12 lg:py-[50px] lg:pb-25">
      <PageContainer>
        <Reveal direction="left">
          <div className="flex flex-col gap-6 lg:gap-[26px]">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:gap-8">
              <div className="flex shrink-0 items-center gap-1.5">
                <Image
                  src="/images/home/check-badge.svg"
                  alt=""
                  width={22}
                  height={22}
                  aria-hidden
                />
                <span className="text-base uppercase tracking-wide">
                  BUSINESS FIRST, ALWAYS
                </span>
              </div>
              <p className="text-[28px] font-medium leading-[1.2] text-foreground lg:max-w-[1091px] lg:text-[34px] lg:leading-10">
                Most agencies pick a channel first, then look for a reason to
                use it. That is how budgets get spent on SEO nobody needed or
                ads that send traffic nowhere.
              </p>
            </div>
            <p className="text-xl leading-[30px] text-[#747474] lg:ml-[252px] lg:max-w-[1091px] lg:text-2xl">
              As a growth-focused digital marketing company, we start with what
              you sell, who buys it and what is working today. Then we choose
              the channels that fit.
            </p>
          </div>
        </Reveal>

        <Reveal direction="right" delay={0.15}>
          <div className="relative mt-16 flex flex-col gap-6 lg:mt-[72px] lg:flex-row lg:gap-6">
            <div className="relative h-[320px] overflow-hidden rounded-[19px] lg:h-[382px] lg:w-[483px] lg:shrink-0">
              <Image
                src="/images/home/about-stats.png"
                alt="Team collaboration"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="relative flex h-full flex-col justify-between p-6">
                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-[64px] font-medium leading-none text-[#f9f9f9] lg:text-[81px]">
                      875
                    </span>
                    <span className="text-[40px] font-medium text-blue-500 lg:text-[53px]">
                      +
                    </span>
                  </div>
                  <p className="mt-2 text-lg text-[#f9f9f9] lg:text-xl">
                    Project finnish with suberbly
                  </p>
                </div>
                <div className="flex items-center">
                  {avatars.map((src, index) => (
                    <div
                      key={src}
                      className="relative -ml-3 size-10 overflow-hidden rounded-full border-2 border-[#2564eb]/20 first:ml-0 lg:size-[50px]"
                      style={{ zIndex: index + 1 }}
                    >
                      <Image src={src} alt="" fill className="object-cover" />
                    </div>
                  ))}
                  <div className="relative -ml-3 flex size-10 items-center justify-center rounded-full bg-blue-500 text-white lg:size-[50px]">
                    +
                  </div>
                </div>
              </div>
            </div>

            <div className="relative min-h-[320px] flex-1 overflow-hidden rounded-[30px] lg:min-h-[382px]">
              <Image
                src="/images/home/how-we-work.png"
                alt="How we work"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
              <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[32px] font-semibold tracking-[0.2em] text-white lg:text-[48px]">
                HOW WE WORK
              </p>
              <button
                type="button"
                aria-label="Play video"
                className="absolute bottom-6 right-6 flex size-[115px] items-center justify-center rounded-full border-8 border-[#fafafa] bg-blue-500 text-white lg:bottom-0 lg:right-0 lg:translate-x-1/4 lg:translate-y-1/4 lg:size-[163px]"
              >
                <PlayIcon size={44} />
              </button>
            </div>
          </div>
        </Reveal>
      </PageContainer>
    </section>
  );
}
