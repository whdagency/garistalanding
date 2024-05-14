import {
  BarChart3,
  Contact,
  ListChecks,
  MessageSquareText,
  Palette,
  PencilRuler,
  QrCode,
  Share2,
  Pizza,
  Sandwich,
  Speech,
} from "lucide-react";
import {
  FaFacebook,
  FaInstagram,
  FaSnapchat,
  FaTiktok,
  FaBreadSlice,
} from "react-icons/fa";
import { BiSolidFoodMenu, BiDrink } from "react-icons/bi";
import { TbMessage2Cog, TbBowlSpoon, TbBurger, TbMeat } from "react-icons/tb";
import { PiCallBell } from "react-icons/pi";

export const interactiveMenuContent: InteractiveMenuContent = {
  themeSelection: {
    selectedTheme: 1,
    selectedLayout: "theme-grid",
    selectedHeader: "logo-header",
    selectedBgColor: "#ffffff",
    selectedPrimaryColor: "#262326",
    selectedSecondaryColor: "#dddddd",
  },
  name: "Theme 1",
  description: "This is theme 1",
  image: "/Menu/theme-1.png",
  bannerImage: "/Menu/menu-banner-1.jpeg",
  profileBanner: "/Menu/menu-banner-1.jpeg",
  socials: [
    {
      name: "Facebook",
      icon: FaFacebook,
      url: "https://www.facebook.com/",
    },
    {
      name: "SnapChat",
      icon: FaSnapchat,
      url: "https://www.snapchat.com/",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      url: "https://www.instagram.com/",
    },
    {
      name: "TikTok",
      icon: FaTiktok,
      url: "https://www.tiktok.com/",
    },
  ],
  infoButton: "/Menu/info-button.png",
  categories: [
    {
      discount: Math.floor(Math.random() * 100),
      price: Math.floor(Math.random() * 80),
      description: "Delicious pizzas with a variety of toppings",
      name: "Pizza",
      catImage: "/Menu/4.png",
      id: "pizza",
    },
    {
      discount: Math.floor(Math.random() * 100),
      price: Math.floor(Math.random() * 80),
      description: "Crispy and flavorful fried chicken",
      name: "Fried Chicken",
      catImage: "/Menu/5.png",
      id: "fried-chicken",
    },
    {
      discount: Math.floor(Math.random() * 100),
      price: Math.floor(Math.random() * 80),
      description: "Stacked high with your favorite toppings.",
      name: "Burgers",
      catImage: "/Menu/1.png",
      id: "burgers",
    },
    {
      discount: Math.floor(Math.random() * 100),
      price: Math.floor(Math.random() * 80),
      description: "Authentic Italian pasta dishes",
      name: "Pasta",
      catImage: "/Menu/4.png",
      id: "pasta",
    },
    {
      discount: Math.floor(Math.random() * 100),
      price: Math.floor(Math.random() * 80),
      description: "Fresh and succulent seafood dishes",
      name: "Seafood",
      catImage: "/Menu/3.png",
      id: "seafood",
    },
    {
      discount: Math.floor(Math.random() * 100),
      price: Math.floor(Math.random() * 80),
      description: "Flavorful tacos",
      name: "Tacos",
      catImage: "/Menu/2.png",
      id: "tacos",
    },
    {
      discount: Math.floor(Math.random() * 100),
      price: Math.floor(Math.random() * 80),
      description: "Refreshing salads",
      name: "Salad",
      catImage: "/Menu/3.png",
      id: "salad",
    },
  ],
  menuButtons: [
    {
      name: "menu",
      icon: BiSolidFoodMenu,
    },
    {
      name: "feedback",
      icon: TbMessage2Cog,
    },
    {
      name: "call",
      icon: PiCallBell,
    },
  ],
  menuCategories: [
    {
      name: "All",
      icon: TbBowlSpoon,
    },
    {
      name: "Steaks",
      icon: TbMeat,
    },
    {
      name: "Pizzas",
      icon: Pizza,
    },
    {
      name: "Burgers",
      icon: TbBurger,
    },
    {
      name: "Sandwiches",
      icon: Sandwich,
    },
    {
      name: "Juice",
      icon: BiDrink,
    },
    {
      name: "Tacos",
      icon: FaBreadSlice,
    },
  ],
};

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

export const sampleJobs: Job[] = [
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
