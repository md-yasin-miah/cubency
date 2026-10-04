import Image from "next/image";
import { testimonials } from "@/components/about/aboutData";
import { PageContainer } from "@/components/ui/PageContainer";
import { SectionLabel } from "@/components/ui/SectionLabel";

function TestimonialCard({
  quote,
  name,
  role,
}: {
  quote: string;
  name: string;
  role: string;
}) {
  return (
    <article className="flex flex-1 flex-col gap-6 rounded-[14px] bg-[#faf9fb] p-6 lg:gap-[31px]">
      <p className="text-[48px] font-semibold leading-none text-[rgba(22,96,237,0.25)] lg:h-16 lg:text-[90px]">
        &ldquo;
      </p>
      <p className="flex-1 text-[15px] font-medium leading-[1.45] text-black lg:text-xl">
        {quote}
      </p>
      <div className="flex flex-col gap-3 lg:gap-[15px]">
        <div className="h-[3px] w-8 bg-[#1660ed]" />
        <div className="flex flex-col gap-1">
          <p className="text-[15px] font-semibold text-black lg:text-[17px]">
            {name}
          </p>
          <p className="text-[13px] text-grey-muted lg:text-sm lg:text-[#666b73]">
            {role}
          </p>
        </div>
      </div>
    </article>
  );
}

export function AboutTestimonialsSection() {
  return (
    <section className="bg-[#f8f9fc] py-12 lg:bg-white lg:py-[50px] lg:pb-25">
      <PageContainer>
        <div className="relative overflow-hidden rounded-[20px] bg-white px-6 py-10 lg:px-8 lg:py-[52px]">
          <div
            className="pointer-events-none absolute -right-8 -top-4 hidden h-[200px] w-[240px] opacity-40 lg:block lg:h-[331px] lg:w-[395px]"
            aria-hidden
          >
            <Image
              src="/images/about/testimonials-quote-deco.svg"
              alt=""
              fill
              className="object-contain object-right-top"
            />
          </div>

          <div className="relative flex flex-col gap-6 lg:gap-[60px]">
            <div className="flex flex-col gap-3">
              <SectionLabel accent="blue" className="lg:[&_span:last-child]:text-grey-subtle">
                What clients say
              </SectionLabel>
              <h2 className="max-w-[880px] text-[26px] font-semibold leading-[1.25] text-blue-900 lg:text-[56px] lg:leading-[61.6px]">
                Trusted by the Businesses
                <br />
                We Grow
              </h2>
            </div>

            <div className="flex flex-col gap-5 lg:flex-row">
              {testimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.name} {...testimonial} />
              ))}
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
