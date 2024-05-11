"use client";

import React from "react";
import { usePathname } from "next/navigation";
import LangToggle from "./LanguageToggle";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import Image from "next/image";

export const FooterBottom = () => {
  const { t } = useTranslation("global");

  const pathes = usePathname();
  return (
    <>
      {pathes == "/" ? (
        <>
          <div className="sm:px-24 px-4 pt-24 bg-white w-full relative">
            <div className="flex lg:flex-row flex-col flex-wrap lg:justify-between mx-auto items-center gap-y-6 text-sm text-center font-medium mb-8">
              <div className="flex justify-center items-center gap-x-12">
                <Link className="hover:underline" href={"/terms"}>
                  {t("Terms of service")}
                </Link>
                <Link className="hover:underline" href={"/privacy"}>
                  {t("Privacy policy")}
                </Link>
                <span>{t("Legal")}</span>
              </div>

              <span className="">
                &copy; {t("2024 Garista, Inc. All rights reserved.")}
              </span>
            </div>

            <div className="w-full mx-auto relative overflow-hidden h-16 md:h-28 lg:h-48">
              <Image
                src={"/Footer/footer-logo.svg"}
                alt="footer logo"
                className="object-cover mx-auto w-full"
                width={500}
                height={500}
              />
            </div>
          </div>

          <LangToggle />
        </>
      ) : (
        <></>
      )}
    </>
  );
};
