import MenuItem from "@/components/MenuItem";
import ReviewSlider from "@/components/ReviewSlider";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-auto">
      <div className="h-screen flex relative overflow-x-hidden overflow-y-hidden">
        <div className="w-[45vw] h-full flex justify-center mt-[20vmin]">
          <div className="w-137.5 flex flex-col">
            <h1 className="test text-[#D93D00] text-5xl">
              გაქვს შანსი მიირთვა
            </h1>
            <h1 className="text-[50px] primary-font font-semibold">
              უგემრიელესი რამ
            </h1>
            <h1 className="text-[62px]">
              შენს <span className="text-[#D93D00]">მაგიდაზე?</span>
            </h1>
            <div className="w-full mt-5">
              <p className="text-[rgba(0,0,0,0.7)]">
                ჩვენ გვაქვს მაღალი ხარისხის მომსახურეობა, და კლიენტს ყოველთვის
                განსხვავებულს ვთავაზობთ.
              </p>
            </div>
            <div className="w-full mt-5 space-x-5">
              <button className="inline-flex items-center h-10 px-5 py-3.5 rounded-md bg-[#D93D00] text-amber-50">
                დაჯავშნა
              </button>
              <button className="inline-flex items-center h-10 px-5 py-3.5 rounded-md text-[#D93D00] border">
                მენიუ
              </button>
            </div>
          </div>
        </div>

        <div className="w-[55vw] h-full relative">
          <Image src={"/assets/Vector.png"} fill alt="bg" className="-z-50" />
          <Image
            src={"/assets/pasta.png"}
            width={600}
            height={600}
            alt=""
            className="absolute left-1/2 top-1/2  min-[2560px]:top-[20%] z-50 -translate-x-1/2 -translate-y-1/2"
          />
        </div>
        <div className="lettuce"></div>
      </div>
      {/* offers */}
      <div className="w-full h-200 flex bg-[#D93D00] z-50">
        <div className="w-[55vw] h-full space-y-10 px-15 pt-20">
          <div className="flex flex-col text-white testa">
            <div className="w-133.5 text-[44px] text-[#D93D00] test px-3.5 py-3.5 bg-white rounded-full">
              <h1>სპეციალური შეთავაზებები</h1>
            </div>
            <h1 className="text-[60px] font-semibold primary-font">
              მიიღეთ 40% ფასდაკლება
            </h1>
            <h1 className="text-[58px] primary-font mb-1">
              მენიუს ყველა პუნქტზე
            </h1>
            <p className="w-130.5 text-[18px] opacity-60">
              ჩვენ გვაქვს მაღალი ხარისხის მომსახურეობა, და კლიენტს ყოველთვის
              განსხვავებულს ვთავაზობთ.
            </p>
          </div>
          <div className="w-125 h-39 relative pastas">
            <Image src={"/assets/pastas.png"} fill alt="p" />
          </div>
          <div className="w-full flex gap-5 offer-buttons">
            <button className="w-47.5 px-5.5 py-3.5 border text-white rounded-lg text-[20px]">
              შეთავაზებები
            </button>
            <p className="w-93 text-[20px] opacity-50 text-white">
              *ყოველთვის მაღალი ხარისხი ჩვენთთან უკმაყყოფილო არავინაა
            </p>
          </div>
        </div>
        <div className="w-[45vw] h-full relative">
          <Image
            src={"/assets/Vector-white.png"}
            width={600}
            height={600}
            alt=""
            className="absolute top-[20%] right-[2%] offer-vector"
          />
          <Image
            src={"/assets/spageti.png"}
            width={800}
            height={700}
            alt=""
            className="absolute top-[5%] right-[3%] second-offer-vector"
          />
        </div>
      </div>
      {/* Menu */}
      <div className="w-full h-200 flex flex-col gap-40 px-15 py-20 bg-[#EEEEEE]">
        {/* header */}
        <div className="w-full">
          <h1 className="text-[#D93D00] text-[38px]">STREET#1's</h1>
          <h1 className="text-[#D93D00] text-[48px] primary-font">
            ტოპ <span className="text-black">ნუდლსი</span>
          </h1>
          <p className="text-[#00000098]">
            მრავალფეროვანი მენიუ, რაც მთავარია თქვენთვის მორგებული.
          </p>
        </div>
        {/* Menu Items */}
        <div className="w-full flex justify-evenly">
          <MenuItem />
          <MenuItem />
          <MenuItem />
        </div>
      </div>
      {/* Review */}
      <div className="w-full h-200 flex flex-col gap-25 px-15 py-20">
        {/* header */}
        <div className="w-full">
          <h1 className="text-[#D93D00] text-[38px] test">ჩვენი მიმოხილვა</h1>
          <h1 className="text-black text-[48px] primary-font">
            გემრიელი მენიუ <span className="text-[#D93D00]">& ნუდლსი</span>
          </h1>
          <p className="text-[#00000098]">
            მრავალფეროვანი მენიუ, რაც მთავარია თქვენთვის მორგებული.
          </p>
        </div>
        {/* Reviews */}
        <div className="w-full flex">
          <ReviewSlider />
        </div>
      </div>
      {/* Callback */}
      <div className="w-full h-100 callback">
        <div className="w-full h-full px-20 py-10 bg-[#d93d00ad]">
          <h1 className="text-[56px] text-amber-50 leading-normal font-['Radio_Canada_Big',sans-serif]">Get your food from</h1>
          <div className="w-full flex justify-between items-center">
            <h1 className="text-[156px] text-amber-50">STREET#1</h1>
            
            <button className="w-122.75 h-22.5 inline-flex px-5.5 py-4 bg-amber-50 text-[#D93D00] justify-center items-center text-[48px] rounded-xl">
              შეუკვეთე ახლავე
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
