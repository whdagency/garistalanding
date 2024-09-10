import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { useTranslation } from "react-i18next";
import { pricingPlan } from "@/constants";
import Image from "next/image";
import PaymentMethod from "@/components/PaymentMethod";
import PosPartners from "@/components/PosPartners";

export default function Pricing() {
  const { t } = useTranslation("global");
  const [selected, setSelected] = useState<"monthly" | "yearly">("monthly");

  return (
    <div
      id="Pricing"
      className="container md:px-8 px-4 rounded-[50px] md:rounded-[100px] mb-20 bg-white"
    >
      <div className="pb-[80px] flex flex-col gap-10">
        <div className="flex flex-col items-center gap-10 py-20 text-center">
          <h2 className="text-[#231D4F] font-bold text-3xl md:text-5xl">
            Simple, transparent pricing
          </h2>

          <p className="text-sm font-medium text-[#848199]">
            No contracts. No surprise fees.
          </p>

          <div className="flex items-center bg-white rounded-full shadow">
            <button
              className={`text-sm uppercase py-3 px-6 ${selected === "monthly" ? "rounded-full bg-primaryBlue shadow-[0px_6.481px_9.073px_0px_rgba(82,_67,_194,_0.23)] text-[#DAE3FF]" : "text-[#848199]"}`}
              onClick={() => setSelected("monthly")}
            >
              Monthly
            </button>

            <button
              onClick={() => setSelected("yearly")}
              className={`text-sm uppercase py-3 px-6 ${selected === "yearly" ? "rounded-full bg-primaryBlue shadow-[0px_6.481px_9.073px_0px_rgba(82,_67,_194,_0.23)] text-[#DAE3FF]" : "text-[#848199]"}`}
            >
              Yearly
            </button>
          </div>
        </div>

        <p className="text-start text-[#848199] text-xs md:hidden px-5 -mt-20">
          Your subscription includes a set number of tables. If you add more
          tables beyond the included amount, an additional fee will apply.
        </p>

        <div className="flex flex-wrap justify-center md:shadow-sm xl:mx-10 md:bg-[#F5F8FF] md:rounded-[40px]">
          <div className="grid grid-cols-1 md:grid-cols-3">
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
                      src={feature.icon}
                      width={20}
                      height={20}
                      alt="check-circle"
                      className="object-contain"
                    />
                    <span
                      className={
                        pricing.active ? "text-white" : "text-primaryGray"
                      }
                    >
                      {t(feature.name)}
                    </span>
                    {index === 0 &&
                      (pricing.active ? <WhiteStar /> : <BlueStar />)}
                  </List>
                ))}
              </PricingCard>
            ))}
          </div>

          <p className="text-center text-[#848199] text-base md:text-lg -mt-10 pb-10 hidden md:block">
            Your subscription includes a set number of tables. If you add more
            tables beyond the included amount, an additional fee will apply.
          </p>
        </div>

        <div className="md:mx-10 flex flex-col items-center gap-8 lg:gap-0 pt-10">
          {/* Our Trusted POS Partners */}
          <div className="flex flex-col items-center gap-10 lg:flex-row">
            <PosPartners className="order-2 lg:order-1 col-span-1" />

            <div className="order-1 lg:order-2 col-span-1 flex flex-col gap-4 items-center lg:items-start w-full">
              <h2 className="text-center lg:text-start text-[#212529] font-bold text-2xl md:text-3xl lg:text-4xl w-fit">
                Our Trusted{" "}
                <span className="relative">
                  POS Partners{" "}
                  <Image
                    src={"/icons/partner-vector.svg"}
                    alt="partner-vector"
                    width={350}
                    height={40}
                    className="absolute top-6 right-0"
                  />
                </span>
              </h2>

              <p className="font-normal text-center lg:text-start text-base text-[#212529]">
                {t(
                  "At Garista, we partner with leading POS providers to offer seamless and efficient solutions for enhanced restaurant management."
                )}
              </p>
            </div>
          </div>

          {/* Our Secured Payment Method */}
          <div className="flex flex-col items-center gap-0 lg:gap-10 lg:flex-row">
            <div className="order-2 col-span-1 w-full h-full flex flex-col items-center">
              <PaymentMethod />
            </div>

            <div className="order-1 col-span-1 flex flex-col items-center lg:items-start gap-4">
              <h2 className="text-center lg:text-start text-[#212529] font-bold text-2xl md:text-3xl lg:text-4xl w-fit">
                Our Secure{" "}
                <span className="relative">
                  Payment Method{" "}
                  <Image
                    src={"/icons/partner-vector.svg"}
                    alt="partner-vector"
                    width={350}
                    height={40}
                    className="absolute top-6 right-0"
                  />
                </span>
              </h2>

              <p className="font-normal text-center lg:text-start text-base text-[#212529]">
                Garista collaborates with top payment providers to ensure secure
                and convenient transactions for all our customers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const List = ({ children }: { children: React.ReactNode }) => {
  return <p className="text-[15px] flex items-center gap-2">{children}</p>;
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
        className={`w-full ${
          type === t("Silver")
            ? "xl:pr-4 px-0"
            : type === t("Gold")
              ? "xl:px-4 px-0"
              : "xl:pl-4 md:mx-auto"
        }`}
      >
        <div
          className={`relative z-10 mb-10 overflow-hidden rounded-3xl px-6 py-12 sm:p-10 md:p-4 lg:px-6 xl:p-[50px] ${
            type === t("Gold")
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
            className={`mb-2 text-[45px] font-black ${active ? "text-white md:mt-5" : "text-[#231D4F]"}`}
          >
            {selected === "monthly" ? price : yearlyPrice}
            <span
              className={`text-base lowercase font-medium  ${active ? "text-white" : "text-[#848199]"}`}
            >
              /{"Month"}
            </span>
          </h2>

          <span
            className={`mb-3 block text-3xl font-extrabold ${active ? "text-white" : "text-[#231D4F]"}`}
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
              className={`group flex flex-row items-center justify-center gap-x-2 w-full font-bold transition-colors duration-300 rounded-full ${
                active
                  ? "bg-[#A3B9FF] text-white"
                  : "bg-primaryBlue/10 text-primaryBlue "
              }`}
            >
              {buttonText}
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

const BlueStar = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M9.58988 9.42235C10.5101 11.4734 12.1517 13.115 14.2027 14.0352C12.1517 14.9554 10.5101 16.597 9.58988 18.648C8.66965 16.597 7.02808 14.9554 4.97703 14.0352C7.02808 13.115 8.66965 11.4734 9.58988 9.42235ZM9.58988 5.09376C9.63401 6.27982 9.43291 7.46223 8.99918 8.56702C8.56545 9.67181 7.9084 10.6752 7.06915 11.5145C6.2299 12.3537 5.22649 13.0108 4.1217 13.4445C3.01691 13.8782 1.8345 14.0793 0.648438 14.0352C1.8345 13.9911 3.01691 14.1922 4.1217 14.6259C5.22649 15.0596 6.2299 15.7167 7.06915 16.5559C7.9084 17.3952 8.56545 18.3986 8.99918 19.5034C9.43291 20.6082 9.63401 21.7906 9.58988 22.9766C9.54575 21.7906 9.74684 20.6082 10.1806 19.5034C10.6143 18.3986 11.2713 17.3952 12.1106 16.5559C12.9499 15.7167 13.9533 15.0596 15.0581 14.6259C16.1628 14.1922 17.3453 13.9911 18.5313 14.0352C17.3453 14.0793 16.1628 13.8782 15.0581 13.4445C13.9533 13.0108 12.9499 12.3537 12.1106 11.5145C11.2713 10.6752 10.6143 9.67181 10.1806 8.56702C9.74684 7.46222 9.54575 6.27982 9.58988 5.09376Z"
        fill="#5243C2"
      />
      <path
        d="M18.6698 4.19045C19.0634 4.79552 19.5793 5.31144 20.1844 5.70499C19.5793 6.09853 19.0634 6.61445 18.6698 7.21952C18.2763 6.61446 17.7604 6.09853 17.1553 5.70499C17.7604 5.31144 18.2763 4.79552 18.6698 4.19045ZM18.6698 1.02344C18.6929 1.64443 18.5876 2.26352 18.3606 2.84197C18.1335 3.42041 17.7894 3.94578 17.35 4.38519C16.9106 4.82461 16.3853 5.16862 15.8068 5.39571C15.2284 5.62281 14.6093 5.7281 13.9883 5.70499C14.6093 5.68188 15.2284 5.78717 15.8068 6.01426C16.3853 6.24136 16.9106 6.58537 17.35 7.02478C17.7894 7.4642 18.1335 7.98956 18.3606 8.56801C18.5877 9.14645 18.6929 9.76554 18.6698 10.3865C18.6467 9.76554 18.752 9.14645 18.9791 8.56801C19.2062 7.98956 19.5502 7.4642 19.9896 7.02479C20.429 6.58537 20.9544 6.24136 21.5329 6.01427C22.1113 5.78717 22.7304 5.68188 23.3514 5.70499C22.7304 5.72809 22.1113 5.62281 21.5329 5.39571C20.9544 5.16862 20.429 4.8246 19.9896 4.38519C19.5502 3.94577 19.2062 3.42041 18.9791 2.84196C18.752 2.26352 18.6467 1.64443 18.6698 1.02344Z"
        fill="#5243C2"
      />
    </svg>
  );
};

const WhiteStar = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M9.58988 9.42235C10.5101 11.4734 12.1517 13.115 14.2027 14.0352C12.1517 14.9554 10.5101 16.597 9.58988 18.648C8.66965 16.597 7.02808 14.9554 4.97703 14.0352C7.02808 13.115 8.66965 11.4734 9.58988 9.42235ZM9.58988 5.09376C9.63401 6.27982 9.43291 7.46223 8.99918 8.56702C8.56545 9.67181 7.9084 10.6752 7.06915 11.5145C6.2299 12.3537 5.22649 13.0108 4.1217 13.4445C3.01691 13.8782 1.8345 14.0793 0.648438 14.0352C1.8345 13.9911 3.01691 14.1922 4.1217 14.6259C5.22649 15.0596 6.2299 15.7167 7.06915 16.5559C7.9084 17.3952 8.56545 18.3986 8.99918 19.5034C9.43291 20.6082 9.63401 21.7906 9.58988 22.9766C9.54575 21.7906 9.74684 20.6082 10.1806 19.5034C10.6143 18.3986 11.2713 17.3952 12.1106 16.5559C12.9499 15.7167 13.9533 15.0596 15.0581 14.6259C16.1628 14.1922 17.3453 13.9911 18.5313 14.0352C17.3453 14.0793 16.1628 13.8782 15.0581 13.4445C13.9533 13.0108 12.9499 12.3537 12.1106 11.5145C11.2713 10.6752 10.6143 9.67181 10.1806 8.56702C9.74684 7.46222 9.54575 6.27982 9.58988 5.09376Z"
        fill="#F5F8FF"
      />
      <path
        d="M18.6698 4.19045C19.0634 4.79552 19.5793 5.31144 20.1844 5.70499C19.5793 6.09853 19.0634 6.61445 18.6698 7.21952C18.2763 6.61446 17.7604 6.09853 17.1553 5.70499C17.7604 5.31144 18.2763 4.79552 18.6698 4.19045ZM18.6698 1.02344C18.6929 1.64443 18.5876 2.26352 18.3606 2.84197C18.1335 3.42041 17.7894 3.94578 17.35 4.38519C16.9106 4.82461 16.3853 5.16862 15.8068 5.39571C15.2284 5.62281 14.6093 5.7281 13.9883 5.70499C14.6093 5.68188 15.2284 5.78717 15.8068 6.01426C16.3853 6.24136 16.9106 6.58537 17.35 7.02478C17.7894 7.4642 18.1335 7.98956 18.3606 8.56801C18.5877 9.14645 18.6929 9.76554 18.6698 10.3865C18.6467 9.76554 18.752 9.14645 18.9791 8.56801C19.2062 7.98956 19.5502 7.4642 19.9896 7.02479C20.429 6.58537 20.9544 6.24136 21.5329 6.01427C22.1113 5.78717 22.7304 5.68188 23.3514 5.70499C22.7304 5.72809 22.1113 5.62281 21.5329 5.39571C20.9544 5.16862 20.429 4.8246 19.9896 4.38519C19.5502 3.94577 19.2062 3.42041 18.9791 2.84196C18.752 2.26352 18.6467 1.64443 18.6698 1.02344Z"
        fill="#F5F8FF"
      />
    </svg>
  );
};
