import Image from "next/image";
import { GetStartedButton } from "@/components/ui/GetStartedButton";
import { PageContainer } from "@/components/ui/PageContainer";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { StaggerItem, StaggerReveal } from "@/components/ui/StaggerReveal";

const cards = [
  {
    title: "Research first.",
    description: "We study your business before we suggest anything.",
    type: "image-tall" as const,
  },
  {
    title: "No fixed packages.",
    description: "Every proposal is built for your goals, not a template.",
    type: "blue" as const,
  },
  {
    title: "Full transparency.",
    description: "You'll always know what we're doing and why.",
    type: "image" as const,
  },
  {
    title: "",
    description: "",
    type: "image" as const,
  },
  {
    title: "",
    description: "",
    type: "cta" as const,
  },
];

export function ProcessBentoSection() {
  return (
    <section className="py-12 lg:py-[50px]">
      <PageContainer>
        <div className="mb-[60px] max-w-[520px]">
          <SectionLabel>Why start here</SectionLabel>
          <h2 className="mt-3 text-[40px] font-semibold leading-[1.1] tracking-tight text-blue-900 lg:text-[56px] lg:leading-[61.6px]">
            Effective Process to{" "}
            <span className="font-serif italic">Elevate Your Brand</span>
          </h2>
        </div>

        <StaggerReveal className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 lg:gap-4">
          <StaggerItem
            direction="up"
            className="relative flex min-h-[320px] flex-col justify-end overflow-hidden rounded-2xl p-6 lg:row-span-2 lg:min-h-[642px] lg:pb-[22px] lg:pl-6 lg:pr-10 lg:pt-[553px]"
          >
            <Image
              src="/images/home/bento-image.png"
              alt=""
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 from-[17.5%] to-transparent to-[53%]" />
            <div className="relative text-white">
              <h3 className="text-2xl font-medium tracking-tight">
                {cards[0].title}
              </h3>
              <p className="mt-2.5 text-base tracking-tight">
                {cards[0].description}
              </p>
            </div>
          </StaggerItem>

          <StaggerItem
            direction="up"
            className="flex min-h-[200px] flex-col justify-end rounded-2xl bg-blue-500 p-5 text-white lg:min-h-[313px]"
          >
            <h3 className="text-2xl font-medium tracking-tight">
              {cards[1].title}
            </h3>
            <p className="mt-1.5 text-base tracking-tight">
              {cards[1].description}
            </p>
          </StaggerItem>

          <StaggerItem
            direction="up"
            className="relative flex min-h-[200px] flex-col justify-end overflow-hidden rounded-2xl p-6 lg:min-h-[313px]"
          >
            <Image
              src="/images/home/bento-image.png"
              alt=""
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 from-[17.5%] to-transparent to-[53%]" />
            <div className="relative text-white">
              <h3 className="text-2xl font-medium tracking-tight">
                {cards[2].title}
              </h3>
              <p className="mt-2.5 text-base tracking-tight">
                {cards[2].description}
              </p>
            </div>
          </StaggerItem>

          <StaggerItem
            direction="up"
            className="relative min-h-[200px] overflow-hidden rounded-2xl lg:min-h-[313px]"
          >
            <Image
              src="/images/home/bento-image.png"
              alt=""
              fill
              className="object-cover"
            />
          </StaggerItem>

          <StaggerItem
            direction="up"
            className="flex min-h-[200px] items-center justify-center rounded-2xl bg-black-500 lg:min-h-[313px]"
          >
            <GetStartedButton />
          </StaggerItem>
        </StaggerReveal>
      </PageContainer>
    </section>
  );
}
