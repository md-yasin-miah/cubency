import { PageContainer } from "@/components/ui/PageContainer";
import { StaggerItem, StaggerReveal } from "@/components/ui/StaggerReveal";

const steps = [
  {
    number: 1,
    title: "Assess",
    description: "A short conversation or your Growth Readiness Assessment.",
    active: true,
  },
  {
    number: 2,
    title: "Research",
    description: "We study your business, market and existing data.",
    offset: true,
  },
  {
    number: 3,
    title: "Discover",
    description: "We clarify your goals, constraints and priorities together.",
  },
  {
    number: 4,
    title: "Recommend",
    description: "We study your business, market and existing data.",
    offset: true,
  },
  {
    number: 5,
    title: "Execute",
    description: "We deliver the agreed work, on the agreed scope.",
  },
  {
    number: 6,
    title: "Optimise & Scale",
    description: "We measure results and expand only where it makes sense.",
    offset: true,
  },
];

function StepCard({
  number,
  title,
  description,
  active = false,
}: (typeof steps)[number]) {
  return (
    <div
      className={`flex overflow-hidden rounded-[20px] ${
        active ? "bg-blue-50" : "bg-[#f1f1f5]"
      }`}
    >
      <div
        className={`w-10 shrink-0 rounded-bl-[20px] rounded-tl-[20px] ${
          active ? "bg-blue-900" : "bg-[#d9d8dc]"
        }`}
      />
      <div className="flex flex-col items-center gap-3 px-4 py-7">
        <div className="flex items-center gap-3">
          <div
            className={`flex size-10 items-center justify-center rounded-md text-xl font-semibold ${
              active ? "bg-blue-500 text-white" : "bg-[#d9d8dc] text-[#646466]"
            }`}
          >
            {number}
          </div>
          <p className="text-lg font-semibold text-[#0a0a0a]">{title}</p>
        </div>
        <p
          className={`max-w-[220px] text-center text-[13px] leading-normal ${
            active ? "text-[#595e66]" : "text-[#646466]"
          }`}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

export function WorkflowSection() {
  return (
    <section className="py-16 lg:py-25">
      <PageContainer>
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-center lg:gap-[60px]">
          <div className="max-w-[520px] text-center lg:text-left">
            <h2 className="text-[40px] font-semibold leading-[1.1] tracking-tight text-black lg:text-[56px] lg:leading-[61.6px]">
              How we work
            </h2>
            <p className="mt-3 text-base text-grey-subtle">
              A calm, side-by-side comparison, not a swipe at anyone else in the
              market.
            </p>
          </div>

          <StaggerReveal className="grid w-full max-w-[628px] grid-cols-1 gap-5 sm:grid-cols-2">
            {steps.map((step) => (
              <StaggerItem
                key={step.number}
                direction="up"
                className={step.offset ? "sm:mt-[90px]" : ""}
              >
                <StepCard {...step} />
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>
      </PageContainer>
    </section>
  );
}
