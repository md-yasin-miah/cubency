import Image from "next/image";
import type { ServiceResearchContent } from "@/components/services/servicePageTypes";
import { PageContainer } from "@/components/ui/PageContainer";
import { SectionLabel } from "@/components/ui/SectionLabel";

type ServiceResearchSectionProps = {
  content: ServiceResearchContent;
};

export function ServiceResearchSection({
  content,
}: ServiceResearchSectionProps) {
  return (
    <section className="bg-white py-12 lg:py-[50px]">
      <PageContainer>
        <div className="grid gap-10 lg:grid-cols-[1fr_minmax(0,556px)_1fr] lg:items-center lg:gap-[50px]">
          <div className="flex flex-col gap-3 lg:items-end lg:self-end">
            <p className="text-center text-base leading-[22.4px] text-[#353535] lg:text-left">
              {content.leftBody}
            </p>
            <div className="relative mt-3 h-[280px] w-full overflow-hidden rounded-2xl lg:h-[320px]">
              <Image
                src={content.leftImageSrc}
                alt=""
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>
          </div>

          <div className="flex flex-col items-center gap-3 text-center">
            <SectionLabel className="justify-center lg:[&_span:last-child]:text-[#454545]">
              {content.label}
            </SectionLabel>
            <h2 className="text-[32px] font-semibold leading-tight text-blue-900 lg:text-[56px] lg:leading-[64px]">
              {content.title}
            </h2>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-center text-base leading-[22.4px] text-[#353535] lg:text-left">
              {content.rightBody}
            </p>
            <div className="relative mt-3 h-[240px] w-full overflow-hidden rounded-2xl lg:h-[304px]">
              <Image
                src={content.rightImageSrc}
                alt=""
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
