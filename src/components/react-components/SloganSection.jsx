import React from 'react';

const SloganSection = () => {
  return (
    <section 
      className="py-20 md:py-28 relative"
      style={{ 
        backgroundImage: "url('https://picsum.photos/seed/yayasan-dns-slogan/1920/1080')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Overlay untuk meningkatkan keterbacaan teks */}
      <div className="absolute inset-0 bg-bghd/80"></div>
      
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-txtonnavy mb-6">
            Mari Berjuang Bersama Kami!
          </h2>
          
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 md:p-8 border border-border/30 inline-block max-w-3xl">
            <blockquote className="text-lg md:text-xl lg:text-2xl font-medium text-cartu italic">
              "Barangsiapa yang menunjuki kepada kebaikan maka dia akan mendapatkan pahala seperti pahala orang yang mengerjakannya"
            </blockquote>
            <cite className="block mt-4 text-base md:text-lg text-btn font-semibold not-italic">
              (HR. Muslim)
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SloganSection;