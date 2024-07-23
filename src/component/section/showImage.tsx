"use client";
import React from "react";
import { motion } from 'framer-motion';
import AutoCarousel from "@/component/common/carousel";
import { carouselImage } from "@/utils/content";
const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const ShowImage: React.FC = () => {
  return (
    <div className="flex flex-col w-full gap-4 md:gap-10 md:py-12 lg:py-16 bg-[#0e1238]">
      {/* <div className="grid sm:grid-cols-1 md:px-24 gap-10 md:grid-cols-5">
        <motion.img initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={imageVariants} className="w-full h-[250px] rounded-lg border border-spacing-5 opacity-75" src="/image/cartoon/cartoon_1.jpg" alt="wolf of linea show images" />
        <div></div>
        <motion.img initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={imageVariants} className="w-full h-[250px] rounded-lg border border-spacing-5 opacity-75 " src="/image/cartoon/cartoon_3.jpg" alt="wolf of linea show images" />
        <div></div>
        <motion.img initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={imageVariants} className="w-full h-[250px] rounded-lg border border-spacing-5 opacity-75" src="/image/cartoon/cartoon_5.jpg" alt="wolf of linea show images" />
        <div></div>
        <motion.img initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={imageVariants} className="w-full h-[250px] rounded-lg border border-spacing-5 opacity-75 " src="/image/cartoon/cartoon_2.jpg" alt="wolf of linea show images" />
        <div></div>
        <motion.img initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={imageVariants} className="w-full h-[250px] rounded-lg border border-spacing-5 opacity-75" src="/image/cartoon/cartoon_4.jpg" alt="wolf of linea show images" />
        <div></div>
      </div> */}
      <div className="flex items-center justify-center min-h-screen bg-[#0e1238]">
        <div className="w-3/4">
          <AutoCarousel images={carouselImage} />
        </div>
      </div>
    </div>
  )
}

export {
  ShowImage,
};
