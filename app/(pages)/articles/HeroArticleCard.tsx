import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroArticleCard = ({ article }: { article: Article }) => {
  return (
    <div
      key={article.id}
      className="bg-white flex flex-col gap-3 rounded-xl py-5 px-5 overflow-hidden"
      style={{
        boxShadow: "0px 15px 80px 0px #161E240D",
      }}
    >
      <div className="px-5">
        <Image
          src={article.coverImage}
          alt={"article cover image"}
          width={600}
          height={400}
          loading="lazy"
          className="object-cover"
          style={{
            width: "600px",
            height: "200px",
          }}
        />
      </div>

      <div className="flex flex-col items-start gap-3 flex-1">
        <p
          style={{ background: "#D4E0F7" }}
          className="text-sm font-semibold text-primaryColor w-fit px-3 py-1 rounded-md"
        >
          {new Date(article.createdAt).toLocaleDateString("en-US", {
            dateStyle: "medium",
          })}
        </p>

        <h2 className="font-semibold text-start text-base text-black/80">
          {article.title}
        </h2>
        <p className="text-sm text-black/80 text-start font-normal leading-relaxed">
          {article.excerpt}
        </p>
      </div>

      <Link
        href={`/articles/${article.slug}`}
        className="text-primaryColor group w-fit text-base md:text-base font-semibold flex items-center gap-1"
      >
        <span>Read More</span>
        <ChevronRight
          size={20}
          className="text-primaryColor group-hover:translate-x-2 transition-transform"
        />
      </Link>
    </div>
  );
};

export default HeroArticleCard;
