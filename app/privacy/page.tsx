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
    <section className="max-w-3xl mx-auto pb-20 pt-[180px] overflow-x-hidden bg-[#f4f5f7] body_shadow mb-4 rounded-b-[60px] container md:px-8 px-4">
      <PrivacyPolicy />
    </section>
  );
};

export default PrivacyPolicyPage;
