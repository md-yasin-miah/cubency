import Image from "next/image";
import {
  deliverablesContent,
  serviceAssets,
} from "@/components/services/organicGrowthData";
import { PageContainer } from "@/components/ui/PageContainer";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function ServiceDeliverablesSection() {
  return (
    <section className="bg-white py-12 lg:py-25">
      <PageContainer>
        <div className="grid gap-4 lg:grid-cols-2">
          <article className="flex flex-col gap-10 rounded-2xl border border-[#ccd8de] bg-blue-900 p-8 lg:gap-[60px] lg:p-8">
            <div className="flex flex-col gap-3">
              <SectionLabel variant="light" dashWidth="w-[17px]">
                {deliverablesContent.label}
              </SectionLabel>
              <h2 className="text-[32px] font-medium leading-tight text-white lg:text-[56px] lg:leading-[64px]">
                {deliverablesContent.title}
              </h2>
            </div>
            <ul className="flex flex-col gap-3">
              {deliverablesContent.items.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <Image
                    src={serviceAssets.tickCircle}
                    alt=""
                    width={20}
                    height={20}
                    className="mt-0.5 shrink-0"
                    aria-hidden
                  />
                  <span className="text-base font-medium text-black-50 lg:text-lg">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </article>

          <div className="relative min-h-[320px] overflow-hidden rounded-2xl lg:min-h-[427px]">
            <Image
              src={serviceAssets.deliverablesPhoto}
              alt=""
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,10,31,0.8)] via-[rgba(0,10,31,0.45)] to-transparent" />
            <p className="absolute inset-x-0 bottom-0 p-8 text-lg leading-normal text-white lg:p-[30px] lg:text-xl">
              {deliverablesContent.metricsCopy}
            </p>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
