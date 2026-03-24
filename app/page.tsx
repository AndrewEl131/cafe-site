import Footer from "@/components/Footer";
import MenuItem from "@/components/MenuItem";
import ReviewSlider from "@/components/ReviewSlider";
import Reveal from "@/hooks/useReveal";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "მთავარი",
  description: "A description for the page",
};

export default function Home() {
  return (
    <main className="h-auto">
      <div className="h-screen flex relative overflow-x-hidden overflow-y-hidden">
        <div className="lg:w-[45vw] w-full h-full flex justify-center lg:mt-[20vmin] mt-[30vmin] z-100">
          <div className="lg:w-137.5 flex flex-col lg:px-0 lg:py-0 px-5 py-5">
            <h1 className="test text-[#D93D00] lg:text-5xl text-3xl lg:hover:ml-3 duration-300 fade-up">
              გაქვს შანსი მიირთვა
            </h1>
            <h1 className="lg:text-[50px] text-4xl primary-font font-semibold lg:hover:ml-4 duration-300">
              უგემრიელესი რამ
            </h1>
            <h1 className="text-[62px] lg:hover:ml-5 duration-300">
              შენს <span className="text-[#D93D00]">მაგიდაზე</span>
            </h1>
            <div className="w-full mt-5">
              <p className="text-[rgba(0,0,0,0.7)] lg:hover:ml-4.5 duration-300">
                ჩვენ გვაქვს მაღალი ხარისხის მომსახურეობა, და მომხამერებელს
                ყოველთვის განსხვავებულს ვთავაზობთ.
              </p>
            </div>
            <div className="w-full mt-5 space-x-5">
              <button className="inline-flex items-center h-10 px-5 py-3.5 rounded-md cursor-pointer bg-[#D93D00] text-amber-50 lg:hover:bg-amber-50 lg:hover:text-[#D93D00] transition-all duration-300">
                დაჯავშნა
              </button>
              <Link
                href="/menu"
                className="inline-flex items-center h-10 px-5 py-3.5 rounded-md text-[#D93D00] border cursor-pointer lg:hover:bg-[#D93D00] lg:hover:text-amber-50 transition-all duration-300"
              >
                მენიუ
              </Link>
            </div>
          </div>
        </div>

        <div className="w-[55vw] h-full relative lg:block hidden">
          <Image src={"/assets/Vector.png"} fill alt="bg" className="-z-50" />
          <Image
            src={"/assets/pasta.png"}
            width={600}
            height={600}
            alt=""
            className="absolute left-1/2 top-1/2  min-[2560px]:top-[20%] z-50 -translate-x-1/2 -translate-y-1/2 scale-in"
          />
        </div>
        <div className="lettuce"></div>
      </div>
      {/* offers */}
      <div className="w-full lg:h-200 h-130 flex bg-[#D93D00] z-50 offers">
        <div className="lg:w-[55vw] w-full h-full space-y-10 lg:px-15 px-6 pt-20">
          <Reveal>
            <div className="flex flex-col lg:gap-0 gap-3 text-white testa">
              <div className="lg:w-133.5 w-full lg:text-[44px] text-[20px] lg:text-start text-center text-[#D93D00] test px-3.5 py-3.5 bg-white rounded-full lg:hover:mb-4 duration-300 transition-all ">
                <h1>სპეციალური შეთავაზებები</h1>
              </div>

              <h1 className="xl:text-[60px] lg:text-[48px] text-2xl lg:text-start text-center font-semibold primary-font">
                მიიღეთ 40% ფასდაკლება
              </h1>
              <h1 className="xl:text-[58px] lg:text-[45px] text-[18px] lg:text-start text-center primary-font mb-1">
                მენიუს ყველა პუნქტზე
              </h1>
              <p className="lg:w-130.5 w-full text-[18px] lg:text-start text-center opacity-60">
                ჩვენ გვაქვს მაღალი ხარისხის მომსახურეობა, და მომხმარებელს
                ყოველთვის განსხვავებულს ვთავაზობთ.
              </p>
            </div>
          </Reveal>
          <div className="lg:w-125 lg:block hidden w-full lg:h-39 md:w-110 lg:mx-0 md:mx-auto h-23 relative pastas">
            <Image src={"/assets/pastas.png"} fill alt="p" />
          </div>
          <div className="w-full flex lg:flex-row flex-col items-center gap-5 offer-buttons">
            <button className="w-47.5 px-5.5 lg:h-13 h-10 flex items-center justify-center lg:py-3.5 border text-white rounded-lg text-[20px] cursor-pointer lg:hover:bg-amber-50 lg:hover:text-[#D93D00] transition-all duration-300">
              შეთავაზებები
            </button>
            <p className="lg:w-93 text-[20px] lg:text-start text-center opacity-50 text-white">
              *ყოველთვის მაღალი ხარისხი, ჩვენთთან უკმაყოფილო არავინაა
            </p>
          </div>
        </div>
        <div className="w-[45vw] h-full relative lg:block hidden">
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
      <div
        className="w-full lg:h-200 h-400 flex flex-col gap-40 lg:px-15 px-5 lg:py-20 py-5 bg-[#EEEEEE]"
        id="menu"
      >
        {/* header */}
        <Reveal>
          <div className="w-full lg:text-start 2xl:space-y-1 text-center">
            <h1 className="text-[#D93D00] text-[38px]">STREET#1's</h1>
            <h1 className="text-[#D93D00] text-[48px] primary-font">
              ტოპ <span className="text-black">კერძები</span>
            </h1>
            <p className="text-[#00000098]">
              მრავალფეროვანი მენიუ, რაც მთავარია თქვენთვის მორგებული.
            </p>
          </div>
        </Reveal>
        {/* Menu Items */}
        <div className="">
          <div className="w-full flex lg:flex-row flex-col items-center lg:gap-0 gap-25 justify-evenly">
            <MenuItem
              img="/assets/main-burger.png"
              title="საფირმო ბურგერი"
              price={20}
            />
            <MenuItem
              img="/assets/cheeseburger.png"
              title="ჩიზბურგერი"
              price={13}
            />
            <MenuItem
              img="/assets/peperoni.webp"
              title="პიცა პეპერონი"
              price={23.5}
            />
          </div>
          <div className="w-full flex justify-center">
            <Link
              href={"/menu"}
              className="inline-flex items-center gap-3 lg:hover:gap-4.5 h-10 px-4.5 py-3.5 rounded-md cursor-pointer bg-[#D93D00] text-amber-50 lg:hover:bg-amber-50 lg:hover:text-[#D93D00] transition-all duration-300"
            >
              მენიუ
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M11.62 3.22A1.004 1.004 0 0 0 9.99 4v4h-3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h3v4a1.004 1.004 0 0 0 1 1c.22 0 .44-.07.62-.22l10-8c.24-.19.38-.48.38-.78s-.14-.59-.38-.78zm.38 14.7V15c0-.55-.45-1-1-1H8v-4h3c.55 0 1-.45 1-1V6.08L19.4 12zM2 8h2v8H2z"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
      {/* Review */}
      <div className="w-full h-200 lg:flex hidden flex-col gap-25 px-15 py-20">
        {/* header */}
        <div className="w-full lg:text-start text-center lg:space-y-0 space-y-5">
          <h1 className="text-[#D93D00] lg:text-[38px] text-3xl test">
            ჩვენი მიმოხილვა
          </h1>
          <h1 className="text-black lg:text-[48px] text-4xl primary-font">
            გემრიელი მენიუ{" "}
            <span className="text-[#D93D00]">& მომსახურეობა</span>
          </h1>
          <p className="text-[#00000098]">
            მრავალფეროვანი მენიუ, რაც მთავარია თქვენთვის მორგებული.
          </p>
        </div>
        {/* Reviews */}
        <Reveal>
          <div className="w-full flex lg:flex-row flex-col">
            <ReviewSlider />
          </div>
        </Reveal>
      </div>
      {/* Callback */}
      <div className="w-full h-100 callback">
        <div className="w-full h-full lg:px-20 px-5 lg:py-10 py-15 flex flex-col lg:gap-0 gap-10 bg-[#d93d00ad]">
          <Reveal>
            <h1 className="lg:text-[56px] text-3xl lg:text-start text-center text-amber-50 leading-normal font-['Radio_Canada_Big',sans-serif]">
              Get your food from
            </h1>
            <div className="w-full flex lg:flex-row flex-col lg:gap-0 gap-10 justify-between items-center">
              <h1 className="lg:text-[156px] text-6xl text-amber-50">
                STREET#1
              </h1>

              <button className="lg:w-122.75 w-45 lg:h-22.5 h-10 inline-flex px-5.5 lg:py-4 bg-amber-50 text-[#D93D00] justify-center items-center lg:text-[48px] text-[15px] rounded-xl cursor-pointer lg:hover:bg-[#D93D00] lg:hover:text-amber-50 transition-all duration-300">
                შეუკვეთე ახლავე
              </button>
            </div>
          </Reveal>
        </div>
      </div>
      <Footer />
    </main>
  );
}
