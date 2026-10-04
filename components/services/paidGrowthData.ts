import { expectationsContent } from "@/components/services/organicGrowthData";

export const paidGrowthAssets = {
  base: "/images/services/paid-growth",
} as const;

const asset = (name: string) => `${paidGrowthAssets.base}/${name}`;

export const paidGrowthServiceAssets = {
  hero: [
    { src: asset("hero-1.png"), overlay: "bg-black/10" },
    { src: asset("hero-2.png"), overlay: "bg-black/20" },
    { src: asset("hero-3.png"), overlay: "bg-black/20" },
  ],
  problem: asset("problem.png"),
  capabilityIconA: asset("icon-capability-a.svg"),
  capabilityIconB: asset("icon-capability-b.svg"),
  audienceEcommerceIcon: asset("audience-ecommerce-icon.svg"),
  audienceEcommercePhoto: asset("audience-ecommerce-photo.png"),
  audienceB2bIcon: asset("audience-b2b-icon.svg"),
  deliverablesPhoto: asset("deliverables-photo.png"),
  tickCircle: asset("tick-circle.svg"),
  relatedCreative: asset("related-creative.png"),
  relatedStrategy: asset("related-strategy.png"),
  ctaBg: asset("cta-bg.png"),
  approachTimeline: asset("approach-timeline.svg"),
} as const;

