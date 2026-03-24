import React from "react";

export default function Review() {
  return (
    <div className="2xl:w-102.25 lg:w-80 h-90 px-5 py-5 space-y-4 text-[#D93D00] border-2 rounded-xl">
      <div className="w-full flex flex-col items-center">
        <div className="w-25 h-25 rounded-full bg-[#D93D00]"></div>
        <h1 className="text-2xl text-black primary-font">კეით როუზი</h1>
        <p className="text-[#0000007e] primary-font">ერთგული მომხმარებელი</p>
      </div>
      <p className="text-justify text-[#000000af] 2xl:text-[18px]">
        პირველ რიგში ძალიან მომწონს გარემო ყველა დეტალით თუ დეკორაციით, საჭმელი
        არის ძალიან განსხვავებული და რაც მთავარია უგემრიელესი{" "}
      </p>
    </div>
  );
}
