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
            className="relative flex min-h-80 flex-col justify-end overflow-hidden p-6 lg:row-span-2 lg:min-h-160.5 lg:pb-5.5 lg:pl-6 lg:pr-10 lg:pt-138.25"
          >
            <Image
              src="/images/home/bento-image.png"
              alt=""
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 from-[17.5%] to-transparent to-53%" />
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
            className="flex min-h-50 flex-col justify-end bg-blue-500 p-5 text-white lg:min-h-78.25"
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
            className="relative flex min-h-50 flex-col justify-end overflow-hidden p-6 lg:min-h-78.25"
          >
            <Image
              src="/images/home/bento-image.png"
              alt=""
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 from-[17.5%] to-transparent to-53%" />
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
            className="relative min-h-50 overflow-hidden lg:min-h-78.25"
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
            className="flex min-h-50 items-center justify-center bg-black-500 lg:min-h-78.25"
          >
            <GetStartedButton />
          </StaggerItem>
        </StaggerReveal>
      </PageContainer>
    </section>
  );
}
