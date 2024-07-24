"use client";

import React, { useEffect, useState } from "react";
import { getEntries } from "@/app/actions/contentful.action";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";
import { Asset, Entry } from "contentful";
import Image from "next/image";
import Link from "next/link";

interface Article {
  title: string;
  slug: string;
  coverImage: string;
  excerpt: string;
  content: React.ReactNode;
  category: string;
  id: string;
  createdAt: string;
  updatedAt: string;
}

const Articles = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const entries = await getEntries("article");
      const formattedArticles = entries.map(({ fields, sys }) => {
        const imageUrl = (fields.coverImage as Asset).fields?.file?.url;
        const category = (fields.category as Entry).fields?.name;

        return {
          title: fields.title as string,
          slug: fields.slug as string,
          coverImage: `https:${imageUrl}`,
          excerpt: fields.excerpt as string,
          content: documentToReactComponents(fields.content as Document),
          category: category as string,
          id: sys.id as string,
          createdAt: sys.createdAt as string,
          updatedAt: sys.updatedAt as string,
        };
      });

      setArticles(
        formattedArticles.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        )
      );
    };

    const interval = setInterval(fetchArticles, 60 * 1000 * 5); // refetch articles every 5 minutes

    fetchArticles();

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="articles" className="container md:px-8 px-4">
      <div className="pb-[100px] flex flex-col gap-10 items-center">
        <section className="flex flex-col gap-4 items-center text-center">
          <h2 className="text-3xl md:text-4xl text-[#231D4F] font-bold">
            Latest Articles
          </h2>
          <p className="text-base text-[#848199] font-medium">
            Explore trends, tips and strategies to elevate your restaurant's
            success.
          </p>
        </section>

        <section className="flex flex-col gap-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <Image
              src={articles[0]?.coverImage}
              alt={articles[0]?.title}
              width={1000}
              height={1000}
              className="object-cover"
            />

            <div className="flex flex-col gap-4 md:mt-5">
              <div className="flex items-center gap-3">
                <span className="text-sm rounded-full bg-[#001B790A] text-center text-capitalize text-[#6B7589] px-5 py-1 font-medium">
                  {articles[0]?.category}
                </span>
                <hr className="w-9 border-t-2 border-[#9BA5B9]" />
                <span className="text-xs text-[#9BA5B9] font-medium">
                  {new Date(articles[0]?.createdAt).toLocaleDateString(
                    "en-US",
                    {
                      dateStyle: "medium",
                    }
                  )}
                </span>
              </div>

              <div className="flex flex-col gap-3">
                <Link
                  href={`/articles/${articles[0]?.slug}`}
                  className="text-2xl md:text-3xl text-[#111827] font-semibold"
                >
                  {articles[0]?.title}
                </Link>
                <p className="text-base text-[#3F4654] font-normal">
                  {articles[0]?.excerpt}
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {articles.length > 1 &&
              articles.slice(1, 4).map((article, index) => (
                <div className="grid grid-cols-1 gap-5" key={index}>
                  <Image
                    src={article?.coverImage}
                    alt={article?.title}
                    width={800}
                    height={800}
                    className="object-cover"
                  />

                  <div className="flex flex-col gap-4 md:mt-5">
                    <div className="flex items-center gap-3">
                      <span className="text-xs rounded-full bg-[#001B790A] text-center text-capitalize text-[#6B7589] px-4 py-1 font-medium">
                        {article?.category}
                      </span>
                      <hr className="w-9 border-t-2 border-[#9BA5B9]" />
                      <span className="text-xs text-[#9BA5B9] font-medium">
                        {new Date(article?.createdAt).toLocaleDateString(
                          "en-US",
                          {
                            dateStyle: "medium",
                          }
                        )}
                      </span>
                    </div>

                    <div className="flex flex-col gap-3">
                      <Link
                        href={`/articles/${article?.slug}`}
                        className="text-2xl text-[#111827] font-semibold"
                      >
                        {article?.title}
                      </Link>
                      <p className="text-sm text-[#3F4654] font-normal">
                        {article?.excerpt}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Articles;
