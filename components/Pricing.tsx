import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { pricingPlan } from "@/constants";

type PropsType = {
  children: React.ReactNode;
  description: string;
  price: string;
  type: string;
  subscription: string;
  buttonText: string;
  active?: boolean;
};

const PricingCard = ({
  children,
  description,
  price,
  type,
  subscription,
  buttonText,
  active,
}: PropsType) => {
  const { t } = useTranslation("global");
  return (
    <>
      <div
        className={`w-full md:w-1/2 lg:w-1/3 ${
          type === t("Personal")
            ? "md:pr-4 px-0"
            : type === t("Business")
            ? "md:px-4 px-0"
            : "lg:pl-4 md:mx-auto"
        }`}
      >
        <div
          className={`relative z-10 mb-10 overflow-hidden rounded-3xl px-6 py-10 sm:p-12 lg:px-6 lg:py-10 xl:p-[50px] ${
            type === t("Business")
              ? "bg-primaryColor text-primaryBg"
              : "bg-white"
          }`}
        >
          <span className="mb-3 block text-lg font-medium">{type}</span>

          <h2 className="mb-5 text-[42px] font-semibold">
            {price}
            <span className="text-base font-medium">
              {subscription ? "/" : " "} {subscription}
            </span>
          </h2>

          <p className="mb-8 border-b border-stroke pb-8 text-sm font-medium">
            {description}
          </p>

          <div className="mb-10 flex flex-col gap-5">{children}</div>

          <Link href="/#Contact">
            <Button
              className={`group flex flex-row items-center justify-center gap-x-2 w-full transition-colors duration-300 ${
                active &&
                "bg-primaryBg text-secondaryBg hover:bg-secondaryBg hover:text-primaryBg"
              }`}
            >
              {buttonText}
              <ChevronRight
                size={19}
                strokeWidth={2}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default function Pricing() {
  const { t } = useTranslation("global");

  return (
    <div id="Pricing" className="container md:px-8 px-4">
      <div className="pb-[80px]">
        <div className="text-center mb-14">
          <span className="inline-block text-primaryColor font-medium md:text-lg text-base mb-1">
            {t("Pricing Table")}
          </span>
          <h3 className="md:text-3xl text-xl font-medium">
            {t("Our Pricing Plan")}
          </h3>
        </div>

        <div className="flex flex-wrap justify-center">
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
              >
                {features.map((feature, index) => (
                  <List key={index}>{t(feature)}</List>
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
  return <p className="text-[15px]">{children}</p>;
};
