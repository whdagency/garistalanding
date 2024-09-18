import ArticlesPage from "@/app/(pages)/articles/Articles";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "All Articles | Garista",
  description: "All the articles on Garista",
};

const Articles = async () => {
  return <ArticlesPage />;
};

export default Articles;
