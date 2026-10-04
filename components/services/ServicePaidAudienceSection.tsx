import Image from "next/image";
import type { ServicePaidAudienceContent } from "@/components/services/servicePageTypes";
import { PageContainer } from "@/components/ui/PageContainer";
import { SectionLabel } from "@/components/ui/SectionLabel";

type ServicePaidAudienceSectionProps = {
  content: ServicePaidAudienceContent;
};

export function ServicePaidAudienceSection({
  content,
}: ServicePaidAudienceSectionProps) {
  const { ecommerce, b2b } = content;

  return (
    <section className="bg-white py-12 lg:py-25">
      <PageContainer>
        <div className="flex flex-col gap-8 lg:gap-8">
          <SectionLabel
            dashWidth="w-[17px]"
            className="[&_span:last-child]:text-[#6a6a6a] [&_span:last-child]:text-2xl [&_span:last-child]:font-medium"
          >
            {content.label}
          </SectionLabel>

          <div className="flex flex-col gap-5">
            <article className="flex min-h-[280px] flex-col overflow-hidden rounded-2xl border border-[#d9deed] bg-white p-6 lg:min-h-[317px] lg:flex-row lg:gap-3 lg:p-8">
              <div className="flex flex-1 flex-col justify-between gap-6">
                <div className="relative size-[72px] shrink-0">
                  <Image
                    src={ecommerce.iconSrc}
                    alt=""
                    fill
                    className="object-contain"
                    aria-hidden
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="font-serif text-[26px] font-semibold italic text-[#2564eb]">
                    {ecommerce.title}
                  </h3>
                  <p className="text-[15px] leading-normal text-[#616670]">
                    {ecommerce.description}
                  </p>
                </div>
              </div>
              <div className="relative mt-4 min-h-[200px] flex-1 overflow-hidden rounded-2xl lg:mt-0 lg:min-h-0">
                <Image
                  src={ecommerce.imageSrc}
                  alt=""
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[rgba(0,10,31,0.2)]" />
              </div>
            </article>

            <article className="flex flex-col gap-4 rounded-2xl border border-[#d9deed] bg-white p-6 lg:flex-row lg:items-center lg:gap-3 lg:p-8">
              <div className="relative size-[50px] shrink-0">
                <Image
                  src={b2b.iconSrc}
                  alt=""
                  fill
                  className="object-contain"
                  aria-hidden
                />
              </div>
              <h3 className="font-serif text-[26px] font-semibold italic text-[#2564eb] lg:shrink-0">
                {b2b.title}
              </h3>
              <p className="text-[15px] leading-normal text-[#616670] lg:flex-1">
                {b2b.description}
              </p>
            </article>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
