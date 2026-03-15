import React from "react";
import Image from "next/image";

export default function MenuItem() {
  return (
    <div className="lg:w-103.5 h-80 flex flex-col items-center relative primary-font">
      <Image
        src={"/assets/spageti.png"}
        width={300}
        height={300}
        alt=""
        className="absolute -top-35"
      />
      <div className="w-full h-73.5 py-27 px-5 space-y-3.5 rounded-2xl border text-[#D93D00] bg-white">
        <h1 className="text-[42px] leading-11.5">
          გემრიელი <br /> სობა ნუდლსი
        </h1>
        <hr />
        <div className="w-full flex gap-5">
          <button className="lg:h-12 h-10 px-2 py-1.5 bg-[#D93D00] text-white lg:text-2xl rounded-lg">
            ფასი: 12Gel
          </button>
          <h1 className="lg:text-[20px] leading-11.5">33% ფასდაკლება</h1>
        </div>
      </div>
    </div>
  );
}
