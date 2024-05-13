import TermsOfService from "@/app/terms/TermsOfService";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Terms of Service | Garista",
  description: "Terms of Service",
  icons: {
    icon: "/Logo/Logo.svg",
  },
};

const TermsOfServicePage = () => {
  return (
    <section className="max-w-3xl mx-auto pt-[180px] overflow-x-hidden bg-[#f4f5f7] body_shadow mb-4 rounded-b-[60px] md:px-8 px-4">
      <TermsOfService />
    </section>
  );
};

export default TermsOfServicePage;
