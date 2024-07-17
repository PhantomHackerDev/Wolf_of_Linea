"use client";
import React from "react";
import {
  token_details,
  func,
  taxonomics,
  progressbar,
  project_wallet,
} from "@/utils/content";

const ListSection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 p-5 md:px-[80 px] -mx-0 -mb-[15px] w-full bg-[#0e1238]">
      <div className="flex flex-col px-6 md:px-10 gap-2 items-center">
        <p className="text-[#ffd986] text-xl text-center pb-10">
          Token Details
        </p>
        <ul className="max-w-md space-y-1 pb-10 text-xs text-white list-disc leading-loose items-start">
          {token_details.map((value: any, index: number) => (
            <li key={index}>
              <strong>
                {value.title}: {value.content}
              </strong>
            </li>
          ))}
        </ul>
        <div className="">
          <iframe
            className="w-full h-[180px] md:h-[180px]"
            src="https://www.youtube.com/embed/EGHOANYkE40?controls=1&rel=0&playsinline=1&modestbranding=0&autoplay=1&enablejsapi=1&origin=https%3A%2F%2Fwolfofblockchain.de&widgetid=1"
          ></iframe>
        </div>
        <p className="text-[#ffd986] text-xl text-center">TOKENOMICS</p>
        <div className="flex flex-col min-w-full gap-4 pb-5">
          {progressbar.map((value: any, index: number) => (
            <div key={index} className="flex flex-col gap-1">
              <p className="text-[#ffd986] text-sm">{value.title}</p>
              <div className="w-full bg-gray-200 h-[32px] ">
                <div
                  className="bg-[#ffd986] flex justify-between items-center h-[32px] text-white p-1 "
                  style={{ width: `${value.progress}%` }}
                >
                  <span className="text-xs md:text-xs">{value.content}</span>
                  <span className="text-xs md:text-xs">{value.progress}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col px-6 md:px-8 gap-2 items-center">
        <p className="text-[#ffd986] text-xl text-center pb-10">TAXONOMICS</p>
        <ul className="max-w-md space-y-1 text-sm text-white list-disc leading-loose items-start">
          {taxonomics.map((value: any, index: number) => (
            <li key={index}>
              <strong>{value.title}: </strong>
              <span className="font-thin text-xs">{value.content}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-col">
          <p className="text-[#ffd986] text-xl md:text-2xl text-center py-5">
            Project Wallets
          </p>
          <div className="w-full text-sm md:text-base font-thin text-white text-center">
            <p className="">
              Here are all Wolf of Linea Wallets and their function:
            </p>
            {project_wallet.map((value: any, index: number) => (
              <div key={index} className="py-3 gap-2 text-xs">
                <p>{value.title}</p>
                <p>{value.address}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col px-6 md:px-10 gap-2 items-center">
        <p className="text-[#ffd986] text-xl text-center pb-10">FUNCTIONS</p>
        <ul className="max-w-md space-y-1 text-sm text-white list-disc leading-loose items-start">
          {func.map((value: any, index: number) => (
            <li key={index}>
              <strong>
                {value.title} {value.content}
              </strong>
              <span className="font-thin tex-xs">{value.commit}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export {
  ListSection
};
