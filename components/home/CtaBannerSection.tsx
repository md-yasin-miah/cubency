import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { PageContainer } from "@/components/ui/PageContainer";

export function CtaBannerSection() {
  return (
    <section className="py-16 lg:py-25">
      <PageContainer>
        <div className="relative overflow-hidden rounded-[20px]">
          <div className="relative h-[320px] lg:h-[461px]">
            <Image
              src="/images/home/cta-bg.png"
              alt=""
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[rgba(1,2,5,0.6)]" />
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
            <h2 className="max-w-[466px] text-[32px] font-medium leading-tight text-[#f9f9f9] lg:text-[42px] lg:leading-[50px]">
              Ready to talk business?
            </h2>
            <p className="mt-3.5 max-w-[452px] text-base leading-[22.4px] text-[#f9f9f9]/80">
              Tell us about your business and we&apos;ll come back with a plan,
              not a pitch.
            </p>
            <Button href="#" variant="blue" className="mt-5">
              Request a Custom Proposal
            </Button>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
