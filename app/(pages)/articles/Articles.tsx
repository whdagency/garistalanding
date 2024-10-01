"use client";
import ArticleHero from "@/app/(pages)/articles/ArticleHero";
import HeroArticleCard from "@/app/(pages)/articles/HeroArticleCard";
import LatestBlogs from "@/app/(pages)/articles/LatestBlogs";
import { getArticles } from "@/lib/articles";
import React, { useEffect, useState } from "react";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import Image from "next/image";
import { Article, RenderOptions } from "@/types";

// Create a bespoke renderOptions object
export const renderOptions: RenderOptions = {
  renderNode: {
    [INLINES.EMBEDDED_ENTRY]: (node, children) => {
      if (node.data.target.sys.contentType.sys.id === "article") {
        return (
          <a href={`/article/${node.data.target.fields.slug}`}>
            {node.data.target.fields.title}
          </a>
        );
      }
      return null;
    },
    [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
      if (node.data.target.sys.contentType.sys.id === "codeBlock") {
        return (
          <pre>
            <code>{node.data.target.fields.code}</code>
          </pre>
        );
      }

      if (node.data.target.sys.contentType.sys.id === "videoEmbed") {
        return (
          <iframe
            src={node.data.target.fields.embedUrl}
            height="100%"
            width="100%"
            title={node.data.target.fields.title}
            allowFullScreen
          />
        );
      }

      return null;
    },

    [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
      const { url, details } = node.data.target.fields.file;
      const { height, width } = details.image;
      const { description } = node.data.target.fields;

      return (
        <Image
          src={`https://${url}`}
          alt={description}
          width={width}
          height={height}
          layout="responsive"
        />
      );
    },
  },
};

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
