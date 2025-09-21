import React from "react";

const SloganSection = () => {
  return (
    <section className="py-20 md:py-28 relative bg-card bg-grid-texture overflow-hidden">
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-btn mb-4">
            Mari Berjuang Bersama Kami!
          </h2>
          <div className="w-24 h-1 bg-border mx-auto mb-8"></div>

          <div className="relative bg-background/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 md:p-8 border border-border/30 inline-block max-w-3xl">
            <span className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 text-8xl text-border/10 font-serif select-none">
              “
            </span>
            <blockquote className="relative z-10 text-lg md:text-xl lg:text-2xl font-medium text-txt italic">
              "Barangsiapa yang menunjuki kepada kebaikan maka dia akan
              mendapatkan pahala seperti pahala orang yang mengerjakannya"
            </blockquote>
            <cite className="relative z-10 block mt-4 text-base md:text-lg text-btn font-semibold not-italic">
              (HR. Muslim)
            </cite>
            <span className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 text-8xl text-border/10 font-serif select-none">
              ”
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SloganSection;
