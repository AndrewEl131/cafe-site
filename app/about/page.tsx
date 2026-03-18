import Footer from "@/components/Footer";
import React from "react";
import Image from "next/image";

export default function about() {
  return (
    <main className="relative">
      <div className="lg:w-119.25 w-60 lg:h-85 h-50 absolute top-55 place-self-center">
        <Image src={"/assets/banner.jpg"} fill alt="" className="rounded-xl" />
      </div>
      <div className="w-full h-75 bg-[#FC530A] flex justify-center items-center">
        <h1 className="test lg:text-[64px] text-4xl text-amber-50">ჩვენი ამბავი</h1>
      </div>
      <div className="lg:w-2xl h-auto py-5 mx-auto lg:mt-70 mt-30 lg:px-0 px-5">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur,
          repellat cum culpa aut natus perferendis illum, consectetur, quos eos
          ab laboriosam praesentium ea dolorem nam. Deserunt libero adipisci
          repellat dolore!
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur,
          repellat cum culpa aut natus perferendis illum, consectetur, quos eos
          ab laboriosam praesentium ea dolorem nam. Deserunt libero adipisci
          repellat dolore!
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur,
          repellat cum culpa aut natus perferendis illum, consectetur, quos eos
          ab laboriosam praesentium ea dolorem nam. Deserunt libero adipisci
          repellat dolore!
        </p>
      </div>
      <Footer />
    </main>
  );
}
