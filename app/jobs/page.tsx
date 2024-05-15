import Jobs from "@/app/jobs/Jobs";
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
  return (
    <section className="max-w-3xl w-full pt-[180px] wrapper pb-5 md:px-8 px-4">
      <Jobs />
    </section>
  );
};
export default JobsPage;
