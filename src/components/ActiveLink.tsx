"use client";
import Link from "next/link";

export default function ActiveLink({
  href, label, isActive,
}: { href: string; label: string; isActive: boolean; }) {
  return (
    <Link
      href={href}
      className={`block px-3 py-2 rounded-lg transition
        ${isActive ? "bg-white/10 text-white" : "text-gray-300 hover:text-white"}
      `}
    >
      {label}
    </Link>
  );
}
