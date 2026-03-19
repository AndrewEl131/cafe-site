import React from "react";

export default function menu() {
  const menuList = [
    {
      ka: "ძირითადი კერძები",
      en: "Main Dishes",
      dishes: [{
        ka: "საფირმო ბურგერი (კომბო)",

      }]
    },
  ];
  return (
    <main className="pt-20">
      <h1 className="text-5xl text-[#D93D00] text-center">STREET#1 / Menu</h1>
      <div className="w-full">
        {menuList.map((item) => (
          <div>
            <h1></h1>
          </div>
        ))}
      </div>
    </main>
  );
}
