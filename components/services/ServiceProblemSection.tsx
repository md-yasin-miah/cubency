import Image from "next/image";
import type { ServiceProblemSplitContent } from "@/components/services/servicePageTypes";
import { PageContainer } from "@/components/ui/PageContainer";
import { SectionLabel } from "@/components/ui/SectionLabel";

type ServiceProblemSectionProps = {
  content: ServiceProblemSplitContent;
};

export function ServiceProblemSection({ content }: ServiceProblemSectionProps) {
  return (
    <section className="bg-white py-12 lg:py-[50px] lg:pb-25">
      <PageContainer>
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-[60px]">
          <div className="flex flex-1 flex-col gap-6 lg:gap-[30px]">
            <div className="flex flex-col gap-3">
              <h2 className="text-[32px] font-semibold leading-[1.15] text-blue-900 lg:text-[56px] lg:leading-[64px]">
                {content.title}
              </h2>
              <SectionLabel className="lg:[&_span:last-child]:text-[#6a6a6a]">
                {content.label}
              </SectionLabel>
            </div>
            <p className="text-[15px] leading-normal text-[#52575e] lg:text-base lg:leading-[1.5]">
              {content.body}
            </p>
          </div>
          <div className="relative h-[280px] flex-1 overflow-hidden rounded-2xl lg:h-[476px]">
            <Image
              src={content.imageSrc}
              alt={content.imageAlt ?? ""}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
