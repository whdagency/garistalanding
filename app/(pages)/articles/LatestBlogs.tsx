"use client";

import ArticleCard from "@/app/(pages)/articles/ArticleCard";
import React, { useState } from "react";

const LatestBlogs = ({ articles }: { articles: Article[] }) => {
  const [filteredArticles, setFilteredArticles] = useState(articles);
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 18;

  const handleSearchFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "") {
      setFilteredArticles(articles);
      setCurrentPage(1);
      return;
    }

    const value = e.target.value;
    const filtered = articles.filter((article) =>
      article.title.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredArticles(filtered);
    setCurrentPage(1);
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  // Calculate the current articles to display
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = filteredArticles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  // Calculate total pages
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);

  return (
    <section className="flex flex-col gap-5 bg-white pb-20 px-4 md:px-8">
      <div className="flex flex-col gap-5 items-center">
        <h2 className="text-3xl md:text-4xl font-bold text-black/80 text-center w-fit mx-auto">
          Latest Blogs
        </h2>

        <form method="post" className="w-full max-w-md">
          <input
            type="text"
            placeholder="Search blogs..."
            className="w-full rounded-md px-3 py-3 text-sm border-none focus:outline-none"
            onChange={handleSearchFilter}
            style={{ background: "#F5F5F5" }}
          />
        </form>
      </div>

      <div className="flex flex-col gap-5 items-center mx-auto pt-5">
        {currentArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {currentArticles.map((article) => (
              <ArticleCard article={article} key={article.id} />
            ))}
          </div>
        ) : (
          <p className="text-center text-sm">No articles found</p>
        )}
      </div>

      {filteredArticles.length > articlesPerPage && (
        <div className="flex justify-center gap-2 mt-5">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`px-3 py-1 border rounded ${
                currentPage === index + 1
                  ? "bg-primaryColor text-white"
                  : "bg-white text-black"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}
    </section>
  );
};

export default LatestBlogs;
