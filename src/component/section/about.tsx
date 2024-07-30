"use client";
import React, {useState} from "react";
import { motion } from 'framer-motion';
import Image from "next/image";

const About: React.FC = () => {
  return (
    <div id = "about-$wolf" className="grid grid-cols-1  md:grid-cols-2 items-center px-6 md:px-16 lg:px-44 md:pt-10 md:pb-10 pt-40 bg-[#0e1238]">
      <div className="flex flex-col items-center text-white">
        <motion.div
          className="flex"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <Image width={128} height={128} className="relative rounded-full opacity-45 w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64" src="/image/about1.jfif"  alt="About Us Image" />
        </motion.div>
      </div>
      <div className="flex flex-col items-center text-white">
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-sm md:text-base lg:text-md first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-white first-letter:me-3 first-letter:float-start"
        >
          Wolf of Linea: A Community DeFi Project <br />
          Wolf of Linea is an innovative community project characterized by its deflationary dividend token, $WOLF. Users have the opportunity to stake their $WOLF tokens and earn attractive returns. Additionally, Wolf of Linea offers various NFT collections that are not only artistically valuable but also provide functional benefits. By staking NFTs, users can receive boosts on their token staking, further enhancing their returns. To support the community and optimize trading, special bots such as a Staking Bot, a BuyBot, and a Volume Bot are integrated, all contributing to the utility of the token.
        </motion.p>
      </div>
    </div>
  )
}
export {
  About,
};
