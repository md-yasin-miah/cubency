import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { PageContainer } from "@/components/ui/PageContainer";
import Image from "next/image";

const faqs = [
  {
    question: "Why doesn't Cubency publish pricing?",
    answer:
      "Because a published price assumes every client needs the same thing, and most don't. We scope every proposal around your actual objectives, complexity and timeline.",
  },
  {
    question: "Can I start with just one service?",
    answer:
      "Yes. Most clients start with one or two. If the data shows a clear opportunity elsewhere later, we'll say so, and you can expand from there.",
  },
  {
    question: "How long until I see results?",
    answer:
      "It depends on the service. Paid campaigns can show early signals within weeks. Organic growth takes longer to build. We'll give you a realistic timeline before you commit to anything.",
  },
  {
    question: "How does the Growth Readiness Assessment work?",
    answer:
      "You answer a short set of questions about your business and current marketing. We review your answers and send back a clear view of where the opportunity is, no obligation attached.",
  },
];

export function FaqSection() {
  return (
    <section className="py-16 lg:py-25">
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
            {faqs.map((faq) => (
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
