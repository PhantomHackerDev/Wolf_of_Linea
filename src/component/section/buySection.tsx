"use client";
import React, {useState} from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; // Import Swiper styles
import StakingForm from "@/component/common/stakingForm";
import Image from "next/image";

const BuySection: React.FC = () => {
  return (
    <div
      id="home"
      className="flex flex-col md:flex-row w-full text-white h-screen bg-cover bg-center bg-[#0e1238] px-6 md:px-[5%] justify-normal md:justify-between"
      style={{ backgroundImage: 'url("/image/top_background.jpg")' }}
    >
      <div className="flex md:w-1/3 w-full flex-col">
        <div className="md:py-3 py-1 w-full font-extrabold text-xl md:text-3xl">
          <Swiper
            className="justify-center items-center text-center"
            spaceBetween={10}
            slidesPerView={1}
            loop={true}
            modules={[Autoplay]}
            pagination={{ clickable: true }}
            speed={600} // Set transition speed
            autoplay={{ delay: 1000, disableOnInteraction: false }} // Set delay and interaction options
          >
            <SwiperSlide>
              <p className="text-[#e9c67e] py-3">Wolf of Linea</p>
            </SwiperSlide>
            <SwiperSlide>
              <p className="text-[#e9c67e] py-3">Join the pack</p>
            </SwiperSlide>
            <SwiperSlide>
              <p className="text-[#e9c67e] py-3">How to the moon</p>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="flex justify-center pt-3 md:pt-16 items-center">
          <a
            // onClick={()=>open()}
            href="https://pancakeswap.finance/swap?chain=linea&outputCurrency=0x7C92b9Fb20B6E60ff67Ee6C0B8314cF72be2235A"
            className="bg-[#ffd986] flex items-center md:gap-3 gap-1 hover:bg-[#0082bf] font-semibold text-white py-1 md:py-3 px-10 rounded-sm"
          >
            <span>BUY $WOLF</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="0.63em"
              height="1em"
              viewBox="0 0 320 512"
            >
              <path
                fill="currentColor"
                d="M311.9 260.8L160 353.6L8 260.8L160 0zM160 383.4L8 290.6L160 512l152-221.4z"
              ></path>
            </svg>
          </a>
        </div>
        <div className="flex flex-col gap-7 justify-center items-center">
          <p className="text-xl md:text-4xl font-extrabold">JOIN THE PACK</p>
          <ul className="flex flex-wrap gap-1 md:gap-5 items-center justify-center text-sm md:text-md text-white">
            <li>
              <a
                href="https://t.me/Wolfoflinea"
                className="flex flex-col items-center focus:underline"
              >
                <svg
                  className="w-10 h-10 p-2 md:w-12 md:h-12"
                  viewBox="0 0 496 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#fefffe"
                    d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z"
                  ></path>
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://x.com/WolfofLinea"
                className="flex flex-col items-center "
              >
                <svg
                  className="w-10 h-10 p-2 md:w-12 md:h-12"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#fefffe"
                    d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                  ></path>
                </svg>
              </a>
            </li>
            <li>
              <a
                href="mailto:wolfoflinea@solverum.com"
                className="flex flex-col items-center "
              >
                <svg
                  className="w-10 h-10 p-2 md:w-12 md:h-12"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#fefffe"
                    d="M511.9 175c-9.1-75.6-78.4-132.4-158.3-158.7C390 55.7 416 116.9 416 192h28.1L327.5 321.5c-2.5-.6-4.8-1.5-7.5-1.5h-48V192h112C384 76.8 315.1 0 256 0S128 76.8 128 192h112v128h-48c-2.7 0-5 .9-7.5 1.5L67.9 192H96c0-75.1 26-136.3 62.4-175.7C78.5 42.7 9.2 99.5.1 175c-1.1 9.1 6.8 17 16 17h8.7l136.7 151.9c-.7 2.6-1.6 5.2-1.6 8.1v128c0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32V352c0-2.9-.9-5.4-1.6-8.1L487.1 192h8.7c9.3 0 17.2-7.8 16.1-17z"
                  ></path>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex md:w-2/3 w-full flex-col">
        <Image className="relative  md:block hidden justify-center mt-5 items-center rounded-full  opacity-75 scale-125" src="/image/logo.png" width={128} height={128}  alt="wolfofliner logo" />
        <div className="flex w-full rounded-xl md:z-0 z-10 flex-col p-5 border bg-[#0e1238]">
          <StakingForm />
        </div>
      </div>
    </div>
  )
}

export {
  BuySection,
};
