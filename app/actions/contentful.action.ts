"use server";

import { contentfulClient } from "@/lib/contentful";
import { EntryCollection, EntrySkeletonType } from "contentful";

// get all entries of a content type
export const getEntries = async <TContentType extends EntrySkeletonType>(
  contentType: string
) => {
  const entries = await contentfulClient.getEntries<TContentType>({
    content_type: contentType,
  });

  return entries.items;
};

// export const getEntries = async <TContentType extends EntrySkeletonType>(
//   content_type: string
// ) => {
//   const baseUrl = process.env.CONTENTFUL_API_BASE_URL as string;
//   const space_id = process.env.CONTENTFUL_SPACE_ID as string;
//   const environment_id = process.env.CONTENTFUL_ENVIRONMENT as string;
//   const access_token = process.env.CONTENTFUL_ACCESS_TOKEN as string;

//   const url = `${baseUrl}/spaces/${space_id}/environments/${environment_id}/entries?access_token=${access_token}&content_type=${content_type}`;

//   const res = await fetch(url, {
//     headers: {
//       "Content-Type": "application/json",
//     },
//     next: {
//       revalidate: 60, // revalidate every 60 seconds
//     },
//   });

//   const entries: EntryCollection<TContentType, undefined, string> =
//     await res.json();

//   return entries.items;
// };
