import Nav from "@/components/Nav";
import React from "react";

const ArticleLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="w-full">
      <Nav activeSection="articles" />
      <div className="overflow-x-hidden w-full">{children}</div>
    </section>
  );
};

export default ArticleLayout;
