"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { ArrowUp, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { HTMLAttributes } from "react";
import { TypeAnimation } from "react-type-animation";
import NumberTicker from "@/components/magicui/number-ticker";
import { cn } from "@/lib/utils";

export default function Home() {
  const { t } = useTranslation("global");

  return (
    <div id="Dashboard" className="container md:px-8 px-4 flex flex-col gap-5">
      <div className="pt-[220px] lg:pb-[50px] md:pb-[60px] pb-[0px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 relative">
          <div data-aos="fade-right" className="flex flex-col gap-5">
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
                    1500,
                    "Orders.",
                    1500,
                    "Payment.",
                    1500,
                    "Marketing.",
                    1500,
                  ]}
                  wrapper="span"
                  speed={50}
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
              {t(
                "This is a digital menu project that allows you to digitize your menu, orders, payments, and marketing. It is designed to be user-friendly and easy to use, making it accessible to both restaurants and cafes."
              )}
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

          <div
            data-aos="fade-left"
            className="relative pt-20 lg:pt-0 flex flex-col gap-5"
          >
            {/* Line - Curve Vector */}
            <Image
              src="/assets/hero-vector.png"
              alt="dashboard"
              width={100}
              height={50}
              loading="lazy"
              className="object-contain absolute hidden lg:block lg:-top-32 lg:-left-44 z-10"
            />

            {/* Line - Revenue */}
            <HeroRevenueTime
              type="revenue"
              className="top-10 md:top-5 -left-5 lg:-top-20 lg:-left-20"
              tickerNumber={30}
            />

            {/* Line - Time */}
            <HeroRevenueTime
              type="time"
              className="hidden lg:flex absolute -bottom-16 -left-20"
              tickerNumber={70}
            />

            <HeroRevenueTime
              type="time"
              className="top-10 md:top-5 -right-5 lg:hidden"
              tickerNumber={70}
            />

            {/* Line - Panier */}
            <HeroPanier className="-top-7 right-5 hidden lg:flex" />
            <HeroPanier className="flex bottom-16 left-[20%] sm:left-1/3 lg:hidden" />

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

interface HeroRevenueProps extends HTMLAttributes<HTMLDivElement> {
  type: "revenue" | "time";
  tickerNumber: number;
}

const HeroRevenueTime = ({
  className,
  type,
  tickerNumber,
  ...props
}: HeroRevenueProps) => {
  return (
    <div
      {...props}
      className={cn(
        "flex flex-col gap-4 p-2 sm:p-4 absolute z-10 bg-white rounded-xl md:rounded-[21.32px]",
        className
      )}
      data-aos="zoom-in"
      data-aos-delay={type === "revenue" ? "300" : "500"}
    >
      <div className="flex items-center gap-3">
        <div
          className={`flex w-fit flex-col items-center justify-center gap-2 ${type === "revenue" ? "bg-red-500" : "bg-[#FF6937]"} rounded-full p-3`}
        >
          <Image
            src={
              type === "revenue"
                ? "/icons/hero-revenue.svg"
                : "/icons/hero-time.svg"
            }
            alt="hero-revenue"
            width={25}
            height={25}
            loading="lazy"
            className="object-contain"
          />
        </div>

        <span className="font-black text-black text-base sm:text-lg">
          {type === "revenue" ? "Revenue" : "Time"}
        </span>
      </div>
      <p className="text-black text-3xl font-black">
        {type === "revenue" ? "+" : "-"}
        <NumberTicker
          value={tickerNumber}
          className="text-black font-black text-2xl sm:text-3xl"
        />
        %
      </p>

      <p className="flex items-center gap-2 font-medium">
        <span className="text-[#38D271] text-sm sm:text-base flex items-center gap-1">
          <ArrowUp size={20} color="#38D271" />
          <span>{type === "revenue" ? "2.1" : "5.6"} %</span>
        </span>
        <span className="text-[#798190] text-sm sm:text-base">
          vs without garista
        </span>
      </p>
    </div>
  );
};

interface HeroPanierProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const HeroPanier = ({ className, ...props }: HeroPanierProps) => {
  return (
    <div
      {...props}
      className={cn(
        "items-center gap-3 absolute z-10 bg-white rounded-[20.53px] w-fit p-2 sm:p-3 border border-[#49A847]",
        className
      )}
      data-aos="zoom-in"
      data-aos-delay="800"
    >
      <div className="flex w-fit flex-col items-center justify-center gap-2 bg-[#49A847] rounded-full p-3">
        <Image
          src="/icons/hero-panier.svg"
          alt="hero-revenue"
          width={25}
          height={25}
          loading="lazy"
          className="object-contain"
        />
      </div>

      <p className="flex flex-col gap-1">
        <span className="text-black text-2xl font-black">
          +
          <NumberTicker value={35} className="text-black font-black text-2xl" />
          %
        </span>
        <span className="text-[#737B8B] text-xs sm:text-sm font-semibold">
          Panier moyen after garista solution
        </span>
      </p>
    </div>
  );
};
