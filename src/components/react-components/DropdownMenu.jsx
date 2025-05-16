import React, { useState, useRef, useEffect } from "react";
import Switch from "./Switch";

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
        className={`fixed top-[113px] right-0 h-auto w-[432px] bg-border/75 backdrop-blur-xl text-white shadow-xl transition-transform duration-1000 z-40 border-b-2 border-l-2 border-border py-6 px-4
          ${open ? "translate-x-0" : "translate-x-full"}`}
        aria-hidden={!open}
      >
        <ul className="space-y-4 font-semibold text-base w-full">
          <li className="hover:bg-border mb-2 p-2 rounded-lg">
            <a href="#">Tentang Kami</a>
          </li>
          <li className="p-2 rounded-lg mb-2">
            <details>
              <summary className="cursor-pointer">Lembaga Pendidikan</summary>
              <ul className="pl-4 space-y-2 mt-2">
                <li className="hover:bg-border mb-2 p-2 rounded-lg">
                  <a href="#">Raudhotul Athfal</a>
                </li>
                <li className="hover:bg-border p-2 rounded-lg">
                  <a href="#">Pondok Pesantren</a>
                </li>
              </ul>
            </details>
          </li>
          <li className="hover:bg-border mb-2 p-2 rounded-lg">
            <a href="#">Laporan</a>
          </li>
          <li className="hover:bg-border mb-2 p-2 rounded-lg">
            <a href="#">Kontak</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default DropdownMenu;
