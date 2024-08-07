import Nav from "@/components/Nav";
import React from "react";

const ArticleLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="w-full flex-col min-h-screen">
      <Nav activeSection="Blog" />
      <div className="overflow-x-hidden w-full mb-auto">{children}</div>
    </section>
  );
};

export default ArticleLayout;
