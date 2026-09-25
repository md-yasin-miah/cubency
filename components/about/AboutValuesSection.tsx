import { values } from "@/components/about/aboutData";
import { PageContainer } from "@/components/ui/PageContainer";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function AboutValuesSection() {
  return (
    <section className="bg-navy-dark py-12 lg:py-25">
      <PageContainer>
        <div className="flex flex-col gap-7 lg:gap-[60px]">
          <div className="flex flex-col gap-3">
            <SectionLabel variant="light" accent="blue">
              Our Values
            </SectionLabel>
            <h2 className="text-[26px] font-semibold leading-[1.25] text-blue-50 lg:text-[56px] lg:leading-[64px]">
              What We Hold Ourselves To
            </h2>
          </div>

          <div className="hidden flex-col lg:flex">
            {values.map((value, index) => (
              <div
                key={value.number}
                className={`flex h-[150px] items-center border-b border-[#b0bfc7] px-6 py-8 ${
                  index === 0 ? "bg-blue-900" : ""
                } ${index === values.length - 1 ? "border-b-0" : ""}`}
              >
                <div className="flex flex-1 items-center gap-6 lg:gap-[132px]">
                  <div className="flex flex-1 items-center gap-6">
                    <span className="w-[63px] text-center text-[48px] font-semibold leading-[56px] text-[#1660ed]">
                      {value.number}
                    </span>
                    <p className="flex-1 text-[36px] font-semibold leading-[48px] text-[#e6eaed]">
                      {value.title}
                    </p>
                  </div>
                  <p className="flex-1 text-lg font-medium leading-7 text-[#b0bfc7]">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col lg:hidden">
            {values.map((value, index) => (
              <div
                key={value.number}
                className={
                  index === 0
                    ? "flex flex-col gap-2.5 rounded-[14px] bg-blue-900 p-5"
                    : "flex flex-col gap-2.5 border-t border-white/10 py-5"
                }
              >
                <p className="text-[22px] font-semibold text-[#1660ed]">
                  {value.number}
                </p>
                <p className="text-[17px] font-semibold text-white">
                  {value.title}
                </p>
                <p className="text-sm leading-normal text-[#b8bfcc]">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
