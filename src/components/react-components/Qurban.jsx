import React from "react";
import articles from "../../data/articles.json";

export default function Qurban() {
  // Mengambil artikel terbaru (yang paling akhir dalam array)
  const latestArticle = articles[articles.length - 1];

  return (
    <div className="hero bg-bghd min-h-screen">
      <div className="hero-content px-5 flex-col md:flex-row-reverse md:gap-16 lg:gap-32 md:pt-20 lg:pt-30">
        <img
          src={latestArticle.img}
          className="lg:max-w-md aspect-[3/4] md:aspect-[2/3] rounded-t-full shadow-2xl shadow-border object-fill mt-8 mb-6 md:my-0 md:max-w-xs lg:max-w-md"
        />
        <div className="w-full px-6 md:px-0 md:w-3/5 flex flex-col items-center md:items-start">
          <h1 className="text-2xl text-txtonnavy font-semibold md:text-4xl lg:text-5xl md:font-bold lg:font-bold md:leading-tight lg:leading-14 text-center md:text-start">
            {latestArticle.title}
          </h1>
          <p className="pt-2 pb-4 block md:hidden text-center">
            {latestArticle.content.replace(/<[^>]*>/g, "").substring(0, 150) + "..."}
          </p>
          <p className="py-2 md:py-4 lg:py-6 hidden md:block text-start overflow-hidden" style={{
            display: '-webkit-box',
            WebkitLineClamp: 10,
            WebkitBoxOrient: 'vertical'
          }}>
            {latestArticle.content.replace(/<[^>]*>/g, "")}
          </p>
          <a href={`/article/${latestArticle.slug}`} className="btn bg-btn hover:bg-hvrbtn border-border rounded-full px-6 flex justify-between items-center gap-6 !py-6 mt-4 md:mt-6">
            Info Selengkapnya
          </a>
        </div>
      </div>
    </div>
  );
}
