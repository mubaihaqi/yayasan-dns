import React from "react";

export default function Footer() {
  return (
    <footer className="bg-background text-txt py-16 px-6 md:px-6 lg:px-24 bg-grid-texture">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-12">
          {/* Company Info */}
          <div className="md:col-span-1">
            <h3 className="text-3xl font-extrabold mb-4 bg-gradient-to-r from-txt to-btn bg-clip-text text-transparent">
              Yayasan Darunnasihah Siliragung
            </h3>
            <p className="text-txt/70 mb-6 text-base">
              Melahirkan lembaga pendidikan dan sosial yang bermutu dan berarti.
            </p>
            {/* Social Media Links would go here */}
          </div>

          {/* Quick Links */}
          <div className="hidden md:block">
            <h4 className="text-xl font-bold mb-6 text-btn">Tautan Cepat</h4>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-txtra/80 hover:text-btn-ra">
                  Beranda
                </a>
              </li>
              <li>
                <a href="/tentang-kami" className="text-txt/80 hover:text-btn">
                  Tentang Kami
                </a>
              </li>
              {/* <li>
                <a href="/laporan" className="text-txt/80 hover:text-btn">
                  Laporan
                </a>
              </li>*/}
              <li>
                <a href="/artikel" className="text-txt/80 hover:text-btn">
                  Artikel
                </a>
              </li>
              <li>
                <a href="/kontak" className="text-txt/80 hover:text-btn">
                  Kontak
                </a>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div className="hidden md:block">
            <h4 className="text-xl font-bold mb-6 text-btn">
              Lembaga Pendidikan
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="/ra-lukluk-abdul-ghoni"
                  className="text-txt/80 hover:text-btn"
                >
                  Raudhotul Athfal
                </a>
              </li>
              <li>
                <a
                  href="/pondok-pesantren"
                  className="text-txt/80 hover:text-btn"
                >
                  Pondok Pesantren
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-btn">Kontak</h4>
            <ul className="space-y-4 text-txt/80">
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 mr-3 mt-1 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
                <span>
                  RT 03 / RW 01, Dusun Krajan, Desa Buluagung, Kecamatan
                  Siliragung, Kabupaten Banyuwangi, Jawa Timur 68488
                </span>
              </li>
              <li className="flex items-center">
                <svg
                  className="h-5 w-5 mr-3 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  ></path>
                </svg>
                <span>+62 831 6882 4889</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="h-5 w-5 mr-3 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
                <span>info@yayasan-dns.or.id</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        {/* <div className="border-t border-txt/10 mt-12 pt-8 text-center text-txt/60">
          <p>
            &copy; {new Date().getFullYear()} Yayasan Darunnasihah Siliragung.
            Hak Cipta Dilindungi.
          </p>
        </div>*/}
      </div>
    </footer>
  );
}
