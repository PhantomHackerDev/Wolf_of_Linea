"use client";
import React from "react";
import Image from "next/image";

const Bigwin: React.FC = () => {
  return (
    <div id = "" className="grid grid-cols-1 md:grid-cols-2 py-5 items-center bg-[#0e1238] px-4 md:px-16 lg:px-44">
      <div className="flex justify-center">
        <div className="flex flex-col pt-7 items-center">
          <p className=" flex items-center gap-2 pb-3">
            <Image
             width={16} height={16} 
              draggable="false"
              role="img"
              className="emoji w-4 h-4"
              alt="🎁"
              src="https://s.w.org/images/core/emoji/15.0.3/svg/1f381.svg"
            />
            <span className="underline text-white text-sm font-semibold">
              Prizes: 5 x 1000 USDT to win!
            </span>
          </p>
          <ul className="max-w-md space-y-1 pb-10 text-[13px] gap-3 text-center text-white list-disc leading-loose">
            <li>There are 1000 beautiful NFTs available for 0.003 ETH each.</li>
            <li>
              Among these 1000 NFTs: 5 Big Win NFTs, each unlocking a prize of
              1000 USDT.
            </li>
            <li>
              45 unique NFTs, which can be staked later with Wolf tokens for
              higher WOLF rewards.
            </li>
            <li>950 consolation prize NFTs.</li>
            <li>Half of the NFT sale proceeds will be used for buybacks.</li>
          </ul>
          <p className="text-center underline pb-2 text-white text-[13px]">
            Prizes will be distributed once half of the NFTs are sold.
          </p>
          <p className="text-center flex gap-1 pt-2 items-center text-white text-[13px]">
            <span>Good luck to all participants! Auuu!</span>
            <Image
             width={12} height={12} 
              draggable="false"
              role="img"
              className="emoji w-3 h-3"
              alt="🌕"
              src="https://s.w.org/images/core/emoji/15.0.3/svg/1f315.svg"
            />
            <Image
             width={12} height={12} 
              draggable="false"
              role="img"
              className="emoji w-3 h-3"
              alt="🐺"
              src="https://s.w.org/images/core/emoji/15.0.3/svg/1f43a.svg"
            />
          </p>
        </div>
      </div>
      <div className="flex justify-center md:justify-end items-center animate-bounce">
        <Image className="relative rounded-full w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48" src="/image/logo.png" width={128} height={128} alt="wolfofliner logo" />
      </div>
    </div>
  )
}

export {
  Bigwin
};
