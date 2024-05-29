"use client"

import Image from "next/image";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import InteractiveMenu from "@/components/InteractiveMenu";
import { useState } from "react";

export default function Home() {
  const { t } = useTranslation("global");


  return (
    <div id="Home" className="container md:px-8 px-4">
      <div className="pt-[180px] lg:pb-[80px] md:pb-[60px] pb-[0px]">
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
      </div>
  
      <div className="h-[1px] w-full homeFooter"></div>
    </div>
  );
}
