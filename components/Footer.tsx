import React from 'react'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className='lg:h-47.5 h-55 flex flex-col justify-end gap-6'>
        <div className="w-full font-['Radio_Canada_Big',sans-serif] flex lg:flex-row flex-col lg:justify-between lg:gap-0 gap-2 px-10">
            <h1 className='text-[36px] lg:text-start text-center'>Street#1.com</h1>

            <div className='text-[20px] lg:flex hidden items-center gap-5'>
                <h1>Terms of Conditions</h1>

                <h1>Privacy Policy</h1>
            </div>

            <div className='lg:w-50 w-full lg:h-14 h-15.5 relative'>
                <Image src={"/assets/socials.png"} fill alt='' />
            </div>
        </div>
        <div className='w-full h-15 bg-[#D93D00] flex justify-center items-center text-amber-50 text-[22px]'>
            <h1>©2026 Street#1</h1>
        </div>
    </footer>
  )
}
