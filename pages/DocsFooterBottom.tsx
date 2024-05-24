"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";

const DocsFooterBottom = () => {
  const { t } = useTranslation("global");
  const { theme } = useTheme();

  return (
    <>
      <hr className="h-[1px] w-full dark:bg-white" />
      <div className="sm:px-24 px-4 pt-24 bg-white dark:bg-transparent w-full relative">
        <div className="flex lg:flex-row flex-col flex-wrap lg:justify-between mx-auto items-center gap-y-6 text-sm text-center font-medium mb-8">
          <div className="flex justify-center items-center gap-x-12">
            <Link
              className="hover:underline text-black dark:text-white"
              href={"/terms"}
            >
              {t("Terms of service")}
            </Link>
            <Link
              className="hover:underline text-black dark:text-white"
              href={"/privacy"}
            >
              {t("Privacy policy")}
            </Link>
            <Link
              className="hover:underline text-black dark:text-white"
              href={"/legal"}
            >
              {t("Legal")}
            </Link>
          </div>

          <span className="text-black dark:text-white">
            &copy; {t("2024 Garista, Inc. All rights reserved.")}
          </span>
        </div>

        <div className="w-[90%] mx-auto relative overflow-hidden">
          {theme === "light" ? (
            <Image
              src={"/Footer/footer-logo.svg"}
              alt="footer logo"
              className="object-cover w-full -mb-[14px] sm:-mb-[18px] md:-mb-6 lg:-mb-8 xl:-mb-10 2xl:-mb-14"
              width={500}
              height={500}
            />
          ) : (
            <Image
              src={"/Footer/footer-logo-white.svg"}
              alt="footer logo"
              className="object-cover w-full -mb-[14px] sm:-mb-[18px] md:-mb-6 lg:-mb-8 xl:-mb-10 2xl:-mb-14"
              width={500}
              height={500}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default DocsFooterBottom;
