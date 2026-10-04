import Image from "next/image";
import {
  philosophyClosing,
  philosophyIntro,
} from "@/components/about/aboutData";
import { PageContainer } from "@/components/ui/PageContainer";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function AboutPhilosophySection() {
  return (
    <section className="bg-white py-10 lg:py-[50px] lg:pb-25">
      <PageContainer>
        <div className="mx-auto flex max-w-[828px] flex-col items-center gap-5 lg:gap-[30px]">
          <SectionLabel
            dashWidth="w-[19px]"
            accent="blue"
            className="justify-center lg:[&_span:last-child]:font-semibold lg:[&_span:last-child]:text-grey-subtle"
          >
            Philosophy
          </SectionLabel>

          <p className="text-center text-[15px] leading-normal lg:text-lg lg:leading-normal">
            <span className="font-medium text-[#52575e]">
              {philosophyIntro.primary}{" "}
            </span>
            <span className="text-[#aeaeae]">{philosophyIntro.secondary}</span>
          </p>

          <div className="relative h-[220px] w-full max-w-[283px] overflow-hidden rounded-2xl lg:h-[229px]">
            <Image
              src="/images/about/hero-1.png"
              alt="Cubency team at work"
              fill
              className="object-cover"
            />
          </div>

          <p className="text-center text-[15px] leading-normal text-[#aeaeae] lg:text-lg lg:leading-normal">
            {philosophyClosing}
          </p>
        </div>
      </PageContainer>
    </section>
  );
}
