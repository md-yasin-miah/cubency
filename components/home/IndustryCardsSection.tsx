import type { ReactNode } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { PageContainer } from "@/components/ui/PageContainer";
import { CheckIcon } from "@/components/ui/icons";
import { Reveal } from "../ui/Reveal";

const checklist = [
  "Brands that need to turn traffic into revenue.",
  "Brands that need to turn traffic into revenue.",
];

type IndustryCardProps = {
  title: ReactNode;
  imageSrc: string;
  imageAlt: string;
  layout: "textLeft" | "imageLeft";
};

function Checklist() {
  return (
    <ul className="flex w-full flex-col gap-5">
      {checklist.map((item, index) => (
        <li key={`${item}-${index}`} className="flex items-center gap-[14px]">
          <span className="flex shrink-0 items-center rounded-[10px] bg-blue-700 p-2.5">
            <CheckIcon size={24} className="text-white" />
          </span>
          <span className="min-w-0 flex-1 text-base leading-normal text-grey-50">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

function TextPanel({
  title,
  layout,
}: {
  title: ReactNode;
  layout: IndustryCardProps["layout"];
}) {
  const cornerClass =
    layout === "textLeft" ? "lg:rounded-tl-[18px]" : "lg:rounded-br-[18px]";

  const content = (
    <>
      <div className="flex w-full flex-col gap-[50px]">
        <h3 className="max-w-[322px] text-[36px] font-bold leading-[1.4] text-grey-50 lg:text-[42px]">
          {title}
        </h3>
        <Checklist />
      </div>
      <Button
        href="#"
        variant="blue"
        className="self-start border border-blue-50"
      >
        Book a Call
      </Button>
    </>
  );

  if (layout === "textLeft") {
    return (
      <Reveal
        direction="left"
        className="flex flex-col justify-between bg-blue-900 px-13 py-9 lg:h-[451px] lg:w-[618px] lg:rounded-tl-[18px]"
      >
        {content}
      </Reveal>
    );
  }

  return (
    <Reveal
      direction="right"
      className={`flex flex-1 flex-col bg-blue-900 px-13 py-9 ${cornerClass}`}
    >
      <div className="flex flex-col gap-[69px]">{content}</div>
    </Reveal>
  );
}

function IndustryImage({
  imageSrc,
  imageAlt,
  layout,
}: Pick<IndustryCardProps, "imageSrc" | "imageAlt" | "layout">) {
  const cornerClass =
    layout === "textLeft" ? "lg:rounded-tr-[18px]" : "lg:rounded-bl-[18px]";
  const direction = layout === "textLeft" ? "right" : "left";
  return (
    <Reveal
      direction={direction}
      className={`relative min-h-70 flex-1 overflow-hidden lg:min-h-112.75 ${cornerClass}`}
    >
      <Image src={imageSrc} alt={imageAlt} fill className="object-cover" />
    </Reveal>
  );
}

function IndustryCard({
  title,
  imageSrc,
  imageAlt,
  layout,
}: IndustryCardProps) {
  const textPanel = <TextPanel title={title} layout={layout} />;
  const image = (
    <IndustryImage imageSrc={imageSrc} imageAlt={imageAlt} layout={layout} />
  );

  return (
    <div className="flex flex-col overflow-hidden lg:flex-row">
      {layout === "textLeft" ? (
        <>
          {textPanel}
          {image}
        </>
      ) : (
        <>
          {image}
          {textPanel}
        </>
      )}
    </div>
  );
}

export function IndustryCardsSection() {
  return (
    <section>
      <PageContainer className="flex flex-col">
        <IndustryCard
          layout="textLeft"
          title="B2B & Ecommerce"
          imageSrc="/images/home/industry-image.png"
          imageAlt="B2B and ecommerce team managing online business"
        />
        <IndustryCard
          layout="imageLeft"
          title={
            <>
              B2C &<br />E commerce
            </>
          }
          imageSrc="/images/home/industry-image-b2c.png"
          imageAlt="B2C and ecommerce professionals in office"
        />
      </PageContainer>
    </section>
  );
}
