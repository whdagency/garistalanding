import {
  BarChart3,
  Contact,
  ListChecks,
  MessageSquareText,
  Palette,
  PencilRuler,
  QrCode,
  Share2,
  Speech,
} from "lucide-react";

export const featuresInfo: FeaturesInfo[] = [
  {
    icon: PencilRuler,
    title: "Fully customizable menus",
    description: "Easily customize menu designs, colors, and layouts.",
  },
  {
    icon: BarChart3,
    title: "Client behavior tracking",
    description: "Gain insights into customer preferences and ordering trends.",
  },
  {
    icon: ListChecks,
    title: "Seamless order management",
    description: "Manage orders in real-time and streamline operations.",
  },
  {
    icon: Palette,
    title: "Menu themes",
    description:
      "Choose from a variety of professionally designed menu themes.",
  },
  {
    icon: QrCode,
    title: "QR code generation",
    description: "Generate QR codes for easy menu access at tables.",
  },
  {
    icon: Share2,
    title: "Social media integration",
    description: "Integrate social media profiles to engage with customers.",
  },
  {
    icon: Contact,
    title: "Contact information display",
    description: "Display contact details for easy customer communication.",
  },
  {
    icon: MessageSquareText,
    title: "Feedback submission",
    description:
      "Allow customers to provide feedback directly through the menu.",
  },
  {
    icon: Speech,
    title: "Dish and service claims",
    description:
      "Enable customers to make claims or suggestions about dishes or service.",
  },
];

export const partnersIcon: PartnersIcon[] = [
  { src: "/Partners/Logo1.svg" },
  { src: "/Partners/Logo3.svg" },
  { src: "/Partners/Logo4.svg" },
  { src: "/Partners/Logo2.svg" },
  { src: "/Partners/Logo5.svg" },
  { src: "/Partners/Logo6.svg" },
  { src: "/Partners/Logo7.svg" },
  { src: "/Partners/Logo5.svg" },
  { src: "/Partners/Logo6.svg" },
  { src: "/Partners/Logo7.svg" },
];

export const benefitsContent: BenefitsContent[] = [
  {
    title: "Garista",
    benefits: [
      { benefit: "Low cost", check: true },
      { benefit: "Self manageable", check: true },
      { benefit: "Advanced functionality", check: true },
      { benefit: "Accessible everywhere", check: true },
      { benefit: "View on own device", check: true },
      { benefit: "Digitally available", check: true },
    ],
  },

  {
    title: "Static website",
    benefits: [
      { benefit: "Low cost", check: false },
      { benefit: "Self manageable", check: false },
      { benefit: "Advanced functionality", check: false },
      { benefit: "Accessible everywhere", check: true },
      { benefit: "View on own device", check: true },
      { benefit: "Digitally available", check: true },
    ],
  },

  {
    title: "Menu on tablet",
    benefits: [
      { benefit: "Low cost", check: false },
      { benefit: "Self manageable", check: false },
      { benefit: "Advanced functionality", check: false },
      { benefit: "Accessible everywhere", check: false },
      { benefit: "View on own device", check: true },
      { benefit: "Digitally available", check: true },
    ],
  },

  {
    title: "Printed menu",
    benefits: [
      { benefit: "Low cost", check: false },
      { benefit: "Self manageable", check: false },
      { benefit: "Advanced functionality", check: false },
      { benefit: "Accessible everywhere", check: false },
      { benefit: "View on own device", check: false },
      { benefit: "Digitally available", check: false },
    ],
  },
];

export const pricingPlan: PricingPlan[] = [
  {
    type: "Fight Covid-19",
    price: "FREE",
    subscription: "Lifetime",
    description: "Keep your guest and restaurant staff safe",
    buttonText: "Choose FREE",
    features: [
      "Free QR Menu",
      "Beautiful QR Menus",
      "Unlimited Menu Items",
      "Limited Customization",
      "1.5% Commission per order",
    ],
  },
  {
    type: "Business",
    price: "399 Dhs",
    subscription: "Month",
    description: "Ideal for restaurants with 80 covers",
    buttonText: "Choose Business",
    active: true,
    features: [
      "7 to 12 Tablets",
      "1 to 30 QR Codes",
      "Online Ordering",
      "Free updates",
      "4 Months support",
    ],
  },
  {
    type: "Custom",
    price: "Contact us",
    subscription: "",
    description: "Ideal for restaurants with less staffing.",
    buttonText: "Choose Professional",
    features: [
      "Translation in one additional language",
      "Calculate calories and nutritional",
      "Run ads campaigns",
      "Menu optimization ",
      "12 Months support",
    ],
  },
];

export const sampleJobs: SampleJobs[] = [
  {
    title: "Software Engineer",
    location: "Rabat, MA",
    type: "Full-time",
    datePosted: "May 1, 2024",
    description:
      "We're looking for talented individuals to join our team and help us achieve our mission.",
  },
  {
    title: "Product Manager",
    location: "Casablanca, MA",
    type: "Part-time",
    datePosted: "April 2, 2024",
    description: "We're looking for a product manager to join our team.",
  },
  {
    title: "UX Designer",
    location: "Meknes, MA",
    type: "Full-time",
    datePosted: "July 3, 2024",
    description: "We're looking for a UX designer to join our team.",
  },
  {
    title: "Data Scientist",
    location: "Los Angeles, CA",
    type: "Contract",
    datePosted: "December 4, 2024",
    description: "We're looking for a data scientist to join our team.",
  },
  {
    title: "Marketing Specialist",
    location: "Austin, TX",
    type: "Full-time",
    datePosted: "March 17, 2024",
    description: "We're looking for a marketing specialist to join our team.",
  },
  {
    title: "Machine Learning Engineer",
    location: "Kenitra, MA",
    type: "Full-time",
    datePosted: "February 10, 2024",
    description:
      "We're looking for a machine learning engineer to join our team.",
  },
];
