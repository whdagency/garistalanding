import LegalContent from "@/app/legal/LegalContent";
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
  return (
    <section className="max-w-3xl w-full pt-[180px] overflow-x-hidden bg-[#f4f5f7] body_shadow mb-4 rounded-b-[60px] md:px-8 px-4">
      <LegalContent />
    </section>
  );
};

export default LegalPage;
