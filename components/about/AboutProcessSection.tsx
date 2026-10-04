import Image from "next/image";
import { processIntro, processSteps } from "@/components/about/aboutData";
import { PageContainer } from "@/components/ui/PageContainer";
import { SectionLabel } from "@/components/ui/SectionLabel";

function ProcessCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: string;
}) {
  return (
    <article className="flex h-auto min-h-[320px] flex-col items-center justify-between rounded-2xl border border-[#d9deed] bg-white p-6 lg:h-[372px]">
      <h3 className="w-full text-lg font-semibold text-black lg:text-xl">
        {title}
      </h3>
      <div className="relative my-4 size-[120px] shrink-0 lg:size-[142px]">
        <Image src={icon} alt="" fill className="object-contain" aria-hidden />
      </div>
      <p className="w-full text-sm leading-normal text-[#616670] lg:text-[15px] lg:leading-normal">
        {description}
      </p>
    </article>
  );
}

export function AboutProcessSection() {
  return (
    <section className="bg-white py-12 lg:py-[50px] lg:pb-25">
      <PageContainer>
        <div className="flex flex-col gap-8 lg:items-center lg:gap-[60px]">
          <div className="flex flex-col items-center gap-3 lg:hidden">
            <SectionLabel accent="blue" className="justify-center">
              How We Work
            </SectionLabel>
            <h2 className="text-center text-[26px] font-semibold leading-[1.25] text-blue-900">
              How We Work With Clients
            </h2>
            <p className="text-center text-[15px] leading-normal text-[#52575e]">
              {processIntro}
            </p>
          </div>

          <SectionLabel className="hidden justify-center lg:flex lg:[&_span:last-child]:text-grey-subtle">
            How We Work
          </SectionLabel>

          <div className="hidden w-full max-w-[1052px] items-start gap-[30px] lg:grid lg:grid-cols-[307px_395px_1fr]">
            <h2 className="text-[56px] font-semibold leading-[1.18] text-blue-900">
              How We Work With Clients
            </h2>
            <div className="flex flex-col gap-5">
              {processSteps.map((step) => (
                <ProcessCard
                  key={step.title}
                  title={step.title}
                  description={step.description}
                  icon={step.icon}
                />
              ))}
            </div>
            <p className="self-start text-center text-base leading-normal text-[#52575e]">
              {processIntro}
            </p>
          </div>

          <div className="flex flex-col gap-5 lg:hidden">
            {processSteps.map((step) => (
              <ProcessCard
                key={step.title}
                title={step.title}
                description={step.description}
                icon={step.icon}
              />
            ))}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
