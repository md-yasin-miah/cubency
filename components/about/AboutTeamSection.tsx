import Image from "next/image";
import { teamMembers } from "@/components/about/aboutData";
import { PageContainer } from "@/components/ui/PageContainer";

export function AboutTeamSection() {
  return (
    <section className="bg-white py-12 lg:pb-[50px] lg:pt-25">
      <PageContainer>
        <div className="flex flex-col items-center gap-5 lg:gap-[60px]">
          <div className="flex max-w-[880px] flex-col items-center gap-4 text-center lg:gap-4">
            <h2 className="text-[26px] font-semibold leading-[1.25] text-black lg:text-[56px] lg:leading-[61.6px]">
              The Team Behind the Work
            </h2>
            <p className="max-w-[519px] text-[15px] leading-normal text-grey-muted lg:text-base lg:tracking-[-0.72px]">
              Cubency is run by a small, senior team — the people who plan your
              strategy are the same people who execute it.
            </p>
          </div>

          <div className="grid w-full grid-cols-2 gap-x-3 gap-y-5 lg:grid-cols-5 lg:gap-5">
            {teamMembers.map((member, index) => (
              <article
                key={`${member.name}-${index}`}
                className="flex flex-col gap-2.5 lg:gap-1 lg:overflow-hidden lg:rounded-2xl lg:bg-white"
              >
                <div className="relative h-[180px] overflow-hidden rounded-xl lg:h-[260px] lg:rounded-t-2xl lg:rounded-b-none">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="lg:p-5">
                  <p className="text-sm font-semibold text-black lg:text-xl">
                    {member.name}
                  </p>
                  <p className="text-xs text-grey-muted lg:text-sm lg:text-black-300">
                    {member.role}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
