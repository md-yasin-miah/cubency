import { expectationsContent } from "@/components/services/organicGrowthData";

export const growthStrategyAssets = {
  base: "/images/services/growth-strategy-insights",
} as const;

const asset = (name: string) =>
  `${growthStrategyAssets.base}/${name}`;

export const growthStrategyServiceAssets = {
  hero: [
    { src: asset("hero-1.png"), overlay: "bg-black/10" },
    { src: asset("hero-2.png"), overlay: "bg-black/20" },
    { src: asset("hero-3.png"), overlay: "bg-black/20" },
  ],
  capabilityIconA: asset("icon-capability-a.svg"),
  capabilityIconB: asset("icon-capability-b.svg"),
  aiVisibility: asset("ai-visibility.png"),
  researchLeft: asset("research-left.png"),
  researchRight: asset("research-right.png"),
  deliverablesPhoto: asset("deliverables-photo.png"),
  tickCircle: asset("tick-circle.svg"),
  relatedOrganic: asset("related-organic.png"),
  relatedPaid: asset("related-paid.png"),
  ctaBg: asset("cta-bg.png"),
  approachTimeline: asset("approach-timeline.svg"),
} as const;

export const growthStrategyPage = {
  hero: {
    title: "Know where the opportunity actually is.",
    subtitle:
      "Growth Strategy & Insights is where every Cubency engagement starts. We research your business, market and competitors, then turn the findings into a growth marketing plan you can act on.",
    primaryCta: "Take the Assessment",
    secondaryCta: "Get a Custom Quote",
  },
  heroImages: growthStrategyServiceAssets.hero,
  problemCentered: {
    label: "The Problem",
    title: "The Problem With Guessing",
    paragraphs: [
      "Most marketing decisions are made on instinct, or on what worked for a different business in a different market. That is expensive guesswork. Before you spend on another channel, you need to know what is happening in your business and your market, and where growth really sits.",
      "It means we will not sell you a package before we understand your goals. Our proposals are built around your business, not a template we reuse for every client. And we would rather say no to the wrong project than say yes and deliver something generic.",
    ],
  },
  includes: {
    title: "What Is Included",
    label: "Our Values",
    intro:
      "Growth Strategy & Insights gives you a clear, researched view of your business, competitors and market, then turns it into a strategy you can act on with confidence.",
  },
  capabilityCards: [
    {
      title: "Business & Marketing Audit",
      description:
        "A documented review of your marketing, website, analytics and competitors.",
      icon: "a" as const,
    },
    {
      title: "Strategy & Planning",
      description:
        "A prioritised plan with clear targets and a sequence of actions.",
      icon: "b" as const,
    },
    {
      title: "Competitor & Market Research",
      description:
        "Who you compete with, what they do well and where the gaps are.",
      icon: "a" as const,
    },
    {
      title: "Conversion Rate Optimisation",
      description:
        "Fixing the points where visitors leave without becoming leads or customers.",
      icon: "a" as const,
    },
    {
      title: "Web Analytics Integration",
      description:
        "Tracking set up properly, so every decision has data behind it.",
      icon: "b" as const,
    },
    {
      title: "Marketing Automation",
      description: "Follow-up and lead nurturing that runs without manual work.",
      icon: "a" as const,
    },
  ],
  includesAssets: {
    capabilityIconA: growthStrategyServiceAssets.capabilityIconA,
    capabilityIconB: growthStrategyServiceAssets.capabilityIconB,
  },
  aiAnswers: {
    label: "Generative Engine Optimization",
    title: "Getting Found in AI Answers",
    intro:
      "Generative engine optimization (GEO) and answer engine optimization (AEO) make your business easy for AI tools like ChatGPT, Google AI Overview and Bing Copilot to find and cite. It is an early discipline, and being early matters.",
    expandedStep: {
      number: "01",
      title: "AI Visibility Audit",
      description:
        "Where your business appears, or does not, in AI answers today.",
      imageSrc: growthStrategyServiceAssets.aiVisibility,
    },
    compactSteps: [
      {
        number: "02",
        title: "Content Structured to Be Quoted",
        description: "Clear answers, consistent naming and expert detail.",
      },
      {
        number: "03",
        title: "Citation Tracking",
        description:
          "Regular checks on whether AI tools are starting to cite you.",
      },
    ],
  },
  research: {
    label: "From insight to leads",
    title: "Research Only Matters If It Leads to Results",
    leftBody:
      "Performance marketing agency discipline means tying every recommendation to a number you care about: qualified leads, conversion rate, cost per lead or revenue.",
    leftImageSrc: growthStrategyServiceAssets.researchLeft,
    rightBody:
      "Demand generation agency work goes further and builds the pipeline behind those numbers. SaaS, B2B, ecommerce and D2C brands each need that pipeline for different reasons — we plan for both.",
    rightImageSrc: growthStrategyServiceAssets.researchRight,
  },
  approach: {
    title: "How We Approach It",
    label: "How Approach it",
    intro:
      "Four ways to work together, from a one-off strategic review to a fully embedded growth team. Whichever you choose, we start with research.",
    steps: [
      {
        number: "01",
        title: "Assess",
        description:
          "We review your current position and the data you already have.",
      },
      {
        number: "02",
        title: "Research",
        description:
          "We study your business, market and competitors in depth.",
      },
      {
        number: "03",
        title: "Clarify",
        description: "We agree your goals and constraints with you directly.",
      },
      {
        number: "04",
        title: "Recommend",
        description: "We present a strategy built around what we found.",
      },
    ],
    timelineSrc: growthStrategyServiceAssets.approachTimeline,
  },
  deliverables: {
    label: "Related services",
    title: "Explore Related Services",
    items: [
      "A documented audit of your current marketing and business position",
      "A competitor and market research summary",
      "A prioritised strategy and action plan",
      "Clear recommendations on where to focus first",
    ],
    photoSrc: growthStrategyServiceAssets.deliverablesPhoto,
    metricsCopy:
      "Success is not a vanity metric. We track qualified leads, conversion rate and organic visibility, and we agree the numbers that matter to your business before we start.",
    tickIconSrc: growthStrategyServiceAssets.tickCircle,
  },
  expectations: {
    title: "No Made-Up Numbers",
    label: "How we back it up",
    body: "You will not find made-up numbers here. What we can show you is how we work: the questions we ask, the data we check and the reasoning behind every recommendation. Ask us and we will walk you through it.",
    testimonial: expectationsContent.testimonial,
  },
  related: {
    label: "Related services",
    title: "Explore Related Services",
    cards: [
      {
        title: "Organic Growth",
        description: "SEO, content and long-term organic visibility.",
        href: "/services/organic-growth",
        image: growthStrategyServiceAssets.relatedOrganic,
      },
      {
        title: "Paid Growth",
        description: "Paid search, paid social and performance campaigns.",
        href: "/services/paid-growth",
        image: growthStrategyServiceAssets.relatedPaid,
      },
    ],
  },
  faqs: [
    {
      question: "What does a growth marketing agency do?",
      answer:
        "A growth marketing agency finds where a business can grow, then builds and runs a plan to get there across channels like search, paid media, content and the website. At Cubency, that starts with research into your business, market and competitors.",
    },
    {
      question: "Do I need a full audit before I do anything else with Cubency?",
      answer:
        "Not necessarily, but it is usually where we start. A clear picture of your current position makes every other service more effective.",
    },
    {
      question:
        "What if I already have historical data and past campaign reports?",
      answer:
        "Good, we will use it. We always work from what you already have before recommending new research.",
    },
    {
      question: "What is generative engine optimization?",
      answer:
        "Generative engine optimization is the practice of making your business easy for AI tools like ChatGPT, Google AI Overview and Bing Copilot to find and cite in their answers. It works alongside traditional SEO.",
    },
  ],
  cta: {
    title: "Don't Get Left Behind",
    body: "Tell us about your business and we'll come back with a plan, not a pitch.",
    primaryCta: "Request a Custom Proposal",
    secondaryCta: "Get a Custom Quote",
    bgSrc: growthStrategyServiceAssets.ctaBg,
  },
} as const;
