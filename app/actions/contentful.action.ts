"use server";

import { contentfulClient, contentfulCMA } from "@/lib/contentful";
import { EntrySkeletonType } from "contentful";
import { KeyValueMap } from "contentful-management";

// get all entries of a content type
export const getEntries = async <TContentType extends EntrySkeletonType>(
  contentType: string
) => {
  const entries = await contentfulClient.getEntries<TContentType>({
    content_type: contentType,
    include: 10,
  });

  return entries.items;
};

export const createEntry = async <TData extends KeyValueMap>(
  contentType: string,
  data: TData
) => {
  const createdEntry = await contentfulCMA.entry.create(
    {
      contentTypeId: contentType,
    },
    {
      fields: data,
    }
  );

  const publishedEntry = await contentfulCMA.entry.publish(
    {
      entryId: createdEntry.sys.id,
    },
    {
      fields: createdEntry.fields,
      metadata: createdEntry.metadata,
      sys: createdEntry.sys,
    }
  );

  return publishedEntry;
};
