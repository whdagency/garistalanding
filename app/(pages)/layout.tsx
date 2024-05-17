import React from "react";

const PagesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="max-w-3xl mx-auto pt-[180px] wrapper pb-5 md:px-8 px-4">
      {children}
    </section>
  );
};

export default PagesLayout;
