"use client";

import React, { useState } from "react";

const LatestBlogs = ({ articles }: { articles: Article[] }) => {
  const [filteredArticles, setFilteredArticles] = useState(articles);
  const [searchTerm, setSearchTerm] = useState("");

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);

    if (e.target.value === "") {
      setFilteredArticles(articles);
      return;
    }

    const value = e.target.value;
    const filteredArticles = articles.filter((article) => {
      return article.title.toLowerCase().includes(value.toLowerCase());
    });

    setFilteredArticles(filteredArticles);
  };

  return (
    <section className="flex flex-col gap-5 bg-white pb-20">
      <div className="flex flex-col gap-5 items-center mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-black/80 text-center w-fit mx-auto">
          Latest Blogs
        </h2>

        <form
          method="post"
          className="w-full mx-auto"
          style={{ maxWidth: "80rem" }}
        >
          <input
            type="text"
            placeholder="Search blogs..."
            className="w-full rounded-md px-3 py-2 text-sm border-none focus:outline-none"
            onChange={handleFilter}
            style={{ background: "#F5F5F5" }}
          />
        </form>
      </div>
    </section>
  );
};

export default LatestBlogs;
