import ArticleHero from "@/app/(pages)/articles/ArticleHero";
import LatestBlogs from "@/app/(pages)/articles/LatestBlogs";
import { getArticles } from "@/lib/articles";
import { ChevronRight } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "All Articles | Garista",
  description: "All the articles on Garista",
};

const Articles = async () => {
  const articles = await getArticles();

  return (
    <div className="flex flex-col gap-5 bg-white">
      <ArticleHero />
      <div
        style={{ marginTop: "-200px" }}
        className="max-w-3xl mx-auto flex flex-col items-center gap-8 pb-20"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {articles.slice(0, 2).map((article) => (
            <HeroArticleCard article={article} key={article.id} />
          ))}
        </div>
      </div>

      <LatestBlogs articles={articles.slice(2)} />
    </div>
  );
};

export default Articles;

const HeroArticleCard = ({ article }: { article: Article }) => {
  return (
    <div
      key={article.id}
      className="bg-white last:hidden md:last:block flex flex-col gap-3 rounded-xl py-5 px-5 overflow-hidden"
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

      <div className="flex flex-col gap-3 flex-1">
        <p
          style={{ background: "#D4E0F7" }}
          className="text-sm font-semibold text-primaryColor w-fit px-3 py-1 rounded-md"
        >
          {new Date(article.createdAt).toLocaleDateString("en-US", {
            dateStyle: "medium",
          })}
        </p>

        <h2 className="font-semibold text-base text-black/80">
          {article.title}
        </h2>
        <p className="text-sm text-black/80 font-normal leading-relaxed">
          {article.excerpt}
        </p>
      </div>

      <Link
        href={`/articles/${article.slug}`}
        className="text-primaryColor group text-base md:text-base font-semibold flex items-center gap-1"
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
