import { expectationsContent } from "@/components/services/organicGrowthData";
import { PageContainer } from "@/components/ui/PageContainer";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function ServiceExpectationsSection() {
  const { testimonial } = expectationsContent;

  return (
    <section className="bg-white py-12 lg:py-[50px] lg:pb-25">
      <PageContainer>
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-[60px]">
          <div className="flex flex-1 flex-col gap-6 lg:gap-[30px]">
            <div className="flex flex-col gap-3">
              <h2 className="text-[32px] font-semibold leading-[1.1] text-blue-900 lg:text-[56px] lg:leading-[61.6px]">
                {expectationsContent.title}
              </h2>
              <SectionLabel className="lg:[&_span:last-child]:text-[#6a6a6a]">
                {expectationsContent.label}
              </SectionLabel>
            </div>
            <p className="max-w-[645px] text-base leading-[22.4px] text-[#010205]">
              {expectationsContent.body}
            </p>
          </div>

          <article className="flex-1 rounded-2xl border border-[#e5e5e5] bg-white p-4 lg:p-4">
            <div className="flex flex-col gap-6 lg:gap-[31px]">
              <p className="text-[48px] font-semibold leading-none text-[rgba(22,96,237,0.25)] lg:h-16 lg:text-[90px]">
                &ldquo;
              </p>
              <p className="text-lg font-medium leading-[1.45] text-[#0a0a0a] lg:text-[22px]">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="flex flex-col gap-3 lg:gap-[15px]">
                <div className="h-[3px] w-8 bg-[#1660ed]" />
                <div>
                  <p className="text-[15px] font-semibold text-[#0a0a0a] lg:text-[17px]">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-[#666b73]">{testimonial.role}</p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </PageContainer>
    </section>
  );
}
