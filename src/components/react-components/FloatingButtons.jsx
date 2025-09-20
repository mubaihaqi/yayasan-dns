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
    <div className="fixed bottom-5 right-5 z-50 flex flex-row items-center gap-3">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-amber-600 hover:bg-amber-700 text-white p-1.5 rounded-full shadow-lg transition-opacity duration-300 md:p-2"
        >
          <ArrowUp size={20} />
        </button>
      )}
      <div className="relative flex items-center">
        <a
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-full shadow-lg md:p-3"
        >
          <MessageCircle size={24} className="md:size-6" />
        </a>
        <span
          className="hidden md:block absolute -top-10 right-0 bg-white text-green-700 text-xs font-semibold px-2 py-1 rounded-lg shadow-lg whitespace-nowrap
          after:content-[''] after:absolute after:top-full after:right-[14px] after:border-4 after:border-transparent after:border-t-white"
        >
          Hubungi Kami
        </span>
      </div>
    </div>
  );
}
