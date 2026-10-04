import type { Metadata } from "next";
import { growthStrategyPage } from "@/components/services/growthStrategyData";
import { ServiceAiAnswersSection } from "@/components/services/ServiceAiAnswersSection";
import { ServiceApproachSection } from "@/components/services/ServiceApproachSection";
import { ServiceCtaSection } from "@/components/services/ServiceCtaSection";
import { ServiceDeliverablesSection } from "@/components/services/ServiceDeliverablesSection";
import { ServiceExpectationsSection } from "@/components/services/ServiceExpectationsSection";
import { ServiceFaqSection } from "@/components/services/ServiceFaqSection";
import { ServiceHeroSection } from "@/components/services/ServiceHeroSection";
import { ServiceIncludesSection } from "@/components/services/ServiceIncludesSection";
import { ServiceProblemCenteredSection } from "@/components/services/ServiceProblemCenteredSection";
import { ServiceRelatedSection } from "@/components/services/ServiceRelatedSection";
import { ServiceResearchSection } from "@/components/services/ServiceResearchSection";
import { FooterSection } from "@/components/home/FooterSection";
import { Navbar } from "@/components/home/Navbar";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Growth Strategy & Insights | Cubency",
  description:
    "Research your business, market and competitors — then turn findings into a growth marketing plan you can act on with confidence.",
};

export default function GrowthStrategyInsightsServicePage() {
  const page = growthStrategyPage;

  return (
    <main className="flex min-w-0 flex-1 flex-col overflow-x-clip bg-[#f9f9f9]">
      <Reveal trigger="mount" direction="down">
        <Navbar activeLink="Services" />
      </Reveal>
      <div className="bg-white">
        <ServiceHeroSection hero={page.hero} images={[...page.heroImages]} />
      </div>
      <Reveal direction="up">
        <ServiceProblemCenteredSection content={page.problemCentered} />
      </Reveal>
      <Reveal direction="fade">
        <ServiceIncludesSection
          content={page.includes}
          cards={[...page.capabilityCards]}
          assets={page.includesAssets}
        />
      </Reveal>
      <Reveal direction="up">
        <div className="bg-white">
          <ServiceAiAnswersSection content={page.aiAnswers} />
        </div>
      </Reveal>
      <Reveal direction="up">
        <ServiceResearchSection content={page.research} />
      </Reveal>
      <Reveal direction="up">
        <div className="bg-white">
          <ServiceApproachSection content={page.approach} />
        </div>
      </Reveal>
      <Reveal direction="up">
        <div className="bg-white">
          <ServiceDeliverablesSection content={page.deliverables} />
        </div>
      </Reveal>
      <Reveal direction="left">
        <div className="bg-white">
          <ServiceExpectationsSection content={page.expectations} />
        </div>
      </Reveal>
      <Reveal direction="up">
        <div className="bg-white">
          <ServiceRelatedSection content={page.related} />
        </div>
      </Reveal>
      <Reveal direction="up">
        <div className="bg-white">
          <ServiceFaqSection faqs={[...page.faqs]} />
        </div>
      </Reveal>
      <Reveal direction="up">
        <div className="bg-white">
          <ServiceCtaSection content={page.cta} />
        </div>
      </Reveal>
      <Reveal direction="up">
        <FooterSection />
      </Reveal>
    </main>
  );
}
