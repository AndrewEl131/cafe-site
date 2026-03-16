import Footer from "@/components/Footer";
import React from "react";
import Image from "next/image";

export default function about() {
  return (
    <main className="relative">
      <div className="w-119.25 h-85 absolute top-55 place-self-center">
        <Image src={"/assets/banner.jpg"} fill alt="" />
      </div>
      <div className="w-full h-75 bg-[#FC530A] flex justify-center items-center">
        <h1 className="test text-[64px] text-amber-50">ჩვენი ამბავი</h1>
      </div>
      <div className="w-2xl h-auto py-5 mx-auto mt-70">
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
