import React, { useState, useRef, useEffect } from "react";
import Switch from "./Switch";
import useScrollPosition from "../../hooks/useScrollPosition.jsx";
import {
  ChevronDown,
  Info,
  School,
  BookOpen,
  FileText,
  Mail,
  Newspaper,
} from "lucide-react";

const DropdownMenu = ({ currentPage }) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(); // untuk sidebar
  const buttonRef = useRef(); // untuk tombol
  const scrollPosition = useScrollPosition();

  // Tutup sidebar jika klik di luar
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };

    // Mencegah scrolling saat menu terbuka
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      // Pastikan scrolling kembali normal saat komponen di-unmount
      document.body.style.overflow = "auto";
    };
  }, [open]);

  // Logika pewarnaan dari Navbar.jsx
  const isRaPage = currentPage === "/ra-lukluk-abdul-ghoni";
  const hasTransparentNav =
    currentPage === "/" || currentPage === "/ra-lukluk-abdul-ghoni";
  const isTransparent = hasTransparentNav && scrollPosition <= 30;

  // Kelas dinamis untuk sidebar mobile
  const sidebarClasses = `fixed top-[109px] right-0 h-auto w-[320px] md:w-[400px] backdrop-blur-md shadow-2xl transition-all duration-500 ease-in-out z-40 border-l py-6 px-4 rounded-l-2xl ${
    open ? "translate-x-0 opacity-100" : "translate-x-full"
  } ${
    isRaPage
      ? isTransparent
        ? "bg-cardra/0 border-borderra/50 text-cardra"
        : "bg-bgra border-borderra/30 text-txtra"
      : isTransparent
        ? "bg-card/0 border-primary/50 text-card"
        : "bg-background border-primary/30 text-primary"
  }`;

  const listItemHoverClasses = isRaPage
    ? isTransparent
      ? "hover:bg-cardra/20"
      : "hover:bg-txtra/20"
    : isTransparent
      ? "hover:bg-card/20"
      : "hover:bg-primary/20";

  const subMenuBorderClasses = isRaPage
    ? "border-borderra/20"
    : "border-primary/20";

  return (
    <>
      {/* Toggle button */}
      <button
        type="button"
        ref={buttonRef}
        onClick={() => setOpen((v) => !v)}
        className="flex items-center z-50 relative hover:cursor-pointer"
        aria-label="Toggle sidebar"
      >
        <Switch toggled={open} />
      </button>

      {/* Sidebar */}
      <div ref={menuRef} className={sidebarClasses} aria-hidden={!open}>
        <ul className="flex flex-col justify-between h-full font-semibold text-base w-full space-y-4">
          <li
            className={`${listItemHoverClasses} p-3 mb-0 rounded-xl transition-all duration-300 transform hover:translate-x-1`}
          >
            <a href="/tentang-kami" className="flex items-center">
              <Info size={20} className="mr-2" />
              Tentang Kami
            </a>
          </li>
          <li
            className={`p-3 rounded-xl pb-0 ${listItemHoverClasses} transition-all duration-300`}
          >
            <details className="group">
              <summary className="cursor-pointer flex justify-start items-center">
                <School size={20} className="mr-2" />
                Lembaga Pendidikan
                <ChevronDown
                  size={20}
                  className="transition-transform duration-300 group-open:rotate-180"
                />
              </summary>
              <ul
                className={`pl-4 space-y-2 mt-2 border-l-2 ${subMenuBorderClasses}`}
              >
                <li
                  className={`${listItemHoverClasses} p-3 rounded-xl transition-all duration-300 transform hover:translate-x-1`}
                >
                  <a
                    href="/ra-lukluk-abdul-ghoni"
                    className="flex items-center"
                  >
                    <School size={20} className="mr-2" />
                    Raudhotul Athfal
                  </a>
                </li>
                <li
                  className={`${listItemHoverClasses} p-3 rounded-xl transition-all duration-300 transform hover:translate-x-1`}
                >
                  <a href="/pondok-pesantren" className="flex items-center">
                    <BookOpen size={20} className="mr-2" />
                    Pondok Pesantren
                  </a>
                </li>
                <li
                  className={`${listItemHoverClasses} p-3 rounded-xl transition-all duration-300 transform hover:translate-x-1`}
                >
                  <a
                    href="/tpq-lukluk-abdul-ghoni"
                    className="flex items-center"
                  >
                    <BookOpen size={20} className="mr-2" />
                    Taman Pendidikan Quran
                  </a>
                </li>
              </ul>
            </details>
          </li>
          {/* <li className="hover:bg-primary/20 p-3 rounded-xl transition-all duration-300 transform hover:translate-x-1">
            <a href="/laporan" className="flex items-center">
              <FileText size={20} className="mr-2" />
              Laporan
            </a>
          </li>*/}
          <li
            className={`${listItemHoverClasses} p-3 mb-0 rounded-xl transition-all duration-300 transform hover:translate-x-1`}
          >
            <a href="/artikel" className="flex items-center">
              <Newspaper size={20} className="mr-2" />
              Artikel
            </a>
          </li>
          <li
            className={`${listItemHoverClasses} p-3 rounded-xl transition-all duration-300 transform hover:translate-x-1`}
          >
            <a href="/kontak" className="flex items-center">
              <Mail size={20} className="mr-2" />
              Kontak
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default DropdownMenu;
