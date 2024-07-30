"use client";
import React, {useState} from "react";
import {
  faqContent,
} from "@/utils/content";
import Accordion from "@/component/common/accordion";
import Image from "next/image";

const FaqSection: React.FC = () => {
  return (
    <div id = "faq" className="bg-[#0e1238] grid grid-cols-1 md:grid-cols-2 gap-5 w-full px-6 md:px-36 py-10">
      <div className="flex items-center">
        <Image width={128} height={128} className="opacity-75 w-full h-auto" src="/image/faq_wolf1.png" alt="wolf of linea" />
      </div>
      <div className="flex flex-col">
        {
          faqContent.map((value:any, index:number) => (
            <Accordion key={index} title={value.title} content={value.content} />
          ))
        }
      </div>
    </div>
  )
}

export {
  FaqSection,
};
