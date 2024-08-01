import Jobs from "@/app/(pages)/jobs/Jobs";
import { getJobs } from "@/lib/get-jobs";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Available Jobs | Garista",
  description: "All Available Jobs",
  icons: {
    icon: "/Logo/Logo.svg",
  },
};

const JobsPage = async () => {
  const jobs = await getJobs();
  return <Jobs jobs={jobs} />;
};
export default JobsPage;
