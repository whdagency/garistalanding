import {
  BarChart3,
  Contact,
  Copy,
  ListChecks,
  MessageSquareText,
  Palette,
  PencilRuler,
  QrCode,
  Share2,
  Speech,
} from "lucide-react";
import { useTranslation } from "react-i18next";


export default function Features() {
  const {t}  = useTranslation("global")

  const featuresInfo = 
    [
      {
        icon: <PencilRuler size={19} strokeWidth={2} />,
        title: t('Fully customizable menus'),
        description: t('Easily customize menu designs, colors, and layouts.'),
      },
      {
        icon: <BarChart3 size={19} strokeWidth={2} />,
        title: t('Client behavior tracking'),
        description: t('Gain insights into customer preferences and ordering trends.'),
      },
      {
        icon: <ListChecks size={19} strokeWidth={2} />,
        title: t('Seamless order management'),
        description: t('Manage orders in real-time and streamline operations.'),
      },
      {
        icon: <Palette size={19} strokeWidth={2} />,
        title: t('Menu themes'),
        description: t('Choose from a variety of professionally designed menu themes.'),
      },
      {
        icon: <QrCode size={19} strokeWidth={2} />,
        title: t('QR code generation'),
        description: t('Generate QR codes for easy menu access at tables.'),
      },
      {
        icon: <Share2 size={19} strokeWidth={2} />,
        title: t('Social media integration'),
        description: t('Integrate social media profiles to engage with customers.'),
      },
      {
        icon: <Contact size={19} strokeWidth={2} />,
        title: t('Contact information display'),
        description: t('Display contact details for easy customer communication.'),
      },
      {
        icon: <MessageSquareText size={19} strokeWidth={2} />,
        title: t('Feedback submission'),
        description: t('Allow customers to provide feedback directly through the menu.'),
      },
      {
        icon: <Speech size={19} strokeWidth={2} />,
        title: t('Dish and service claims'),
        description: t('Enable customers to make claims or suggestions about dishes or service.'),
      },
    ]
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
