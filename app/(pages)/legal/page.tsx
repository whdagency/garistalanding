import LegalContent from "@/app/(pages)/legal/LegalContent";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Legal | Garista",
  description: "Legal",
  icons: {
    icon: "/Logo/Logo.svg",
  },
};

const LegalPage = () => {
  return <LegalContent />;
};

export default LegalPage;
