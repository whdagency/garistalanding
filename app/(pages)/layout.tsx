import FooterBottom from "@/components/FooterBottom";
import React from "react";

const PagesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    // <section className="max-w-3xl mx-auto pt-[180px] wrapper pb-5 md:px-8 px-4">
    <section className="max-w-3xl mx-auto pb-5 md:px-8 px-4 flex flex-col min-h-screen">
      <main className="flex-1 w-full pt-[150px] z-50">{children}</main>

      <FooterBottom />
    </section>
  );
};

export default PagesLayout;
