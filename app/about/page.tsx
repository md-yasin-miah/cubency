import type { Metadata } from "next";
import { AboutCtaSection } from "@/components/about/AboutCtaSection";
import { AboutHeroSection } from "@/components/about/AboutHeroSection";
import { AboutPhilosophySection } from "@/components/about/AboutPhilosophySection";
import { AboutProcessSection } from "@/components/about/AboutProcessSection";
import { AboutTeamSection } from "@/components/about/AboutTeamSection";
import { AboutTestimonialsSection } from "@/components/about/AboutTestimonialsSection";
import { AboutValuesSection } from "@/components/about/AboutValuesSection";
import { FooterSection } from "@/components/home/FooterSection";
import { Navbar } from "@/components/home/Navbar";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "About Us | Cubency",
  description:
    "Business first. Solution personalised. Learn how Cubency, a research-led growth marketing agency, builds strategies around your business.",
};

export default function AboutPage() {
  return (
    <main className="flex flex-1 flex-col bg-white">
      <Reveal trigger="mount" direction="down">
        <Navbar activeLink="About Us" />
      </Reveal>
      <AboutHeroSection />
      <Reveal direction="up">
        <AboutPhilosophySection />
      </Reveal>
      <Reveal direction="fade">
        <AboutValuesSection />
      </Reveal>
      <Reveal direction="up">
        <AboutTeamSection />
      </Reveal>
      <Reveal direction="left">
        <AboutTestimonialsSection />
      </Reveal>
      <Reveal direction="right">
        <AboutProcessSection />
      </Reveal>
      <Reveal direction="up">
        <AboutCtaSection />
      </Reveal>
      <Reveal direction="up">
        <FooterSection />
      </Reveal>
    </main>
  );
}
