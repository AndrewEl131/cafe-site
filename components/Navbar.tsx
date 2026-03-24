"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const pathname = usePathname();

  const links = [
    { name: "მთავარი", path: "/" },
    { name: "ონლაინ შეკვეთა", path: "/order" },
    { name: "ჩვენს შესახებ", path: "/about" },
    { name: "კონტაქტი", path: "/contact" },
  ];

  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  return (
    <header className="w-full lg:h-22.5 h-20 lg:px-10 px-5 flex justify-between items-center fixed top-0 left-0 z-150">
      <Link href={"/"}>
        <div className="text-[32px] text-[#D93D00]">
          <h1>STREET#1</h1>
        </div>
      </Link>

      <ul className="lg:flex hidden gap-12 primary-font">
        {links.map((link) => (
          <Link
            key={link.path}
            className={`${pathname === link.path ? "text-black hover:text-[#d4d4d4]" : "text-[#dbdbdb] hover:text-[#0f0f0f]"} text-[20px] font-normal duration-200`}
            href={link.path}
          >
            {link.name}
          </Link>
        ))}
      </ul>

      {!isBurgerOpen && (
        <div
          className=" lg:hidden flex z-auto"
          onClick={() => setIsBurgerOpen(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="#D93D00"
            viewBox="0 0 24 24"
          >
            <path d="M3 5h18v2H3zm0 6h18v2H3zm0 6h18v2H3z"></path>
          </svg>
        </div>
      )}

      {isBurgerOpen && (
        <div className="w-50 h-300 flex flex-col gap-5 px-5 py-5 bg-[#D93D00] absolute top-0 right-0 z-120 burger-menu">
          <div className="w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="#fff"
              viewBox="0 0 24 24"
              onClick={() => setIsBurgerOpen(false)}
            >
              <path d="m7.76 14.83-2.83 2.83 1.41 1.41 2.83-2.83 2.12-2.12.71-.71.71.71 1.41 1.42 3.54 3.53 1.41-1.41-3.53-3.54-1.42-1.41-.71-.71 5.66-5.66-1.41-1.41L12 10.59 6.34 4.93 4.93 6.34 10.59 12l-.71.71z"></path>
            </svg>
          </div>

          <ul className="w-full flex flex-col gap-5">
            {links.map((link) => (
              <Link
                key={link.path}
                className={`${pathname === link.path ? "text-black" : "text-[#dbdbdb]"} text-[20px] font-normal`}
                href={link.path}
              >
                {link.name}
              </Link>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
