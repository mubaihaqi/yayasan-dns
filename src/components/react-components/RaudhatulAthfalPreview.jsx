import React from 'react';

const RaudhatulAthfalPreview = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-bghd to-bgtrng">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-border/20">
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
                  Lembaga Pendidikan
                </span>
              </div>
              
              <h2 className="text-3xl font-bold text-txtonnavy mb-4">
                Raudhatul Athfal
              </h2>
              
              <p className="text-cartu/80 mb-6 leading-relaxed">
                Raudhatul Athfal Yayasan DNS merupakan lembaga pendidikan anak usia dini (PAUD) yang berfokus pada pengembangan karakter dan pemahaman dasar nilai-nilai islami. Kami mengedepankan pendekatan holistik dalam mendidik anak-anak usia 3-6 tahun dengan metode bermain sambil belajar yang menyenangkan.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-btn mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-cartu/90">Pendidikan Karakter</span>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-btn mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-cartu/90">Bermain Sambil Belajar</span>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-btn mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-cartu/90">Lingkungan Nyaman</span>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-btn mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-cartu/90">Guru Berpengalaman</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
                <a 
                  href="/raudhotul-athfal" 
                  className="px-6 py-3 bg-btn text-white font-medium rounded-full text-center hover:bg-hvrbtn transition-colors duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  Selengkapnya
                </a>
                <a 
                  href="/kontak" 
                  className="px-6 py-3 bg-transparent border-2 border-btn text-btn font-medium rounded-full text-center hover:bg-btn/10 transition-colors duration-300"
                >
                  Hubungi Kami
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