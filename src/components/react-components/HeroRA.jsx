import React, { useState, useEffect } from "react";

export default function HeroRA() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="hero min-h-screen h-screen relative"
      style={{
        backgroundImage: "url(https://picsum.photos/1920/1080?random=1)",
      }}
    >
      <div className="hero-overlay bg-ovrlayimgra"></div>

      <div className="hero-content text-neutral-content text-center relative z-10 flex items-center justify-center h-full">
        <div className="max-w-4xl gap-2 md:gap-6 flex flex-col items-center px-0 md:px-5">
          <h1
            className={`transition-all md:px-24 xl:px-6 duration-500 ease-out ${isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} mb-6 text-[40px] sm:text-5xl md:text-7xl lg:text-7xl font-bold leading-tight font-['Montserrat']`}
          >
            Raudhotul Athfal
            <br className="block" /> Luk Luk Abdul Ghoniy
          </h1>

          <p
            className={`transition-all duration-500 text-btnra ease-out delay-150 ${isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} text-2xl md:text-4xl lg:text-5xl font-bold tracking-wide font-['Montserrat']`}
          >
            Mencetak Generasi Unggul & Berakhlak Qur'ani
          </p>

          <p
            className={`transition-all duration-500 ease-out delay-300 ${isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} mb-6 md:mb-12 font-normal text-lg md:text-3xl max-w-2xl leading-relaxed px-2 font-['Montserrat']`}
          >
            Pendidikan anak usia dini yang fokus pada pembentukan karakter
            Islami, hafalan Al-Qur'an, dan pengembangan kreativitas.
          </p>

          <div
            className={`transition-all duration-500 ease-out delay-500 ${isMounted ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
          >
            <button className="btn group relative overflow-hidden border-0 rounded-full px-10 py-6 text-xl font-bold transition-all duration-200 ease-in-out transform hover:shadow-lg bg-button-ra text-white">
              <span className="relative z-10 font-normal text-base uppercase">
                Daftar Sekarang
              </span>
              <span className="absolute top-0 left-0 w-full h-full bg-button-hover-ra transition-all duration-300 ease-in-out transform -translate-x-full group-hover:translate-x-0"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
