"use client";

import React from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const links = [
    { name: "სახლი", path: "/" },
    { name: "ონლაინ შეკვეთა", path: "/order" },
    { name: "ჩვენი ამბავი", path: "/about" },
    { name: "კონტაქტი", path: "/contact" },
  ];

  return (
    <header className="w-full h-22.5 px-10 flex justify-between items-center fixed top-0 left-0 z-50">
      <div className="text-[32px] text-[#D93D00]">
        <h1>STREET#1</h1>
      </div>

      <ul className="flex gap-12 primary-font">
        {links.map((link) => (
          <li
            key={link.path}
            className={`${pathname === link.path ? "text-black" : "text-white"} text-[20px] font-normal`}
          >
            {link.name}
          </li>
        ))}
      </ul>
    </header>
  );
}