export const paidGrowthPage = {
  hero: {
    title: "Every pound spent, accounted for.",
    subtitle:
      "Paid Growth runs your search, social and programmatic campaigns to bring back more than they cost, with full visibility into what is working. It is PPC agency expertise with digital advertising agency reach, and every result is reported.",
    primaryCta: "Take the Assessment",
    secondaryCta: "Get a Custom Quote",
  },
  heroImages: paidGrowthServiceAssets.hero,
  problem: {
    label: "The Problem",
    title: "The Problem With Unmanaged Ad Spend",
    body: "Paid campaigns can grow a business fast, or burn through budget fast. The difference usually comes down to whether someone is genuinely managing performance, or just keeping campaigns switched on. We do the former.",
    imageSrc: paidGrowthServiceAssets.problem,
  },
  includes: {
    title: "What Is Included",
    label: "What's included",
    intro:
      "We plan, launch and manage paid campaigns built around your customer journey and measured against outcomes we agree upfront, not just clicks and impressions.",
  },
  capabilityCards: [
    {
      title: "Paid Search",
      description:
        "PPC management services for Google and Bing, targeting people already looking for what you sell.",
      icon: "a" as const,
    },
    {
      title: "Paid Social Media",
      description:
        "Campaigns on Meta Ads and other social platforms, reaching the right audience before they search.",
      icon: "b" as const,
    },
    {
      title: "Programmatic",
      description:
        "Automated display and video buying across large ad networks, at scale.",
      icon: "a" as const,
    },
    {
      title: "Remarketing",
      description: "Bringing back visitors who did not convert the first time.",
      icon: "a" as const,
    },
    {
      title: "Performance Campaign Management",
      description:
        "Ongoing testing and budget shifts, the way a good performance marketing company works.",
      icon: "b" as const,
    },
  ],
  includesAssets: {
    capabilityIconA: paidGrowthServiceAssets.capabilityIconA,
    capabilityIconB: paidGrowthServiceAssets.capabilityIconB,
  },
  audience: {
    label: "Who we serve",
    ecommerce: {
      title: "Paid Growth for Ecommerce",
      description:
        "Ecommerce marketing agency work is measured in sales. We run shopping, search and social campaigns that track revenue and return on ad spend, with product feeds, creative and landing pages built to work together.",
      iconSrc: paidGrowthServiceAssets.audienceEcommerceIcon,
      imageSrc: paidGrowthServiceAssets.audienceEcommercePhoto,
    },
    b2b: {
      title: "Paid Growth for B2B and SaaS",
      description:
        "Reaching the right buyer matters more than reaching more people. Our B2B advertising agency approach targets the roles and companies you want, and measures success by qualified leads and cost per lead, with a focus on demos, trials and pipeline.",
      iconSrc: paidGrowthServiceAssets.audienceB2bIcon,
    },
  },
  approach: {
    title: "How We Approach It",
    label: "How Approach it",
    intro:
      "Four ways to work together, from a one-off strategic review to a fully embedded growth team. Whichever you choose, we start with research.",
    steps: [
      {
        number: "01",
        title: "Plan",
        description:
          "We start from the research and strategy work, so campaigns launch with a clear audience and message.",
      },
      {
        number: "02",
        title: "Launch",
        description:
          "We build campaigns and creative, and set up tracking before any budget is spent.",
      },
      {
        number: "03",
        title: "Manage",
        description:
          "PPC advertising management is active. We test, adjust and move budget toward what converts.",
      },
      {
        number: "04",
        title: "Report",
        description:
          "You see spend and return clearly, and we explain what we changed and why.",
      },
    ],
    timelineSrc: paidGrowthServiceAssets.approachTimeline,
  },
  deliverables: {
    label: "What you get",
    title: "What You Get and How We Measure It",
    items: [
      "A campaign plan tied to your business goals",
      "Live campaigns across the channels that make sense for your audience",
      "Regular optimisation, not a set-and-forget setup",
      "Transparent reporting on spend and return",
    ],
    photoSrc: paidGrowthServiceAssets.deliverablesPhoto,
    metricsCopy:
      "We track ROAS and acquisition efficiency alongside qualified leads and conversion rate, so you can see exactly where your budget goes and what it returns. Creative and media are built together by one team.",
    tickIconSrc: paidGrowthServiceAssets.tickCircle,
  },
  expectations: {
    title: "No Guaranteed Numbers",
    label: "How we back it up",
    body: "We will not quote you a guaranteed return, because nobody honestly can before they have seen your account and your market. What we will do is show you our reasoning on every campaign decision, and adjust fast when something is not working.",
    testimonial: expectationsContent.testimonial,
  },
  related: {
    label: "Related services",
    title: "Explore Related Services",
    cards: [
      {
        title: "Creative Solutions",
        description:
          "The design and copy that make every campaign perform better.",
        href: "#",
        image: paidGrowthServiceAssets.relatedCreative,
      },
      {
        title: "Growth Strategy & Insights",
        description:
          "Research-led strategy that tells you where the opportunity is.",
        href: "/services/growth-strategy-insights",
        image: paidGrowthServiceAssets.relatedStrategy,
      },
    ],
  },
  faqs: [
    {
      question: "What does a PPC agency do?",
      answer:
        "A PPC agency plans, launches and manages pay-per-click advertising on platforms like Google, Bing and social networks, and adjusts bids, budgets and creative to get more results for less spend. Cubency also ties results to leads and revenue.",
    },
    {
      question: "Which platforms do you run campaigns on?",
      answer:
        "Search, paid social (including Meta Ads) and programmatic, depending on where your audience is. We recommend the mix and do not push every channel by default.",
    },
    {
      question: "What is performance marketing?",
      answer:
        "Performance marketing is advertising measured against results such as leads, sales or return on ad spend, instead of impressions alone. It is how Cubency runs every paid campaign.",
    },
    {
      question: "Do you take a percentage of ad spend as a fee?",
      answer:
        "Fee structure depends on your proposal and engagement model. We will be transparent about it before you commit to anything.",
    },
  ],
  cta: {
    title: "Ready to Make Every Pound Count?",
    body: "Take the Growth Readiness Assessment or tell us about your business — either way, we start with research.",
    primaryCta: "Request a Custom Proposal",
    secondaryCta: "Get a Custom Quote",
    bgSrc: paidGrowthServiceAssets.ctaBg,
  },
} as const;
