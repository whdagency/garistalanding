"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getArticles } from "@/lib/articles";

const Articles = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 3;

  useEffect(() => {
    const fetchArticles = async () => {
      const formattedArticles = await getArticles();
      setArticles(formattedArticles);
    };

    const interval = setInterval(fetchArticles, 5000); // refetch articles every 5 seconds

    fetchArticles();

    return () => clearInterval(interval);
  }, []);

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles
    .slice(1)
    .slice(indexOfFirstArticle, indexOfLastArticle);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div id="Blog" className="container md:px-8 px-4">
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

        <section className="flex flex-col gap-20 max-w-6xl 2xl:max-w-7xl">
          {articles.length > 0 && (
            <>
              {/* Latest Article */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-7 xl:gap-10">
                <Image
                  src={articles[0]?.coverImage}
                  alt={articles[0]?.title}
                  width={1000}
                  height={1000}
                  className="object-cover w-full h-full"
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

                  <div className="flex flex-col gap-5">
                    <Link
                      href={`/articles/${articles[0]?.slug}`}
                      className="text-2xl md:text-3xl xl:text-[33px] 2xl:text-4xl text-[#111827] font-semibold"
                    >
                      {articles[0]?.title}
                    </Link>
                    <p className="text-base xl:text-lg text-[#3F4654] font-normal">
                      {articles[0]?.excerpt}
                    </p>
                  </div>
                </div>
              </div>

              {/* Articles */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 xl:gap-7 -mt-5">
                {articles.length > 1 &&
                  currentArticles.map((article, index) => (
                    <div
                      className="grid grid-cols-1 gap-5 h-full place-items-start place-content-start"
                      key={index}
                    >
                      <div className="flex flex-col gap-4 w-full">
                        <Image
                          src={article?.coverImage}
                          alt={article?.title}
                          width={800}
                          height={800}
                          className="object-cover w-full h-full md:h-[200px]"
                        />

                        <div className="flex items-center gap-2 w-full">
                          <span className="text-xs rounded-full bg-[#001B790A] text-center text-capitalize text-[#6B7589] px-2 xl:px-4 py-1 font-medium">
                            {article?.category}
                          </span>
                          <hr className="w-5 xl:w-9 border-t-2 border-[#9BA5B9]" />
                          <span className="text-xs text-[#9BA5B9] font-medium">
                            {new Date(article?.createdAt).toLocaleDateString(
                              "en-US",
                              {
                                dateStyle: "medium",
                              }
                            )}
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-col gap-3">
                        <Link
                          href={`/articles/${article?.slug}`}
                          className="text-2xl text-[#111827] font-semibold"
                        >
                          {article?.title}
                        </Link>

                        <p className="text-sm text-[#3F4654] font-normal tracking-wide">
                          {article?.excerpt}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </>
          )}
        </section>

        {/* Pagination */}
        {/* {articles.length > 4 && (
          <div className="flex justify-center mt-5">
            <nav>
              <ul className="inline-flex items-center gap-3 -space-x-px">
                {Array.from({
                  length: Math.ceil((articles.length - 1) / articlesPerPage),
                }).map((_, index) => (
                  <li key={index}>
                    <button
                      onClick={() => paginate(index + 1)}
                      className={`px-3 py-2 border ${currentPage === index + 1 ? "bg-secondaryBg text-white" : "bg-white text-secondaryBg"} rounded-md`}
                    >
                      {index + 1}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default Articles;
