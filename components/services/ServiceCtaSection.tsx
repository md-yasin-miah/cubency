import Image from "next/image";
import { ctaContent, serviceAssets } from "@/components/services/organicGrowthData";
import { Button } from "@/components/ui/Button";
import { PageContainer } from "@/components/ui/PageContainer";

export function ServiceCtaSection() {
  return (
    <section className="bg-white px-4 py-8 lg:px-0 lg:py-25">
      <PageContainer>
        <div className="relative overflow-hidden rounded-[20px]">
          <div className="relative h-[320px] lg:h-[461px]">
            <Image
              src={serviceAssets.ctaBg}
              alt=""
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-[rgba(1,2,5,0.6)]" />
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
            <div className="flex max-w-[468px] flex-col items-center gap-3.5">
              <h2 className="text-2xl font-medium text-[#f9f9f9] lg:text-[42px] lg:leading-[50.4px]">
                {ctaContent.title}
              </h2>
              <p className="max-w-[377px] text-sm leading-normal text-[#f9f9f9]/80 lg:text-base lg:leading-[22.4px]">
                {ctaContent.body}
              </p>
            </div>
            <div className="mt-5 flex flex-col items-center gap-3.5 lg:flex-row lg:gap-5">
              <Button
                href="#"
                variant="blue"
                className="h-[50px] rounded-full px-4 font-semibold"
              >
                {ctaContent.primaryCta}
              </Button>
              <Button
                href="#"
                variant="outlineLight"
                className="h-[50px] rounded-full font-semibold"
              >
                {ctaContent.secondaryCta}
              </Button>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
