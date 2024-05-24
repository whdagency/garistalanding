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
  HomeIcon,
  StarIcon,
  ShoppingBagIcon,
  InfoIcon,
} from "lucide-react";

import {
  FaFacebook,
  FaInstagram,
  FaSnapchat,
  FaTiktok,
  FaBreadSlice,
} from "react-icons/fa";
import { BiDrink } from "react-icons/bi";
import { TbBowlSpoon, TbBurger, TbMeat, TbMessageQuestion } from "react-icons/tb";

// Interactive Menu Content
export const interactiveMenuContent: InteractiveMenuContent = {
  themeSelection: {
    selectedTheme: 1,
    selectedLayout: "theme-grid",
    selectedHeader: "logo-header",
    selectedBgColor: "#ffffff",
    selectedPrimaryColor: "#28509E",
    selectedSecondaryColor: "#262326",
  },
  name: "Savory Haven Bistro",
  description: "Savory Haven Bistro",
  image: "/Menu/theme-1.png",
  bannerImage: "/Menu/menu-banner-1.jpeg",
  profileBanner: "/Menu/menu-banner-1.jpeg",
  socials: [
    {
      name: "Facebook",
      icon: FaFacebook,
      url: "https://www.facebook.com/garista",
    },
    {
      name: "SnapChat",
      icon: FaSnapchat,
      url: "https://www.snapchat.com/garista",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      url: "https://www.instagram.com/garista",
    },
    {
      name: "TikTok",
      icon: FaTiktok,
      url: "https://www.tiktok.com/garista",
    },
  ],
  infoButton: "/Menu/info-button.png",
  categories: [
    {
      discount: Math.floor(Math.random() * 100),
      price: Math.floor(Math.random() * 80),
      description: "All Toppings",
      name: "Hamburger",
      catImage: "/Menu/1.png",
      currency: 'USD',
      id: "all",
    },
    {
      discount: Math.floor(Math.random() * 100),
      price: Math.floor(Math.random() * 80),
      description: "Delicious pizzas with a variety of toppings",
      name: "Pizza",
      catImage: "/Menu/4.png",
      currency: 'USD',
      id: "pizza",
    },
    {
      discount: Math.floor(Math.random() * 100),
      price: Math.floor(Math.random() * 80),
      description: "Crispy and flavorful fried chicken",
      name: "Chicken",
      catImage: "/Menu/5.png",
      currency: 'USD',
      id: "chicken",
    },
    {
      discount: Math.floor(Math.random() * 100),
      price: Math.floor(Math.random() * 80),
      description: "Stacked high with your favorite toppings.",
      name: "Burgers",
      catImage: "/Menu/1.png",
      currency: 'USD',
      id: "burgers",
    },
    {
      discount: Math.floor(Math.random() * 100),
      price: Math.floor(Math.random() * 80),
      description: "Authentic Italian pasta dishes",
      name: "Pasta",
      catImage: "/Menu/4.png",
      currency: 'USD',
      id: "pasta",
    },
    {
      discount: Math.floor(Math.random() * 100),
      price: Math.floor(Math.random() * 80),
      description: "Fresh and succulent seafood dishes",
      name: "Seafood",
      catImage: "/Menu/3.png",
      currency: 'USD',
      id: "seafood",
    },
    {
      discount: Math.floor(Math.random() * 100),
      price: Math.floor(Math.random() * 80),
      description: "Flavorful tacos",
      name: "Tacos",
      catImage: "/Menu/2.png",
      currency: 'USD',
      id: "tacos",
    },
    {
      discount: Math.floor(Math.random() * 100),
      price: Math.floor(Math.random() * 80),
      description: "Refreshing salads",
      name: "Salad",
      catImage: "/Menu/3.png",
      currency: 'USD',
      id: "salad",
    },
  ],
  menuButtons: [
    {
      name: "Home",
      icon: HomeIcon,
    },
    {
      name: "Rating",
      icon: StarIcon,
    },
    {
      name: "Claims",
      icon: TbMessageQuestion,
    },
    {
      name: "Cart",
      icon: ShoppingBagIcon,
    },
    {
      name: "Info",
      icon: InfoIcon,
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

// Features Info Content
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

// Partners Content
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

// Benefits Content
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

// Pricing Plan
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
    price: "399 USD",
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

// Jobs Content
export const sampleJobs: Job[] = [
  {
    jobEmailBody:
      "Dear Hiring Team, I am excited to apply for this position. Attached are my resume and portfolio. Looking forward to discussing this opportunity further.",
    jobLink: "Jobs@Garista.com",
    title: "Data Scientist",
    location: "Casablanca, MA",
    type: "Full-time",
    datePosted: `April 28, 2024`,
    description:
      "Seeking a data enthusiast to help us derive insights from complex data sets.",
  },
  {
    jobEmailBody:
      "Dear Hiring Team, I am excited to apply for this position. Attached are my resume and portfolio. Looking forward to discussing this opportunity further.",
    jobLink: "Jobs@Garista.com",
    title: "Graphic Designer",
    location: "Marrakech, MA",
    type: "Part-time",
    datePosted: "May 3, 2024",
    description:
      "Join our creative team to design stunning visuals for our digital products.",
  },
  {
    jobEmailBody:
      "Dear Hiring Team, I am excited to apply for this position. Attached are my resume and portfolio. Looking forward to discussing this opportunity further.",
    jobLink: "Jobs@Garista.com",
    title: "Product Manager",
    location: "Fes, MA",
    type: "Full-time",
    datePosted: "May 2, 2024",
    description:
      "Lead the development and launch of innovative products in a fast-paced environment.",
  },
  {
    jobEmailBody:
      "Dear Hiring Team, I am excited to apply for this position. Attached are my resume and portfolio. Looking forward to discussing this opportunity further.",
    jobLink: "Jobs@Garista.com",
    title: "Marketing Specialist",
    location: "Tangier, MA",
    type: "Contract",
    datePosted: "May 4, 2024",
    description:
      "Develop and execute marketing strategies to drive brand awareness and growth.",
  },
  {
    jobEmailBody:
      "Dear Hiring Team, I am excited to apply for this position. Attached are my resume and portfolio. Looking forward to discussing this opportunity further.",
    jobLink: "Jobs@Garista.com",
    title: "Sales Representative",
    location: "Agadir, MA",
    type: "Full-time",
    datePosted: "April 30, 2024",
    description:
      "We need a dynamic salesperson to grow our customer base and drive revenue.",
  },
  {
    jobEmailBody:
      "Dear Hiring Team, I am excited to apply for this position. Attached are my resume and portfolio. Looking forward to discussing this opportunity further.",
    jobLink: "Jobs@Garista.com",
    title: "HR Manager",
    location: "Tetouan, MA",
    type: "Full-time",
    datePosted: "May 1, 2024",
    description:
      "Manage our HR operations and contribute to building a positive work culture.",
  },
  {
    jobEmailBody:
      "Dear Hiring Team, I am excited to apply for this position. Attached are my resume and portfolio. Looking forward to discussing this opportunity further.",
    jobLink: "Jobs@Garista.com",
    title: "Customer Support Specialist",
    location: "Oujda, MA",
    type: "Remote",
    datePosted: "April 29, 2024",
    description:
      "Provide exceptional support to our customers and ensure their satisfaction.",
  },
  {
    jobEmailBody:
      "Dear Hiring Team, I am excited to apply for this position. Attached are my resume and portfolio. Looking forward to discussing this opportunity further.",
    jobLink: "Jobs@Garista.com",
    title: "Business Analyst",
    location: "Kenitra, MA",
    type: "Full-time",
    datePosted: "May 5, 2024",
    description:
      "Analyze business processes and help us improve efficiency and effectiveness.",
  },
  {
    jobEmailBody:
      "Dear Hiring Team, I am excited to apply for this position. Attached are my resume and portfolio. Looking forward to discussing this opportunity further.",
    jobLink: "Jobs@Garista.com",
    title: "UI/UX Designer",
    location: "Meknes, MA",
    type: "Full-time",
    datePosted: "May 2, 2024",
    description:
      "Design intuitive and engaging user interfaces for our web and mobile applications.",
  },
  {
    jobEmailBody:
      "Dear Hiring Team, I am excited to apply for this position. Attached are my resume and portfolio. Looking forward to discussing this opportunity further.",
    jobLink: "Jobs@Garista.com",
    title: "DevOps Engineer",
    location: "Safi, MA",
    type: "Full-time",
    datePosted: "April 28, 2024",
    description:
      "Join our tech team to streamline our development and deployment processes.",
  },
  {
    jobEmailBody:
      "Dear Hiring Team, I am excited to apply for this position. Attached are my resume and portfolio. Looking forward to discussing this opportunity further.",
    jobLink: "Jobs@Garista.com",
    title: "Financial Analyst",
    location: "El Jadida, MA",
    type: "Full-time",
    datePosted: "May 3, 2024",
    description:
      "Help us make informed financial decisions through detailed analysis and reporting.",
  },
  {
    jobEmailBody:
      "Dear Hiring Team, I am excited to apply for this position. Attached are my resume and portfolio. Looking forward to discussing this opportunity further.",
    jobLink: "Jobs@Garista.com",
    title: "Content Writer",
    location: "Nador, MA",
    type: "Part-time",
    datePosted: "May 1, 2024",
    description:
      "Create compelling content for our blogs, social media, and marketing materials.",
  },
  {
    jobEmailBody:
      "Dear Hiring Team, I am excited to apply for this position. Attached are my resume and portfolio. Looking forward to discussing this opportunity further.",
    jobLink: "Jobs@Garista.com",
    title: "Operations Manager",
    location: "Khemisset, MA",
    type: "Full-time",
    datePosted: "April 30, 2024",
    description:
      "Oversee daily operations and ensure our business runs smoothly and efficiently.",
  },
  {
    jobEmailBody:
      "Dear Hiring Team, I am excited to apply for this position. Attached are my resume and portfolio. Looking forward to discussing this opportunity further.",
    jobLink: "Jobs@Garista.com",
    title: "Mobile App Developer",
    location: "Taza, MA",
    type: "Full-time",
    datePosted: "May 4, 2024",
    description:
      "Develop and maintain high-quality mobile applications for our growing user base.",
  },
  {
    jobEmailBody:
      "Dear Hiring Team, I am excited to apply for this position. Attached are my resume and portfolio. Looking forward to discussing this opportunity further.",
    jobLink: "Jobs@Garista.com",
    title: "IT Support Technician",
    location: "Beni Mellal, MA",
    type: "Full-time",
    datePosted: "April 29, 2024",
    description:
      "Provide technical support and troubleshoot issues for our employees.",
  },
  {
    jobEmailBody:
      "Dear Hiring Team, I am excited to apply for this position. Attached are my resume and portfolio. Looking forward to discussing this opportunity further.",
    jobLink: "Jobs@Garista.com",
    title: "Digital Marketing Manager",
    location: "Errachidia, MA",
    type: "Full-time",
    datePosted: "May 2, 2024",
    description:
      "Lead our digital marketing efforts to drive online engagement and sales.",
  },
  {
    jobEmailBody:
      "Dear Hiring Team, I am excited to apply for this position. Attached are my resume and portfolio. Looking forward to discussing this opportunity further.",
    jobLink: "Jobs@Garista.com",
    title: "Supply Chain Coordinator",
    location: "Ksar El Kebir, MA",
    type: "Full-time",
    datePosted: "May 3, 2024",
    description:
      "Manage our supply chain operations to ensure timely delivery of products.",
  },
  {
    jobEmailBody:
      "Dear Hiring Team, I am excited to apply for this position. Attached are my resume and portfolio. Looking forward to discussing this opportunity further.",
    jobLink: "Jobs@Garista.com",
    title: "Legal Advisor",
    location: "Larache, MA",
    type: "Full-time",
    datePosted: "April 30, 2024",
    description:
      "Provide legal advice and support to ensure compliance with regulations.",
  },
  {
    jobEmailBody:
      "Dear Hiring Team, I am excited to apply for this position. Attached are my resume and portfolio. Looking forward to discussing this opportunity further.",
    jobLink: "Jobs@Garista.com",
    title: "Cybersecurity Analyst",
    location: "Guelmim, MA",
    type: "Full-time",
    datePosted: "May 1, 2024",
    description:
      "Protect our systems and data from cyber threats and vulnerabilities.",
  },
  {
    jobEmailBody:
      "Dear Hiring Team, I am excited to apply for this position. Attached are my resume and portfolio. Looking forward to discussing this opportunity further.",
    jobLink: "Jobs@Garista.com",
    title: "Project Manager",
    location: "Ouarzazate, MA",
    type: "Full-time",
    datePosted: "May 4, 2024",
    description:
      "Lead and manage projects to ensure they are completed on time and within budget.",
  },
];
