"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={120}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper h-110"
      >
        <SwiperSlide>
          <div className="w-102.25 h-90 px-5 py-5 space-y-4 text-[#D93D00] border-2 rounded-xl">
            <div className="w-full flex flex-col items-center">
              <div className="w-25 h-25 rounded-full bg-[#D93D00]"></div>
              <h1 className="text-2xl text-black primary-font">კეით როუზი</h1>
              <p className="text-[#0000007e] primary-font">
                ერთგული მომხმარებელი
              </p>
            </div>
            <p className="text-justify text-[#000000af] text-[18px]">
              პირველ რიგში ძალიან მომწონს გარემო ყველა დეტალით თუ
              დეკორაციით, საჭმელი არის ძალიან განსხვავებული და რაც მთავარია
              უგემრიელესი{" "}
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-102.25 h-90 px-5 py-5 space-y-4 text-[#D93D00] border-2 rounded-xl">
            <div className="w-full flex flex-col items-center">
              <div className="w-25 h-25 rounded-full bg-[#D93D00]"></div>
              <h1 className="text-2xl text-black primary-font">კეით როუზი</h1>
              <p className="text-[#0000007e] primary-font">
                ერთგული მომხმარებელი
              </p>
            </div>
            <p className="text-justify text-[#000000af] text-[18px]">
              პირველ რიგში ძალიან მომწონს გარემო ყველა დეტალით თუ
              დეკორაციით, საჭმელი არის ძალიან განსხვავებული და რაც მთავარია
              უგემრიელესი{" "}
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-102.25 h-90 px-5 py-5 space-y-4 text-[#D93D00] border-2 rounded-xl">
            <div className="w-full flex flex-col items-center">
              <div className="w-25 h-25 rounded-full bg-[#D93D00]"></div>
              <h1 className="text-2xl text-black primary-font">კეით როუზი</h1>
              <p className="text-[#0000007e] primary-font">
                ერთგული მომხმარებელი
              </p>
            </div>
            <p className="text-justify text-[#000000af] text-[18px]">
              პირველ რიგში ძალიან მომწონს გარემო ყველა დეტალით თუ
              დეკორაციით, საჭმელი არის ძალიან განსხვავებული და რაც მთავარია
              უგემრიელესი{" "}
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-102.25 h-90 px-5 py-5 space-y-4 text-[#D93D00] border-2 rounded-xl">
            <div className="w-full flex flex-col items-center">
              <div className="w-25 h-25 rounded-full bg-[#D93D00]"></div>
              <h1 className="text-2xl text-black primary-font">კეით როუზი</h1>
              <p className="text-[#0000007e] primary-font">
                ერთგული მომხმარებელი
              </p>
            </div>
            <p className="text-justify text-[#000000af] text-[18px]">
              პირველ რიგში ძალიან მომწონს გარემო ყველა დეტალით თუ
              დეკორაციით, საჭმელი არის ძალიან განსხვავებული და რაც მთავარია
              უგემრიელესი{" "}
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-102.25 h-90 px-5 py-5 space-y-4 text-[#D93D00] border-2 rounded-xl">
            <div className="w-full flex flex-col items-center">
              <div className="w-25 h-25 rounded-full bg-[#D93D00]"></div>
              <h1 className="text-2xl text-black primary-font">კეით როუზი</h1>
              <p className="text-[#0000007e] primary-font">
                ერთგული მომხმარებელი
              </p>
            </div>
            <p className="text-justify text-[#000000af] text-[18px]">
              პირველ რიგში ძალიან მომწონს გარემო ყველა დეტალით თუ
              დეკორაციით, საჭმელი არის ძალიან განსხვავებული და რაც მთავარია
              უგემრიელესი{" "}
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-102.25 h-90 px-5 py-5 space-y-4 text-[#D93D00] border-2 rounded-xl">
            <div className="w-full flex flex-col items-center">
              <div className="w-25 h-25 rounded-full bg-[#D93D00]"></div>
              <h1 className="text-2xl text-black primary-font">კეით როუზი</h1>
              <p className="text-[#0000007e] primary-font">
                ერთგული მომხმარებელი
              </p>
            </div>
            <p className="text-justify text-[#000000af] text-[18px]">
              პირველ რიგში ძალიან მომწონს გარემო ყველა დეტალით თუ
              დეკორაციით, საჭმელი არის ძალიან განსხვავებული და რაც მთავარია
              უგემრიელესი{" "}
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
