import { getEntries } from "@/app/actions/contentful.action";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Asset, Entry } from "contentful";
import { Document } from "@contentful/rich-text-types";
import { readingTime } from "reading-time-estimator";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";

export const getArticles = async (): Promise<Article[]> => {
  const entries = await getEntries("article");
  const formattedArticles = entries.map(({ fields, sys }) => {
    const imageUrl = (fields.coverImage as Asset).fields?.file?.url;
    const category = (fields.category as Entry).fields?.name;
    const plainTextContent = documentToPlainTextString(
      fields.content as Document
    );
    const readingTimeEstimate = readingTime(plainTextContent);

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
      readingTime: readingTimeEstimate.text,
    };
  });

  return formattedArticles.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
};
