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
      <div className="absolute inset-0 z-0 bg-ovrlayimg"></div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-background transition-transform duration-300">
            Mari Berjuang Bersama Kami!
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Speech bubble */}
          <div className="relative bg-background rounded-3xl p-8 md:p-12 border-4 border-primary transition-transform duration-300 hover:scale-[1.02] overflow-hidden">
            {/* Paper texture */}
            <div className="absolute inset-0 opacity-[0.4] pointer-events-none" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              backgroundSize: '200px 200px'
            }}></div>

            <div className="absolute top-4 left-8 text-6xl md:text-7xl font-bold text-btn z-10" style={{ fontFamily: 'Georgia, serif' }}>
              ❝
            </div>

            <blockquote className="relative z-10 text-xl md:text-2xl lg:text-3xl font-bold text-primary text-center leading-tight mb-4 px-8 md:px-12">
              Barangsiapa yang menunjuki kepada kebaikan
              <br />
              maka dia akan mendapatkan pahala seperti pahala
              <br className="block lg:hidden" /> orang yang mengerjakannya
            </blockquote>

            <cite className="relative z-10 block text-lg md:text-xl font-bold not-italic text-btn text-center">
              — HR. Muslim
            </cite>

            <div className="absolute -bottom-0 right-10 text-6xl md:text-7xl font-bold text-btn z-10" style={{ fontFamily: 'Georgia, serif' }}>
              ❞
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SloganSection;
