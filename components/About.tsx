import InteractiveMenu from "@/components/InteractiveMenu";
import { aboutUsContent } from "@/constants";
import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const tabs: AboutUsTab[] = ["display", "order", "manage", "market"];

export default function About() {
  const [selectedTab, setSelectedTab] = useState<AboutUsTab>(tabs[0]);
  const { t } = useTranslation("global");
  // const videoRef = useRef<HTMLVideoElement>(null);
  // const videoContainerRef = useRef(null);

  // useEffect(() => {
  //   const videoNode = videoRef.current;
  //   const videoContainerNode = videoContainerRef.current;

  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       if (!videoNode) return;
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           videoNode.play(); // Play the video if the video section is in view
  //         } else {
  //           videoNode.pause(); // Pause the video if the video section is out of view
  //         }
  //       });
  //     },
  //     {
  //       root: null,
  //       rootMargin: "0px",
  //       threshold: 0.5,
  //     }
  //   );

  //   if (videoContainerNode) {
  //     observer.observe(videoContainerNode);
  //   }

  //   return () => {
  //     if (videoContainerNode) {
  //       observer.unobserve(videoContainerNode);
  //     }
  //   };
  // }, []);

  return (
    <div
      id="Features"
      className="container md:px-8 px-4 mt-20 rounded-[50px] md:rounded-[100px] bg-white mb-20"
    >
      <div className="lg:pt-[100px] md:pt-[7px] pt-[50px]">
        <div className="flex flex-nowrap flex-col gap-y-20 items-center justify-start bg-white rounded-[100px] pt-10 pb-[100px]">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col items-center gap-5 text-center">
              <h2 className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-semibold max-w-3xl capitalize">
                <span className="text-primaryColor">{t("Create")}</span>,{" "}
                <span className="text-primaryColor">{t("Customize")}</span>,{" "}
                {t("and")}{" "}
                <span className="text-primaryColor">{t("Manage")}</span>{" "}
                {t("your menus with ease")}
              </h2>

              {/* Tabs */}
              <div className="text-center mt-5 w-fit rounded-full bg-white border-primaryColor/50 border p-2">
                <div className="flex items-center justify-center gap-4">
                  {tabs.map((tab, index) => (
                    <button
                      key={index}
                      className={`
                        "flex flex-row items-center justify-center gap-x-2 py-2 px-4 rounded-full cursor-pointer",
                        ${selectedTab === tab ? "bg-primaryColor text-white" : "text-primaryColor"}
                      )`}
                      onClick={() => setSelectedTab(tab)}
                    >
                      <span className="capitalize text-sm md:text-base font-semibold">
                        {tab}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Tab Content */}
            <div className="flex flex-col gap-10 lg:flex-row lg:gap-16 p-5 xl:p-10 relative">
              {/* Tab Content */}
              <div className="flex flex-col col-span-1 order-2 lg:order-1">
                {aboutUsContent
                  .filter((content) => content.type === selectedTab)
                  .map((content, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center lg:items-start gap-10"
                    >
                      {content.items.map((item, index) => (
                        <div
                          key={index}
                          className="flex flex-col gap-y-4 text-center lg:text-left"
                        >
                          <h3 className="text-black text-xl lg:text-2xl xl:text-[28px] 2xl:text-[32px] font-extrabold tracking-wide">
                            {item.title}
                          </h3>

                          <p className="text-[#5A586A] text-center text-base lg:text-left lg:text-lg 2xl:text-[26px] font-medium">
                            {item.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  ))}
              </div>

              {/* Interactive Menu */}
              <div className="order-1 w-full lg:order-2 flex flex-col items-center lg:block">
                <Image
                  src="/assets/about-us-menu.png"
                  alt="Interactive Menu"
                  width={400}
                  height={500}
                  loading="lazy"
                  className="object-contain"
                />
              </div>

              {/* <div className="sm:absolute order-1 lg:order-2 col-span-1 lg:-right-[16px] -right-[10rem] 2xl:-right-[196px] 2xl:-bottom-[10rem] lg:-bottom-[15rem] -bottom-[21rem]">
                <InteractiveMenu />
              </div> */}
            </div>
          </div>
        </div>

        {/* <div className="flex flex-nowrap flex-col gap-y-20 items-center justify-start bg-white rounded-[100px]">
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
        </div> */}
      </div>
    </div>
  );
}
