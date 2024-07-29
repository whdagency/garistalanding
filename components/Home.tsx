"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import InteractiveMenu from "@/components/InteractiveMenu";
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  const { t } = useTranslation("global");

  return (
    <div id="Dashboard" className="container md:px-8 px-4 flex flex-col gap-5">
      {/* <div className="pt-[180px] lg:pb-[80px] md:pb-[60px] pb-[0px]">
        <div className="md:text-center text-left mb-[50px] md:max-w-[744px] md:ml-auto ml-0 mr-auto md:px-6 px-0">
          <h1 className="text-secondaryBg md:text-[68px] sm:text-[47px] text-[35px] font-semibold mb-4 leading-[1.2em] -tracking-[0.01em]">
            {t("Digitize Your")}{" "}
            <span className="text-primaryColor"> Menu.</span>{" "}
            {t("Elevate Your")}{" "}
            <span className="text-primaryColor">{t("Business.")}</span>
          </h1>

          <h1>{t("")}</h1>

          <p className="text-primaryTwo md:text-xl text-lg text md:mb-10 mb-6 font-medium">
            {t(
              "The Ultimate Digital Menu Solution for Restaurants and Cafés - TryNow!"
            )}
          </p>

          <div className="relative w-fit md:mx-auto mr-auto group">
            <Button className="flex flex-row items-center justify-center gap-x-2">
              {t("Get Started Now")}
              <ChevronRight
                size={19}
                strokeWidth={2}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </Button>
          </div>
        </div>

        <div className="max-[1271px] mx-auto md:px-6">
          <div className="relative flex flex-col items-center gap-4 lg:flex-row justify-center rounded ">
            <Image
              className="rounded-xl"
              src="/Home/home-dashboard.png"
              alt="home-img"
              width={985}
              height={588}
              sizes="(max-width: 479px) 93vw, (max-width: 767px) 94vw, (max-width: 991px) 86vw, (max-width: 1439px) 95vw, 985px"
            />

            <div className="sm:absolute lg:-right-[16px] -right-[10rem] 2xl:-right-[196px] 2xl:-bottom-[10rem] lg:-bottom-[15rem] -bottom-[21rem]">
              <InteractiveMenu />
            </div>

          </div>
        </div>
      </div> */}
      {/* <div className="h-[1px] w-full homeFooter"></div> */}

      <div className="pt-[220px] lg:pb-[50px] md:pb-[60px] pb-[0px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 relative">
          <div className="flex flex-col gap-5">
            <h2 className="px-7 py-2 rounded-3xl bg-[#BECEFF] text-[#284396] uppercase text-sm w-fit font-semibold">
              A Digital Menu Project
            </h2>

            <div className="text-black text-3xl md:text-4xl lg:text-5xl flex flex-col gap-2">
              <p className="font-semibold">
                Digitize Your{" "}
                <TypeAnimation
                  preRenderFirstString={true}
                  sequence={[
                    "Menu.",
                    1000,
                    "Orders.",
                    1000,
                    "Payment.",
                    1000,
                    "Marketing.",
                    1000,
                  ]}
                  wrapper="span"
                  speed={20}
                  className="text-primaryColor font-semibold"
                  repeat={Infinity}
                />
              </p>

              <p className="font-semibold">
                Elevate Your{" "}
                <span className="text-primaryColor">Business.</span>
              </p>
            </div>

            <p className="text-[#737373] text-sm font-medium leading-relaxed">
              This is a digital menu project that allows you to digitize your
              menu, orders, payments, and marketing. It is designed to be
              user-friendly and easy to use, making it accessible to both
              restaurants and cafes.
            </p>

            <div className="flex-row items-center gap-5 hidden lg:flex">
              <Button className="flex flex-row items-center justify-center gap-x-2 text-white bg-primaryBlue rounded-xl text-center">
                {t("Get Started Now")}
                <ChevronRight
                  size={19}
                  strokeWidth={2}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </Button>

              <button className="flex flex-row items-center justify-center gap-x-2 text-[#5D6B6E] font-normal text-sm">
                <Image
                  src="/icons/video-player.svg"
                  alt="video-player"
                  width={40}
                  height={40}
                  className="rounded-full object-contain"
                />
                {t("Watch Our Journey")}
              </button>
            </div>
          </div>

          <div className="relative pt-20 lg:pt-0 flex flex-col gap-5">
            <Image
              src="/assets/hero-vector.png"
              alt="dashboard"
              width={100}
              height={50}
              loading="lazy"
              className="object-contain absolute hidden lg:block lg:-top-32 lg:-left-44 z-10"
            />

            <Image
              src="/assets/hero-revenue.png"
              alt="dashboard"
              width={200}
              height={150}
              loading="lazy"
              className="object-contain absolute top-10 md:top-5 left-5 lg:-top-20 lg:-left-20 z-10 w-[100px] h-[100px] md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[150px]"
            />

            <Image
              src="/assets/hero-35.png"
              alt="dashboard"
              width={200}
              height={150}
              loading="lazy"
              className="object-contain absolute bottom-12 md:bottom-8 lg:bottom-0 lg:-top-16 lg:left-[200px] left-1/3 md:left-1/2 w-[100px] h-[100px] md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[150px]"
            />

            <Image
              src="/assets/hero-dashboard.png"
              alt="dashboard"
              width={985}
              height={588}
              loading="lazy"
              // sizes="(max-width: 479px) 93vw, (max-width: 767px) 94vw, (max-width: 991px) 86vw, (max-width: 1439px) 95vw, 985px"
              className="object-contain hidden lg:block"
            />

            <Image
              src="/assets/hero-dashboard-mobile.png"
              alt="dashboard"
              width={985}
              height={588}
              loading="lazy"
              // sizes="(max-width: 479px) 93vw, (max-width: 767px) 94vw, (max-width: 991px) 86vw, (max-width: 1439px) 95vw, 985px"
              className="object-contain lg:hidden"
            />

            <Image
              src="/assets/hero-time.png"
              alt="dashboard"
              width={200}
              height={150}
              loading="lazy"
              className="object-contain absolute top-10 md:top-5 right-5 z-10 w-[100px] h-[100px] md:w-[150px] md:h-[150px] lg:hidden"
            />

            <Image
              src="/assets/hero-time.png"
              alt="dashboard"
              width={200}
              height={150}
              loading="lazy"
              className="object-contain hidden lg:block absolute z-10 lg:w-[200px] lg:h-[150px] -bottom-5 -left-20"
            />

            {/* Button */}
            <div className="flex-row items-center gap-5 flex lg:hidden justify-center pt-5">
              <Button className="flex flex-row items-center justify-center gap-x-2 text-white bg-primaryBlue rounded-xl text-center">
                {t("Get Started Now")}
                <ChevronRight
                  size={19}
                  strokeWidth={2}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </Button>

              <button className="flex flex-row items-center justify-center gap-x-2 text-[#5D6B6E] font-normal text-sm">
                <Image
                  src="/icons/video-player.svg"
                  alt="video-player"
                  width={40}
                  height={40}
                  className="rounded-full object-contain"
                />
                {t("Watch Our Journey")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
