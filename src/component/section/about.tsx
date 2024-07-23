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
          An open-source peer-to-peer digital currency, favoured by Shiba Inus worldwide. <br />
          At its heart, Wolf Of Linea is the accidental crypto movement that makes people smile! It is also an open-source peer-to-peer cryptocurrency that utilises blockchain technology, a highly secure decentralised system of storing information as a public ledger that is maintained by a network of computers called nodes. More than this, though, is the ethos of Wolf Of Linea, summarised in the Wolf Of Linea Manifesto, and its amazing, vibrant community made up of friendly folks just like you!
        </motion.p>
      </div>
    </div>
  )
}
export {
  About,
};
