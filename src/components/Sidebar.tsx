"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

type Section = { id: string; title: string };

export default function Sidebar({
  activeId,
  sections,
}: {
  activeId: string;
  sections: Section[];
}) {
  return (
    <aside
      className="
        hidden lg:flex lg:flex-col
        lg:fixed lg:inset-y-0 lg:w-[var(--sidebar-w)]
        lg:h-dvh lg:overflow-y-auto
        px-8 lg:px-10 pt-12 pb-8
      "
    >
      <div className="shrink-0">
        <h1 className="text-white font-extrabold leading-[1.05] text-[38px] sm:text-[44px] lg:text-[50px]">
          Mostafa Gaber
          <br /> Ahmed
        </h1>

        <p className="mt-3 text-lg lg:text-xl text-white font-semibold">
          Frontend Developer
        </p>

        <p className="mt-3 text-[14px] lg:text-[15px] leading-7 text-gray-400 max-w-[36ch]">
          Building responsive, accessible, and maintainable
          web applications with modern technologies.
        </p>

        <a
          href="#contact"
          className="inline-block mt-4 rounded-xl bg-white text-black px-5 py-2 font-medium"
        >
          Get In Touch
        </a>
      </div>

      <nav className="mt-6">
        <ul className="space-y-5">
          {sections.map((s) => {
            const isActive = s.id === activeId;
            return (
              <li key={s.id}>
                <Link href={`#${s.id}`} className="block group">
                  <div className="flex items-center gap-5">
                    <span
                      className={`h-[2px] rounded transition-all
                        ${isActive ? "w-24 bg-white" : "w-14 bg-white/30 group-hover:bg-white/60"}`}
                    />
                    <span
                      className={[
                        "uppercase text-[12.5px] lg:text-[13px] tracking-[0.30em] inline-block pb-1.5 transition-colors",
                        isActive
                          ? "text-white border-b-2 border-white"
                          : "text-gray-400 border-b border-transparent group-hover:text-white group-hover:border-white/20",
                      ].join(" ")}
                    >
                      {s.title}
                    </span>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="mt-auto flex items-center gap-6 text-gray-400 text-xl">
        <a href="https://github.com/MostafaGaber135" target="_blank" className="hover:text-white">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/mostafagaber135" target="_blank" className="hover:text-white">
          <FaLinkedin />
        </a>
        <a href="mailto:mostafagaber1234560@gmail.com" className="hover:text-white">
          <FaEnvelope />
        </a>
      </div>
    </aside>
  );
}
