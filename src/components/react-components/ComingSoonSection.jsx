import React from "react";

const ComingSoonSection = () => {
  return (
    <div className="text-center px-4">
      <div className="mb-8">
        <div className="w-24 h-24 bg-btn/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-btn"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          Segera Hadir
        </h1>
        <p className="text-xl text-btn max-w-2xl mx-auto">
          Halaman Pondok Pesantren sedang dalam pengembangan. Kami akan segera
          memperbarui informasi terkini untuk Anda.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <a
          href="/"
          className="px-6 py-3 bg-btn text-white font-medium rounded-full text-center hover:bg-hvrbtn transition-colors duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
        >
          Kembali ke Beranda
        </a>
        <a
          href="/kontak"
          className="px-6 py-3 bg-transparent border-2 border-btn text-btn font-medium rounded-full text-center hover:bg-btn/10 transition-colors duration-300"
        >
          Hubungi Kami
        </a>
      </div>
    </div>
  );
};

export default ComingSoonSection;
