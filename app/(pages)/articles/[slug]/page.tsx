import { getEntries } from "@/app/actions/contentful.action";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";
import { Asset, Entry } from "contentful";
import { notFound } from "next/navigation";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type ArticleDetailsProps = {
  params: {
    slug: string;
  };
};

const getArticle = async (slug: string) => {
  const entries = await getEntries("article");
  const articles = entries.map(({ fields, sys }) => {
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
    <div className="container md:px-8 px-4 mb-10 flex flex-col gap-5">
      <Link
        href="/#articles"
        className="flex items-center gap-2 text-[#231D4F] font-bold group"
      >
        <ArrowLeft
          size={20}
          className="text-[#231D4F] group-hover:translate-x-1 transition-transform"
        />
        <span className="text-base">Go Back</span>
      </Link>

      <article className="flex flex-col gap-10 items-center mb-20">
        <header className="w-full text-center">
          <h1 className="text-3xl md:text-4xl text-[#231D4F] font-bold">
            {article.title}
          </h1>
          <div className="flex items-center justify-center gap-3 mt-4">
            <span className="text-sm rounded-full bg-[#001B790A] text-center text-capitalize text-[#6B7589] px-5 py-1 font-medium">
              {article.category}
            </span>
            <hr className="w-9 border-t-2 border-[#9BA5B9]" />
            <span className="text-xs text-[#9BA5B9] font-medium">
              {new Date(article.createdAt).toLocaleDateString("en-US", {
                dateStyle: "medium",
              })}
            </span>
          </div>
        </header>

        <div className="w-full">
          <Image
            src={article.coverImage}
            alt={article.title}
            width={1200}
            height={600}
            className="object-cover w-full h-auto"
          />
        </div>

        <section className="prose lg:prose-xl max-w-none">
          {article.content}
        </section>
      </article>

      {/* Related Articles Section */}
      <section className="w-full flex flex-col gap-5">
        <h2 className="text-xl underline text-[#231D4F] font-semibold">
          Read More Articles
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {relatedArticles.slice(0, 3).map((article, index) => (
            <div className="grid grid-cols-1 gap-5" key={index}>
              <Image
                src={article?.coverImage}
                alt={article?.title}
                width={800}
                height={800}
                className="object-cover"
              />

              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-xs rounded-full bg-[#001B790A] text-center text-capitalize text-[#6B7589] px-4 py-1 font-medium">
                    {article?.category}
                  </span>
                  <hr className="w-9 border-t-2 border-[#9BA5B9]" />
                  <span className="text-xs text-[#9BA5B9] font-medium">
                    {new Date(article?.createdAt).toLocaleDateString("en-US", {
                      dateStyle: "medium",
                    })}
                  </span>
                </div>

                <div className="flex flex-col gap-3">
                  <Link
                    href={`/articles/${article?.slug}`}
                    className="text-xl text-[#111827] font-semibold"
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
  );
};

export default ArticleDetails;
