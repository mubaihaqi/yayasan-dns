import React from "react";

const Switch = ({ toggled }) => (
  <svg
    viewBox="0 0 32 32"
    className={`h-10 w-10 transition-transform duration-1000 ${toggled ? "-rotate-45" : ""}`}
    style={{ stroke: "var(--color-border)" }}
  >
    <path
      className={`fill-none stroke-[3] transition-all duration-1000 ${
        toggled
          ? "[stroke-dasharray:20_300] [stroke-dashoffset:-32.42]"
          : "[stroke-dasharray:12_63]"
      }`}
      d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
    />
    <path
      className="fill-none stroke-[3] transition-all duration-1000"
      d="M7 16 27 16"
    />
  </svg>
);

export default Switch;
