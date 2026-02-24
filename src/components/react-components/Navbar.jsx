import React, { useState, useEffect, useRef } from "react";
import DropdownMenu from "./DropdownMenu.jsx";
import logoDns from "../../assets/photos/logodnstrans.png";
import logoRA from "../../assets/photos/logoratrans.png";
import useScrollPosition from "../../hooks/useScrollPosition.jsx";
import { ChevronDown } from "lucide-react";

export default function Navbar({ currentPage }) {
  const scrollPosition = useScrollPosition();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Determine navbar visual state based on page and scroll position
  const isRaPage = currentPage === "/ra-lukluk-abdul-ghoni";
  const hasTransparentNav =
    currentPage === "/" || currentPage === "/ra-lukluk-abdul-ghoni";
  const isTransparent = hasTransparentNav && scrollPosition <= 30;

  const navbarClasses = `navbar justify-between fixed top-0 left-0 right-0 z-50 px-6 md:px-8 lg:px-24 py-3 transition-all duration-200 font-semibold bg-background ${
    isTransparent ? "border-b-2 border-transparent" : "border-b-2 border-primary"
  }`;

  const textClasses = "text-primary";

  const buttonStyleClasses = `rounded-full px-4 py-2 transition-all duration-200 border border-transparent hover:border-btn`;

  const dropdownMenuClasses = `absolute p-2 border-2 rounded-2xl top-full mt-2 whitespace-nowrap transition-all duration-200 bg-background border-primary ${
    isDropdownOpen
      ? "opacity-100 translate-y-0"
      : "opacity-0 -translate-y-2 pointer-events-none"
  }`;

  const dropdownItemClasses = `block rounded-full transition-all duration-200 w-full text-left px-4 py-2 border border-transparent hover:border-btn`;

  return (
    <div className={navbarClasses}>
      {/* Paper texture - hanya muncul setelah scroll */}
      {!isTransparent && (
        <div className="absolute inset-0 opacity-[0.15] pointer-events-none" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px'
        }}></div>
      )}
      
      <div className="navbar-start relative z-10">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src={isRaPage ? logoRA.src : logoDns.src}
            className="h-20 aspect-square transition-transform duration-300 hover:scale-105"
            alt={isRaPage ? "RA Logo" : "DNS Logo"}
          />
        </a>
      </div>

      <div className="navbar-center hidden md:flex relative z-10">
        <ul
          className={`md:inline-flex gap-1 xl:gap-3 items-center justify-between px-2 text-sm md:text-base tracking-wide`}
        >
          <li className={`${textClasses}`}>
            <a href="/tentang-kami" className={buttonStyleClasses}>
              Tentang Kami
            </a>
          </li>
          <li className="relative" ref={dropdownRef}>
            <button
              className={`${buttonStyleClasses} ${textClasses} flex items-center gap-1`}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              aria-haspopup="true"
              aria-expanded={isDropdownOpen}
            >
              Lembaga Pendidikan
              <ChevronDown
                size={16}
                className={`transition-transform duration-300 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <ul className={dropdownMenuClasses}>
              <li>
                <a href="/ra-lukluk-abdul-ghoni" className={`${dropdownItemClasses} ${textClasses}`}>
                  Raudhotul Athfal
                </a>
              </li>
              <li>
                <a href="/pondok-pesantren" className={`${dropdownItemClasses} ${textClasses}`}>
                  Pondok Pesantren
                </a>
              </li>
              <li>
                <a href="/tpq-lukluk-abdul-ghoni" className={`${dropdownItemClasses} ${textClasses}`}>
                  Taman Pendidikan Quran
                </a>
              </li>
            </ul>
          </li>
          <li className={`${textClasses}`}>
            <a href="/artikel" className={buttonStyleClasses}>
              Artikel
            </a>
          </li>
          <li className={`${textClasses}`}>
            <a href="/kontak" className={buttonStyleClasses}>
              Kontak
            </a>
          </li>
        </ul>
      </div>

      <div className="navbar-end flex items-center justify-end gap-2 md:gap-4 w-auto relative z-10">
        <div className="dropdown md:hidden">
          <DropdownMenu currentPage={currentPage} />
        </div>

        {/* Search feature hidden as requested */}
        {/*
        <label
          className={`input border-2 rounded-3xl focus:!ring-0 focus:!ring-transparent focus:!border-0 hidden lg:flex lg:!items-center transition-all duration-300 bg-transparent border-primary text-primary placeholder-primary/70`}
        >
          <input
            type="search"
            className={`grow border-0 focus:ring-0 bg-transparent py-2 px-4 text-primary placeholder-primary/70`}
            placeholder="Search"
            autoComplete="off"
          />
          <svg
            className={`w-5 h-5 text-primary`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </label>
        */}
      </div>
    </div>
  );
}
