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
          priceFrom: 8.9,
          priceTo: 8.9,
        },
        {
          id: 6,
          kaTitle: "საფირმო ხაჭაპური (6X)",
          enTitle: "Signature Khachapuri (6X)",
          priceFrom: 20.9,
          priceTo: 20.9,
        },
        {
          id: 7,
          kaTitle: "ვრეპი ჩედარით და ნაგეტსით",
          enTitle: "Wrap with Chedar and Nuggets",
          priceFrom: 5.50,
          priceTo: 5.50,
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
        {
          id: 2,
          kaTitle: "სთრით-სალათი",
          enTitle: "Street-Salad",
          priceFrom: 8.50,
          priceTo: 8.50,
        },
      ],
    },
    {
      id: 3,
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
          priceFrom: 7,
          priceTo: 7,
        },
        {
          id: 3,
          kaTitle: "ხახვის რგოლები",
          enTitle: "Onion Rings",
          priceFrom: 6.50,
          priceTo: 6.50,
        },
        {
          id: 4,
          kaTitle: "კარტოფილი მექსიკურად",
          enTitle: "Mexican Potatoes",
          priceFrom: 6.50,
          priceTo: 6.50,
        },
        {
          id: 5,
          kaTitle: "გირო პიტა",
          enTitle: "Gyro Pita",
          priceFrom: 8.90,
          priceTo: 8.90,
        },
        {
          id: 6,
          kaTitle: "საფირმო ხაჭაპური (6X)",
          enTitle: "Signature Khachapuri (6X)",
          priceFrom: 20.90,
          priceTo: 20.90,
        },
        {
          id: 7,
          kaTitle: "ვრეპი ჩედარით და ნაგეტსით",
          enTitle: "Wrap with Chedar and Nuggets",
          priceFrom: 5.50,
          priceTo: 5.50,
        },
      ],
    },
    {
      id: 4,
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
          priceFrom: 4,
          priceTo: 4,
        },
        {
          id: 3,
          kaTitle: "ფენოვანი ხაჭაპური",
          enTitle: "Khatchapuri",
          priceFrom: 2.90,
          priceTo: 2.90,
        },
        {
          id: 4,
          kaTitle: "ლობიანი",
          enTitle: "Lobiani",
          priceFrom: 2.80,
          priceTo: 2.80,
        },
        {
          id: 5,
          kaTitle: "ხაჭაპური ლორით",
          enTitle: "Khatchapuri with Ham",
          priceFrom: 3.20,
          priceTo: 3.20,
        },
        {
          id: 6,
          kaTitle: "ლობიანი ლორით",
          enTitle: "Lobiani with Ham",
          priceFrom: 3.10,
          priceTo: 3.10,
        },
        {
          id: 7,
          kaTitle: "მინი-პიცა",
          enTitle: "Mini-Pizza",
          priceFrom: 3.70,
          priceTo: 3.70,
        },
      ],
    },
    {
      id: 5,
      kaTitle: "სოუსები",
      enTitle: "Sauces",
      items: [
        {
          id: 1,
          kaTitle: "ყველის სოუსი",
          enTitle: "Cheese Sauce",
          priceFrom: 2.50,
          priceTo: 2.50,
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
          priceFrom: 2.50,
          priceTo: 2.50,
        },
        {
          id: 4,
          kaTitle: "მექსიკურის სოუსი",
          enTitle: "Mexican Potatoes Sauce",
          priceFrom: 2.50,
          priceTo: 2.50,
        },
        {
          id: 5,
          kaTitle: "კეტჩუპი",
          enTitle: "Ketchup",
          priceFrom: 2.50,
          priceTo: 2.50,
        },
        {
          id: 6,
          kaTitle: "ნაღებისა და ნივრის სოუსი",
          enTitle: "Cream And Garlic Sauce",
          priceFrom: 2.50,
          priceTo: 2.50,
        },
      ],
    },
    {
      id: 6,
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
          priceFrom: 6.80,
          priceTo: 6.80,
        },
        {
          id: 3,
          kaTitle: "კრეპი (ნუთელა, ხილით და ნაყინით)",
          enTitle: "Crepe (With Nutella, Fruit and ICE-CREAM)",
          priceFrom: 6.80,
          priceTo: 6.80,
        },
        {
          id: 4,
          kaTitle: "ბელგიური ვაფლი",
          enTitle: "Belgian Waffle",
          priceFrom: 6.80,
          priceTo: 6.80,
        },
        {
          id: 5,
          kaTitle: "ხილის ნამცხვარი",
          enTitle: "Fruit Cake",
          priceFrom: 6.50,
          priceTo: 6.50,
        },
        {
          id: 6,
          kaTitle: "ტარტი",
          enTitle: "Tart",
          priceFrom: 4.50,
          priceTo: 4.50,
        },
        {
          id: 7,
          kaTitle: "ნაყინის ბურთულები",
          enTitle: "Ice-Cream",
          priceFrom: 3.80,
          priceTo: 3.80,
        },
      ],
    },
    {
      id: 7,
      kaTitle: "გამაგრილებელი სასმელები",
      enTitle: "Cold Drinks",
      items: [
        {
          id: 1,
          kaTitle: "კოკა-კოლა",
          enTitle: "Coca-Cola",
          priceFrom: 3.50,
          priceTo: 3.50,
        },
        {
          id: 2,
          kaTitle: "ფანტა",
          enTitle: "Fanta",
          priceFrom: 3.50,
          priceTo: 3.50,
        },
        {
          id: 3,
          kaTitle: "ნატურალური წვენი",
          enTitle: "",
          priceFrom: 4,
          priceTo: 4,
        },
        {
          id: 4,
          kaTitle: "საფირმო ლიმონათი",
          enTitle: "Signature Leomonade",
          priceFrom: 4.50,
          priceTo: 4.50,
        },
        {
          id: 5,
          kaTitle: "მილქშეიქი (ვანილი, შოკოლადი, კენკრა)",
          enTitle: "Milkshake (Vanilla, Chocolate, Blueberry)",
          priceFrom: 4.90,
          priceTo: 4.90,
        },
        {
          id: 6,
          kaTitle: "ცივი ყავა ნაყინით",
          enTitle: "Iced Coffe with Ice-Cream",
          priceFrom: 5.90,
          priceTo: 5.90,
        },
        {
          id: 7,
          kaTitle: "ცივი ლატე",
          enTitle: "Iced Latte",
          priceFrom: 5.90,
          priceTo: 5.90,
        },
      ],
    },
    {
      id: 8,
      kaTitle: "ცხელი სასმელები",
      enTitle: "Hot Drinks",
      items: [
        {
          id: 1,
          kaTitle: "ამერიკანო",
          enTitle: "Americano",
          priceFrom: 4.50,
          priceTo: 4.50,
        },
        {
          id: 2,
          kaTitle: "ესპრესო",
          enTitle: "Espresso",
          priceFrom: 4,
          priceTo: 4,
        },
        {
          id: 3,
          kaTitle: "კაპუჩინო/Capuccino",
          enTitle: "ლატე/Latte",
          priceFrom: 4.80,
          priceTo: 4.80,
        },
        {
          id: 4,
          kaTitle: "თურქული ყავა",
          enTitle: "Turkish Coffe",
          priceFrom: 3.50,
          priceTo: 3.50,
        },
      ],
    },
    {
      id: 9,
      kaTitle: "კოქტეილი",
      enTitle: "Kocktail",
      items: [
        {
          id: 1,
          kaTitle: "მოჰიტო",
          enTitle: "Mojito",
          priceFrom: 7.80,
          priceTo: 7.80,
        },
        {
          id: 2,
          kaTitle: "იაგერი-ენერგეტიკული",
          enTitle: "Jager-Energy Drink",
          priceFrom: 8.50,
          priceTo: 8.50,
        },
        {
          id: 3,
          kaTitle: "აპეროლი",
          enTitle: "Aperol",
          priceFrom: 10,
          priceTo: 10,
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
    <main className="pt-20">
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
