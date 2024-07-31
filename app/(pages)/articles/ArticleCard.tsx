import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ArticleCard = ({ article }: { article: Article }) => {
  return (
    <div className="flex flex-col gap-5 rounded-lg border border-black/10 w-full">
      <Image
        src={article.coverImage}
        alt="article cover image"
        width={800}
        height={600}
        className="object-cover"
      />

      <div className="flex flex-col gap-4 p-5">
        <div className="flex flex-col gap-4 flex-1">
          <p className="flex items-center gap-3">
            <span className="text-base font-bold text-black">
              {article.category}
            </span>
            <span className="text-sm font-normal text-black">
              {article.readingTime}
            </span>
          </p>

          <h3 className="text-xl md:text-2xl font-semibold">{article.title}</h3>
          <p className="text-sm text-black/80 font-normal leading-relaxed">
            {article.excerpt}
          </p>
        </div>

        <Link
          href={`/articles/${article.slug}`}
          className="flex items-center gap-2 text-sm text-primaryColor font-semibold"
        >
          <span>Read More</span>
          <ArrowRight className="w-5 h-5 text-primaryColor" />
        </Link>
      </div>
    </div>
  );
};

export default ArticleCard;
