import { getEntries } from "@/app/actions/contentful.action";
import { Career } from "@/types";

export const getJobs = async (): Promise<Career[]> => {
  const entries = await getEntries("job");

  const formattedJobs = entries.map(({ fields, sys }) => {
    return {
      id: sys.id as string,
      jobLink: fields.jobLink as string,
      title: fields.title as string,
      location: fields.location as string,
      type: fields.type as string,
      datePosted: new Date(sys.createdAt).toLocaleDateString("en-US", {
        dateStyle: "long",
      }),
      description: fields.description as string,
      createdAt: sys.createdAt as string,
    };
  });

  return formattedJobs.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
};
