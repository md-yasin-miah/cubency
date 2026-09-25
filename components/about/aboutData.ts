export type Value = {
  number: string;
  title: string;
  description: string;
};

export type TeamMember = {
  name: string;
  role: string;
  image: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const values: Value[] = [
  {
    number: "01",
    title: "Research First",
    description:
      "We start by understanding your business, market and audience before we recommend anything.",
  },
  {
    number: "02",
    title: "Data Driven",
    description:
      "Every decision is backed by data, not guesswork or industry trends for their own sake.",
  },
  {
    number: "03",
    title: "Personalised Solutions",
    description:
      "No templates, no one-size-fits-all packages — every strategy is built around your goals.",
  },
  {
    number: "04",
    title: "Transparency",
    description:
      "You'll always know what we're doing, why we're doing it, and how it's performing.",
  },
  {
    number: "05",
    title: "Continuous Improvement",
    description:
      "We test, measure and refine continuously — growth doesn't stop at launch.",
  },
];

export const teamMembers: TeamMember[] = [
  { name: "Hasnain Ahmed", role: "Founder & CEO", image: "/images/about/team-1.png" },
  { name: "Hasnain Ahmed", role: "Founder & CEO", image: "/images/about/team-2.png" },
  { name: "Hasnain Ahmed", role: "Founder & CEO", image: "/images/about/team-1.png" },
  { name: "Hasnain Ahmed", role: "Founder & CEO", image: "/images/about/team-3.png" },
  { name: "Hasnain Ahmed", role: "Founder & CEO", image: "/images/about/team-4.png" },
  { name: "Hasnain Ahmed", role: "Founder & CEO", image: "/images/about/team-2.png" },
  { name: "Hasnain Ahmed", role: "Founder & CEO", image: "/images/about/team-5.png" },
  { name: "Hasnain Ahmed", role: "Founder & CEO", image: "/images/about/team-6.png" },
  { name: "Hasnain Ahmed", role: "Founder & CEO", image: "/images/about/team-7.png" },
  { name: "Hasnain Ahmed", role: "Founder & CEO", image: "/images/about/team-1.png" },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      '"Working with Cubency has transformed our approach to digital marketing. Their insights and tailored strategies have significantly boosted our ROI!"',
    name: "Amjad Hossain",
    role: "Managing Director, Shao Xing Zhong Meng Textile",
  },
  {
    quote:
      '"Working with Cubency has transformed our approach to digital marketing. Their insights and tailored strategies have significantly boosted our ROI!"',
    name: "Nahidul Islam",
    role: "Founder / Managing Director, Kinetic Dynamics",
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Advisory & Strategy",
    description:
      "A one-off strategic review to assess where the opportunity is before you commit to anything.",
  },
  {
    number: "02",
    title: "Project Engagement",
    description:
      "A defined project with a clear scope, timeline and outcome — no ongoing retainer required.",
  },
  {
    number: "03",
    title: "Retainer Partnership",
    description:
      "Ongoing monthly support across the services you need, with a team that already knows your business.",
  },
  {
    number: "04",
    title: "Dedicated Growth Team",
    description:
      "A fully embedded team that plans, executes and reports on your growth as if we were in-house.",
  },
];

export const philosophyParagraphs = [
  "Too many marketing plans start with a channel. Someone decides you need SEO, or ads, or a rebrand, before anyone has properly looked at the business behind it. We think that is backwards. As a research-led digital marketing agency, we study your business, your market and what is already working before we recommend anything. Only then do we build a plan.",
  "It means we will not sell you a package before we understand your goals. Our proposals are built around your business, not a template we reuse for every client. And we would rather say no to the wrong project than say yes and deliver something generic.",
];
