import { testimonials } from "@/components/about/aboutData";
import { PageContainer } from "@/components/ui/PageContainer";
import { SectionLabel } from "@/components/ui/SectionLabel";

function TestimonialContent({
  quote,
  name,
  role,
  className = "",
}: {
  quote: string;
  name: string;
  role: string;
  className?: string;
}) {
  return (
    <div className={`flex flex-col gap-3 lg:gap-[31px] ${className}`}>
      <p className="text-[48px] font-semibold leading-none text-[rgba(22,96,237,0.25)] lg:text-[90px] lg:h-16">
        &ldquo;
      </p>
      <p className="text-[15px] leading-normal text-black lg:text-[22px] lg:leading-[1.45] lg:font-medium">
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
    </div>
  );
}

export function AboutTestimonialsSection() {
  return (
    <section className="bg-[#f8f9fc] py-12 lg:bg-white lg:py-[50px] lg:pb-25">
      <PageContainer>
        <div className="flex flex-col gap-6 lg:gap-[60px]">
          <div className="flex flex-col gap-3 lg:gap-3">
            <SectionLabel accent="blue" className="lg:[&_span:last-child]:text-grey-subtle">
              What clients say
            </SectionLabel>
            <h2 className="max-w-[880px] text-[26px] font-semibold leading-[1.25] text-blue-900 lg:text-[56px] lg:leading-[61.6px] lg:text-black">
              Trusted by the Businesses We Grow
            </h2>
          </div>

          <div className="flex flex-col gap-6 lg:flex-row lg:gap-[50px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className={`rounded-2xl bg-white p-6 lg:flex-1 lg:rounded-none lg:bg-transparent lg:p-0 lg:pl-8 ${
                  index === 0
                    ? "lg:border-r lg:border-[#dadada] lg:pr-[50px]"
                    : ""
                }`}
              >
                <TestimonialContent {...testimonial} />
              </div>
            ))}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
