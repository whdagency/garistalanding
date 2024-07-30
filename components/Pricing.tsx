import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { pricingPlan } from "@/constants";
import Image from "next/image";

export default function Pricing() {
  const { t } = useTranslation("global");
  const [selected, setSelected] = useState<"monthly" | "yearly">("monthly");

  return (
    <div
      id="Pricing"
      className="container md:px-8 px-4 rounded-[100px] bg-white mb-20"
    >
      <div className="pb-[80px] flex flex-col gap-10">
        {/* <div className="text-center mb-14">
          <span className="inline-block text-primaryColor font-medium md:text-lg text-base mb-1">
            {t("Pricing Table")}
          </span>
          <h3 className="md:text-3xl text-xl font-medium">
            {t("Our Pricing Plan")}
          </h3>
        </div> */}
        <div className="flex flex-col items-center gap-10 py-20 text-center">
          <h2 className="text-[#231D4F] font-bold text-5xl">
            Simple, transparent pricing
          </h2>

          <p className="text-sm font-medium text-[#848199]">
            No contracts. No surprise fees.
          </p>

          <div className="flex items-center">
            <button
              className={`text-sm uppercase py-4 px-6 ${selected === "monthly" ? "rounded-full bg-primaryBlue shadow-[0px_6.481px_9.073px_0px_rgba(82,_67,_194,_0.23)] text-white" : "text-[#848199]"}`}
              onClick={() => setSelected("monthly")}
            >
              Monthly
            </button>

            <button
              onClick={() => setSelected("yearly")}
              className={`text-sm uppercase py-4 px-6 ${selected === "yearly" ? "rounded-full bg-primaryBlue shadow-[0px_6.481px_9.073px_0px_rgba(82,_67,_194,_0.23)] text-white" : "text-[#848199]"}`}
            >
              Yearly
            </button>
          </div>
        </div>

        <div className="flex flex-wrap justify-center md:mx-14 md:bg-[#F5F8FF] md:rounded-[40px]">
          <div className="flex flex-wrap">
            {pricingPlan.map(({ features, ...pricing }, idx) => (
              <PricingCard
                key={idx}
                type={t(pricing.type)}
                price={t(pricing.price)}
                subscription={t(pricing.subscription)}
                description={t(pricing.description)}
                buttonText={t(pricing.buttonText)}
                active={pricing.active}
                selected={selected}
                yearlyPrice={pricing.priceYearly}
              >
                {features.map((feature, index) => (
                  <List key={index}>
                    <Image
                      src={
                        pricing.active
                          ? "/icons/check-circle-white.svg"
                          : "/icons/check-circle.svg"
                      }
                      width={16}
                      height={16}
                      alt="check-circle"
                      className="object-contain"
                    />
                    <span
                      className={
                        pricing.active ? "text-white" : "text-primaryGray"
                      }
                    >
                      {t(feature)}
                    </span>
                  </List>
                ))}
              </PricingCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const List = ({ children }: { children: React.ReactNode }) => {
  return <p className="text-[15px] flex items-center gap-3">{children}</p>;
};

type PropsType = {
  children: React.ReactNode;
  description: string;
  price: string;
  type: string;
  subscription: string;
  yearlyPrice: string;
  buttonText: string;
  active?: boolean;
  selected: "monthly" | "yearly";
};

const PricingCard = ({
  children,
  description,
  price,
  type,
  subscription,
  buttonText,
  active,
  selected,
  yearlyPrice,
}: PropsType) => {
  const { t } = useTranslation("global");
  return (
    <>
      <div
        className={`w-full md:w-1/2 lg:w-1/3 ${
          type === t("Intro")
            ? "md:pr-4 px-0"
            : type === t("Pro")
              ? "md:px-4 px-0"
              : "lg:pl-4 md:mx-auto"
        }`}
      >
        <div
          className={`relative z-10 mb-10 overflow-hidden rounded-3xl px-6 py-12 sm:p-12 lg:px-6 xl:p-[50px] ${
            type === t("Pro")
              ? "bg-primaryBlue text-white md:-mt-16 shadow-[0px_65.159px_52.748px_0px_rgba(82,_67,_194,_0.3)]"
              : "bg-[#F5F8FF] md:bg-transparent shadow-[0px_46.94px_37.999px_0px_rgba(82,_67,_194,_0.3)] md:shadow-none"
          }`}
        >
          {active && (
            <span className="text-xs uppercase rounded-full px-5 py-2 bg-[#A3B9FF] font-medium text-white/80 absolute top-5 right-5">
              Most Popular
            </span>
          )}

          <h2
            className={`mb-5 text-[45px] font-extrabold ${active ? "text-white" : "text-[#231D4F]"}`}
          >
            {selected === "monthly" ? price : yearlyPrice}{" "}
            <span
              className={`text-base lowercase font-medium  ${active ? "text-white" : "text-[#848199]"}`}
            >
              / {"Month"}
            </span>
          </h2>

          <span
            className={`mb-3 block text-3xl font-semibold ${active ? "text-white" : "text-[#231D4F]"}`}
          >
            {type}
          </span>

          <p
            className={`mb-8 text-sm font-medium ${active ? "text-white" : "text-primaryGray"}`}
          >
            {description}
          </p>

          <div className="mb-10 flex flex-col gap-3">{children}</div>

          <Link href="/#Contact">
            <Button
              className={`group flex flex-row items-center justify-center gap-x-2 w-full transition-colors duration-300 rounded-full ${
                active
                  ? "bg-[#A3B9FF] text-[#5243C2]"
                  : "bg-primaryBlue/10 text-primaryBlue "
              }`}
            >
              {buttonText}
              {/* <ChevronRight
                size={19}
                strokeWidth={2}
                className="group-hover:translate-x-1 transition-transform duration-300"
              /> */}
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};
