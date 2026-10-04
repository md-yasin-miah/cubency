import Image from "next/image";
import type { ServiceAiAnswersContent } from "@/components/services/servicePageTypes";
import { PageContainer } from "@/components/ui/PageContainer";
import { SectionLabel } from "@/components/ui/SectionLabel";

type ServiceAiAnswersSectionProps = {
  content: ServiceAiAnswersContent;
};

export function ServiceAiAnswersSection({
  content,
}: ServiceAiAnswersSectionProps) {
  const { expandedStep, compactSteps } = content;

  return (
    <section className="bg-white py-12 lg:py-25">
      <PageContainer>
        <div className="flex flex-col gap-10 lg:gap-[60px]">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:gap-[30px]">
            <div className="flex flex-1 flex-col gap-3">
              <SectionLabel className="lg:[&_span:last-child]:text-[#6a6a6a]">
                {content.label}
              </SectionLabel>
              <h2 className="text-[32px] font-semibold leading-[1.18] text-blue-900 lg:text-[56px]">
                {content.title}
              </h2>
            </div>
            <p className="max-w-none flex-1 text-base leading-normal text-[#52575e] lg:text-base lg:leading-[1.5]">
              {content.intro}
            </p>
          </div>

          <div className="flex flex-col gap-5">
            <article className="flex flex-col gap-6 rounded-2xl border border-[#d9deed] bg-[#e9f0fd] p-6 lg:h-[334px] lg:flex-row lg:items-center lg:gap-[72px]">
              <div className="flex h-full flex-col justify-between lg:w-[530px]">
                <p className="text-[30px] font-semibold text-[#1660ed]">
                  {expandedStep.number}
                </p>
                <div className="flex flex-col gap-3">
                  <h3 className="text-2xl font-semibold text-[#353535] lg:text-[30px]">
                    {expandedStep.title}
                  </h3>
                  <p className="text-[15px] leading-normal text-[#616670]">
                    {expandedStep.description}
                  </p>
                </div>
              </div>
              <div className="relative min-h-[200px] flex-1 overflow-hidden rounded-2xl lg:h-[304px]">
                <Image
                  src={expandedStep.imageSrc}
                  alt=""
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>
            </article>

            {compactSteps.map((step) => (
              <article
                key={step.number}
                className="flex flex-col gap-4 rounded-2xl border border-[#d9deed] bg-[#e9f0fd] p-6 lg:h-[122px] lg:flex-row lg:items-center lg:gap-[72px]"
              >
                <p className="shrink-0 text-[30px] font-semibold text-[#1660ed]">
                  {step.number}
                </p>
                <div className="flex flex-1 flex-col gap-3 lg:flex-row lg:items-center lg:gap-3">
                  <h3 className="flex-1 text-xl font-semibold text-[#353535] lg:text-[30px]">
                    {step.title}
                  </h3>
                  <p className="flex-1 text-[15px] leading-normal text-[#616670]">
                    {step.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
