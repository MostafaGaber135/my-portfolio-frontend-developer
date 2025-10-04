"use client";
import { useState } from "react";
import { SECTIONS } from "../lib/sections";
import Link from "next/link";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="lg:hidden sticky top-0 z-50 bg-[#0a0a0a]/90 backdrop-blur border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 h-14 flex items-center justify-between">
          <span className="font-semibold text-white">Mostafa Gaber Ahmed</span>
          <button
            onClick={() => setOpen(true)}
            className="text-white text-2xl leading-none"
            aria-label="Open menu"
          >
            ☰
          </button>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/60" onClick={() => setOpen(false)} />
          <nav
            className="
              absolute top-0 right-0 h-full w-72
              bg-[#0a0a0a] p-6 space-y-2
              shadow-[0_0_0_1px_rgba(255,255,255,0.06)]
            "
            aria-label="Mobile navigation"
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-white font-semibold">Menu</span>
              <button onClick={() => setOpen(false)} className="text-white text-xl" aria-label="Close menu">✕</button>
            </div>
            {SECTIONS.map((s) => (
              <Link
                key={s.id}
                href={`#${s.id}`}
                onClick={() => setOpen(false)}
                className="block px-3 py-2 rounded-lg text-gray-200 hover:bg-white/10"
              >
                {s.title}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
