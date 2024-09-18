"use client";
import ArticleHero from "@/app/(pages)/articles/ArticleHero";
import HeroArticleCard from "@/app/(pages)/articles/HeroArticleCard";
import LatestBlogs from "@/app/(pages)/articles/LatestBlogs";
import { getArticles } from "@/lib/articles";
import React, { useEffect, useState } from "react";

const ArticlesPage = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const formattedArticles = await getArticles();
      setArticles(formattedArticles);
    };

    const interval = setInterval(fetchArticles, 5000); // refetch articles 5 seconds

    fetchArticles();

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="Blog" className="flex flex-col gap-5 bg-white">
      <ArticleHero article={articles[0]} />

      <div
        style={{ marginTop: "-200px" }}
        className="max-w-6xl mx-auto flex-col hidden md:flex items-center gap-8 pb-20"
      >
        <div className="grid grid-cols-2 gap-5">
          {articles.slice(0, 2).map((article) => (
            <HeroArticleCard article={article} key={article?.id} />
          ))}
        </div>
      </div>

      <div className="-mt-48 md:-mt-10">
        <LatestBlogs articles={articles?.slice(1)} />
      </div>
    </div>
  );
};

export default ArticlesPage;
