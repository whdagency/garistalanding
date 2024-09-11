"use client";

import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { footerSections, footerSocials } from "@/constants";

const DocsFooterBottom = () => {
  const { t } = useTranslation("global");
  const { theme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState("");

  useEffect(() => {
    theme === "dark" ? setCurrentTheme("dark") : setCurrentTheme("light");
  }, [theme]);

  const footerImageSrc =
    currentTheme === "dark"
      ? "/Footer/footer-logo-white.svg"
      : "/Footer/footer-logo.svg";

  return (
    <>
      <hr className="h-[1px] w-full dark:bg-white" />

      <footer
        id="Footer"
        className="bg-white dark:bg-transparent w-screen relative rounded-t-[50px] flex flex-col gap-5"
      >
        <div className="grid grid-cols-2 pt-16 md:flex md:flex-items-start md:justify-between px-5 sm:px-32 relative gap-7 md:gap-10">
          {footerSections.map((section, index) => (
            <div key={index} className={`col-span-1 flex flex-col gap-10`}>
              <h2 className="text-black/80 dark:text-white font-extrabold md:font-bold text-2xl md:text-xl">
                {section.title}
              </h2>

              <div className="flex flex-col gap-4">
                {section.links.map((link, index) => (
                  <Link
                    key={index}
                    className="font-normal text-black dark:text-white w-fit"
                    href={link.href}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="sm:px-24 px-4 pt-16 relative">
          <div className="flex lg:flex-row flex-col flex-wrap lg:justify-between mx-auto items-center gap-y-6 text-sm text-center font-medium mb-8">
            <div className="flex flex-col-reverse gap-5 sm:flex-row justify-center items-center sm:gap-8 lg:gap-12">
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
              </div>

              <div className="flex flex-nowrap gap-5 items-center justify-center">
                {footerSocials.map((social) => (
                  <Link key={social.id} target="_blank" href={social.url}>
                    <social.icon
                      className="text-black dark:text-white"
                      size={20}
                    />
                  </Link>
                ))}
              </div>
            </div>

            <span className="text-black dark:text-white font-medium">
              {t("© Copyright 2024. WHD AGENCY. All rights reserved.")}
            </span>
          </div>

          <div className="w-[90%] mx-auto relative overflow-hidden">
            <Image
              src={footerImageSrc}
              alt="footer logo"
              className="object-cover w-full -mb-[14px] sm:-mb-[18px] md:-mb-6 lg:-mb-8 xl:-mb-10 2xl:-mb-14"
              width={500}
              height={500}
            />
          </div>
        </div>
      </footer>
    </>
  );
};

export default DocsFooterBottom;
