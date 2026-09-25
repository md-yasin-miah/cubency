import { processSteps } from "@/components/about/aboutData";
import { PageContainer } from "@/components/ui/PageContainer";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function AboutProcessSection() {
  return (
    <section className="bg-white py-12 lg:py-[50px] lg:pb-25">
      <PageContainer>
        <div className="flex flex-col gap-5 lg:gap-[60px]">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:gap-[30px]">
            <div className="flex flex-1 flex-col gap-3">
              <SectionLabel accent="blue" className="lg:[&_span:last-child]:text-grey-subtle">
                How We Work
              </SectionLabel>
              <h2 className="text-[26px] font-semibold leading-[1.25] text-black lg:text-[56px] lg:leading-[1.18] lg:text-blue-900">
                How We Work With Clients
              </h2>
            </div>
            <p className="flex-1 text-[15px] leading-normal text-[#616670] lg:text-base lg:leading-normal lg:text-[#52575e]">
              Four ways to work together, from a one-off strategic review to a
              fully embedded growth team. Whichever you choose, we start with
              research.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-5">
            {processSteps.map((step, index) => (
              <article
                key={step.number}
                className={`flex flex-col gap-2 py-6 lg:gap-5 lg:rounded-2xl lg:border lg:border-[#d9deed] lg:bg-blue-50 lg:p-6 lg:py-6 ${
                  index > 0 ? "border-t border-[#e5e5eb] lg:border-t lg:border-[#d9deed]" : ""
                }`}
              >
                <p className="text-2xl font-semibold text-[#1660ed] lg:text-[30px]">
                  {step.number}
                </p>
                <div className="flex flex-col gap-2 lg:gap-3">
                  <h3 className="text-lg font-semibold text-black lg:text-xl">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-normal text-[#616670] lg:text-[15px] lg:leading-normal">
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
