import React from "react";

const RaudhatulAthfalPreview = () => {
  return (
    <section className="pb-16 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="bg-white/90 rounded-2xl shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden border border-border/20">
          <div className="flex flex-col md:flex-row">
            {/* Gambar */}
            <div className="md:w-2/5">
              <img
                src="https://picsum.photos/seed/raudhotul-athfal/800/600"
                alt="Raudhatul Athfal"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Konten */}
            <div className="md:w-3/5 p-8 flex flex-col justify-center">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-btn bg-btn/10 rounded-full">
                  Raudhatul Athfal
                </span>
              </div>

              <h2 className="text-3xl font-bold text-txt mb-4">
                Luk Luk Abdul Ghoniy
              </h2>

              <p className="text-txt/80 mb-6 leading-relaxed">
                Raudhatul Athfal Yayasan DNS merupakan lembaga pendidikan anak
                usia dini (PAUD) yang berfokus pada pengembangan karakter dan
                pemahaman dasar nilai-nilai islami. Kami mengedepankan
                pendekatan holistik dalam mendidik anak-anak usia 3-6 tahun
                dengan metode bermain sambil belajar yang menyenangkan.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-btn mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-txt/90">Pendidikan Karakter</span>
                </div>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-btn mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-txt/90">Pembelajaran Islami</span>
                </div>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-btn mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-txt/90">Lingkungan Nyaman</span>
                </div>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-btn mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-txt/90">Guru Berpengalaman</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
                <a
                  href="/raudhotul-athfal"
                  className="btn group relative overflow-hidden border-0 rounded-full px-10 py-6 text-lg font-bold transition-all duration-200 ease-in-out transform hover:shadow-lg bg-btn text-white"
                >
                  <span className="relative z-10">Selengkapnya</span>
                  <span className="absolute top-0 left-0 w-full h-full bg-btn-hvr transition-all duration-300 ease-in-out transform -translate-x-full group-hover:translate-x-0"></span>
                </a>
                <a
                  href="/kontak"
                  className="btn group relative overflow-hidden border-2 border-btn rounded-full px-10 py-6 text-lg font-bold transition-all duration-200 ease-in-out transform hover:shadow-lg text-btn bg-transparent hover:text-white"
                >
                  <span className="relative z-10">Hubungi Kami</span>
                  <span className="absolute top-0 left-0 w-full h-full bg-btn transition-all duration-300 ease-in-out transform -translate-x-full group-hover:translate-x-0"></span>
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
