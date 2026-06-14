import React from "react";

function ClarioLogoMark() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* outer ring */}
      <circle
        cx="16"
        cy="16"
        r="14"
        stroke="#7c5cfc"
        strokeWidth="1.5"
        opacity="0.4"
      />
      {/* bright arc — top-right quarter */}
      <path
        d="M16 2 A14 14 0 0 1 30 16"
        stroke="#a889ff"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      {/* crosshair */}
      <line
        x1="16"
        y1="9"
        x2="16"
        y2="23"
        stroke="#7c5cfc"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="9"
        y1="16"
        x2="23"
        y2="16"
        stroke="#7c5cfc"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* center dot */}
      <circle cx="16" cy="16" r="2.5" fill="#a889ff" />
    </svg>
  );
}
export default function Navbar() {
  return (
    <nav className="w-full max-w-6xl mx-auto flex items-center justify-between py-5 border-b border-[#1e2130]">
      <div className="flex items-center gap-2.5">
        <ClarioLogoMark />
        <span className="text-xl font-bold tracking-tight text-white">
          Clario
        </span>
      </div>

      {/* Tagline badge */}
      <span className="font-mono text-[0.65rem] tracking-widest uppercase bg-violet-500/10 text-violet-300 border border-violet-500/25 px-3 py-1 rounded-full">
        Free to try
      </span>
    </nav>
  );
}
