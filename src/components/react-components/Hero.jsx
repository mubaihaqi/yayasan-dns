import React, { useState, useEffect } from "react";

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="hero min-h-screen h-screen relative"
      style={{ backgroundImage: "url(https://picsum.photos/1920/1080)" }}
    >
      <div className="hero-overlay bg-ovrlayimg"></div>

      <div className="hero-content text-neutral-content text-center relative z-10 flex items-center justify-center h-full pt-24 md:pt-24">
        <div className="max-w-4xl gap-4 md:gap-8 flex flex-col items-center px-4 md:px-8">
          <h1
            className={`transition-all duration-300 ${isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold leading-tight font-['Montserrat']`}
          >
            Yayasan <br className="block md:hidden" /> Darun Nasihah Siliragung
          </h1>

          <p
            className={`transition-all duration-300 delay-100 ${isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-btn tracking-wide font-['Montserrat']`}
          >
            Islami, Qur'ani, Rabbani
          </p>

          <p
            className={`transition-all duration-300 delay-200 ${isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} font-normal text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl max-w-2xl leading-relaxed font-['Montserrat']`}
          >
            Melahirkan lembaga pendidikan dan sosial yang bermutu dan berarti
          </p>

          <div
            className={`transition-all duration-300 delay-300 mt-4 md:mt-6 ${isMounted ? "opacity-100" : "opacity-0"}`}
          >
            <a
              href="/tentang-kami"
              className="relative inline-flex items-center gap-2 bg-btn px-8 py-3 md:px-10 md:py-4 border-2 border-primary text-sm md:text-base rounded-full font-semibold text-white cursor-pointer overflow-hidden transition-all duration-700 hover:text-primary group"
            >
              <svg
                viewBox="0 0 24 24"
                className="absolute w-5 md:w-6 fill-white z-10 transition-all duration-700 -left-1/4 group-hover:left-3 md:group-hover:left-4 group-hover:fill-primary"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
              <span className="relative z-10 transition-all duration-700 -translate-x-2 group-hover:translate-x-2 uppercase tracking-wide">
                Lihat Selengkapnya
              </span>
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-background rounded-full opacity-0 transition-all duration-700 group-hover:w-[300px] group-hover:h-[300px] group-hover:opacity-100"></span>
              <svg
                viewBox="0 0 24 24"
                className="absolute w-5 md:w-6 fill-white z-10 transition-all duration-700 right-3 md:right-4 group-hover:-right-1/4 group-hover:fill-primary"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
