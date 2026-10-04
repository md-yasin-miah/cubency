import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { PageContainer } from "@/components/ui/PageContainer";

const mobileHeroImages = [
  { src: "/images/about/hero-1.png", overlay: "bg-black/10" },
  { src: "/images/about/hero-2.png", overlay: "bg-black/20" },
  { src: "/images/about/hero-1.png", overlay: "bg-black/20" },
];

export function AboutHeroSection() {
  return (
    <section className="min-w-0 overflow-x-hidden bg-[#f9f9f9] pb-16 pt-5 lg:pb-25 lg:pt-5">
      <PageContainer>
        <div className="flex flex-col gap-10 lg:gap-[50px]">
          <div className="flex flex-col items-center gap-4 text-center lg:flex-row lg:items-start lg:justify-center lg:gap-5 lg:text-left">
            <h1 className="flex-1 text-[30px] font-semibold leading-[1.18] text-blue-900 lg:text-[60px] lg:leading-[60px]">
              <span className="font-bold">Business first.</span>
              <br className="lg:hidden" />
              <span className="hidden lg:inline"> </span>
              <span className="font-serif text-[30px] italic text-[#225bd6] lg:text-[64px] lg:leading-[70px]">
                Solution personalised
              </span>
            </h1>
            <div className="flex flex-col items-center gap-4 lg:max-w-[598px] lg:items-start lg:gap-5">
              <p className="text-[15px] leading-[1.45] text-grey-muted lg:text-base lg:leading-[22.4px]">
                Most agencies start with a channel. Cubency is a growth marketing
                agency that starts with your business.
              </p>
              <Button
                href="#"
                variant="primary"
                className="h-[52px] px-4 text-[15px] lg:text-base"
              >
                Request a Custom Proposal
              </Button>
            </div>
          </div>

          <div className="hidden min-w-0 lg:block">
            <div className="relative h-[584px] w-full overflow-hidden rounded-2xl">
              <Image
                src="/images/about/hero-1.png"
                alt="Cubency team collaborating"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/10" />
            </div>
          </div>

          <div className="flex min-w-0 w-full max-w-full snap-x snap-mandatory gap-3 overflow-x-auto px-0 lg:hidden">
            {mobileHeroImages.map((image, index) => (
              <div
                key={`${image.src}-${index}`}
                className="relative h-[150px] w-full min-w-[85%] shrink-0 snap-center overflow-hidden rounded-xl"
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
