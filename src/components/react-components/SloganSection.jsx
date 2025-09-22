import React from "react";

const SloganSection = () => {
  const backgroundImageUrl = "https://picsum.photos/seed/yayasan/1920/1080";

  return (
    <section
      className="py-16 md:py-32 relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
      }}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{ backgroundColor: "var(--color-ovrlayimg)" }}
      ></div>

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <div className="text-center">
          <h2
            className="text-3xl leading-10 md:text-5xl text-bg lg:text-6xl font-bold mb-6 shadow-lg "
            style={{ color: "var(--color-bg)" }}
          >
            Mari Berjuang
            <br />
            Bersama Kami!
          </h2>
          {/* <div
            className="w-5/6 h-1 mx-auto mb-12 animate-pulse"
            style={{ backgroundColor: "var(--color-border)", opacity: 0.5 }}
          ></div>*/}

          <div
            className="relative backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-12 inline-block max-w-3xl"
            style={{
              backgroundColor: "oklch(from var(--color-card) h c / 0.1)",
              borderColor: "oklch(from var(--color-border) h c / 0.2)",
              borderWidth: "1px",
            }}
          >
            <span
              className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 text-9xl font-serif select-none"
              style={{ color: "oklch(from var(--color-border) h c / 0.1)" }}
            >
              “
            </span>
            <blockquote
              className="relative z-10 text-xl md:text-2xl lg:text-3xl font-medium italic leading-relaxed shadow-sm"
              style={{ color: "var(--color-bg)" }}
            >
              "Barangsiapa yang menunjuki kepada kebaikan maka dia akan
              mendapatkan pahala seperti pahala orang yang mengerjakannya"
            </blockquote>
            <cite
              className="relative z-10 block mt-6 text-lg md:text-xl font-semibold not-italic"
              style={{ color: "var(--color-btn)" }}
            >
              (HR. Muslim)
            </cite>
            <span
              className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 text-9xl font-serif select-none"
              style={{ color: "oklch(from var(--color-border) h c / 0.1)" }}
            >
              ”
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SloganSection;
