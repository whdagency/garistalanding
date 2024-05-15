import PrivacyPolicy from "@/app/privacy/PrivacyPolicy";
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
  return (
    <section className="max-w-3xl mx-auto pt-[180px] wrapper pb-5 md:px-8 px-4">
      <PrivacyPolicy />
    </section>
  );
};

export default PrivacyPolicyPage;
