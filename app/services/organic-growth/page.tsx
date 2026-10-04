import type { Metadata } from "next";
import { ServiceApproachSection } from "@/components/services/ServiceApproachSection";
import { ServiceCtaSection } from "@/components/services/ServiceCtaSection";
import { ServiceDeliverablesSection } from "@/components/services/ServiceDeliverablesSection";
import { ServiceExpectationsSection } from "@/components/services/ServiceExpectationsSection";
import { ServiceFaqSection } from "@/components/services/ServiceFaqSection";
import { ServiceHeroSection } from "@/components/services/ServiceHeroSection";
import { ServiceIncludesSection } from "@/components/services/ServiceIncludesSection";
import { ServiceProblemSection } from "@/components/services/ServiceProblemSection";
import { ServiceRelatedSection } from "@/components/services/ServiceRelatedSection";
import { ServiceVerticalsSection } from "@/components/services/ServiceVerticalsSection";
import { FooterSection } from "@/components/home/FooterSection";
import { Navbar } from "@/components/home/Navbar";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Organic Growth | Cubency",
  description:
    "SEO, content and social as one organic growth plan — visibility that compounds instead of visibility you rent.",
};

export default function OrganicGrowthServicePage() {
  return (
    <main className="flex min-w-0 flex-1 flex-col overflow-x-clip bg-white">
      <Reveal trigger="mount" direction="down">
        <Navbar activeLink="Services" />
      </Reveal>
      <ServiceHeroSection />
      <Reveal direction="up">
        <ServiceProblemSection />
      </Reveal>
      <Reveal direction="fade">
        <ServiceIncludesSection />
      </Reveal>
      <Reveal direction="up">
        <ServiceVerticalsSection />
      </Reveal>
      <Reveal direction="up">
        <ServiceApproachSection />
      </Reveal>
      <Reveal direction="up">
        <ServiceDeliverablesSection />
      </Reveal>
      <Reveal direction="left">
        <ServiceExpectationsSection />
      </Reveal>
      <Reveal direction="up">
        <ServiceRelatedSection />
      </Reveal>
      <Reveal direction="up">
        <ServiceFaqSection />
      </Reveal>
      <Reveal direction="up">
        <ServiceCtaSection />
      </Reveal>
      <Reveal direction="up">
        <FooterSection />
      </Reveal>
    </main>
  );
}
