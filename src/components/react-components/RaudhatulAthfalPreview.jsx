import React from "react";

const RaudhatulAthfalPreview = () => {
  return (
    <section className="pt-6 pb-16 bg-background relative overflow-hidden group/section">
      {/* Ornamen dekoratif - desktop only */}
      <div className="hidden md:block absolute top-10 left-10 w-32 h-32 border-2 border-btn/20 rounded-full transition-all duration-700 group-hover/section:scale-110 group-hover/section:border-btn/40"></div>
      <div className="hidden md:block absolute top-20 left-20 w-20 h-20 border-2 border-primary/10 rounded-full transition-all duration-700 group-hover/section:scale-125 group-hover/section:border-primary/20"></div>
      <div className="hidden md:block absolute bottom-10 right-10 w-40 h-40 border-2 border-btn/20 rounded-full transition-all duration-700 group-hover/section:scale-110 group-hover/section:border-btn/40"></div>
      <div className="hidden md:block absolute bottom-20 right-20 w-24 h-24 border-2 border-primary/10 rounded-full transition-all duration-700 group-hover/section:scale-125 group-hover/section:border-primary/20"></div>
      <div className="hidden md:block absolute top-1/2 left-0 w-16 h-16 bg-btn/5 rounded-full -translate-x-1/2 transition-all duration-700 group-hover/section:bg-btn/10 group-hover/section:scale-110"></div>
      <div className="hidden md:block absolute top-1/3 right-0 w-20 h-20 bg-primary/5 rounded-full translate-x-1/2 transition-all duration-700 group-hover/section:bg-primary/10 group-hover/section:scale-110"></div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="bg-card rounded-3xl transition-all duration-300 hover:-translate-y-1 overflow-hidden border-2 border-primary relative">
          {/* Paper texture */}
          <div className="absolute inset-0 opacity-[0.4] pointer-events-none" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px'
          }}></div>
          
          <div className="flex flex-col md:flex-row relative z-10">
            {/* Gambar */}
            <div className="md:w-2/5 relative">
              <img
                src="https://picsum.photos/seed/ra-lukluk-abdul-ghoni/800/600"
                alt="Raudhatul Athfal"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Konten */}
            <div className="md:w-3/5 p-8 flex flex-col justify-center">
              <div className="mb-4">
                <span className="inline-block px-4 py-1.5 text-xs font-semibold text-white bg-btn rounded-full">
                  Raudhatul Athfal
                </span>
              </div>

              <h2 className="text-3xl font-bold text-primary mb-4">
                Luk Luk Abdul Ghoniy
              </h2>

              <p className="text-primary mb-6 leading-relaxed text-justify indent-6">
                RA Luk Luk Abdul Ghoniy adalah lembaga pendidikan anak usia dini
                (PAUD) yang berkomitmen menanamkan nilai-nilai Islami sejak
                dini. Kami berfokus pada pembentukan karakter, akhlak mulia,
                serta pemahaman dasar keislaman melalui pendekatan holistik yang
                sesuai dengan tahap perkembangan anak usia 3–6 tahun. Dengan
                metode belajar sambil bermain yang menyenangkan, RA Luk Luk
                Abdul Ghoniy hadir untuk membimbing generasi muda agar tumbuh
                menjadi pribadi yang cerdas, beriman, dan berakhlakul karimah.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-btn rounded-full mr-3"></div>
                  <span className="text-primary">Pendidikan Karakter</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-btn rounded-full mr-3"></div>
                  <span className="text-primary">Pembelajaran Islami</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-btn rounded-full mr-3"></div>
                  <span className="text-primary">Lingkungan Nyaman</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-btn rounded-full mr-3"></div>
                  <span className="text-primary">Guru Berpengalaman</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
                <a
                  href="/ra-lukluk-abdul-ghoni"
                  className="relative inline-flex items-center justify-center gap-2 bg-btn px-8 py-3 border-2 border-primary text-sm md:text-base rounded-full font-semibold text-white cursor-pointer overflow-hidden transition-all duration-700 hover:text-primary group"
                >
                  <span className="relative z-10 transition-all duration-700 group-hover:translate-x-1">Selengkapnya</span>
                  <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-background rounded-full opacity-0 transition-all duration-700 group-hover:w-[300px] group-hover:h-[300px] group-hover:opacity-100"></span>
                  <svg viewBox="0 0 24 24" className="relative z-10 w-5 fill-white transition-all duration-700 group-hover:fill-primary group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                  </svg>
                </a>
                <a
                  href="/kontak"
                  className="relative inline-flex items-center justify-center gap-2 bg-background px-8 py-3 border-2 border-btn text-sm md:text-base rounded-full font-semibold text-btn cursor-pointer overflow-hidden transition-all duration-700 hover:text-white group"
                >
                  <span className="relative z-10 transition-all duration-700 group-hover:translate-x-1">Hubungi Kami</span>
                  <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-btn rounded-full opacity-0 transition-all duration-700 group-hover:w-[300px] group-hover:h-[300px] group-hover:opacity-100"></span>
                  <svg viewBox="0 0 24 24" className="relative z-10 w-5 fill-btn transition-all duration-700 group-hover:fill-white group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RaudhatulAthfalPreview;
