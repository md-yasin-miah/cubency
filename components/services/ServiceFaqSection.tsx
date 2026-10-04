import Link from "next/link";
import { serviceFaqs } from "@/components/services/organicGrowthData";
import { Button } from "@/components/ui/Button";
import { PageContainer } from "@/components/ui/PageContainer";
import Image from "next/image";

export function ServiceFaqSection() {
  return (
    <section className="bg-white py-12 lg:py-25">
      <PageContainer>
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-[50px]">
          <div className="max-w-[592px]">
            <div className="flex items-center gap-1.5">
              <Image
                src="/images/home/check-badge.svg"
                alt=""
                width={21}
                height={21}
                aria-hidden
              />
              <span className="text-base">Digital marketing FAQ</span>
            </div>
            <h2 className="mt-0 text-[40px] font-medium leading-tight lg:text-[56px] lg:leading-[64px]">
              Find Answer{" "}
              <span className="font-serif italic font-semibold">You Needs</span>
            </h2>
            <p className="mt-7 text-base leading-[22.4px] text-foreground">
              As a leading digital marketing agency, we are dedicated to
              providing comprehensive educational resources and answering
              frequently asked questions to help our clients.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-7">
              <Button href="#" variant="blue" className="px-8">
                More Question
              </Button>
              <Link
                href="#"
                className="inline-flex items-center gap-1.5 text-lg font-medium text-foreground"
              >
                Contact us
                <span aria-hidden>↗</span>
              </Link>
            </div>
          </div>

          <div className="flex-1 overflow-hidden rounded-2xl bg-faq-bg">
            {serviceFaqs.map((faq) => (
              <article
                key={faq.question}
                className="border-b border-faq-bg bg-white px-6 py-5 last:border-b-0"
              >
                <h3 className="text-[17px] font-bold leading-snug text-footer-bg">
                  Q: {faq.question}
                </h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-[#6b6a66]">
                  A: {faq.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
