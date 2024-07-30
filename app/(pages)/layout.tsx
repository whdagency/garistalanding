import FooterBottom from "@/components/FooterBottom";
import React from "react";

const PagesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="pb-5 flex flex-col min-h-screen">
      <main className="flex-1 w-full pt-[150px] z-50">{children}</main>

      {/* <FooterBottom /> */}
    </section>
  );
};

export default PagesLayout;
