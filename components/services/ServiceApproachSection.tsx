import Image from "next/image";
import { approachContent, serviceAssets } from "@/components/services/organicGrowthData";
import { PageContainer } from "@/components/ui/PageContainer";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function ServiceApproachSection() {
  return (
    <section className="bg-white py-12 lg:py-[50px] lg:pb-25">
      <PageContainer>
        <div className="flex flex-col gap-10 lg:gap-[60px]">
          <div className="flex flex-col gap-3">
            <h2 className="text-[32px] font-semibold leading-[1.18] text-blue-900 lg:text-[56px]">
              {approachContent.title}
            </h2>
            <SectionLabel className="lg:[&_span:last-child]:text-[#6a6a6a]">
              {approachContent.label}
            </SectionLabel>
          </div>

          <div className="hidden w-full lg:block">
            <div className="relative h-5 w-full">
              <Image
                src={serviceAssets.approachTimeline}
                alt=""
                fill
                className="object-contain object-left"
                aria-hidden
              />
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {approachContent.steps.map((step) => (
              <div key={step.number} className="flex flex-col gap-2.5">
                <p className="text-base font-semibold tracking-wide text-[#1660ed]">
                  {step.number}
                </p>
                <h3 className="text-xl font-semibold text-[#0a0a0a] lg:text-2xl">
                  {step.title}
                </h3>
                <p className="text-base leading-normal text-[#616670] lg:text-lg lg:leading-[1.5]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
