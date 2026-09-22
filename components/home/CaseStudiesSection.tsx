import Image from "next/image";
import { PageContainer } from "@/components/ui/PageContainer";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { StaggerItem, StaggerReveal } from "@/components/ui/StaggerReveal";

const projects = [
  {
    title: "Magical Wraps",
    subtitle: "D2C ecommerce brand",
    image: "/images/home/case-study-1.png",
    wide: true,
  },
  {
    title: "Fashion Buying House",
    subtitle: "B2B sourcing & manufacturing",
    image: "/images/home/case-study-2.png",
    wide: false,
  },
  {
    title: "SaaS Platform",
    subtitle: "B2B lead generation",
    image: "/images/home/case-study-1.png",
    wide: false,
  },
];

export function CaseStudiesSection() {
  return (
    <section className="py-12 lg:p-[50px]">
      <PageContainer>
        <div className="mb-[60px] max-w-[520px]">
          <SectionLabel>Our Work</SectionLabel>
          <h2 className="mt-3 text-[40px] font-semibold leading-tight text-black lg:text-[56px] lg:leading-[64px]">
            Real businesses.{" "}
            <span className="font-serif italic">Real work</span>
          </h2>
        </div>

        <StaggerReveal className="grid grid-cols-1 gap-3.5 lg:grid-cols-12">
          {projects.map((project) => (
            <StaggerItem
              key={project.title}
              direction="up"
              className={`flex flex-col gap-5 ${
                project.wide ? "lg:col-span-5" : "lg:col-span-3"
              }`}
            >
              <div
                className={`relative overflow-hidden rounded-2xl ${
                  project.wide ? "h-[320px] lg:h-[475px]" : "h-[300px] lg:h-[474px]"
                }`}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 from-[17.5%] to-transparent to-[53%]" />
              </div>
              <div>
                <h3 className="text-2xl font-medium leading-9 text-foreground lg:text-[28px]">
                  {project.title}
                </h3>
                <p className="mt-2.5 text-base text-grey-muted">
                  {project.subtitle}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </PageContainer>
    </section>
  );
}
