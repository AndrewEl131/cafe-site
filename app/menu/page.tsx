"use client";

import MenuItem from "@/components/MenuItem";
import React from "react";
import { useEffect, useState } from "react";

type MenuCategory = {
  _id: string;
  kaTitle: string;
  enTitle: string;
  items: [
    {
      _id: string;
      kaTitle: string;
      enTitle: string;
      priceFrom: number;
      priceTo: number;
    },
  ];
};

export default function menu() {
  const [menuCategories, setMenuCategories] = useState([]);

  async function getMenuCategories() {
    const res = await fetch("http://localhost:3000/api/menu");
    const data = await res.json();
    setMenuCategories(data);
    console.log(data);
  }

  useEffect(() => {
    getMenuCategories();
  }, []);

  return (
    <main className="pt-20">
      <h1 className="text-5xl text-[#D93D00] text-center">STREET#1 / Menu</h1>
      <div className="w-full flex justify-center mt-5">
        <div className="grid grid-cols-2 lg:gap-25 xl:gap-35 2xl:gap-40">
          {menuCategories.map((item: MenuCategory) => (
            <div
              key={item._id}
              className="w-137.5 space-y-8 py-7 border-t border-[#D93D00]"
            >
              <div className="text-[32px]">
                <h1 className="primary-font">{item.kaTitle}</h1>
                <h1 className="font-sans">/{item.enTitle}</h1>
              </div>
              <ul className="w-full flex flex-col gap-5">
                {item.items.map((menuItem) => (
                  <li
                    key={menuItem._id}
                    className="w-full flex justify-between"
                  >
                    <div className="text-[20px] text-[#444444] max-w-87">
                      <h1 className="primary-font">{menuItem.kaTitle}</h1>
                      <h1 className="font-sans">/{menuItem.enTitle}</h1>
                    </div>
                    <h1 className="font-sans font-normal text-[#b3b318]">
                      {menuItem.priceFrom === menuItem.priceTo
                        ? `${menuItem.priceFrom}GEL`
                        : `${menuItem.priceFrom}-${menuItem.priceTo}GEL`}
                    </h1>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
