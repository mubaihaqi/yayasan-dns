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

  // --- START: Kustomisasi Warna Navbar ---

  // Mengontrol latar belakang dan border utama navbar.
  const navbarClasses = `navbar justify-between shadow-lg fixed top-0 left-0 right-0 z-50 px-6 md:px-8 lg:px-24 py-3 transition-all duration-300 ease-in-out font-semibold ${
    isRaPage // Cek jika ini halaman RA.
      ? isTransparent // Jika ya, cek apakah navbar transparan (posisi di atas).
        ? "bg-cardra/0 border-b border-borderra/20" // Tampilan untuk: Halaman RA, di atas.
        : "bg-bgra border-b border-borderra/30" // Tampilan untuk: Halaman RA, setelah scroll.
      : isTransparent // Jika bukan halaman RA, cek apakah transparan.
        ? "bg-card/0 border-b border-primary/20" // Tampilan untuk: Halaman lain, di atas.
        : "bg-background border-b border-primary/30" // Tampilan untuk: Halaman lain, setelah scroll.
  }`;

  // Mengontrol warna teks untuk link navigasi.
  const textClasses = isRaPage // Cek jika ini halaman RA.
    ? isTransparent // Jika ya, cek apakah transparan.
      ? "text-cardra" // Tampilan untuk: Halaman RA, di atas.
      : "text-txtra" // Tampilan untuk: Halaman RA, setelah scroll.
    : isTransparent // Jika bukan halaman RA, cek apakah transparan.
      ? "text-card" // Tampilan untuk: Halaman lain, di atas.
      : "text-primary"; // Tampilan untuk: Halaman lain, setelah scroll.

  // Mengontrol warna background dan teks saat tombol di-hover.
  const buttonStyleClasses = `rounded-xl bg-transparent border-transparent shadow-none hover:shadow-md btn transition-all duration-300 ${
    isRaPage // Cek jika ini halaman RA.
      ? isTransparent // Jika ya, cek apakah transparan.
        ? "hover:bg-cardra/20 hover:text-cardra" // Tampilan untuk: Halaman RA, di atas.
        : "hover:bg-txtra/20 hover:text-txtra" // Tampilan untuk: Halaman RA, setelah scroll.
      : isTransparent // Jika bukan halaman RA, cek apakah transparan.
        ? "hover:bg-card/20 hover:text-card" // Tampilan untuk: Halaman lain, di atas.
        : "hover:bg-primary/20 hover:text-primary" // Tampilan untuk: Halaman lain, setelah scroll.
  }`;

  // Mengontrol latar belakang dan border untuk menu dropdown.
  const dropdownMenuClasses = `absolute p-3 backdrop-blur-xl border rounded-xl shadow-xl mt-40 min-w-[200px] transition-all duration-300 ${
    isDropdownOpen
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-8 pointer-events-none"
  } ${
    isRaPage // Cek jika ini halaman RA.
      ? isTransparent // Jika ya, cek apakah transparan.
        ? "bg-cardra/0 border-cardra/20" // Tampilan untuk: Halaman RA, di atas.
        : "bg-bgra border-borderra/50" // Tampilan untuk: Halaman RA, setelah scroll.
      : isTransparent // Jika bukan halaman RA, cek apakah transparan.
        ? "bg-card/0 border-primary/20" // Tampilan untuk: Halaman lain, di atas.
        : "bg-background border-primary/50" // Tampilan untuk: Halaman lain, setelah scroll.
  }`;

  // Mengontrol warna background dan teks saat item dropdown di-hover.
  const dropdownItemClasses = `rounded-lg bg-transparent border-transparent shadow-none btn transition-all duration-300 w-full text-left px-1 md:px-1 lg:px-4 py-2 transform hover:translate-x-1 ${
    isRaPage // Cek jika ini halaman RA.
      ? isTransparent // Jika ya, cek apakah transparan.
        ? "hover:bg-cardra/20 hover:text-cardra" // Tampilan untuk: Halaman RA, di atas.
        : "hover:bg-txtra/20 hover:text-txtra" // Tampilan untuk: Halaman RA, setelah scroll.
      : isTransparent // Jika bukan halaman RA, cek apakah transparan.
        ? "hover:bg-card/20 hover:text-card" // Tampilan untuk: Halaman lain, di atas.
        : "hover:bg-primary/20 hover:text-primary" // Tampilan untuk: Halaman lain, setelah scroll.
  }`;

  // --- END: Kustomisasi Warna Navbar ---

  return (
    <div className={navbarClasses}>
      <div className="navbar-start">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src={isRaPage ? logoRA.src : logoDns.src}
            className="h-20 aspect-square transition-transform duration-300 hover:scale-105"
            alt={isRaPage ? "RA Logo" : "DNS Logo"}
          />
        </a>
      </div>

      <div className="navbar-center hidden md:flex">
        <ul
          className={`md:inline-flex gap-1 xl:gap-3 items-center justify-between px-2 text-sm md:text-base tracking-wide`}
        >
          <li
            className={`${buttonStyleClasses} ${textClasses} transform hover:-translate-y-0.5`}
          >
            <a href="/tentang-kami" className="px-1 md:px-1 lg:px-4 py-2">
              Tentang Kami
            </a>
          </li>
          <li
            className={`${buttonStyleClasses} ${textClasses} relative`}
            ref={dropdownRef}
          >
            <button
              className="relative px-1 md:px-1 lg:px-4 py-2 cursor-pointer flex items-center bg-transparent border-none"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              aria-haspopup="true"
              aria-expanded={isDropdownOpen}
            >
              Lembaga Pendidikan
              <ChevronDown
                size={16}
                className={`ml-1 transition-transform duration-300 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <ul className={dropdownMenuClasses}>
              <li className={`${dropdownItemClasses} ${textClasses}`}>
                <a href="/ra-lukluk-abdul-ghoni">Raudhotul Athfal</a>
              </li>
              <li className={`${dropdownItemClasses} ${textClasses}`}>
                <a href="/pondok-pesantren">Pondok Pesantren</a>
              </li>
              <li className={`${dropdownItemClasses} ${textClasses}`}>
                <a href="/tpq-lukluk-abdul-ghoni">Taman Pendidikan Quran</a>
              </li>
            </ul>
          </li>
          {/* <li className={`${buttonStyleClasses} ${textClasses} transform hover:-translate-y-0.5`}>
            <a href="/laporan" className="px-1 md:px-1 lg:px-4 py-2">
              Laporan
            </a>
          </li>*/}
          <li
            className={`${buttonStyleClasses} ${textClasses} transform hover:-translate-y-0.5`}
          >
            <a href="/artikel" className="px-1 md:px-1 lg:px-4 py-2">
              Artikel
            </a>
          </li>
          <li
            className={`${buttonStyleClasses} ${textClasses} transform hover:-translate-y-0.5`}
          >
            <a href="/kontak" className="px-1 md:px-1 lg:px-4 py-2">
              Kontak
            </a>
          </li>
        </ul>
      </div>

      <div className="navbar-end flex items-center justify-end gap-2 md:gap-4 w-auto">
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
