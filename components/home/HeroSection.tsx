import { Button } from "@/components/ui/Button";
import { PageContainer } from "@/components/ui/PageContainer";
import { Reveal } from "@/components/ui/Reveal";
import { ServiceMarquee } from "@/components/home/ServiceMarquee";

export function HeroSection() {
  return (
    <section className="pt-12.5 pb-25">
      <PageContainer>
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-[50px]">
          <Reveal
            trigger="mount"
            direction="left"
            delay={0.15}
            className="flex w-full flex-col gap-5 lg:max-w-[645px]"
          >
            <h1 className="text-[40px] font-bold leading-[1.05] text-blue-900 sm:text-[56px] lg:text-[60px] lg:leading-[60px]">
              Marketing built around your business,{" "}
              <span className="font-serif text-[48px] italic text-blue-500 sm:text-[60px] lg:text-[70px] lg:leading-[70px]">
                not a template
              </span>
            </h1>
            <p className="max-w-xl text-base leading-[22.4px] text-grey-muted">
              Choose success with our digital marketing agency, dedicated to
              delivering higher ROI that propels your business to new heights.
            </p>
            <div className="flex flex-wrap items-center gap-5">
              <Button href="#" variant="primary" className="h-13 px-4">
                Request a Custom Proposal
              </Button>
              <Button href="#" variant="secondary" showArrow>
                Take the Growth Readiness Assessment
              </Button>
            </div>
          </Reveal>

          <Reveal
            trigger="mount"
            direction="right"
            delay={0.3}
            className="relative w-full lg:max-w-[645px]"
          >
            <ServiceMarquee />
          </Reveal>
        </div>
      </PageContainer>
    </section>
  );
}
