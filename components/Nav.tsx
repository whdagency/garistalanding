import Image from "next/image";
import Link from "next/link";
import React from "react";

type Links = {
  activeSection: string;
};

function Nav({ activeSection }: Links) {
  return (
    <div className="bg-transparent pt-4 fixed z-50 top-[0%] left-[0%] right-[0%] bottom-auto">
      <div className="flex justify-center items-center">
        <div className="relative h-[72px] flex justify-center items-center px-6 bg-secondaryBg rounded-3xl shadow-navShadow">
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
                href="#Contact"
                className={`navLink ${
                  activeSection == "Contact"
                    ? "text-primaryBg bg-primaryBg/10 rounded-xl"
                    : "text-primaryOne hover:text-primaryBg rounded-xl"
                }`}
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
