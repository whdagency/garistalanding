import TermsOfService from "@/app/(pages)/terms/TermsOfService";
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
  return <TermsOfService />;
};

export default TermsOfServicePage;
