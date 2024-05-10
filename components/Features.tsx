import { featuresInfo } from "@/constants";
import { useTranslation } from "react-i18next";

export default function Features() {
  const { t } = useTranslation("global");

  return (
    <div id="Features" className="container md:px-8 px-4">
      <div className="lg:pt-[150px] md:pt-[100px] pt-[80px] pb-[80px]">
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-rows-3 gap-10 place-items-center pt-5">
          {featuresInfo.map((f, i) => (
            <div
              key={i}
              className="relative flex flex-col flex-nowrap items-start justify-start gap-y-3"
            >
              <div className="w-fit mr-auto">
                <f.icon size={19} strokeWidth={2} />
              </div>
              <h4 className="text-base font-medium">{t(f.title)}</h4>

              <div className="relative w-[272px] h-[52px]">
                <p className="text-[13px] text-primaryTwo font-medium ">
                  {t(f.description)}
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
