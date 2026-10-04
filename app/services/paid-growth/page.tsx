import type { Metadata } from "next";
import { paidGrowthPage } from "@/components/services/paidGrowthData";
import { ServiceApproachSection } from "@/components/services/ServiceApproachSection";
import { ServiceCtaSection } from "@/components/services/ServiceCtaSection";
import { ServiceDeliverablesSection } from "@/components/services/ServiceDeliverablesSection";
import { ServiceExpectationsSection } from "@/components/services/ServiceExpectationsSection";
import { ServiceFaqSection } from "@/components/services/ServiceFaqSection";
import { ServiceHeroSection } from "@/components/services/ServiceHeroSection";
import { ServiceIncludesSection } from "@/components/services/ServiceIncludesSection";
import { ServicePaidAudienceSection } from "@/components/services/ServicePaidAudienceSection";
import { ServiceProblemSection } from "@/components/services/ServiceProblemSection";
import { ServiceRelatedSection } from "@/components/services/ServiceRelatedSection";
import { FooterSection } from "@/components/home/FooterSection";
import { Navbar } from "@/components/home/Navbar";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Paid Growth | Cubency",
  description:
    "Paid search, social and programmatic campaigns with full visibility into spend and return — every pound spent, accounted for.",
};

export default function PaidGrowthServicePage() {
  const page = paidGrowthPage;

  return (
    <main className="flex min-w-0 flex-1 flex-col overflow-x-clip bg-[#f9f9f9]">
      <Reveal trigger="mount" direction="down">
        <Navbar activeLink="Services" />
      </Reveal>
      <div className="bg-white">
        <ServiceHeroSection hero={page.hero} images={[...page.heroImages]} />
      </div>
      <Reveal direction="up">
        <div className="bg-white">
          <ServiceProblemSection content={page.problem} />
        </div>
      </Reveal>
      <Reveal direction="fade">
        <ServiceIncludesSection
          content={page.includes}
          cards={[...page.capabilityCards]}
          assets={page.includesAssets}
        />
      </Reveal>
      <Reveal direction="up">
        <ServicePaidAudienceSection content={page.audience} />
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
