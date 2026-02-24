import React from "react";

export default function Footer() {
  return (
    <footer className="bg-card text-primary py-16 px-6 md:px-6 lg:px-24 border-t-2 border-primary relative overflow-hidden">
      {/* Paper texture */}
      <div className="absolute inset-0 opacity-[0.4]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        backgroundSize: '200px 200px'
      }}></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-8">
          {/* Company Info - Lebih lebar */}
          <div className="md:col-span-5">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-primary leading-tight">
              Yayasan Darunnasihah Siliragung
            </h3>
            <div className="w-20 h-1 bg-btn rounded-full mb-6"></div>
            <p className="text-primary text-base leading-relaxed">
              Melahirkan lembaga pendidikan dan sosial yang bermutu dan berarti.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h4 className="text-lg font-bold mb-6 text-btn">Tautan</h4>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-primary hover:text-btn transition-all duration-200 hover:translate-x-1 inline-block">
                  Beranda
                </a>
              </li>
              <li>
                <a href="/tentang-kami" className="text-primary hover:text-btn transition-all duration-200 hover:translate-x-1 inline-block">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="/artikel" className="text-primary hover:text-btn transition-all duration-200 hover:translate-x-1 inline-block">
                  Artikel
                </a>
              </li>
              <li>
                <a href="/kontak" className="text-primary hover:text-btn transition-all duration-200 hover:translate-x-1 inline-block">
                  Kontak
                </a>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div className="md:col-span-2">
            <h4 className="text-lg font-bold mb-6 text-btn">
              Pendidikan
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="/ra-lukluk-abdul-ghoni"
                  className="text-primary hover:text-btn transition-all duration-200 hover:translate-x-1 inline-block"
                >
                  Raudhotul Athfal
                </a>
              </li>
              <li>
                <a
                  href="/pondok-pesantren"
                  className="text-primary hover:text-btn transition-all duration-200 hover:translate-x-1 inline-block"
                >
                  Pondok Pesantren
                </a>
              </li>
              <li>
                <a
                  href="/tpq-lukluk-abdul-ghoni"
                  className="text-primary hover:text-btn transition-all duration-200 hover:translate-x-1 inline-block"
                >
                  Taman Pendidikan Quran
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-3">
            <h4 className="text-lg font-bold mb-6 text-btn">Kontak</h4>
            <ul className="space-y-4 text-primary">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-btn rounded-full mr-3 mt-2 flex-shrink-0"></div>
                <span className="text-sm leading-relaxed">
                  Dusun Krajan, Buluagung, Siliragung, Banyuwangi 68488
                </span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-btn rounded-full mr-3 flex-shrink-0"></div>
                <span className="text-sm">+62 831 6882 4889</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-btn rounded-full mr-3 flex-shrink-0"></div>
                <span className="text-sm">info@yayasan-dns.or.id</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
