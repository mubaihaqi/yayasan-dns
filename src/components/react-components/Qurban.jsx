import React from "react";
import articles from "../../data/articles.json";

export default function Qurban() {
  // Mengambil artikel terbaru (yang paling akhir dalam array)
  const latestArticle = articles[articles.length - 1];

  return (
    <div className="hero bg-card min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.4]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        backgroundSize: '200px 200px'
      }}></div>
      <div className="hero-content px-6 md:px-10 flex-col md:flex-row-reverse md:gap-16 lg:gap-32 md:pt-20 lg:pt-30 relative z-10">
        <div className="relative">
          <img
            src={latestArticle.img}
            className="aspect-[3/4] md:aspect-[2/3] rounded-3xl object-cover mt-8 mb-3 md:my-0 md:max-w-xs lg:max-w-md"
          />
          <div className="absolute inset-0 rounded-3xl border-4 border-primary pointer-events-none"></div>
          <div className="absolute inset-0 rounded-3xl border-4 border-primary pointer-events-none translate-x-3 translate-y-3 -z-10"></div>
        </div>
        <div className="w-full border-b-2 border-btn md:hidden mt-3 mb-2"></div>
        <div className="w-full px-2 md:px-0 mb-10 md:mb-0 md:w-3/5 flex flex-col items-center md:items-start">
          <h1 className="text-2xl text-primary font-semibold md:text-4xl lg:text-5xl md:font-bold lg:font-bold md:leading-tight lg:leading-14 text-center md:text-start">
            {latestArticle.title}
          </h1>
          <p className="pt-2 pb-4 text-center text-primary md:text-start md:hidden">
            {latestArticle.content.replace(/<[^>]*>/g, "").substring(0, 200) +
              "..."}
          </p>
          <p className="pt-2 pb-8 text-center text-primary md:text-start hidden md:block">
            {latestArticle.content.replace(/<[^>]*>/g, "").substring(0, 500) +
              "..."}
          </p>
          <a
            href={`/article/${latestArticle.slug}`}
            className="relative inline-flex items-center gap-2 bg-btn px-8 py-3 md:px-10 md:py-4 border-2 border-primary text-sm md:text-base rounded-full font-semibold text-white cursor-pointer overflow-hidden transition-all duration-700 hover:text-primary group"
          >
            <svg
              viewBox="0 0 24 24"
              className="absolute w-5 md:w-6 fill-white z-10 transition-all duration-700 -left-1/4 group-hover:left-3 md:group-hover:left-4 group-hover:fill-primary"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
            </svg>
            <span className="relative z-10 transition-all duration-700 -translate-x-2 group-hover:translate-x-2 uppercase tracking-wide">
              Baca Selengkapnya
            </span>
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-background rounded-full opacity-0 transition-all duration-700 group-hover:w-[300px] group-hover:h-[300px] group-hover:opacity-100"></span>
            <svg
              viewBox="0 0 24 24"
              className="absolute w-5 md:w-6 fill-white z-10 transition-all duration-700 right-3 md:right-4 group-hover:-right-1/4 group-hover:fill-primary"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
