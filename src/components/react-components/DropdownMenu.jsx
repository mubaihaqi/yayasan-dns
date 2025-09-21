import React, { useState, useRef, useEffect } from "react";
import Switch from "./Switch";
import { ChevronDown, Info, School, BookOpen, FileText, Mail } from "lucide-react";

const DropdownMenu = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(); // untuk sidebar
  const buttonRef = useRef(); // untuk tombol

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
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
      <div
        ref={menuRef}
        className={`fixed top-[109px] right-0 h-auto w-[320px] md:w-[400px] bg-bghd/90 backdrop-blur-2xl text-cartu shadow-2xl transition-all duration-500 ease-in-out z-40 border-l border-border/30 py-6 px-4 rounded-l-2xl
          ${open ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}
        aria-hidden={!open}
      >
        <ul className="flex flex-col justify-between h-full font-semibold text-base w-full space-y-4">
          <li className="hover:bg-cartu/10 p-3 rounded-xl transition-all duration-300 transform hover:translate-x-1">
            <a href="/tentang-kami" className="flex items-center">
              <Info size={20} className="mr-2" />
              Tentang Kami
            </a>
          </li>
          <li className="p-3 rounded-xl hover:bg-cartu/10 transition-all duration-300">
            <details className="group">
              <summary className="cursor-pointer flex justify-between items-center">
                <School size={20} className="mr-2" />
                Lembaga Pendidikan
                <ChevronDown
                  size={20}
                  className="transition-transform duration-300 group-open:rotate-180"
                />
              </summary>
              <ul className="pl-4 space-y-2 mt-2 border-l-2 border-cartu/20">
                <li className="hover:bg-cartu/10 p-3 rounded-xl transition-all duration-300 transform hover:translate-x-1">
                  <a href="/raudhotul-athfal" className="flex items-center">
                    <School size={20} className="mr-2" />
                    Raudhotul Athfal
                  </a>
                </li>
                <li className="hover:bg-cartu/10 p-3 rounded-xl transition-all duration-300 transform hover:translate-x-1">
                  <a href="/pondok-pesantren" className="flex items-center">
                    <BookOpen size={20} className="mr-2" />
                    Pondok Pesantren
                  </a>
                </li>
              </ul>
            </details>
          </li>
          <li className="hover:bg-cartu/10 p-3 rounded-xl transition-all duration-300 transform hover:translate-x-1">
            <a href="/laporan" className="flex items-center">
              <FileText size={20} className="mr-2" />
              Laporan
            </a>
          </li>
          <li className="hover:bg-cartu/10 p-3 rounded-xl transition-all duration-300 transform hover:translate-x-1">
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
