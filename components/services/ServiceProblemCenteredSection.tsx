import type { ServiceProblemCenteredContent } from "@/components/services/servicePageTypes";
import { PageContainer } from "@/components/ui/PageContainer";
import { SectionLabel } from "@/components/ui/SectionLabel";

type ServiceProblemCenteredSectionProps = {
  content: ServiceProblemCenteredContent;
};

export function ServiceProblemCenteredSection({
  content,
}: ServiceProblemCenteredSectionProps) {
  return (
    <section className="bg-white py-12 lg:py-[50px] lg:pb-25">
      <PageContainer>
        <div className="mx-auto flex max-w-[942px] flex-col gap-6 lg:gap-[30px]">
          <div className="flex flex-col items-center gap-3">
            <SectionLabel className="justify-center lg:[&_span:last-child]:text-[#6a6a6a]">
              {content.label}
            </SectionLabel>
            <h2 className="text-center text-[32px] font-semibold leading-[1.15] text-blue-900 lg:text-[56px] lg:leading-[64px]">
              {content.title}
            </h2>
          </div>
          <div className="flex flex-col gap-3 text-center text-lg leading-normal">
            {content.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className={
                  index === 1
                    ? "text-[#d5d5d5]"
                    : "text-[#52575e]"
                }
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
