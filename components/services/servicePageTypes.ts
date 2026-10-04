export type HeroImage = {
  src: string;
  overlay: string;
};

export type ServiceHeroContent = {
  title: string;
  subtitle: string;
  primaryCta: string;
  secondaryCta: string;
};

export type ServiceProblemSplitContent = {
  title: string;
  label: string;
  body: string;
  imageSrc: string;
  imageAlt?: string;
};

export type ServiceProblemCenteredContent = {
  label: string;
  title: string;
  paragraphs: readonly string[];
};

export type ServiceIncludesContent = {
  title: string;
  label: string;
  intro: string;
};

export type CapabilityCard = {
  title: string;
  description: string;
  icon: "a" | "b";
};

export type ServiceIncludesAssets = {
  capabilityIconA: string;
  capabilityIconB: string;
};

export type ApproachStep = {
  number: string;
  title: string;
  description: string;
};

export type ServiceApproachContent = {
  title: string;
  label: string;
  intro?: string;
  steps: readonly ApproachStep[];
  timelineSrc: string;
};

export type ServiceDeliverablesContent = {
  label: string;
  title: string;
  items: readonly string[];
  photoSrc: string;
  metricsCopy?: string;
  tickIconSrc: string;
};

export type ServiceExpectationsContent = {
  title: string;
  label: string;
  body: string;
  testimonial: {
    quote: string;
    name: string;
    role: string;
  };
};

export type RelatedCard = {
  title: string;
  description: string;
  href: string;
  image: string;
};

export type ServiceRelatedContent = {
  label: string;
  title: string;
  cards: readonly RelatedCard[];
};

export type ServiceFaqItem = {
  question: string;
  answer: string;
};

export type ServiceCtaContent = {
  title: string;
  body: string;
  primaryCta: string;
  secondaryCta: string;
  bgSrc: string;
};

export type ServiceVerticalCard = {
  title: string;
  description: string;
  illustration: "ecommerce" | "b2b";
};

export type ServiceVerticalsContent = {
  label: string;
  cards: ServiceVerticalCard[];
};

export type ServiceVerticalsAssets = {
  verticalEcommerce: string;
  verticalB2b: string;
};

export type ServiceAiAnswersContent = {
  label: string;
  title: string;
  intro: string;
  expandedStep: {
    number: string;
    title: string;
    description: string;
    imageSrc: string;
  };
  compactSteps: readonly {
    number: string;
    title: string;
    description: string;
  }[];
};

export type ServiceResearchContent = {
  label: string;
  title: string;
  leftBody: string;
  leftImageSrc: string;
  rightBody: string;
  rightImageSrc: string;
};

export type ServicePaidAudienceContent = {
  label: string;
  ecommerce: {
    title: string;
    description: string;
    iconSrc: string;
    imageSrc: string;
  };
  b2b: {
    title: string;
    description: string;
    iconSrc: string;
  };
};
