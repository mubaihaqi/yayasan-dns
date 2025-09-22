import React from "react";
import DropdownMenu from "./DropdownMenu.jsx";
import logoDns from "../../assets/photos/logodnstrans.png";
import useScrollPosition from "../../hooks/useScrollPosition.jsx";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  const scrollPosition = useScrollPosition();

  const navbarClasses = `navbar justify-between  shadow-lg fixed top-0 left-0 right-0 z-50 px-6 md:px-8 lg:px-24 py-3 transition-all duration-300 ease-in-out font-semibold ${
    scrollPosition > 30
      ? "bg-background border-b border-primary/30"
      : "bg-card/0 border-b border-primary/20"
  }`;

  return (
    <div className={navbarClasses}>
      <div className="navbar-start">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src={logoDns.src}
            className="h-20 aspect-square transition-transform duration-300 hover:scale-105"
            alt="DNS Logo"
          />
        </a>
      </div>

      <div className="navbar-center hidden md:flex">
        <ul
          className={`md:inline-flex gap-1 xl:gap-3 items-center justify-between px-2 text-sm md:text-base tracking-wide ${
            scrollPosition > 30 ? "text-primary" : "text-card"
          }`}
        >
          <li
            className={`rounded-xl bg-transparent border-transparent shadow-none hover:shadow-md btn transition-all duration-300 transform hover:-translate-y-0.5 ${
              scrollPosition > 30
                ? "hover:bg-primary/20 hover:text-primary text-primary"
                : "hover:bg-card/20 hover:text-card text-card"
            }`}
          >
            <a href="/tentang-kami" className="px-1 md:px-1 lg:px-4 py-2">
              Tentang Kami
            </a>
          </li>
          <li
            className={`rounded-xl bg-transparent border-transparent shadow-none hover:shadow-md btn transition-all duration-300 relative ${
              scrollPosition > 30
                ? "hover:bg-primary/20 hover:text-primary text-primary"
                : "hover:bg-card/20 hover:text-card text-card"
            }`}
          >
            <details className="group">
              <summary className="relative px-1 md:px-1 lg:px-4 py-2 cursor-pointer list-none flex items-center">
                Lembaga Pendidikan
                <ChevronDown
                  size={16}
                  className="ml-1 transition-transform duration-300 group-open:rotate-180"
                />
              </summary>
              <ul
                className={`absolute p-3 backdrop-blur-xl border rounded-xl shadow-xl mt-2 min-w-[200px] transition-all duration-300 opacity-0 translate-y-2 group-open:opacity-100 group-open:translate-y-0 bg-background border-primary/50`}
              >
                <li
                  className={`rounded-lg bg-transparent border-transparent shadow-none btn transition-all duration-300 w-full text-left px-1 md:px-1 lg:px-4 py-2 transform hover:translate-x-1 ${
                    scrollPosition > 30
                      ? "hover:bg-primary/20 hover:text-primary text-primary"
                      : "hover:bg-card/20 hover:text-card text-card"
                  }`}
                >
                  <a href="/raudhotul-athfal">Raudhotul Athfal</a>
                </li>
                <li
                  className={`rounded-lg bg-transparent border-transparent shadow-none btn transition-all duration-300 w-full text-left px-1 md:px-1 lg:px-4 py-2 transform hover:translate-x-1 ${
                    scrollPosition > 30
                      ? "hover:bg-primary/20 hover:text-primary text-primary"
                      : "hover:bg-card/20 hover:text-card text-card"
                  }`}
                >
                  <a href="/pondok-pesantren">Pondok Pesantren</a>
                </li>
              </ul>
            </details>
          </li>
          {/* <li
            className={`rounded-xl bg-transparent border-transparent shadow-none hover:shadow-md btn transition-all duration-300 transform hover:-translate-y-0.5 ${
              scrollPosition > 30
                ? "hover:bg-primary/20 hover:text-primary text-primary"
                : "hover:bg-card/20 hover:text-card text-card"
            }`}
          >
            <a href="/laporan" className="px-1 md:px-1 lg:px-4 py-2">
              Laporan
            </a>
          </li>*/}
          <li
            className={`rounded-xl bg-transparent border-transparent shadow-none hover:shadow-md btn transition-all duration-300 transform hover:-translate-y-0.5 ${
              scrollPosition > 30
                ? "hover:bg-primary/20 hover:text-primary text-primary"
                : "hover:bg-card/20 hover:text-card text-card"
            }`}
          >
            <a href="/artikel" className="px-1 md:px-1 lg:px-4 py-2">
              Artikel
            </a>
          </li>
          <li
            className={`rounded-xl bg-transparent border-transparent shadow-none hover:shadow-md btn transition-all duration-300 transform hover:-translate-y-0.5 ${
              scrollPosition > 30
                ? "hover:bg-primary/20 hover:text-primary text-primary"
                : "hover:bg-card/20 hover:text-card text-card"
            }`}
          >
            <a href="/kontak" className="px-1 md:px-1 lg:px-4 py-2">
              Kontak
            </a>
          </li>
        </ul>
      </div>

      <div className="navbar-end flex items-center justify-end gap-2 md:gap-4 w-auto">
        <div className="dropdown md:hidden">
          <DropdownMenu />
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
