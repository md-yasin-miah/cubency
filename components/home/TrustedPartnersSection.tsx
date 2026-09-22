import Image from "next/image";
import { PageContainer } from "@/components/ui/PageContainer";

const row1 = ["verse", "exon", "verse", "verse"] as const;
const row2 = ["verse", "exon", "verse", "verse"] as const;

export function TrustedPartnersSection() {
  return (
    <section className="py-16 lg:py-25">
      <PageContainer>
        <div className="flex items-center gap-1.5">
          <span className="bg-[#454545] h-px w-[58px] shrink-0" />
          <span className="text-xl tracking-tight text-grey-subtle lg:text-2xl">
            TRUSTED BY GROWING BUSINESSES
          </span>
        </div>

        <div className="mt-10 flex flex-col gap-5">
          <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
            {row1.map((logo, index) => (
              <div
                key={`row1-${index}`}
                className="relative flex h-[120px] items-center justify-center rounded-xl bg-black-50/40 lg:h-[194px]"
              >
                <Image
                  src={
                    logo === "exon"
                      ? "/images/home/partner-exon.svg"
                      : "/images/home/partner-verse.svg"
                  }
                  alt={logo === "exon" ? "Exon" : "Verse"}
                  width={200}
                  height={60}
                  className="max-h-[40px] w-auto object-contain lg:max-h-[60px]"
                />
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
            {row2.map((logo, index) => (
              <div
                key={`row2-${index}`}
                className="relative flex h-[120px] items-center justify-center rounded-xl bg-black-50/40 lg:h-[194px]"
              >
                <Image
                  src={
                    logo === "exon"
                      ? "/images/home/partner-exon.svg"
                      : "/images/home/partner-verse.svg"
                  }
                  alt={logo === "exon" ? "Exon" : "Verse"}
                  width={200}
                  height={60}
                  className="max-h-[40px] w-auto object-contain lg:max-h-[60px]"
                />
              </div>
            ))}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
