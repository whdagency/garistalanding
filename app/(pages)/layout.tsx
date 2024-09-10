import FooterBottom from "@/components/FooterBottom";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title:
    "Garista | The Ultimate digital menu solution for restaurants and cafés",
  description: "The Ultimate digital menu solution for restaurants and cafés",
  icons: {
    icon: "/Logo/favicon-garista-white_blue.svg",
  },
};

const PagesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex flex-col min-h-screen">
      <main className="mb-auto w-full z-50 pb-20">{children}</main>

      <FooterBottom />
    </section>
  );
};

export default PagesLayout;
