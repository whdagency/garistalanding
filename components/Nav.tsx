"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Cross as Hamburger } from "hamburger-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "./ui/button";
import { useTranslation } from "react-i18next";
import LanguageModal, { LanguageMobileModal } from "@/components/LanguageModal";

type Links = {
  activeSection: string;
};

function Nav({ activeSection }: Links) {
  const [isOpen, setOpen] = useState(false);
  const [isHamburger, setHamburger] = useState(false);
  const { t } = useTranslation("global");

  const handleSheet = () => {
    setOpen(!isOpen);
    setHamburger(!isOpen);
  };

  return (
    <div className="bg-transparent pt-4 fixed z-50 top-[0%] left-[0%] right-[0%] bottom-auto">
      <div className="lg:flex lg:justify-center lg:items-center">
        <div className="hidden relative h-[72px] lg:flex justify-center items-center px-6">
          <div className="z-10 flex items-center gap-x-5">
            {/* Logo */}
            <div className="relative bg-secondaryBg rounded-xl shadow-navShadow p-2">
              <Link
                href="/#Home"
                className="relative size-10 cursor-pointer flex justify-center items-center hover:rotate-180 hover:scale-[1.2] transition-transform duration-300"
              >
                <div className="size-full">
                  <Image src="/Logo/Logo White.svg" alt="logo" fill />
                </div>
              </Link>
            </div>

            {/* Nav Links */}
            <div className="flex gap-3 items-center bg-secondaryBg shadow-navShadow rounded-xl py-1 justify-between px-3">
              <div className="flex gap-2 items-center">
                <a
                  href="/#Features"
                  className={`navLink ${
                    activeSection == "Features"
                      ? "text-primaryBg bg-primaryBg/10 rounded-xl"
                      : "text-primaryOne hover:text-primaryBg rounded-xl"
                  }`}
                >
                  {t("Features")}
                </a>

                <a
                  href="/#Benefits"
                  className={`navLink ${
                    activeSection == "Benefits"
                      ? "text-primaryBg bg-primaryBg/10 rounded-xl"
                      : "text-primaryOne hover:text-primaryBg rounded-xl"
                  }`}
                >
                  {t("Benefits")}
                </a>

                <a
                  href="/#About"
                  className={`navLink ${
                    activeSection == "About"
                      ? "text-primaryBg bg-primaryBg/10 rounded-xl"
                      : "text-primaryOne hover:text-primaryBg rounded-xl"
                  }`}
                >
                  {t("About Us")}
                </a>

                <a
                  href="/#FAQ"
                  className={`navLink ${
                    activeSection == "FAQ"
                      ? "text-primaryBg bg-primaryBg/10 rounded-xl"
                      : "text-primaryOne hover:text-primaryBg rounded-xl"
                  }`}
                >
                  {t("FAQ")}
                </a>

                <a
                  href="/#Blog"
                  className={`navLink ${
                    activeSection == "Blog"
                      ? "text-primaryBg bg-primaryBg/10 rounded-xl"
                      : "text-primaryOne hover:text-primaryBg rounded-xl"
                  }`}
                >
                  {t("Blog")}
                </a>

                <a
                  href="/#FAQ"
                  className={`navLink ${
                    activeSection == "Help"
                      ? "text-primaryBg bg-primaryBg/10 rounded-xl"
                      : "text-primaryOne hover:text-primaryBg rounded-xl"
                  }`}
                >
                  {t("Help")}
                </a>

                <LanguageModal />
              </div>

              <button className="mx-10 me-auto font-semibold text-black/80 text-sm px-7 py-2 rounded-xl bg-white text-center">
                <a href="/#Contact">Contact Us</a>
              </button>
            </div>
          </div>
        </div>

        <div className="relative h-[72px] lg:hidden flex justify-center items-center mx-3 px-6 bg-secondaryBg rounded-3xl shadow-navShadow">
          <div className="w-full flex justify-between items-center">
            <div className="relative">
              <Link
                href="/#Home"
                className="relative size-10 cursor-pointer flex justify-center items-center hover:rotate-180 hover:scale-[1.2] transition-transform duration-300"
              >
                <div className="size-full">
                  <Image src="/Logo/Logo White.svg" alt="logo" fill />
                </div>
              </Link>
            </div>

            <div className="lg:hidden">
              <MobileNav
                isOpen={isOpen}
                handleSheet={handleSheet}
                isHamburger={isHamburger}
                setHamburger={setHamburger}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;

type MobileNavProps = {
  isOpen: boolean;
  handleSheet: () => void;
  isHamburger: boolean;
  setHamburger: React.Dispatch<React.SetStateAction<boolean>>;
};

const MobileNav = ({
  isOpen,
  handleSheet,
  isHamburger,
  setHamburger,
}: MobileNavProps) => {
  return (
    <>
      <Sheet open={isOpen} onOpenChange={handleSheet}>
        <SheetTrigger>
          <Hamburger
            toggled={isHamburger}
            toggle={setHamburger}
            size={20}
            direction="left"
          />
        </SheetTrigger>

        <SheetContent side={"bottom"}>
          <div className="flex flex-col gap-y-4 mt-4 pb-4">
            <SheetTrigger asChild>
              <Button
                asChild
                className="text-xl text-primaryTwo"
                variant="ghost"
              >
                <a href="/#Features">Features</a>
              </Button>
            </SheetTrigger>

            <SheetTrigger asChild>
              <Button
                asChild
                className="text-xl text-primaryTwo"
                variant="ghost"
              >
                <Link href="/#Benefits">Benefits</Link>
              </Button>
            </SheetTrigger>

            <SheetTrigger asChild>
              <Button
                asChild
                className="text-xl text-primaryTwo"
                variant="ghost"
              >
                <Link href="/#About">About Us</Link>
              </Button>
            </SheetTrigger>

            <SheetTrigger asChild>
              <Button
                asChild
                className="text-xl text-primaryTwo"
                variant="ghost"
              >
                <a href="/#FAQ">FAQ</a>
              </Button>
            </SheetTrigger>

            <SheetTrigger asChild>
              <Button
                asChild
                className="text-xl text-primaryTwo"
                variant="ghost"
              >
                <a href="/#Blog">Blog</a>
              </Button>
            </SheetTrigger>

            <SheetTrigger asChild>
              <Button
                asChild
                className="text-xl text-primaryTwo"
                variant="ghost"
              >
                <Link href="/#Help">Help</Link>
              </Button>
            </SheetTrigger>

            <SheetTrigger asChild>
              <Button
                asChild
                className="text-xl text-primaryTwo"
                variant="ghost"
              >
                <a href="/#Contact">Contact Us</a>
              </Button>
            </SheetTrigger>

            <SheetTrigger asChild>
              <LanguageModal />
            </SheetTrigger>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};
