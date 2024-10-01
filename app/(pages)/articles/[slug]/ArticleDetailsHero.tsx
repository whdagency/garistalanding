import { Article } from "@/types";
import React from "react";

const ArticleDetailsHero = ({ article }: { article: Article }) => {
  return (
    <section
      style={{
        backgroundImage:
          "url('/assets/article-details-hero.png'), linear-gradient(180deg, #F5F8FF 0%, rgba(225, 233, 255, 0.5) 91.5%)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full overflow-x-hidden py-[150px]"
    >
      <div className="flex flex-col px-4 md:px-8 items-center justify-center gap-5 text-center pb-32">
        <div className="pt-4 flex flex-col items-center gap-5 relative -mt-5">
          <h1 className="uppercase text-primaryColor font-bold text-base md:text-lg pt-5">
            Blog
          </h1>

          <h3 className="text-3xl leading-relaxed md:text-4xl lg:text-5xl text-black/80 font-bold relative max-w-4xl text-center">
            {article.title}
          </h3>
        </div>
      </div>
    </section>
  );
};

export default ArticleDetailsHero;
