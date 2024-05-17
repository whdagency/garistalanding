import PrivacyPolicy from "@/app/(pages)/privacy/PrivacyPolicy";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Privacy Policy | Garista",
  description: "Privacy Policy",
  icons: {
    icon: "/Logo/Logo.svg",
  },
};

const PrivacyPolicyPage = () => {
  return <PrivacyPolicy />;
};

export default PrivacyPolicyPage;
