declare interface FeaturesInfo {
  icon: Icon;
  title: string;
  description: string;
}

declare interface PartnersIcon {
  src: string;
}

declare interface BenefitsContent {
  title: string;
  benefits: Benefit[];
}

declare interface Benefit {
  benefit: string;
  check: boolean;
}

declare interface PricingPlan {
  type: string;
  price: string;
  subscription: string;
  description: string;
  buttonText: string;
  active?: boolean;
  features: string[];
}
