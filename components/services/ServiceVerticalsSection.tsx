import Image from "next/image";
import { serviceAssets, verticalsContent } from "@/components/services/organicGrowthData";
import { PageContainer } from "@/components/ui/PageContainer";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function ServiceVerticalsSection() {
  return (
    <section className="bg-white py-12 lg:py-25">
      <PageContainer>
        <div className="flex flex-col gap-8 lg:gap-8">
          <SectionLabel dashWidth="w-[38px]" className="[&_span:last-child]:text-[#6a6a6a] [&_span:last-child]:text-2xl [&_span:last-child]:font-medium">
            {verticalsContent.label}
          </SectionLabel>

          <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
            {verticalsContent.cards.map((card, index) => (
              <article
                key={card.title}
                className="flex min-h-[360px] flex-col justify-between rounded-2xl border border-[#d9deed] bg-white p-8"
              >
                {index === 0 ? (
                  <>
                    <div>
                      <h3 className="font-serif text-[26px] font-bold italic text-[#1660ed]">
                        {card.title}
                      </h3>
                      <p className="mt-5 text-base leading-normal text-[#616670]">
                        {card.description}
                      </p>
                    </div>
                    <div className="relative mt-6 ml-auto h-[158px] w-[226px] shrink-0">
                      <Image
                        src={serviceAssets.verticalEcommerce}
                        alt=""
                        fill
                        className="object-contain object-right-bottom"
                        aria-hidden
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="relative ml-auto h-[119px] w-[226px] shrink-0">
                      <Image
                        src={serviceAssets.verticalB2b}
                        alt=""
                        fill
                        className="object-contain"
                        aria-hidden
                      />
                    </div>
                    <div className="mt-6">
                      <h3 className="font-serif text-[26px] font-bold italic text-[#1660ed]">
                        {card.title}
                      </h3>
                      <p className="mt-5 text-base leading-normal text-[#616670]">
                        {card.description}
                      </p>
                    </div>
                  </>
                )}
              </article>
            ))}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
