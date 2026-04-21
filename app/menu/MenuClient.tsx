"use client";

import React from "react";
import { useEffect, useState } from "react";

type MenuCategory = {
  id: number;
  kaTitle: string;
  enTitle: string;
  items: {
    id: number;
    kaTitle: string;
    enTitle: string;
    priceFrom: number;
    priceTo: number;
  }[];
};

export default function MenuClient() {
  const menuCategories = [
    {
      id: 1,
      kaTitle: "ძირითადი კერძები",
      enTitle: "Main Dishes",
      items: [
        {
          id: 1,
          kaTitle: "საფირმო ბურგერი (კომბო)",
          enTitle: "Signature Burger (Combo)",
          priceFrom: 20,
          priceTo: 20,
        },
        {
          id: 2,
          kaTitle: "ჩიზბურგერი 1X-2X (კომბო)",
          enTitle: "Cheeseburger 1X-2X (Combo)",
          priceFrom: 13,
          priceTo: 18.5,
        },
        {
          id: 3,
          kaTitle: "ქათმის ბურგერი 1X-2X (კომბო)",
          enTitle: "Chicken Burger 1X-2X (Combo)",
          priceFrom: 13,
          priceTo: 18.5,
        },
        {
          id: 4,
          kaTitle: "პიცა პეპერონი /Pizza Pepperoni (6X)",
          enTitle: "პიცა ბეკონით /Pizza With Bacon (6X)",
          priceFrom: 23.5,
          priceTo: 23.5,
        },
        {
          id: 5,
          kaTitle: "გირო პიტა",
          enTitle: "Gyro Pita",
          priceFrom: 11,
          priceTo: 11,
        },
        {
          id: 6,
          kaTitle: "საფირმო ხაჭაპური (6X)",
          enTitle: "Signature Khachapuri (6X)",
          priceFrom: 21,
          priceTo: 21,
        },
      ],
    },
    {
      id: 2,
      kaTitle: "სალათები",
      enTitle: "Salads",
      items: [
        {
          id: 1,
          kaTitle: "ცეზარი",
          enTitle: "Cesar",
          priceFrom: 9,
          priceTo: 9,
        },
      ],
    },
    {
      id: 3,
      kaTitle: "პასტა",
      enTitle: "Pasta",
      items: [
        {
          id: 1,
          kaTitle: "კარბონარა",
          enTitle: "Carbonara",
          priceFrom: 12.5,
          priceTo: 12.5,
        },
      ],
    },
    {
      id: 4,
      kaTitle: "ხემსი",
      enTitle: "Snack",
      items: [
        {
          id: 1,
          kaTitle: "კარტოფილი ფრი",
          enTitle: "French Fries",
          priceFrom: 4,
          priceTo: 4,
        },
        {
          id: 2,
          kaTitle: "კარტოფილი ფრი ყველის სოუსით, ბეკონითა და ჰალაპენოთი",
          enTitle: "French Fries with Cheese Sause, Bacon and Jalapeno",
          priceFrom: 7.5,
          priceTo: 7.5,
        },
        {
          id: 3,
          kaTitle: "ხახვის რგოლები",
          enTitle: "Onion Rings",
          priceFrom: 6.5,
          priceTo: 6.5,
        },
        {
          id: 4,
          kaTitle: "კარტოფილი მექსიკურად",
          enTitle: "Mexican Potatoes",
          priceFrom: 6.5,
          priceTo: 6.5,
        },
      ],
    },
    {
      id: 5,
      kaTitle: "საბავშვო მენიუ",
      enTitle: "Kids Menu",
      items: [
        {
          id: 1,
          kaTitle: "ნაგეტსი",
          enTitle: "Nuggets",
          priceFrom: 4,
          priceTo: 4,
        },
        {
          id: 2,
          kaTitle: "ქორნდოგი",
          enTitle: "Corndog",
          priceFrom: 5,
          priceTo: 5,
        },
        {
          id: 3,
          kaTitle: "ფენოვანი ხაჭაპური",
          enTitle: "Khatchapuri",
          priceFrom: 4,
          priceTo: 4,
        },
        {
          id: 4,
          kaTitle: "ლობიანი",
          enTitle: "Lobiani",
          priceFrom: 3.8,
          priceTo: 3.8,
        },
        {
          id: 5,
          kaTitle: "ხაჭაპური ლორით",
          enTitle: "Khatchapuri with Ham",
          priceFrom: 4.5,
          priceTo: 4.5,
        },
        {
          id: 6,
          kaTitle: "ლობიანი ლორით",
          enTitle: "Lobiani with Ham",
          priceFrom: 4,
          priceTo: 4,
        },
      ],
    },
    {
      id: 6,
      kaTitle: "სოუსები",
      enTitle: "Sauces",
      items: [
        {
          id: 1,
          kaTitle: "ყველის სოუსი",
          enTitle: "Cheese Sauce",
          priceFrom: 3,
          priceTo: 3,
        },
        {
          id: 2,
          kaTitle: "საფირმო სოუსი",
          enTitle: "Signature Sauce",
          priceFrom: 3,
          priceTo: 3,
        },
        {
          id: 3,
          kaTitle: "BBQ სოუსი",
          enTitle: "BBQ Sauce",
          priceFrom: 3,
          priceTo: 3,
        },
        {
          id: 5,
          kaTitle: "კეტჩუპი",
          enTitle: "Ketchup",
          priceFrom: 3,
          priceTo: 3,
        },
      ],
    },
    {
      id: 7,
      kaTitle: "დესერტი",
      enTitle: "Deserts",
      items: [
        {
          id: 1,
          kaTitle: "ტირამისუ",
          enTitle: "Tiramisu",
          priceFrom: 7,
          priceTo: 7,
        },
        {
          id: 2,
          kaTitle: "ჩიზქეიქი",
          enTitle: "Cheesecake",
          priceFrom: 6.8,
          priceTo: 6.8,
        },
        {
          id: 3,
          kaTitle: "კრეპი (ნუთელა, ხილით და ნაყინით)",
          enTitle: "Crepe (With Nutella, Fruit and ICE-CREAM)",
          priceFrom: 6.8,
          priceTo: 6.8,
        },
        {
          id: 4,
          kaTitle: "ბელგიური ვაფლი",
          enTitle: "Belgian Waffle",
          priceFrom: 6.8,
          priceTo: 6.8,
        },
        {
          id: 7,
          kaTitle: "ნაყინის ბურთულები",
          enTitle: "Ice-Cream",
          priceFrom: 3.8,
          priceTo: 3.8,
        },
      ],
    },
    {
      id: 8,
      kaTitle: "გამაგრილებელი სასმელები",
      enTitle: "Cold Drinks",
      items: [
        {
          id: 1,
          kaTitle: "კოკა-კოლა",
          enTitle: "Coca-Cola",
          priceFrom: 3.5,
          priceTo: 3.5,
        },
        {
          id: 2,
          kaTitle: "ფანტა",
          enTitle: "Fanta",
          priceFrom: 3.5,
          priceTo: 3.5,
        },
        {
          id: 3,
          kaTitle: "ნატურალური წვენი",
          enTitle: "",
          priceFrom: 4.0,
          priceTo: 4.0,
        },
        {
          id: 4,
          kaTitle: "ცივი ჩაი",
          enTitle: "Iced Tea",
          priceFrom: 3.8,
          priceTo: 3.8,
        },
        {
          id: 5,
          kaTitle: "საფირმო ლიმონათი",
          enTitle: "Signature Leomonade",
          priceFrom: 4.5,
          priceTo: 4.5,
        },
        {
          id: 6,
          kaTitle: "მილქშეიქი (ვანილი, შოკოლადი, კენკრა)",
          enTitle: "Milkshake (Vanilla, Chocolate, Blueberry)",
          priceFrom: 6.5,
          priceTo: 6.5,
        },
        {
          id: 7,
          kaTitle: "ცივი ყავა ნაყინით",
          enTitle: "Iced Coffe with Ice-Cream",
          priceFrom: 6.5,
          priceTo: 6.5,
        },
        {
          id: 8,
          kaTitle: "ცივი ლატე",
          enTitle: "Iced Latte",
          priceFrom: 6.5,
          priceTo: 6.5,
        },
      ],
    },
    {
      id: 9,
      kaTitle: "ცხელი სასმელები",
      enTitle: "Hot Drinks",
      items: [
        {
          id: 1,
          kaTitle: "ამერიკანო",
          enTitle: "Americano",
          priceFrom: 5.5,
          priceTo: 5.5,
        },
        {
          id: 2,
          kaTitle: "ესპრესო",
          enTitle: "Espresso",
          priceFrom: 4.5,
          priceTo: 4.5,
        },
        {
          id: 3,
          kaTitle: "კაპუჩინო/Capuccino",
          enTitle: "ლატე/Latte",
          priceFrom: 5.8,
          priceTo: 5.8,
        },
        {
          id: 4,
          kaTitle: "თურქული ყავა",
          enTitle: "Turkish Coffe",
          priceFrom: 4,
          priceTo: 4,
        },
        {
          id: 5,
          kaTitle: "ჩაი (ხილის, მწვანე, შავი)",
          enTitle: "Tea (Fruit, Green, Black)",
          priceFrom: 3.5,
          priceTo: 3.5,
        },
      ],
    },
    {
      id: 10,
      kaTitle: "კოქტეილი",
      enTitle: "Kocktail",
      items: [
        {
          id: 1,
          kaTitle: "მოჰიტო",
          enTitle: "Mojito",
          priceFrom: 8.5,
          priceTo: 8.5,
        },
        {
          id: 2,
          kaTitle: "იაგერი-ენერგეტიკული",
          enTitle: "Jager-Energy Drink",
          priceFrom: 10,
          priceTo: 10,
        },
        {
          id: 3,
          kaTitle: "აპეროლი",
          enTitle: "Aperol",
          priceFrom: 12,
          priceTo: 12,
        },
        {
          id: 4,
          kaTitle: "ბეილსი",
          enTitle: "Baileys",
          priceFrom: 7,
          priceTo: 7,
        },
      ],
    },
  ];

  const [activeNum, setActiveNum] = useState<number | null>(null);

  return (
    <main className="pt-20 bg-[#f0f0f0]">
      <h1 className="text-5xl text-[#D93D00] text-center fade-up">
        STREET#1 / Menu
      </h1>
      <div className="w-full flex justify-center mt-5">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 lg:gap-25 xl:gap-35 2xl:gap-40 lg:px-0 px-5 m">
          {menuCategories.map((item: MenuCategory) => (
            <div
              key={item.id}
              className="md:w-137.5 space-y-8 py-5 border-t-2 border-[#D93D00]"
            >
              <div className="w-full flex justify-between">
                <div className="lg:text-[30px] text-2xl">
                  <h1 className="primary-font">{item.kaTitle}</h1>
                  <h1 className="font-sans">/{item.enTitle}</h1>
                </div>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className={`text-[#000000] font-light cursor-pointer duration-200 ${activeNum === item.id && "rotate-180"}`}
                  onClick={() => {
                    if (activeNum === item.id) {
                      setActiveNum(null);
                    } else {
                      setActiveNum(item.id);
                    }
                  }}
                >
                  <path d="m12 15.41 5.71-5.7-1.42-1.42-4.29 4.3-4.29-4.3-1.42 1.42z"></path>
                </svg>
              </div>

              <ul
                className={`w-full flex flex-col gap-5 overflow-hidden transition-all duration-500 ease-in-out ${
                  item.id === activeNum
                    ? "max-h-96 opacity-100 mt-5"
                    : "max-h-0 opacity-0"
                }`}
              >
                {item.id === activeNum &&
                  item.items.map((menuItem) => (
                    <li
                      key={menuItem.id}
                      className="w-full flex justify-between "
                    >
                      <div className="lg:text-[20px] text-[17px] text-[#444444] lg:max-w-87 max-w-40">
                        <h1 className="primary-font">{menuItem.kaTitle}</h1>
                        <h1 className="font-sans">/{menuItem.enTitle}</h1>
                      </div>
                      <h1 className="font-sans font-medium text-[#b9b919] lg:text-[16px] text-[14px]">
                        {menuItem.priceFrom === menuItem.priceTo
                          ? `${menuItem.priceFrom}₾`
                          : `${menuItem.priceFrom}-${menuItem.priceTo}₾`}
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
