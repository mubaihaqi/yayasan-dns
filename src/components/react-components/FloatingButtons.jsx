import React, { useState, useEffect } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";

export default function FloatingButtons({ whatsappNumber }) {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-row items-center gap-2 md:gap-3">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="relative bg-btn hover:text-primary text-white p-2 md:p-3 rounded-full border-2 border-primary transition-all duration-700 overflow-hidden group"
        >
          <ArrowUp size={20} className="relative z-10 md:size-6 transition-all duration-700 group-hover:-translate-y-1" />
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-background rounded-full opacity-0 transition-all duration-700 group-hover:w-[100px] group-hover:h-[100px] group-hover:opacity-100"></span>
        </button>
      )}
      <div className="relative flex items-center">
        <a
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="relative bg-green-500 hover:bg-green-600 text-white p-2 md:p-3 rounded-full border-2 border-primary transition-all duration-200 overflow-hidden group"
        >
          <MessageCircle size={20} className="relative z-10 md:size-6" />
        </a>
        <span
          className="hidden md:block absolute -top-10 right-0 bg-background text-primary text-xs font-semibold px-3 py-1.5 rounded-full border-2 border-primary whitespace-nowrap
          after:content-[''] after:absolute after:top-full after:right-[14px] after:border-4 after:border-transparent after:border-t-background"
        >
          Hubungi Kami
        </span>
      </div>
    </div>
  );
}
