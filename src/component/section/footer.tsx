"use client";
import React from "react";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <div
      className="flex flex-col w-full gap-5 md:gap-20 lg:gap-24 h-screen bg-cover bg-center bg-[#0e1238]"
    >
      <div className="grid pt-24 grid-cols-1 md:grid-cols-2 w-full items-center">
        <div className="flex flex-col justify-center pt-10 pb-5">
          <div className="flex justify-center">
            <Image
              className="rounded-full w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 "
              src="/image/logo.png"  width={128} height={128} 
              alt="wolfofLinea logo"
            />
          </div>
          
        </div>
        <div className="flex flex-col gap-5 md:gap-7 justify-center items-center">
          <p className="text-3xl md:text-4xl font-extrabold text-white">JOIN THE PACK</p>
          <ul className="flex flex-wrap items-center justify-center text-sm md:text-md text-white">
            <li>
              <a
                href="https://t.me/Wolfoflinea"
                className="flex flex-col items-center me-4 focus:underline md:me-6 "
              > <span>JOIN THE PACK</span>
                <svg
                  className="w-10 h-10 md:w-12 md:h-12 p-2"
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
                className="flex flex-col items-center me-4 focus:underline md:me-6 "
              ><span>FOLLOW THE PACK</span>
                <svg
                  className="w-10 h-10 md:w-12 md:h-12 p-2"
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
                className="flex flex-col items-center me-4 focus:underline md:me-6 "
              ><span>HOWL WITH THE PACK</span>
                <svg
                  className="w-10 h-10 md:w-12 md:h-12 p-2"
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
      <div className="flex flex-col bottom-0 gap-7 justify-center items-center">
        <ul className="flex flex-wrap items-center justify-center text-sm font-semibold gap-5 text-white">
          <li>
            <a
              href="#"
              className="flex items-center gap-4"
            ><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 256 256"><path fill="#df8620" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84m41.59-52.79a52 52 0 1 1 0-62.43a12 12 0 1 1-19.18 14.42a28 28 0 1 0 0 33.6a12 12 0 1 1 19.18 14.41"></path></svg>
              <span className="text-center">
                Copyright 2024 Wolf of Linea $Wolf
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-4"
            ><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24"><path fill="#df8620" d="M11.944 17.97L4.58 13.62L11.943 24l7.37-10.38l-7.372 4.35zM12.056 0L4.69 12.223l7.365 4.354l7.365-4.35z"></path></svg>
              <span>Published at Linea</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-4"
            ><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 256 256"><path fill="#df8620" d="M236.37 139.4a12 12 0 0 0-12-3A84.07 84.07 0 0 1 119.6 31.59a12 12 0 0 0-15-15a108.86 108.86 0 0 0-54.91 38.48A108 108 0 0 0 136 228a107.1 107.1 0 0 0 64.93-21.69a108.86 108.86 0 0 0 38.44-54.94a12 12 0 0 0-3-11.97m-49.88 47.74A84 84 0 0 1 68.86 69.51a84.9 84.9 0 0 1 23.41-21.22Q92 52.13 92 56a108.12 108.12 0 0 0 108 108q3.87 0 7.71-.27a84.8 84.8 0 0 1-21.22 23.41"></path></svg>
              <span>Made for the Moon</span>
            </a>
          </li>
        </ul>
        <ul className="flex flex-wrap items-center justify-center text-sm md:text-md text-white">
          <li>
            <a
              href="https://x.com/WolfofLinea"
              className="flex items-center me-4 focus:underline md:me-6 "
            ><svg xmlns="http://www.w3.org/2000/svg" width={36} height={36} viewBox="0 0 24 24"><g fill="none" stroke="#df8620" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} color="#df8620"><path d="m7 17l4.194-4.193M17 7l-4.193 4.194m0 0L9.777 7H7l4.194 5.807m1.612-1.614L17 17h-2.778l-3.028-4.193"></path><path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10"></path></g></svg>
            </a>
          </li>
          <li>
            <a
              href="mailto:wolfoflinea@solverum.com"
              className="flex items-center me-4 focus:underline md:me-6 "
            ><svg xmlns="http://www.w3.org/2000/svg" width={36} height={36} viewBox="0 0 20 20"><g fill="#df8620"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0 0 16 4H4a2 2 0 0 0-1.997 1.884"></path><path d="m18 8.118l-8 4l-8-4V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2z"></path></g></svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export {
  Footer
};
