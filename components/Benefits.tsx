import { CircleCheck, CircleX } from "lucide-react";
import { useTranslation } from "react-i18next";

  
  export default function Benefits() {
  const {t}  = useTranslation("global")

const benefitsContent = [
  {
    title: "Garista",
    benefits: [
      { benefit: t('Low cost'), check: true },
      { benefit: t("Self manageable"), check: true },
      { benefit: t("Advanced functionality"), check: true },
      { benefit: t("Accessible everywhere"), check: true },
      { benefit: t("View on own device"), check: true },
      { benefit: t("Digitally available"), check: true },
    ],
  },
  
  {
    title: t( "Static website"),
    benefits: [
      { benefit: t("Low cost"), check: false },
      { benefit: t("Self manageable"), check: false },
      { benefit: t("Advanced functionality"), check: false },
      { benefit: t("Accessible everywhere"), check: true },
      { benefit: t("View on own device"), check: true },
      { benefit: t("Digitally available"), check: true },
    ],
  },
  
  {
    title: t("Menu on tablet"),
    benefits: [
      { benefit: t("Low cost"), check: false },
      { benefit: t("Self manageable"), check: false },
      { benefit: t("Advanced functionality"), check: false },
      { benefit: t("Accessible everywhere"), check: false },
      { benefit: t("View on own device"), check: true },
      { benefit: t("Digitally available"), check: true },
    ],
  },
  
  {
    title: t("Printed menu"),
    benefits: [
      { benefit: t("Low cost"), check: false },
      { benefit: t("Self manageable"), check: false },
      { benefit: t("Advanced functionality"), check: false },
      { benefit: t("Accessible everywhere"), check: false },
      { benefit: t("View on own device"), check: false },
      { benefit: t("Digitally available"), check: false },
    
    ],
  },
];
  return (
    <div id="Benefits" className="container md:px-8 px-4">
      <div className="pb-[180px]">
        <div className="text-center mb-14">
          <span className="inline-block text-primaryColor font-medium md:text-lg text-base mb-1">
          {t("Your Digital Menu")}
          </span>
          <h3 className="md:text-3xl text-xl font-medium">
  {t("Why Choose Garista?")}
</h3>
        </div>

        <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 xl:gap-0 items-center justify-center">
          {benefitsContent.map((content, i) => (
            <div key={i} className="relative border-x-primaryOne flex-1">
              <div
                className={`text-center border-t border-l border-r ${
                  content.title === "Garista"
                    ? "bg-primaryColor border-primaryColor"
                    : "bg-secondaryBg/10  border-primaryOne"
                }`}
              >
                <h5
                  className={`${
                    content.title === "Garista"
                      ? "text-primaryBg"
                      : "text-secondaryBg"
                  } text-sm font-medium py-7`}
                >
                  {content.title}
                </h5>
              </div>

              <ul className={`border-b border-l ${i === 3 && "xl:border-r"}`}>
                {content.benefits.map((benefitContent, i) => (
                  <li
                    key={i}
                    className="flex flex-nowrap flex-row gap-x-4 p-5 xl:border-r-0 border-t border-r border-primaryOne"
                  >
                    {benefitContent.check ? (
                      <CircleCheck size={19} strokeWidth={2} color="green" />
                    ) : (
                      <CircleX size={19} strokeWidth={2} color="red" />
                    )}
                    <span className="text-sm font-medium">
                      {benefitContent.benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
