import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { PageContainer } from "@/components/ui/PageContainer";
import { CheckIcon } from "@/components/ui/icons";

const checklist = [
  "Brands that need to turn traffic into revenue.",
  "Businesses ready to invest in measurable growth.",
];

function IndustryCard({
  title,
  reversed = false,
}: {
  title: string;
  reversed?: boolean;
}) {
  const card = (
    <div className="flex flex-col justify-between rounded-tl-[18px] bg-blue-900 px-[52px] py-9 lg:min-h-[451px] lg:w-[618px]">
      <div className="flex flex-col gap-12">
        <h3 className="max-w-[322px] text-[36px] font-bold leading-tight text-grey-50 lg:text-[42px]">
          {title}
        </h3>
        <ul className="flex flex-col gap-5">
          {checklist.map((item) => (
            <li key={item} className="flex items-center gap-3.5">
              <span className="flex shrink-0 items-center rounded-[10px] bg-blue-700 p-2.5">
                <CheckIcon size={30} className="text-white" />
              </span>
              <span className="text-base leading-normal text-grey-50">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <Button
        href="#"
        variant="blue"
        className="mt-8 self-start border border-blue-50"
      >
        Book a Call
      </Button>
    </div>
  );

  const image = (
    <div
      className={`relative min-h-[280px] flex-1 overflow-hidden ${
        reversed ? "rounded-tl-[18px]" : "rounded-tr-[18px]"
      }`}
    >
      <Image
        src="/images/home/industry-image.png"
        alt={title}
        fill
        className="object-cover"
      />
    </div>
  );

  return (
    <div
      className={`flex flex-col overflow-hidden rounded-[18px] lg:flex-row ${
        reversed ? "lg:flex-row-reverse" : ""
      }`}
    >
      {card}
      {image}
    </div>
  );
}

export function IndustryCardsSection() {
  return (
    <section>
      <PageContainer className="flex flex-col gap-5">
        <IndustryCard title="B2B & Ecommerce" />
        <IndustryCard title="B2C & E commerce" reversed />
      </PageContainer>
    </section>
  );
}
