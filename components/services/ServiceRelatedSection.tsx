import Image from "next/image";
import Link from "next/link";
import { relatedContent } from "@/components/services/organicGrowthData";
import { PageContainer } from "@/components/ui/PageContainer";
import { ArrowUpRightIcon } from "@/components/ui/icons";

export function ServiceRelatedSection() {
  return (
    <section className="bg-white py-12 lg:py-25">
      <PageContainer>
        <div className="flex flex-col gap-10 lg:gap-[60px]">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-1.5">
              <Image
                src="/images/home/check-badge.svg"
                alt=""
                width={21}
                height={21}
                aria-hidden
              />
              <span className="text-base text-[#010205]">{relatedContent.label}</span>
            </div>
            <h2 className="max-w-[640px] text-[32px] font-semibold leading-tight text-blue-900 lg:text-[56px] lg:leading-[64px]">
              {relatedContent.title}
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2 lg:gap-[30px]">
            {relatedContent.cards.map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className="group relative flex min-h-[280px] items-end overflow-hidden rounded-2xl p-8 lg:h-[351px]"
              >
                <Image src={card.image} alt="" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,10,31,0.7)] via-[rgba(0,10,31,0.35)] to-transparent" />
                <div className="relative flex w-full items-end justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-blue-50 lg:text-[30px]">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-base text-white lg:text-xl">
                      {card.description}
                    </p>
                  </div>
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-white/40 text-white">
                    <ArrowUpRightIcon size={20} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
