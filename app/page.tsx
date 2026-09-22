import { Navbar } from "@/components/home/Navbar";
import { HeroSection } from "@/components/home/HeroSection";
import { ProcessBentoSection } from "@/components/home/ProcessBentoSection";
import { TrustedPartnersSection } from "@/components/home/TrustedPartnersSection";
import { AboutSection } from "@/components/home/AboutSection";
import { VideoSection } from "@/components/home/VideoSection";
import { ExpertiseSection } from "@/components/home/ExpertiseSection";
import { ComparisonSection } from "@/components/home/ComparisonSection";
import { CaseStudiesSection } from "@/components/home/CaseStudiesSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { WorkflowSection } from "@/components/home/WorkflowSection";
import { IndustryCardsSection } from "@/components/home/IndustryCardsSection";
import { FaqSection } from "@/components/home/FaqSection";
import { CtaBannerSection } from "@/components/home/CtaBannerSection";
import { FooterSection } from "@/components/home/FooterSection";
import { Reveal } from "@/components/ui/Reveal";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col bg-white">
      <Reveal trigger="mount" direction="down">
        <Navbar />
      </Reveal>
      <HeroSection />
      <Reveal direction="up">
        <ProcessBentoSection />
      </Reveal>
      <Reveal direction="fade">
        <TrustedPartnersSection />
      </Reveal>
      <Reveal direction="left">
        <AboutSection />
      </Reveal>
      <Reveal direction="up">
        <VideoSection />
      </Reveal>
      <Reveal direction="right">
        <ExpertiseSection />
      </Reveal>
      <Reveal direction="left">
        <ComparisonSection />
      </Reveal>
      <Reveal direction="up">
        <CaseStudiesSection />
      </Reveal>
      <Reveal direction="right">
        <TestimonialsSection />
      </Reveal>
      <Reveal direction="left">
        <WorkflowSection />
      </Reveal>
      <IndustryCardsSection />
      <Reveal direction="fade">
        <FaqSection />
      </Reveal>
      <Reveal direction="up">
        <CtaBannerSection />
      </Reveal>
      <Reveal direction="up">
        <FooterSection />
      </Reveal>
    </main>
  );
}
