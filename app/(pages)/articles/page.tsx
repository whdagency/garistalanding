import ArticleHero from "@/app/(pages)/articles/ArticleHero";
import HeroArticleCard from "@/app/(pages)/articles/HeroArticleCard";
import LatestBlogs from "@/app/(pages)/articles/LatestBlogs";
import { getArticles } from "@/lib/articles";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "All Articles | Garista",
  description: "All the articles on Garista",
};

const Articles = async () => {
  const articles = await getArticles();

  return (
    <div id="Blog" className="flex flex-col gap-5 bg-white">
      <ArticleHero article={articles[0]} />

      <div
        style={{ marginTop: "-200px" }}
        className="max-w-4xl mx-auto flex-col hidden md:flex items-center gap-8 pb-20"
      >
        <div className="grid grid-cols-2 gap-5">
          {articles.slice(0, 2).map((article) => (
            <HeroArticleCard article={article} key={article.id} />
          ))}
        </div>
      </div>

      <div className="mt-28 sm:mt-24 md:mt-0">
        <LatestBlogs articles={articles.slice(2)} />
      </div>
    </div>
  );
};

export default Articles;
