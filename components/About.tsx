import React, { useRef, useEffect } from "react";
import { ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { useTranslation } from "react-i18next";

export default function About() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoContainerRef = useRef(null);
  const { t } = useTranslation("global");

  useEffect(() => {
    const videoNode = videoRef.current;
    const videoContainerNode = videoContainerRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!videoNode) return;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoNode.play(); // Play the video if the video section is in view
          } else {
            videoNode.pause(); // Pause the video if the video section is out of view
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    if (videoContainerNode) {
      observer.observe(videoContainerNode);
    }

    return () => {
      if (videoContainerNode) {
        observer.unobserve(videoContainerNode);
      }
    };
  }, []);

  return (
    <div id="About" className="container md:px-8 px-4">
      <div className="lg:pt-[150px] md:pt-[100px] pt-[80px]">
        <div className="flex flex-nowrap flex-col gap-y-20 items-center justify-start">
          <div className="w-full relative flex lg:flex-row flex-col flex-nowrap justify-center items-start xl:gap-x-20 md:gap-x-8">
            <div className="flex flex-col md:gap-y-8 gap-y-6 items-start justify-start lg:max-w-[470px] md:mr-14">
              <span className="text-primaryColor text-xs border border-primaryColor px-2 py-1 rounded-3xl">
                {t("About Garista Solution")}
              </span>

              <h3 className="lg:text-5xl md:text-4xl text-3xl font-semibold">
                <span className="text-primaryColor">{t("Create")}</span>,{" "}
                <span className="text-primaryColor">{t("Customize")}</span>,{" "}
                {t("and")}{" "}
                <span className="text-primaryColor">{t("Manage")}</span>{" "}
                {t("your menus with ease")}
              </h3>

              <div className="relative w-auto group">
                <Button className="flex flex-row items-center justify-center gap-x-2">
                  {t("Discover Now")}
                  <ChevronRight
                    size={19}
                    strokeWidth={2}
                    className="group-hover:translate-x-1 transition-transform duration-300"
                  />
                </Button>
              </div>
            </div>

            <div className="relative flex flex-col justify-center items-center gap-y-10 lg:pt-[70px] pt-10">
              <div className="lg:max-w-[580px]">
                <p className="text-left lg:text-[22px] md:text-xl text-lg font-medium">
                  {t(
                    "A leading digital menu solution for restaurants and cafes, offering innovative tools to enhance digital presence and streamline operations. Our mission is to revolutionize dining with an intuitive, user-friendly platform for full menu control."
                  )}
                </p>
              </div>

              <div className="w-full grid lg:grid-cols-3 grid-cols-3 justify-center gap-8">
                <div className="flex flex-col flex-nowrap items-start justify-start">
                  <h3 className="text-primaryColor md:text-lg text-base font-medium tracking-wide">
                    {t("Eco friendly")}
                  </h3>
                </div>

                <div className="flex flex-col flex-nowrap items-start justify-start">
                  <h3 className="text-primaryColor md:text-lg text-base font-medium tracking-wide">
                    {t("Reduce Time")}
                  </h3>
                </div>

                <div className="flex flex-col flex-nowrap items-start justify-start">
                  <h3 className="text-primaryColor md:text-lg text-base font-medium tracking-wide">
                    {t("Lower Costs")}
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div ref={videoContainerRef} className="relative overflow-hidden">
            <video
              ref={videoRef}
              width="1020"
              autoPlay
              height="440"
              className="rounded-[25px]"
              muted
            >
              <source src="/video/next.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}