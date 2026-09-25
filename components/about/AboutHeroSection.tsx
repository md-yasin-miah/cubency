import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { PageContainer } from "@/components/ui/PageContainer";

const heroImages = [
  { src: "/images/about/hero-1.png", overlay: "bg-black/10" },
  { src: "/images/about/hero-2.png", overlay: "bg-black/20" },
  { src: "/images/about/hero-1.png", overlay: "bg-black/20" },
];

export function AboutHeroSection() {
  return (
    <section className="bg-[#f9f9f9] pb-16 pt-5 lg:pb-25 lg:pt-5">
      <PageContainer>
        <div className="flex flex-col items-center gap-10 lg:gap-[50px]">
          <div className="flex max-w-[1040px] flex-col items-center gap-4 text-center lg:gap-5">
            <h1 className="text-[30px] font-semibold leading-[1.18] text-blue-900 lg:text-[60px] lg:leading-[60px]">
              <span className="font-bold">Business first.</span>
              <br className="lg:hidden" />
              <span className="hidden lg:inline"> </span>
              <span className="font-serif text-[30px] italic text-[#225bd6] lg:text-[64px] lg:leading-[70px]">
                Solution personalised
              </span>
            </h1>
            <p className="max-w-[598px] text-[15px] leading-[1.45] text-grey-muted lg:text-base lg:leading-[22.4px]">
              Most agencies start with a channel. Cubency is a growth marketing
              agency that starts with your business.
            </p>
            <Button href="#" variant="primary" className="h-[52px] px-4 text-[15px] lg:text-base">
              Request a Custom Proposal
            </Button>
          </div>

          <div className="-mx-6 flex w-[calc(100%+3rem)] snap-x snap-mandatory gap-3 overflow-x-auto px-6 lg:mx-0 lg:w-full lg:grid lg:grid-cols-3 lg:gap-3.5 lg:overflow-visible lg:px-0">
            {heroImages.map((image, index) => (
              <div
                key={`${image.src}-${index}`}
                className="relative h-[150px] w-full min-w-[85%] shrink-0 snap-center overflow-hidden rounded-xl lg:min-w-0 lg:h-[447px] lg:rounded-2xl"
              >
                <Image src={image.src} alt="" fill className="object-cover" />
                <div className={`absolute inset-0 ${image.overlay}`} />
              </div>
            ))}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
