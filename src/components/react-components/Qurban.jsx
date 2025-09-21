import React from "react";
import articles from "../../data/articles.json";

export default function Qurban() {
  // Mengambil artikel terbaru (yang paling akhir dalam array)
  const latestArticle = articles[articles.length - 1];

  return (
    <div className="hero bg-card/90 min-h-screen bg-grid-texture">
      <div className="hero-content px-10 flex-col md:flex-row-reverse md:gap-16 lg:gap-32 md:pt-20 lg:pt-30">
        <img
          src={latestArticle.img}
          className="aspect-[3/4] md:aspect-[2/3] rounded-t-full shadow-2xl shadow-btn/65 object-fill mt-8 mb-3 md:my-0 md:max-w-xs lg:max-w-md"
        />
        <div className="w-full border-b-2 border-btn md:hidden mt-3 mb-2 animate-pulse"></div>
        <div className="w-full px-2 md:px-0 mb-10 md:mb-0 md:w-3/5 flex flex-col items-center md:items-start">
          <h1 className="text-2xl text-btn font-semibold md:text-4xl lg:text-5xl md:font-bold lg:font-bold md:leading-tight lg:leading-14 text-center md:text-start">
            {latestArticle.title}
          </h1>
          <p className="pt-2 pb-4 text-center text-txt md:text-start md:hidden">
            {latestArticle.content.replace(/<[^>]*>/g, "").substring(0, 200) +
              "..."}
          </p>
          <p className="pt-2 pb-8 text-center text-txt md:text-start hidden md:block">
            {latestArticle.content.replace(/<[^>]*>/g, "").substring(0, 500) +
              "..."}
          </p>
          <a
            href={`/article/${latestArticle.slug}`}
            className="btn group relative overflow-hidden border-0 rounded-full px-10 py-6 text-xl font-bold transition-all duration-200 ease-in-out transform hover:shadow-lg  bg-btn text-white"
          >
            <span className="relative z-10 font-normal text-base uppercase">
              Baca Selengkapnya
            </span>
            <span className="absolute top-0 left-0 w-full h-full bg-btn-hvr transition-all duration-300 ease-in-out transform -translate-x-full group-hover:translate-x-0"></span>
          </a>
        </div>
      </div>
    </div>
  );
}
