import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { PageContainer } from "@/components/ui/PageContainer";

export function AboutCtaSection() {
  return (
    <section className="bg-white px-4 py-8 lg:px-0 lg:py-25">
      <PageContainer>
        <div className="relative overflow-hidden rounded-md lg:rounded-[20px]">
          <div className="relative h-[274px] lg:h-[461px]">
            <Image
              src="/images/home/cta-bg.png"
              alt=""
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[rgba(1,2,5,0.6)]" />
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
            <div className="flex max-w-[377px] flex-col items-center gap-2.5 lg:gap-3.5">
              <h2 className="text-2xl font-semibold text-[#f9f9f9] lg:text-[42px] lg:font-medium lg:leading-[50.4px]">
                Don&apos;t Get Left Behind
              </h2>
              <p className="text-sm leading-normal text-[#f9f9f9]/80 lg:text-base lg:leading-[22.4px]">
                Tell us about your business and we&apos;ll come back with a
                plan, not a pitch.
              </p>
            </div>
            <div className="mt-3.5 flex flex-col items-center gap-3.5 lg:mt-5 lg:flex-row lg:gap-5">
              <Button
                href="#"
                variant="blue"
                className="h-[50px] rounded-[32px] px-2.5 text-sm font-semibold lg:rounded-full lg:px-4 lg:text-base"
              >
                Request a Custom Proposal
              </Button>
              <Button
                href="#"
                variant="outlineLight"
                className="h-[50px] rounded-[32px] font-semibold lg:rounded-full"
              >
                Get a Custom Quote
              </Button>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
