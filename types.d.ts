declare type AboutUsTab = "display" | "order" | "manage" | "market";

declare interface AboutUsContent {
  type: AboutUsTab;
  items: AboutUsItem[];
}

declare interface AboutUsItem {
  title: string;
  description: string;
}

declare interface InteractiveMenuSocial {
  name: string;
  icon: any;
  url: string;
}

declare interface InteractiveMenuContentCategory {
  discount: number;
  price: number;
  description: string;
  name: string;
  catImage: string;
  id: string;
  currency: string;
}

declare interface InteractiveMenuButton {
  name: string;
  icon: any;
}

declare interface InteractiveTopMenuCategory {
  name: string;
  icon: any;
}

declare interface InteractiveMenuProps {
  selectedTheme: number;
  selectedLayout: string;
  selectedHeader: string;
  selectedBgColor: string;
  selectedPrimaryColor: string;
  selectedSecondaryColor: string;
}

declare interface InteractiveMenuContent {
  themeSelection: InteractiveMenuThemeSelection;
  name: string;
  description: string;
  image: string;
  bannerImage: string;
  profileBanner: string;
  socials: InteractiveMenuSocial[];
  infoButton: string;
  categories: InteractiveMenuContentCategory[];
  menuButtons: InteractiveMenuButton[];
  menuCategories: InteractiveTopMenuCategory[];
}

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

declare interface KeyAdvantages {
  content: string;
  textColor: string;
  reduction?: string;
  bgColor?: string;
}

declare interface PricingPlan {
  type: string;
  price: string;
  priceYearly: string;
  subscription: string;
  description: string;
  buttonText: string;
  active?: boolean;
  features: string[];
}

declare interface FooterSection {
  title: string;
  links: FooterSectionLink[];
}

declare interface FooterSectionLink {
  name: string;
  href: string;
}

declare interface Job {
  jobLink: string;
  title: string;
  location: string;
  type: string;
  datePosted: string;
  description: string;
  jobEmailBody: string;
}

declare interface Article {
  title: string;
  slug: string;
  coverImage: string;
  excerpt: string;
  content: React.ReactNode;
  category: string;
  id: string;
  createdAt: string;
  author: string;
  updatedAt: string;
  readingTime: string;
  socials: Social[];
}

declare interface Social {
  name: string;
  link: string;
}
