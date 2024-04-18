import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Cross as Hamburger } from "hamburger-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "./ui/button";

type Links = {
  activeSection: string;
};

function Nav({ activeSection }: Links) {
  const [isOpen, setOpen] = useState(false);
  const [isHamburger, setHamburger] = useState(false);

  const handleSheet = () => {
    setOpen(!isOpen);
    setHamburger(!isOpen);
  };

  return (
    <div className="bg-transparent pt-4 fixed z-50 top-[0%] left-[0%] right-[0%] bottom-auto">
      <div className="sm:flex sm:justify-center sm:items-center">
        <div className="hidden relative h-[72px] sm:flex justify-center items-center px-6 bg-secondaryBg rounded-3xl shadow-navShadow">
          <div className="z-10 flex items-center">
            <div className="flex gap-x-5 items-center">
              <a
                href="#About"
                className={`navLink ${
                  activeSection == "About"
                    ? "text-primaryBg bg-primaryBg/10 rounded-xl"
                    : "text-primaryOne hover:text-primaryBg rounded-xl"
                }`}
              >
                About
              </a>

              <a
                href="#Features"
                className={`navLink ${
                  activeSection == "Features"
                    ? "text-primaryBg bg-primaryBg/10 rounded-xl"
                    : "text-primaryOne hover:text-primaryBg rounded-xl"
                }`}
              >
                Features
              </a>
            </div>

            <div className="w-[104px] h-12 flex justify-center items-center">
              <Link
                href="#Home"
                className="relative size-12 cursor-pointer flex justify-center items-center hover:rotate-180 hover:scale-[1.2] transition-transform duration-300"
              >
                <div className="size-full">
                  <Image src="/Logo/Logo White.svg" alt="logo" fill />
                </div>
              </Link>
            </div>

            <div className="flex gap-x-5 items-center">
              <a
                href="#Pricing"
                className={`navLink ${
                  activeSection == "Pricing"
                    ? "text-primaryBg bg-primaryBg/10 rounded-xl"
                    : "text-primaryOne hover:text-primaryBg rounded-xl"
                }`}
              >
                Pricing
              </a>

              <a
                href="#Testimonials"
                className={`navLink ${
                  activeSection == "Testimonials"
                    ? "text-primaryBg bg-primaryBg/10 rounded-xl"
                    : "text-primaryOne hover:text-primaryBg rounded-xl"
                }`}
              >
                Contact
              </a>
            </div>
          </div>
        </div>

        <div className="relative h-[72px] sm:hidden flex justify-center items-center mx-3 px-6 bg-secondaryBg rounded-3xl shadow-navShadow">
          <div className="w-full flex justify-between items-center max-w-lg">
            <div className="relative">
              <Link
                href="#Home"
                className="relative size-10 cursor-pointer flex justify-center items-center hover:rotate-180 hover:scale-[1.2] transition-transform duration-300"
              >
                <div className="size-full">
                  <Image src="/Logo/Logo White.svg" alt="logo" fill />
                </div>
              </Link>
            </div>

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
                      <a href="#About">About</a>
                    </Button>
                  </SheetTrigger>

                  <SheetTrigger asChild>
                    <Button
                      asChild
                      className="text-xl text-primaryTwo"
                      variant="ghost"
                    >
                      <Link href="#Features">Features</Link>
                    </Button>
                  </SheetTrigger>

                  <SheetTrigger asChild>
                    <Button
                      asChild
                      className="text-xl text-primaryTwo"
                      variant="ghost"
                    >
                      <a href="#Pricing">Pricing</a>
                    </Button>
                  </SheetTrigger>

                  <SheetTrigger asChild>
                    <Button
                      asChild
                      className="text-xl text-primaryTwo"
                      variant="ghost"
                    >
                      <a href="#Contact">Contact</a>
                    </Button>
                  </SheetTrigger>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
