"use client";
import React from "react";
import { renderOptions } from "@/app/(pages)/articles/Articles";
import {
  documentToReactComponents,
  Options,
} from "@contentful/rich-text-react-renderer";
import { Article } from "@/types";

const ArticleDetailsContent = ({ article }: { article: Article }) => {
  return (
    <article className="prose sm:pt-5">
      {documentToReactComponents(
        article.content,
        renderOptions as unknown as Options
      )}
    </article>
  );
};

export default ArticleDetailsContent;
