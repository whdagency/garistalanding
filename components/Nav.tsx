"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Cross as Hamburger } from "hamburger-react";

import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";

import { Button } from "./ui/button";
import { useTranslation } from "react-i18next";
import LanguageModal from "@/components/LanguageModal";

type Links = {
  activeSection: string;
};

const navLinks = [
  {
    name: "Features",
    url: "Features",
    redirect: false,
  },
  {
    name: "Benefits",
    url: "Benefits",
    redirect: false,
  },
  {
    name: "About Us",
    url: "About",
    redirect: false,
  },
  {
    name: "Contact",
    url: "Contact",
    redirect: false,
  },
  {
    name: "FAQ",
    url: "FAQ",
    redirect: false,
  },
  {
    name: "Blog",
    url: "/articles",
    redirect: false,
  },
  {
    name: "Log In",
    url: "https://admin.garista.com/login",
    redirect: true,
  },
];

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
                {navLinks.slice(0, navLinks.length - 1).map((link, index) => (
                  <a
                    key={index}
                    href={link.name === "Blog" ? link.url : `/#${link.url}`}
                    className={`navLink ${
                      activeSection == link.url
                        ? "text-primaryBg bg-primaryBg/10 rounded-xl"
                        : "text-primaryOne hover:text-primaryBg rounded-xl"
                    }`}
                    target={link.redirect ? "_blank" : ""}
                  >
                    {t(link.name)}
                  </a>
                ))}

                <LanguageModal />
              </div>

              <Link href={"https://admin.garista.com/login"} target={"_blank"}>
                <button className="mx-10 me-auto font-semibold text-black/80 text-sm px-7 py-2 rounded-xl bg-white text-center">
                  <a href="#">Log In</a>
                </button>
              </Link>
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
                setOpen={setOpen}
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
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const MobileNav = ({
  isOpen,
  handleSheet,
  isHamburger,
  setHamburger,
  setOpen,
}: MobileNavProps) => {
  const { t } = useTranslation("global");

  return (
    <>
      <Drawer
        open={isOpen}
        onOpenChange={(open) => {
          setOpen(open);
          setHamburger(open);
        }}
      >
        <DrawerTrigger>
          <Hamburger
            toggled={isHamburger}
            toggle={setHamburger}
            size={20}
            direction="left"
          />
        </DrawerTrigger>

        <DrawerContent>
          <div className="flex flex-col gap-y-4 mt-4 pb-4">
            {navLinks.slice(0, navLinks.length - 1).map((link, index) => (
              <DrawerTrigger asChild key={index}>
                <Button
                  asChild
                  className="text-xl text-primaryTwo"
                  variant="ghost"
                >
                  <a
                    href={link.name === "Blog" ? link.url : `/#${link.url}`}
                    target={link.redirect ? "_blank" : ""}
                  >
                    {t(link.name)}
                  </a>
                </Button>
              </DrawerTrigger>
            ))}

            <DrawerTrigger asChild>
              <LanguageModal />
            </DrawerTrigger>

            <DrawerTrigger asChild>
              <Button
                asChild
                className="text-xl text-primaryTwo"
                variant="ghost"
              >
                <a href={"https://admin.garista.com/login"} target={"_blank"}>
                  {t("Log In")}
                </a>
              </Button>
            </DrawerTrigger>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
};
