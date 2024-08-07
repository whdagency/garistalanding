import { notFound } from "next/navigation";
import React from "react";
import { getArticles } from "@/lib/articles";
import ArticleDetailsHero from "@/app/(pages)/articles/[slug]/ArticleDetailsHero";
import ArticleCard from "@/app/(pages)/articles/ArticleCard";
import ArticleDetailsBanner from "@/app/(pages)/articles/[slug]/ArticleDetailsBanner";

type ArticleDetailsProps = {
  params: {
    slug: string;
  };
};

const getArticle = async (slug: string) => {
  const articles = await getArticles();

  const article = articles.find((article) => article.slug === slug);

  return { article, articles };
};

export const generateMetadata = async ({ params }: ArticleDetailsProps) => {
  const { article } = await getArticle(params.slug);

  if (!article) {
    return {
      title: "Page Not Found",
      description: "Page Not Found",
    };
  }

  return {
    title: `${article?.title} | Chronicles of Garista`,
    description: article?.excerpt,
    openGraph: {
      title: `${article?.title} | Chronicles of Garista`,
      description: article?.excerpt,
      images: [
        {
          url: article?.coverImage,
          width: 1200,
          height: 630,
          alt: `${article?.title} | Chronicles of Garista`,
        },
      ],
    },
  };
};

const ArticleDetails = async ({ params: { slug } }: ArticleDetailsProps) => {
  const { article, articles } = await getArticle(slug);

  if (!article) {
    notFound();
  }

  // Get related articles
  const relatedArticles = articles.filter((a) => a.slug !== slug);

  return (
    <div className="flex flex-col bg-white gap-10">
      <ArticleDetailsHero article={article} />

      <ArticleDetailsBanner article={article} className="-mt-44 md:-mt-60" />

      <div className="bg-white pb-20">
        <div className="px-4 flex flex-col items-center mx-auto">
          <div className="pt-5 max-w-4xl">
            <hr className="bg-black mb-5 hidden md:block" />

            <article className="prose sm:pt-5">{article.content}</article>
          </div>

          <div className="flex flex-col gap-10 items-center pt-20 max-w-7xl">
            <div className="flex flex-col gap-2 items-center text-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center">
                You May Also Like
              </h2>

              <p className="text-sm text-center text-black/80 font-normal md:text-base">
                Explore trends, tips and strategies to elevate your restaurant’s
                success.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {relatedArticles.slice(0, 3).map((article) => (
                <ArticleCard article={article} key={article.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetails;
