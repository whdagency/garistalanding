import { Copy } from "lucide-react";

const featuresInfo = [
  {
    icon: <Copy size={19} strokeWidth={2} />,
    title: "Fully customizable menus",
    description: "Easily customize menu designs, colors, and layouts.",
  },
  {
    icon: <Copy size={19} strokeWidth={2} />,
    title: "Client behavior tracking",
    description: "Gain insights into customer preferences and ordering trends.",
  },
  {
    icon: <Copy size={19} strokeWidth={2} />,
    title: "Seamless order management",
    description: "Manage orders in real-time and streamline operations.",
  },
  {
    icon: <Copy size={19} strokeWidth={2} />,
    title: "Menu themes",
    description:
      "Choose from a variety of professionally designed menu themes.",
  },
  {
    icon: <Copy size={19} strokeWidth={2} />,
    title: "QR code generation",
    description: "Generate QR codes for easy menu access at tables.",
  },
  {
    icon: <Copy size={19} strokeWidth={2} />,
    title: "Social media integration",
    description: "Integrate social media profiles to engage with customers.",
  },
  {
    icon: <Copy size={19} strokeWidth={2} />,
    title: "Contact information display",
    description: "Display contact details for easy customer communication.",
  },
  {
    icon: <Copy size={19} strokeWidth={2} />,
    title: "Feedback submission",
    description:
      "Allow customers to provide feedback directly through the menu.",
  },
  {
    icon: <Copy size={19} strokeWidth={2} />,
    title: "Dish and service claims",
    description:
      "Enable customers to make claims or suggestions about dishes or service.",
  },
];

export default function Features() {
  return (
    <div id="Features" className="container md:px-8 px-4">
      <div className="lg:pt-[150px] md:pt-[100px] pt-[80px] pb-[80px]">
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-rows-3 gap-10 place-items-center pt-5">
          {featuresInfo.map((f, i) => (
            <div
              key={i}
              className="relative flex flex-col flex-nowrap items-start justify-start gap-y-3"
            >
              <div className="w-fit mr-auto">{f.icon}</div>
              <h4 className="text-base font-medium">{f.title}</h4>
              <div className="relative w-[272px] h-[52px]">
                <p className="text-[13px] text-primaryTwo font-medium ">
                  {f.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="h-[1px] w-full homeFooter"></div>
    </div>
  );
}
