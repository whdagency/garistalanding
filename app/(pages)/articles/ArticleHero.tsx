"use client";
import HeroArticleCard from "@/app/(pages)/articles/HeroArticleCard";
import { Article } from "@/types";
import Image from "next/image";
import React from "react";

const ArticleHero = ({ article }: { article: Article }) => {
  return (
    <section
      style={{
        backgroundImage:
          "url('/assets/hero-bg.png'), linear-gradient(180deg, #F5F8FF 0%, rgba(225, 233, 255, 0.5) 91.5%)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full md:overflow-x-hidden py-[150px]"
    >
      <div className="flex flex-col md:px-8 items-center justify-center gap-5 text-center pb-32 relative">
        <div className="pt-4 flex flex-col items-center gap-5 relative">
          <Image
            src="/icons/hero-top-left.svg"
            width={50}
            height={50}
            alt="layout image"
            style={{
              position: "absolute",
              top: "5px",
              left: "-80px",
            }}
            className="hidden md:block"
          />

          <Image
            src="/icons/hero-middle-left.svg"
            width={50}
            height={50}
            alt="layout image"
            style={{
              position: "absolute",
              top: "50%",
              left: "-100px",
            }}
            className="hidden md:block"
          />

          <Image
            src="/icons/hero-left-bottom.svg"
            width={50}
            height={50}
            alt="layout image"
            style={{
              position: "absolute",
              bottom: "-50px",
              left: "-80px",
            }}
            className="hidden md:block"
          />

          <h1 className="uppercase text-primaryColor font-bold text-base md:text-lg pt-5 md:-mt-10 -mt-5">
            Blog
          </h1>

          <Image
            src="/icons/hero-top-right.svg"
            width={50}
            height={50}
            alt="layout image"
            style={{
              position: "absolute",
              top: "10px",
              right: "-80px",
            }}
            className="hidden md:block"
          />

          <Image
            src="/icons/hero-middle-right.svg"
            width={50}
            height={50}
            alt="layout image"
            style={{
              position: "absolute",
              top: "50%",
              right: "-120px",
            }}
            className="hidden md:block"
          />

          <Image
            src="/icons/hero-right-bottom.svg"
            width={50}
            height={50}
            alt="layout image"
            style={{
              position: "absolute",
              bottom: "-40px",
              right: "-80px",
            }}
            className="hidden md:block"
          />

          <h3 className="text-3xl md:text-4xl lg:text-5xl text-black/80 font-bold relative">
            Writings from our <span className="text-primaryColor">Teams</span>
            <span
              style={{
                position: "absolute",
                top: "-25px",
                right: "-25px",
              }}
              className="block"
            >
              <Image
                src="/icons/hero-line-1.svg"
                width={16}
                height={10}
                alt="line 1"
              />
              <Image
                src="/icons/hero-line-2.svg"
                width={25}
                height={10}
                alt="line 2"
              />
              <Image
                src="/icons/hero-line-3.svg"
                width={25}
                height={10}
                alt="line 3"
              />
            </span>
          </h3>
          <p
            style={{ color: "#5D5D5D" }}
            className="font-medium font-['Inter'] px-4 text-sm md:text-base"
          >
            The latest in online ordering, QR codes, and essential resources for
            restaurants.
          </p>

          <div className="grid grid-cols-1 md:hidden pt-5">
            <HeroArticleCard article={article} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticleHero;
