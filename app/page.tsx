import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen flex relative overflow-x-hidden">
      <div className="w-[45vw] h-full flex justify-center mt-50">
        <div className="w-137.5 flex flex-col">
          <h1 className="test text-[#D93D00] text-5xl">გაქვს შანსი მიირთვა</h1>
          <h1 className="text-[50px] primary-font font-semibold">
            უგემრიელესი რამ
          </h1>
          <h1 className="text-[62px]">
            შენს <span className="text-[#D93D00]">მაგიდაზე?</span>
          </h1>
          <div className="w-full mt-5">
            <p className="text-[rgba(0,_0,_0,_0.7)]">
              ჩვენ გვაქვს მაღალი ხარისხის მომსახურეობა, და კლიენტს ყოველთვის
              განსხვავებულს ვთავაზობთ.
            </p>
          </div>
          <div className="w-full mt-5 space-x-5">
            <button className="inline-flex items-center h-10 px-5 py-3.5 rounded-md bg-[#D93D00] text-amber-50">დაჯავშნა</button>
            <button className="inline-flex items-center h-10 px-5 py-3.5 rounded-md text-[#D93D00] border">მენიუ</button>
          </div>
        </div>
      </div>

      <div className="w-[55vw] h-full relative">
        <Image src={"/assets/Vector.png"} fill alt="bg" className="-z-50" />
        <Image
          src={"/assets/pasta.png"}
          width={700}
          height={600}
          alt=""
          className="z-50 absolute left-[50%] top-[50%] -translate-y-[50%] -translate-x-[50%]"
        />
      </div>
      <Image
        src={"/assets/lettuce.png"}
        width={2000}
        height={1000}
        alt=""
        className="rotate-185 absolute top-45"
      />
    </main>
  );
}
