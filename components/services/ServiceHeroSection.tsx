import Image from "next/image";
import type { HeroImage, ServiceHeroContent } from "@/components/services/servicePageTypes";
import { Button } from "@/components/ui/Button";
import { PageContainer } from "@/components/ui/PageContainer";

type ServiceHeroSectionProps = {
  hero: ServiceHeroContent;
  images: HeroImage[];
};

export function ServiceHeroSection({ hero, images }: ServiceHeroSectionProps) {
  return (
    <section className="min-w-0 overflow-x-clip bg-white pb-10 pt-8 lg:pb-[50px] lg:pt-10">
      <PageContainer>
        <div className="flex flex-col items-center gap-10 lg:gap-[50px]">
          <div className="flex max-w-[1040px] flex-col items-center gap-5 text-center">
            <h1 className="text-[32px] font-bold leading-[1.15] text-blue-900 lg:text-[60px] lg:leading-[60px]">
              {hero.title}
            </h1>
            <p className="max-w-[752px] text-[15px] leading-[22.4px] text-grey-muted lg:text-base">
              {hero.subtitle}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-5">
              <Button
                href="#"
                variant="primary"
                className="h-[52px] px-4 text-[15px] lg:text-base"
              >
                {hero.primaryCta}
              </Button>
              <Button
                href="#"
                variant="outline"
                className="h-[52px] border-black px-4 text-blue-900"
              >
                {hero.secondaryCta}
              </Button>
            </div>
          </div>
        </div>
      </PageContainer>

      <div className="mt-10 hidden min-w-0 gap-3.5 px-0 lg:mt-[50px] lg:flex lg:px-0">
        {images.map((image, index) => (
          <div
            key={`${image.src}-${index}`}
            className="relative h-[447px] flex-1 overflow-hidden rounded-2xl"
          >
            <Image src={image.src} alt="" fill className="object-cover" priority={index === 0} />
            <div className={`absolute inset-0 ${image.overlay}`} />
          </div>
        ))}
      </div>

      <div className="mt-8 flex min-w-0 snap-x snap-mandatory gap-3 overflow-x-auto px-4 lg:hidden">
        {images.map((image, index) => (
          <div
            key={`mobile-${image.src}-${index}`}
            className="relative h-[200px] min-w-[85%] shrink-0 snap-center overflow-hidden rounded-2xl"
          >
            <Image src={image.src} alt="" fill className="object-cover" />
            <div className={`absolute inset-0 ${image.overlay}`} />
          </div>
        ))}
      </div>
    </section>
  );
}
