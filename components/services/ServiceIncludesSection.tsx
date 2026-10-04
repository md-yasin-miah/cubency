import Image from "next/image";
import {
  capabilityCards,
  includesContent,
  serviceAssets,
} from "@/components/services/organicGrowthData";
import { PageContainer } from "@/components/ui/PageContainer";
import { SectionLabel } from "@/components/ui/SectionLabel";

function CapabilityCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: "a" | "b";
}) {
  const iconSrc =
    icon === "a" ? serviceAssets.capabilityIconA : serviceAssets.capabilityIconB;

  return (
    <article className="flex min-h-[280px] flex-col justify-between rounded-2xl bg-blue-900 px-6 py-8 lg:min-h-[346px]">
      <div className="relative size-[72px] shrink-0">
        <Image src={iconSrc} alt="" fill className="object-contain" aria-hidden />
      </div>
      <div className="mt-8 flex flex-col gap-3.5">
        <h3 className="text-xl font-medium text-[#e6eaed] lg:text-[26px] lg:leading-8">
          {title}
        </h3>
        <p className="text-base leading-6 text-blue-100">{description}</p>
      </div>
    </article>
  );
}

export function ServiceIncludesSection() {
  const topRow = capabilityCards.slice(0, 3);
  const bottomRow = capabilityCards.slice(3);

  return (
    <section className="bg-[#061330] py-12 lg:py-25">
      <PageContainer>
        <div className="flex flex-col gap-10 lg:gap-[60px]">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-3">
            <div className="flex flex-col gap-3">
              <h2 className="text-[32px] font-semibold leading-[1.15] text-white lg:text-[56px] lg:leading-[64px]">
                {includesContent.title}
              </h2>
              <SectionLabel variant="light" dashWidth="w-[17px]">
                {includesContent.label}
              </SectionLabel>
            </div>
            <p className="max-w-[503px] text-[15px] leading-[22.4px] text-[#f9f9f9]/80 lg:text-base">
              {includesContent.intro}
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="grid gap-4 lg:grid-cols-3">
              {topRow.map((card) => (
                <CapabilityCard key={card.title} {...card} />
              ))}
            </div>
            <div className="grid gap-4 lg:grid-cols-2">
              {bottomRow.map((card) => (
                <CapabilityCard key={card.title} {...card} />
              ))}
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
