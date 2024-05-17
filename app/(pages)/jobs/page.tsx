import Jobs from "@/app/(pages)/jobs/Jobs";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Available Jobs | Garista",
  description: "All Available Jobs",
  icons: {
    icon: "/Logo/Logo.svg",
  },
};

const JobsPage = () => {
  return <Jobs />;
};
export default JobsPage;
