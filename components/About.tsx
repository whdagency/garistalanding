"use client";

import HowItWorks, { HowItWorksMobile } from "@/components/HowItWorks";
import React from "react";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation("global");

  return (
    <div
      id="AboutUs"
      className="container md:px-8 px-4 mt-20 rounded-[50px] md:rounded-[100px] bg-white mb-20 overflow-hidden"
    >
      <div className="pt-10">
        <div className="flex flex-col gap-y-20 items-center justify-start bg-white rounded-[100px] pt-10 pb-[100px]">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col items-center gap-5 text-center">
              <h2 className="lg:text-5xl md:text-4xl xs:text-3xl text-2xl font-semibold max-w-xs sm:max-w-xl w-full md:max-w-3xl capitalize px-4 pb-5 text-center">
                <span className="text-primaryColor">{t("Create")}</span>,{" "}
                <span className="text-primaryColor">{t("Customize")}</span>,{" "}
                {t("and")}{" "}
                <span className="text-primaryColor">{t("Manage")}</span>{" "}
                {t("your menus with ease")}
              </h2>
            </div>

            {/* Tab Content */}
            <div className="hidden lg:block -mt-10">
              <HowItWorks />
            </div>
            <div className="lg:hidden">
              <h2 className="text-[#6985DB] font-semibold mb-2 uppercase text-center">
                How It Works
              </h2>
              <HowItWorksMobile />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
