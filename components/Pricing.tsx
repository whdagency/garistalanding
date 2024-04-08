import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";

type PropsType = any;

const PricingCard = ({
  children,
  description,
  price,
  type,
  subscription,
  buttonText,
  active,
}: PropsType) => {
  return (
    <>
      <div
        className={`w-full md:w-1/2 lg:w-1/3 ${
          type === "Personal"
            ? "md:pr-4 px-0"
            : type === "Business"
            ? "md:px-4 px-0"
            : "lg:pl-4 md:mx-auto"
        }`}
      >
        <div
          className={`relative z-10 mb-10 overflow-hidden rounded-3xl px-6 py-10 sm:p-12 lg:px-6 lg:py-10 xl:p-[50px] ${
            type === "Business" ? "bg-primaryColor text-primaryBg" : "bg-white"
          }`}
        >
          <span className="mb-3 block text-lg font-medium">{type}</span>

          <h2 className="mb-5 text-[42px] font-semibold">
            {price}
            <span className="text-base font-medium">/ {subscription}</span>
          </h2>

          <p className="mb-8 border-b border-stroke pb-8 text-sm font-medium">
            {description}
          </p>

          <div className="mb-10 flex flex-col gap-5">{children}</div>

          <Link href="#">
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

const Pricing = () => {
  return (
    <div id="Pricing" className="container md:px-8 px-4">
      <div className="pb-[80px]">
        <div className="text-center mb-14">
          <span className="inline-block text-primaryColor font-medium md:text-lg text-base mb-1">
            Pricing Table
          </span>
          <h3 className="md:text-3xl text-xl font-medium">Our Pricing Plan</h3>
        </div>

        <div className="flex flex-wrap justify-center">
          <div className="flex flex-wrap">
            <PricingCard
              type="Personal"
              price="$59"
              subscription="year"
              description="Perfect for using in a personal website or a client project."
              buttonText="Choose Personal"
            >
              <List>1 User</List>
              <List>All UI components</List>
              <List>Lifetime access</List>
              <List>Free updates</List>
              <List>Use on 1 (one) project</List>
              <List>3 Months support</List>
            </PricingCard>

            <PricingCard
              type="Business"
              price="$199"
              subscription="year"
              description="Perfect for using in a personal website or a client project."
              buttonText="Choose Business"
              active
            >
              <List>5 User</List>
              <List>All UI components</List>
              <List>Lifetime access</List>
              <List>Free updates</List>
              <List>Use on31 (Three) project</List>
              <List>4 Months support</List>
            </PricingCard>

            <PricingCard
              type="Professional"
              price="$256"
              subscription="year"
              description="Perfect for using in a personal website or a client project."
              buttonText="Choose Professional"
            >
              <List>Unlimited User</List>
              <List>All UI components</List>
              <List>Lifetime access</List>
              <List>Free updates</List>
              <List>Unlimited project</List>
              <List>12 Months support</List>
            </PricingCard>
          </div>
        </div>
      </div>
    </div>
  );
};

const List = ({ children }: PropsType) => {
  return <p className="text-[15px]">{children}</p>;
};

export default Pricing;
