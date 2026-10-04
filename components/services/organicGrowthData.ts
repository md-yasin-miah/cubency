export const serviceAssets = {
  hero: [
    { src: "/images/services/organic-growth/hero-1.jpeg", overlay: "bg-black/10" },
    { src: "/images/services/organic-growth/hero-2.png", overlay: "bg-black/20" },
    { src: "/images/services/organic-growth/hero-3.jpeg", overlay: "bg-black/20" },
  ],
  problem: "/images/services/organic-growth/problem.jpeg",
  capabilityIconA: "/images/services/organic-growth/icon-capability-a.svg",
  capabilityIconB: "/images/services/organic-growth/icon-capability-b.svg",
  verticalEcommerce: "/images/services/organic-growth/vertical-ecommerce.svg",
  verticalB2b: "/images/services/organic-growth/vertical-b2b.svg",
  deliverablesPhoto: "/images/services/organic-growth/deliverables-photo.jpeg",
  tickCircle: "/images/services/organic-growth/tick-circle.svg",
  relatedStrategy: "/images/services/organic-growth/related-strategy.jpeg",
  relatedCreative: "/images/services/organic-growth/related-creative.jpeg",
  ctaBg: "/images/services/organic-growth/cta-bg.jpeg",
  approachTimeline: "/images/services/organic-growth/approach-timeline.svg",
} as const;

export const heroContent = {
  title: "Visibility that compounds, instead of visibility you rent.",
  subtitle:
    "Organic Growth is SEO, content and social working as one plan, so customers keep finding you long after the campaign budget stops.",
  primaryCta: "Take the Assessment",
  secondaryCta: "Get a Custom Quote",
};

export const problemContent = {
  title: "The Problem With Only Paying for Attention",
  label: "The Problem",
  body: "Paid traffic disappears the moment you stop paying for it. If search, content and social are not working for you in the background, you rebuild your audience from zero every month. That is an expensive way to grow.",
};

export const includesContent = {
  title: "What Is Included",
  label: "Our Values",
  intro:
    "Search engine optimisation company work is only part of it. We build organic visibility through the channels your customers actually use to find you.",
};

export const capabilityCards = [
  {
    title: "SEO & AI SEO",
    description:
      "Technical and content SEO, plus answer engine optimization and generative engine optimization so you get found in Google and in AI answers.",
    icon: "a" as const,
  },
  {
    title: "Content Marketing",
    description:
      "Pages, articles and guides built around what your buyers search for.",
    icon: "b" as const,
  },
  {
    title: "Social Media Marketing",
    description:
      "A steady presence on the platforms where your audience spends time.",
    icon: "a" as const,
  },
  {
    title: "Outreach Marketing",
    description: "The links and mentions that build authority and trust.",
    icon: "a" as const,
  },
  {
    title: "Influencer Marketing",
    description: "Creators who reach your audience, chosen for fit.",
    icon: "b" as const,
  },
];

export const verticalsContent = {
  label: "Who we serve",
  cards: [
    {
      title: "Ecommerce SEO",
      description:
        "Ecommerce SEO agency work starts with category pages, product pages and buying guides that put you in front of shoppers who are ready to buy. Ecommerce marketing agency thinking ties organic growth to sales, not just traffic.",
      illustration: "ecommerce" as const,
    },
    {
      title: "B2B and SaaS SEO",
      description:
        "B2B SEO agency work targets the searches your buyers make when they are comparing options and ready to talk, then builds the pages and content that turn those searches into qualified leads.",
      illustration: "b2b" as const,
    },
  ],
};

export const approachContent = {
  title: "How We Approach It",
  label: "How Approach it",
  steps: [
    {
      number: "01",
      title: "Audit",
      description:
        "We start with the review from Growth Strategy & Insights, or run a focused one if you have not had one yet.",
    },
    {
      number: "02",
      title: "Plan",
      description:
        "We build a content and SEO plan around the terms and topics your customers search for, not just the ones with the biggest volume.",
    },
    {
      number: "03",
      title: "Publish",
      description:
        "We create and publish content, and run social and outreach alongside it.",
    },
    {
      number: "04",
      title: "Improve",
      description: "We review results monthly and adjust as the data comes in.",
    },
  ],
};

export const deliverablesContent = {
  label: "What you get",
  title: "What You Get and How We Measure It",
  items: [
    "A technical and content SEO audit",
    "A keyword and content plan tied to your business, not just search volume",
    "Ongoing content and social output",
    "Monthly reporting on visibility and traffic",
  ],
  metricsCopy:
    "We track organic visibility, qualified traffic and engagement, and report on the metrics that connect back to leads and revenue, not just rankings. Social marketing agency reporting covers audience quality as well as reach.",
};

export const expectationsContent = {
  title: "No Inflated Promises",
  label: "How we back it up",
  body: "Organic growth takes time, and we say so from the start. In place of inflated promises, you get a clear plan, regular reporting and a team that adjusts the approach as the data comes in.",
  testimonial: {
    quote:
      "Working with Cubency has transformed our approach to digital marketing. Their insights and tailored strategies have significantly boosted our ROI!",
    name: "Nahidul Islam",
    role: "Founder / Managing Director, Kinetic Dynamics",
  },
};

export const relatedContent = {
  label: "Related services",
  title: "Explore Related Services",
  cards: [
    {
      title: "Growth Strategy & Insights",
      description:
        "Research-led strategy that tells you where the opportunity is.",
      href: "#",
      image: serviceAssets.relatedStrategy,
    },
    {
      title: "Creative Solutions",
      description:
        "The design and content that bring your organic presence to life.",
      href: "#",
      image: serviceAssets.relatedCreative,
    },
  ],
};

export const serviceFaqs = [
  {
    question: "What does an SEO agency do?",
    answer:
      "An SEO agency improves how easily people find your business in search engines. That covers technical fixes to your website, content built around what customers search for, and the links that build authority. Cubency also optimises for AI answers.",
  },
  {
    question: "How long does SEO typically take to show results?",
    answer:
      "Organic growth builds over months, not weeks. We give you a realistic timeline based on your starting position and market, not a generic promise.",
  },
  {
    question: "Do you write the content yourselves?",
    answer:
      "Yes. Content is planned and produced as part of the service, built around the topics your customers search for.",
  },
  {
    question:
      "What is the difference between SEO and answer engine optimization?",
    answer:
      "SEO helps your pages rank in search results. Answer engine optimization helps AI tools like ChatGPT, Google AI Overview and Bing Copilot find and cite your business in their answers. We do both.",
  },
];

export const ctaContent = {
  title: "Ready to Build Visibility You Own?",
  body: "Take the Growth Readiness Assessment or tell us about your business — either way, we start with research.",
  primaryCta: "Take the Assessment",
  secondaryCta: "Get a Custom Quote",
};

export const navServices = [
  {
    label: "Growth Strategy & Insights",
    href: "#",
    slug: "growth-strategy",
  },
  { label: "Organic Growth", href: "/services/organic-growth", slug: "organic-growth" },
  { label: "Paid Growth", href: "#", slug: "paid-growth" },
  { label: "Creative Solutions", href: "#", slug: "creative" },
  {
    label: "Digital Experience & Web Solutions",
    href: "#",
    slug: "digital-experience",
  },
] as const;
