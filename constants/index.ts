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
  FaYoutube,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { BiDrink } from "react-icons/bi";
import {
  TbBowlSpoon,
  TbBurger,
  TbMeat,
  TbMessageQuestion,
} from "react-icons/tb";

import anim1 from "@/components/lottie/customize-menu-2.json" assert { type: "json" };
import anim2 from "@/components/lottie/customize-menu-3.json" assert { type: "json" };
import anim3 from "@/components/lottie/customize-menu-4.json" assert { type: "json" };
import anim4 from "@/components/lottie/customize-menu-1.json" assert { type: "json" };

// Footer Sections
export const footerSections: FooterSection[] = [
  {
    title: "Services",
    links: [
      {
        name: "Pay at Table",
        href: "#",
      },
      {
        name: "Order & Pay",
        href: "#",
      },
      {
        name: "Click & Collect",
        href: "#",
      },
    ],
  },
  {
    title: "Garista",
    links: [
      {
        name: "Partners & Integrations",
        href: "/#Partners",
      },
      {
        name: "Who we are",
        href: "/#About",
      },
      {
        name: "Pricing",
        href: "/#Pricing",
      },
    ],
  },
  {
    title: "Resources",
    links: [
      {
        name: "Documentation",
        href: "/docs",
        blank: true,
      },
      {
        name: "Blog",
        href: "/articles",
      },
      {
        name: "Careers",
        href: "/jobs",
      },
    ],
  },
  {
    title: "Sectors",
    links: [
      {
        name: "Fast Food",
        href: "#",
      },
      {
        name: "Cafe",
        href: "#",
      },
      {
        name: "Restaurant",
        href: "#",
      },
    ],
  },
];

// Footer Socials
export const footerSocials = [
  {
    icon: FaFacebook,
    url: "https://facebook.com/garista.official",
    id: "facebook",
  },
  {
    icon: FaYoutube,
    url: "https://youtube.com/@garista.official",
    id: "youtube",
  },
  {
    icon: FaInstagram,
    url: "https://instagram.com/garista.official",
    id: "instagram",
  },
  {
    icon: FaLinkedin,
    url: "https://www.linkedin.com/company/garistaofficial/",
    id: "linkedin",
  },
  {
    icon: FaTwitter,
    url: "https://x.com/garistaofficial",
    id: "twitter",
  },
];

// About Us Content
export const aboutUsContent: AboutUsContent[] = [
  {
    type: "display",
    items: [
      {
        title: "Elevate Your Guests' Experience",
        description:
          "Upgrade the visual allure of your restaurant with our elegant and fully customizable menu solutions. Craft a memorable dining experience that captivates your diners and brings your culinary vision and brand to life.",
      },
      {
        title: "Enhance Guest Well-Being and Boost Value",
        description:
          "With Garista, you can take additional measures to safeguard your guests. Offer allergen, calorie, and nutritional information for each dish to help them make informed and safe choices. Blend aesthetics with valuable information to increase order value by up to 40%.",
      },
    ],
  },
  {
    type: "order",
    items: [
      {
        title: "Seamless Order Management",
        description:
          "Manage your orders in real-time and streamline your operations with our intuitive and user-friendly order management system. Ensure timely delivery of your orders and enhance your customer experience with our advanced order tracking and notification features.",
      },
      {
        title: "Enhanced Customer Experience",
        description:
          "With our intuitive and user-friendly order management system, you can easily manage your orders in real-time. Our advanced order tracking and notification features ensure a seamless and efficient customer experience.",
      },
    ],
  },
  {
    type: "manage",
    items: [
      {
        title: "Streamlined Menu Management",
        description:
          "With our intuitive and user-friendly menu management system, you can easily manage your menus and create a personalized experience for your customers. Our advanced menu customization features allow you to tailor your menus to your specific needs and preferences.",
      },
      {
        title: "Enhanced Customer Experience",
        description:
          "With our intuitive and user-friendly menu management system, you can easily manage your menus and create a personalized experience for your customers. Our advanced menu customization features allow you to tailor your menus to your specific needs and preferences.",
      },
    ],
  },
  {
    type: "market",
    items: [
      {
        title: "Seamless Integration",
        description:
          "With our intuitive and user-friendly menu management system, you can easily manage your menus and create a personalized experience for your customers. Our advanced menu customization features allow you to tailor your menus to your specific needs and preferences.",
      },
      {
        title: "Enhanced Customer Experience",
        description:
          "With our intuitive and user-friendly menu management system, you can easily manage your menus and create a personalized experience for your customers. Our advanced menu customization features allow you to tailor your menus to your specific needs and preferences.",
      },
    ],
  },
];

