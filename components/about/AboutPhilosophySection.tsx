import Image from "next/image";
import { philosophyParagraphs } from "@/components/about/aboutData";
import { PageContainer } from "@/components/ui/PageContainer";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function AboutPhilosophySection() {
  return (
    <section className="bg-white py-10 lg:py-[50px] lg:pb-25">
      <PageContainer>
        <div className="flex flex-col gap-5 lg:gap-[60px]">
          <div className="flex flex-col gap-5 lg:flex-row lg:gap-[30px]">
            <div className="flex flex-1 flex-col gap-3 lg:gap-3">
              <SectionLabel accent="blue" className="lg:[&_span:last-child]:text-grey-subtle">
                Philosophy
              </SectionLabel>
              <p className="text-2xl font-semibold leading-[1.3] text-blue-900 lg:text-[40px] lg:leading-[1.18]">
                &ldquo;A growth marketing agency that works from a template
                delivers template results.&rdquo;
              </p>
            </div>
            <div className="flex flex-1 flex-col gap-3 text-[15px] leading-normal text-[#52575e] lg:gap-3 lg:text-base lg:leading-normal">
              {philosophyParagraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="relative h-[220px] overflow-hidden rounded-xl lg:h-[382px] lg:rounded-2xl">
            <Image
              src="/images/about/hero-1.png"
              alt="Cubency team at work"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 from-[17.5%] to-[53.4%] to-[rgba(102,102,102,0)]" />
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
