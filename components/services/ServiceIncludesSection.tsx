import Image from "next/image";
import type {
  CapabilityCard,
  ServiceIncludesAssets,
  ServiceIncludesContent,
} from "@/components/services/servicePageTypes";
import { PageContainer } from "@/components/ui/PageContainer";
import { SectionLabel } from "@/components/ui/SectionLabel";

function CapabilityCard({
  title,
  description,
  icon,
  assets,
}: CapabilityCard & { assets: ServiceIncludesAssets }) {
  const iconSrc =
    icon === "a" ? assets.capabilityIconA : assets.capabilityIconB;

  return (
    <article className="flex min-h-[280px] flex-col justify-between rounded-2xl bg-blue-900 px-6 py-8 lg:min-h-[346px]">
      <div className="relative size-[72px] shrink-0">
        <Image
          src={iconSrc}
          alt=""
          fill
          className="object-contain"
          aria-hidden
        />
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

type ServiceIncludesSectionProps = {
  content: ServiceIncludesContent;
  cards: CapabilityCard[];
  assets: ServiceIncludesAssets;
};

export function ServiceIncludesSection({
  content,
  cards,
  assets,
}: ServiceIncludesSectionProps) {
  const remainder = cards.length % 3;
  const splitIndex = remainder === 0 ? cards.length : cards.length - remainder;
  const topRow = cards.slice(0, splitIndex);
  const bottomRow = cards.slice(splitIndex);

  return (
    <section className="bg-navy-dark py-12 lg:py-25">
      <PageContainer>
        <div className="flex flex-col gap-10 lg:gap-15">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-3">
            <div className="flex flex-col gap-3">
              <h2 className="text-[32px] font-semibold leading-[1.15] text-white lg:text-[56px] lg:leading-16">
                {content.title}
              </h2>
              <SectionLabel variant="light" dashWidth="w-[17px]">
                {content.label}
              </SectionLabel>
            </div>
            <p className="max-w-125.75 text-[15px] leading-[22.4px] text-[#f9f9f9]/80 lg:text-base">
              {content.intro}
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="grid gap-4 lg:grid-cols-3">
              {topRow.map((card) => (
                <CapabilityCard key={card.title} {...card} assets={assets} />
              ))}
            </div>
            {bottomRow.length > 0 ? (
              <div className="grid gap-4 lg:grid-cols-2">
                {bottomRow.map((card) => (
                  <CapabilityCard key={card.title} {...card} assets={assets} />
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
