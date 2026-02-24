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

  const sidebarClasses = `fixed top-[109px] right-0 h-auto w-[320px] md:w-[400px] transition-all duration-200 z-40 border-l-2 py-6 px-4 rounded-l-3xl bg-background border-primary text-primary ${
    open ? "translate-x-0" : "translate-x-full"
  }`;

  const listItemHoverClasses = "hover:border-btn";
  const subMenuBorderClasses = "border-primary/30";

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
        <ul className="flex flex-col justify-between h-full font-semibold text-base w-full space-y-2">
          <li>
            <a href="/tentang-kami" className={`flex items-center p-3 rounded-full transition-all duration-200 border border-transparent ${listItemHoverClasses}`}>
              <Info size={20} className="mr-2" />
              Tentang Kami
            </a>
          </li>
          <li>
            <details className="group">
              <summary className={`cursor-pointer flex items-center p-3 rounded-full transition-all duration-200 border border-transparent ${listItemHoverClasses}`}>
                <School size={20} className="mr-2" />
                Lembaga Pendidikan
                <ChevronDown
                  size={20}
                  className="ml-auto transition-transform duration-200 group-open:rotate-180"
                />
              </summary>
              <ul className={`pl-4 space-y-2 mt-2 border-l-2 ${subMenuBorderClasses}`}>
                <li>
                  <a href="/ra-lukluk-abdul-ghoni" className={`flex items-center p-3 rounded-full transition-all duration-200 border border-transparent ${listItemHoverClasses}`}>
                    <School size={20} className="mr-2" />
                    Raudhotul Athfal
                  </a>
                </li>
                <li>
                  <a href="/pondok-pesantren" className={`flex items-center p-3 rounded-full transition-all duration-200 border border-transparent ${listItemHoverClasses}`}>
                    <BookOpen size={20} className="mr-2" />
                    Pondok Pesantren
                  </a>
                </li>
                <li>
                  <a href="/tpq-lukluk-abdul-ghoni" className={`flex items-center p-3 rounded-full transition-all duration-200 border border-transparent ${listItemHoverClasses}`}>
                    <BookOpen size={20} className="mr-2" />
                    Taman Pendidikan Quran
                  </a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a href="/artikel" className={`flex items-center p-3 rounded-full transition-all duration-200 border border-transparent ${listItemHoverClasses}`}>
              <Newspaper size={20} className="mr-2" />
              Artikel
            </a>
          </li>
          <li>
            <a href="/kontak" className={`flex items-center p-3 rounded-full transition-all duration-200 border border-transparent ${listItemHoverClasses}`}>
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
