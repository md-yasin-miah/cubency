import Image from "next/image";
import { PageContainer } from "@/components/ui/PageContainer";
import { StaggerItem, StaggerReveal } from "@/components/ui/StaggerReveal";

type Testimonial = {
  name: string;
  role: string;
  initials: string;
};

const testimonials: Testimonial[] = [
  { name: "Ruma", role: "Founder & Owner, HURCraft", initials: "RU" },
  {
    name: "Amjad Hossain",
    role: "Managing Director, Shao Xing Zhong Meng Textile",
    initials: "AH",
  },
  { name: "Ruma", role: "Founder & Owner, HURCraft", initials: "RU" },
  { name: "Ruma", role: "Founder & Owner, HURCraft", initials: "RU" },
  {
    name: "Nahidul Islam",
    role: "Founder / Managing Director, Kinetic Dynamics",
    initials: "NI",
  },
  {
    name: "Amjad Hossain",
    role: "Managing Director, Shao Xing Zhong Meng Textile",
    initials: "AH",
  },
];

function TestimonialCard({ name, role, initials }: Testimonial) {
  return (
    <article className="flex flex-1 flex-col gap-5 rounded-[18px] bg-white p-6">
      <div className="flex items-center gap-5">
        <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#f2f4f7] text-lg font-medium text-[#475467]">
          {initials}
        </div>
        <div>
          <p className="text-lg font-bold text-footer-bg">{name}</p>
          <p className="text-[13px] text-[#6b6a66]">{role}</p>
        </div>
      </div>
      <p className="text-[15.5px] leading-normal text-[#6b6a66]">
        Client testimonial coming soon. Client testimonial coming soon.
      </p>
      <Image
        src="/images/home/testimonial-logo.svg"
        alt="Verse"
        width={107}
        height={38}
      />
    </article>
  );
}

export function TestimonialsSection() {
  return (
    <section className="pb-12 lg:pb-[50px]">
      <PageContainer>
        <StaggerReveal className="flex flex-col gap-6">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {testimonials.slice(0, 3).map((item, index) => (
              <StaggerItem key={`row1-${index}`} direction="right">
                <TestimonialCard {...item} />
              </StaggerItem>
            ))}
          </div>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {testimonials.slice(3).map((item, index) => (
              <StaggerItem key={`row2-${index}`} direction="right">
                <TestimonialCard {...item} />
              </StaggerItem>
            ))}
          </div>
        </StaggerReveal>
      </PageContainer>
    </section>
  );
}
