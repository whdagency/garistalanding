import FooterBottom from "@/components/FooterBottom";
import React from "react";

const PagesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex flex-col min-h-screen">
      <main className="mb-auto w-full z-50 pb-20">{children}</main>

      <FooterBottom />
    </section>
  );
};

export default PagesLayout;
