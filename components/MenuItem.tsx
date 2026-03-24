import React from "react";
import Image from "next/image";
import Reveal from "@/hooks/useReveal";

type MenuItemProps = {
  img: string;
  title: string;
  price: number;
}

export default function MenuItem({img, title, price}: MenuItemProps) {
  return (
    <Reveal>
    <div className="2xl:w-103.5 lg:w-90 md:w-103.5 h-80 flex flex-col items-center relative primary-font lg:hover:ml-5 duration-300">
      <Image
        src={img}
        width={280}
        height={300}
        alt=""
        className="absolute -top-35"
      />
      <div className="w-full h-73.5 flex flex-col justify-end pb-10 gap-5 px-5 rounded-2xl border text-[#D93D00] bg-white">
        <h1 className="2xl:text-[42px] text-3xl leading-11.5 text-center">
          {title}
        </h1>
        <hr />
        <div className="w-full flex gap-5 items-center">
          <button className="lg:h-12 h-10 px-2 py-1.5 bg-[#D93D00] text-white lg:text-2xl rounded-lg cursor-pointer lg:hover:bg-amber-50 lg:hover:text-[#D93D00] transition-all duration-300">
            ფასი: {price}Gel
          </button>
          <h1 className="2xl:text-[20px] leading-11.5">33% ფასდაკლება</h1>
        </div>
      </div>
    </div>
    </Reveal>
  );
}
