import React, { useState, useEffect } from "react";

export default function HeroRA() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="hero min-h-[600px] lg:min-h-screen relative"
      style={{
        backgroundImage: "url(https://picsum.photos/1920/1080?random=1)",
      }}
    >
      <div className="hero-overlay bg-bghd/70"></div>

      <div className="hero-content text-neutral-content text-center relative z-10">
        <div className="max-w-3xl pt-20 lg:pt-24 gap-6 flex flex-col items-center">
          <h1
            className={`transition-all duration-700 ease-out ${isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} mb-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight`}
          >
            Raudhotul Athfal
            <br />
            <span className="text-border">Darun Nasihah</span>
          </h1>

          <p
            className={`transition-all duration-700 ease-out delay-150 ${isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} text-xl md:text-2xl font-semibold tracking-wide text-cartu/90`}
          >
            Mencetak Generasi Unggul & Berakhlak Qur'ani
          </p>

          <p
            className={`transition-all duration-700 ease-out delay-300 ${isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} mb-8 font-medium text-base md:text-lg max-w-2xl leading-relaxed px-4 text-cartu/80`}
          >
            Pendidikan anak usia dini yang fokus pada pembentukan karakter
            Islami, hafalan Al-Qur'an, dan pengembangan kreativitas.
          </p>

          <div
            className={`transition-all duration-700 ease-out delay-500 ${isMounted ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
          >
            <button className="btn bg-btn hover:bg-hvrbtn border-0 rounded-full px-8 py-3 text-base font-semibold transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 hover:shadow-lg">
              Daftar Sekarang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
