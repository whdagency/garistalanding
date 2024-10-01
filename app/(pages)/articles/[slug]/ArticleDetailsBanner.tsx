"use client";
import { cn } from "@/lib/utils";
import { Article } from "@/types";
import { Minus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

type ArticleDetailsBannerProps = {
  article: Article;
  className?: string;
};

const ArticleDetailsBanner = ({
  article,
  className,
}: ArticleDetailsBannerProps) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-5 items-center justify-center text-center",
        className
      )}
    >
      <div className="flex flex-col gap-4">
        <Image
          src={article.coverImage}
          alt="article cover image"
          width={900}
          height={600}
          className="object-cover"
        />

        <div className="flex items-start md:items-center justify-between">
          <div className="flex flex-col items-start md:flex-row md:items-center gap-2 md:gap-1 px-4 md:px-8">
            {/* author */}
            <span className="font-bold text-start text-sm sm:text-base text-[#2D3748]">
              Written by {article.author}
            </span>

            {/* vertical line */}
            <Minus
              size={30}
              className="hidden md:block text-black/60"
              style={{ transform: "rotate(90deg)" }}
              strokeWidth={1}
            />
            <hr className="md:hidden w-20 bg-black border-black border" />

            {/* date */}
            <span
              style={{ color: "#718096" }}
              className="font-normal text-sm sm:text-base text-start"
            >
              {new Date(article.createdAt)
                .toLocaleDateString("en-US", {
                  dateStyle: "full",
                })
                .replace(", 2024", "")}
            </span>
          </div>

          {/* Social Media */}
          <div className="flex items-center gap-4 px-4 md:px-8">
            {/* {article.social.facebook && ( */}
            <Link
              href={
                article.social.facebook ??
                "https://facebook.com/garista.official"
              }
              target="_blank"
            >
              <FaFacebook className="text-black" size={20} />
            </Link>
            {/* )} */}
            {/* {article.social.twitter && ( */}
            <Link
              href={article.social.twitter ?? "https://x.com/garistaofficial"}
              target="_blank"
            >
              <FaTwitter className="text-black" size={20} />
            </Link>
            {/* )} */}
            {/* {article.social.instagram && ( */}
            <Link
              href={
                article.social.instagram ??
                "https://instagram.com/garista.official"
              }
              target="_blank"
            >
              <FaInstagram className="text-black" size={20} />
            </Link>
            {/* )} */}
            {/* {article.social.linkedin && ( */}
            <Link
              href={
                article.social.linkedin ??
                "https://www.linkedin.com/company/garistaofficial/"
              }
              target="_blank"
            >
              <FaLinkedin className="text-black" size={20} />
            </Link>
            {/* )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetailsBanner;
