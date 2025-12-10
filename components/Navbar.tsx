"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [active, setActive] =
    useState<"home" | "modul" | "showcase" | "refleksi">("home");

  return (
    <header className="sticky top-0 z-40 border-b border-teal-50 bg-white/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:py-5">
        {/* Kiri: “logo” / judul */}
        <Link href="/#home" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-600 text-sm font-bold text-white shadow-md">
            CW
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-base font-semibold text-slate-900">
              CHRISTIAN WINATA
            </span>
            <span className="text-xs text-slate-500">
              Mahasiswa Informatika · Matana
            </span>
          </div>
        </Link>

        {/* Kanan: menu desktop */}
        <div className="hidden md:flex items-center gap-2 rounded-full border border-slate-200/70 bg-slate-50/80 px-3 py-2 shadow-md">
          {/* Home */}
          <Link
            href="/#home"
            onClick={() => setActive("home")}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300
              ${
                active === "home"
                  ? "bg-teal-600 text-white shadow-md scale-105"
                  : "text-slate-600 hover:bg-white hover:text-teal-700 hover:shadow-sm"
              }`}
          >
            Home
          </Link>

          {/* Modul Mingguan */}
          <Link
            href="/#modul-mingguan"
            onClick={() => setActive("modul")}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300
              ${
                active === "modul"
                  ? "bg-teal-600 text-white shadow-md scale-105"
                  : "text-slate-600 hover:bg-white hover:text-teal-700 hover:shadow-sm"
              }`}
          >
            Modul Mingguan
          </Link>

          {/* Showcase Karya */}
          <Link
            href="/#showcase-karya"
            onClick={() => setActive("showcase")}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300
              ${
                active === "showcase"
                  ? "bg-teal-600 text-white shadow-md scale-105"
                  : "text-slate-600 hover:bg-white hover:text-teal-700 hover:shadow-sm"
              }`}
          >
            Showcase Karya
          </Link>

          {/* Refleksi Akhir */}
          <Link
            href="/#refleksi-akhir"
            onClick={() => setActive("refleksi")}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300
              ${
                active === "refleksi"
                  ? "bg-teal-600 text-white shadow-md scale-105"
                  : "text-slate-600 hover:bg-white hover:text-teal-700 hover:shadow-sm"
              }`}
          >
            Refleksi Akhir
          </Link>
        </div>

        {/* Versi mobile */}
        <div className="flex md:hidden gap-4 text-xs font-medium text-slate-600">
          <Link href="/#home" className="hover:text-teal-700">
            Home
          </Link>
          <Link href="/#modul-mingguan" className="hover:text-teal-700">
            Modul
          </Link>
          <Link href="/#showcase-karya" className="hover:text-teal-700">
            Karya
          </Link>
          <Link href="/#refleksi-akhir" className="hover:text-teal-700">
            Refleksi
          </Link>
        </div>
      </nav>
    </header>
  );
}
