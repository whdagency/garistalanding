import { getEntries } from "@/app/actions/contentful.action";
import { Asset, Entry } from "contentful";
import { Document } from "@contentful/rich-text-types";
import { readingTime } from "reading-time-estimator";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";
import { Article } from "@/types";

export const getArticles = async (): Promise<Article[]> => {
  const entries = await getEntries("article");

  const formattedArticles = entries.map(({ fields, sys }) => {
    const imageUrl = (fields.coverImage as Asset).fields?.file?.url;
    const category = (fields.category as Entry).fields?.name;
    const author = (fields.author as Entry).fields?.name;
    const authorFacebook = (fields.author as Entry).fields?.facebook;
    const authorTwitter = (fields.author as Entry).fields?.twitter;
    const authorInstagram = (fields.author as Entry).fields?.instagram;
    const authorLinkedin = (fields.author as Entry).fields?.linkedin;

    const plainTextContent = documentToPlainTextString(
      fields.content as Document
    );
    const readingTimeEstimate = readingTime(plainTextContent);

    return {
      title: fields.title as string,
      slug: fields.slug as string,
      coverImage: `https:${imageUrl}`,
      excerpt: fields.excerpt as string,
      content: fields.content as Document,
      category: category as string,
      id: sys.id as string,
      createdAt: sys.createdAt as string,
      updatedAt: sys.updatedAt as string,
      readingTime: readingTimeEstimate.text,
      author: author as string,
      social: {
        facebook: authorFacebook as string,
        twitter: authorTwitter as string,
        instagram: authorInstagram as string,
        linkedin: authorLinkedin as string,
      },
    };
  });

  return formattedArticles.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
};