// About Us Content - How It Works
export const aboutUsSteps = [
  {
    stepTitle: "Efficient Menu Management",
    title: "Efficient Menu Management",
    description:
      "Easily customize your menu with just a few clicks. Update dishes, prices, and descriptions in real-time without any design or coding skills. Keep your offerings fresh and exciting to attract more customers.",
    icon: anim1,
  },
  {
    stepTitle: "Boosted Customer Engagement",
    title: "Boosted Customer Engagement",
    description:
      "Connect with your customers like never before. Utilize QR code menus, gather feedback, and allow guests to place orders directly from their smartphones. Improve the dining experience and build stronger customer relationships.",
    icon: anim2,
  },
  {
    stepTitle: "Powerful Marketing Tools",
    title: "Powerful Marketing Tools",
    description:
      "Boost your visibility and attract new customers with integrated marketing features. Promote special offers, share updates on social media, and analyze customer behavior to optimize your marketing strategies effectively.",
    icon: anim3,
  },
  {
    stepTitle: "Comprehensive Restaurant Management",
    title: "Comprehensive Restaurant Management",
    description:
      "Streamline operations with Garista’s platform. Manage orders, track performance, and gain insights from one dashboard. Simplify management and focus on delivering great food and service.",
    icon: anim4,
  },
];

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
      currency: "USD",
      id: "all",
    },
    {
      discount: Math.floor(Math.random() * 100),
      price: Math.floor(Math.random() * 80),
      description: "Delicious pizzas with a variety of toppings",
      name: "Pizza",
      catImage: "/Menu/4.png",
      currency: "USD",
      id: "pizza",
    },
    {
      discount: Math.floor(Math.random() * 100),
      price: Math.floor(Math.random() * 80),
      description: "Crispy and flavorful fried chicken",
      name: "Chicken",
      catImage: "/Menu/5.png",
      currency: "USD",
      id: "chicken",
    },
    {
      discount: Math.floor(Math.random() * 100),
      price: Math.floor(Math.random() * 80),
      description: "Stacked high with your favorite toppings.",
      name: "Burgers",
      catImage: "/Menu/1.png",
      currency: "USD",
      id: "burgers",
    },
    {
      discount: Math.floor(Math.random() * 100),
      price: Math.floor(Math.random() * 80),
      description: "Authentic Italian pasta dishes",
      name: "Pasta",
      catImage: "/Menu/4.png",
      currency: "USD",
      id: "pasta",
    },
    {
      discount: Math.floor(Math.random() * 100),
      price: Math.floor(Math.random() * 80),
      description: "Fresh and succulent seafood dishes",
      name: "Seafood",
      catImage: "/Menu/3.png",
      currency: "USD",
      id: "seafood",
    },
    {
      discount: Math.floor(Math.random() * 100),
      price: Math.floor(Math.random() * 80),
      description: "Flavorful tacos",
      name: "Tacos",
      catImage: "/Menu/2.png",
      currency: "USD",
      id: "tacos",
    },
    {
      discount: Math.floor(Math.random() * 100),
      price: Math.floor(Math.random() * 80),
      description: "Refreshing salads",
      name: "Salad",
      catImage: "/Menu/3.png",
      currency: "USD",
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
  { src: "/Partners/bam.png" },
  { src: "/Partners/hunger-station.png" },
  { src: "/Partners/tahiri.png" },
  { src: "/Partners/hot-spicy.png" },
  { src: "/Partners/relax.png" },
  { src: "/Partners/burger.png" },
  { src: "/Partners/entre.png" },
  { src: "/Partners/fast-food.png" },
  { src: "/Partners/riassi.png" },
  { src: "/Partners/g-k.png" },
  { src: "/Partners/borcelle.png" },
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

// Key Advantages
export const keyAdvantages: KeyAdvantages[] = [
  {
    content:
      "Faster service! Digital menus can significantly reduce your customers wait times",
    reduction: "70%",
    bgColor: "#1E1E1C",
    textColor: "#ffffff",
  },
  {
    content:
      "Diminished Staff Stress by automating order entry and reducing workload.",
    reduction: "55%",
    textColor: "#1E1E1C",
  },
  {
    content:
      "The integrated loyalty program tracks regular customer habits, offers rewards, and boosts customer loyalty while simplifying program management for staff.",
    textColor: "#1E1E1C",
  },
  {
    content:
      "Easy and quick digital payment methods reduce processing time and minimize errors associated with cash or card payments, enhancing service efficiency.",
    textColor: "#1E1E1C",
  },
  {
    content:
      "Menu updates in real-time, ensuring customers always have the latest menu offerings.",
    reduction: "100%",
    bgColor: "#6380DA",
    textColor: "#ffffff",
  },
  {
    content:
      "More customers prefer digital payments over cash or card payments. ",
    reduction: "68%",
    bgColor: "#ffffff",
    textColor: "#1E1E1C",
  },
];

// Pricing Plan
export const pricingPlan: PricingPlan[] = [
  {
    type: "Silver",
    price: "$35",
    priceYearly: "$25",
    subscription: "Lifetime",
    description: "Keep your guest and restaurant staff safe",
    buttonText: "Choose plan",
    features: [
      {
        name: "20 Tables",
        icon: "/icons/check-circle.svg",
      },
      {
        name: "2 themes",
        icon: "/icons/check-circle.svg",
      },
      {
        name: "Staff Management",
        icon: "/icons/check-circle.svg",
      },
      {
        name: "Payment Integration",
        icon: "/icons/cross-circle.svg",
      },
      {
        name: "POS Integration",
        icon: "/icons/cross-circle.svg",
      },
      {
        name: "Free Garista POS",
        icon: "/icons/cross-circle.svg",
      },
    ],
  },
  {
    type: "Gold",
    price: "$55",
    priceYearly: "$45",
    subscription: "Month",
    description: "Ideal for restaurants with 80 covers",
    buttonText: "Choose plan",
    active: true,
    features: [
      {
        name: "30 Tables",
        icon: "/icons/check-circle-white.svg",
      },
      {
        name: "4 themes",
        icon: "/icons/check-circle-white.svg",
      },
      {
        name: "Staff Management",
        icon: "/icons/check-circle-white.svg",
      },
      {
        name: "Payment Integration",
        icon: "/icons/check-circle-white.svg",
      },
      {
        name: "POS Integration",
        icon: "/icons/check-circle-white.svg",
      },
      {
        name: "Free Garista POS",
        icon: "/icons/cross-circle-white.svg",
      },
    ],
  },
  {
    type: "Platinum",
    price: "$95",
    priceYearly: "$85",
    subscription: "",
    description: "Ideal for restaurants with more staffing.",
    buttonText: "Choose plan",
    features: [
      {
        name: "60 Tables",
        icon: "/icons/check-circle.svg",
      },
      {
        name: "VIP Themes",
        icon: "/icons/check-circle.svg",
      },
      {
        name: "Staff Management",
        icon: "/icons/check-circle.svg",
      },
      {
        name: "Payment Integration",
        icon: "/icons/check-circle.svg",
      },
      {
        name: "POS Integration",
        icon: "/icons/check-circle.svg",
      },
      {
        name: "Free Garista POS",
        icon: "/icons/check-circle.svg",
      },
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
