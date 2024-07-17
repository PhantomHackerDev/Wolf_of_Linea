"use client";
import React, {useState} from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; // Import Swiper styles
import {
  token_details,
  func,
  taxonomics,
  progressbar,
  project_wallet,
  step,
  faqContent,
} from "@/utils/content";
import { motion } from 'framer-motion';
import Accordion from "@/component/common/accordion";
import Image from "next/image";

const slideVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 50 },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="bg-[#0d0b30] sticky top-0 z-20 md:px-44 sm:p-4 w-full">
      <div className="flex items-center justify-between mx-auto p-4">
        <a
          href="/"
          className="text-white text-xl md:text-2xl font-bold"
        >
          Wolf of Linea
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          {/* Mobile Menu Toggle Button */}
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
        </div>
        <div className={`items-center justify-between hidden w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 text-lg gap-5 text-white">
            <li>
              <a href="/" className="hover:underline">HOME</a>
            </li>
            {["ABOUT $WOLF", "HOW TO BUY", "FAQ"].map((item, index) => (
              <li key={index}>
                <a 
                  href={`#${item.toLowerCase().replace(/\s/g, '-')}`}
                  className="hover:underline"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Drawer Menu */}
      <div className={`fixed top-0 left-0 h-full w-full justify-center bg-[#0d0b30] z-50 transform transition-transform duration-300 ${isOpen ? 'translate-y-[69px]' : '-translate-y-full'}`}>
        <ul className="flex flex-col text-center space-y-4 text-lg gap-5 text-white">
          {["HOME", "ABOUT $WOLF", "HOW TO BUY", "FAQ"].map((item, index) => (
            <li key={index}>
              <a 
                href={`#${item.toLowerCase().replace(/\s/g, '-')}`}
                className="hover:underline"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
const BuySection: React.FC = () => {
  return (
    <div
      id = "home"
      className="grid grid-cols-1 md:grid-cols-2 w-full text-white h-screen bg-cover bg-center bg-blue-500 px-6 md:px-44 justify-between"
      style={{ backgroundImage: 'url("/image/top_background.jpg")' }}
    >
      <div className="flex w-full gap-10 flex-col">
        <div className="py-3 w-full font-extrabold text-2xl md:text-3xl">
          <Swiper
            className="justify-center items-center text-center"
            spaceBetween={10}
            slidesPerView={1}
            // navigation
            loop={true}
            modules={[Autoplay]}
            pagination={{ clickable: true }}
            speed={600} // Set transition speed
            autoplay={{ delay: 1000, disableOnInteraction: false }} // Set delay and interaction options
          >
            <SwiperSlide>
              <p className="text-[#e9c67e] py-3  ">Wolf of Linea</p>
            </SwiperSlide>
            <SwiperSlide>
              <p className="text-[#e9c67e] py-3">Join the pack</p>
            </SwiperSlide>
            <SwiperSlide>
              <p className="text-[#e9c67e] py-3">Howl to the moon</p>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="flex justify-center pt-4 md:pt-16 items-center">
          <a
            href="https://pancakeswap.finance/swap?chain=linea&outputCurrency=0x7C92b9Fb20B6E60ff67Ee6C0B8314cF72be2235A"
            className="bg-[#ffd986] flex items-center gap-3 hover:bg-[#0082bf] font-semibold text-white py-3 px-10 rounded-sm"
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
          <p className="text-3xl md:text-4xl font-extrabold">JOIN THE PACK</p>
          <ul className="flex flex-wrap gap-5 items-center justify-center text-sm md:text-md text-white">
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
      <div className="flex flex-col justify-center items-center">
        <Image className="relative rounded-full  opacity-75 scale-150" src="/image/logo.png"  width={128} height={128}  alt="wolfofliner logo" />
      </div>
    </div>
  )
}
const About: React.FC = () => {
  return (
    <div id = "about-$wolf" className="grid grid-cols-1 md:grid-cols-2 items-center px-6 md:px-16 lg:px-44 py-10 bg-[#0e1238]">
      <div className="flex flex-col items-center text-white">
        <motion.div
          className="flex"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <Image width={128} height={128}  className="relative rounded-full opacity-45 w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64" src="/image/about1.jfif" alt="About Us Image" />
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
const Howtobuy: React.FC = () => {
  return (
    <div
    id = "how-to-buy"
      className="flex flex-col w-full bg-cover bg-center bg-[#0e1238]"
    >
      <div className="flex text-3xl md:text-4xl px-6 md:px-16 lg:px-44 pt-7 justify-center items-center gap-5">
        <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 512 512"><path fill="#df8620" d="M382.825 304.576a131.562 131.562 0 0 0-253.65 0l-18.248 66.15A80 80 0 0 0 188.046 472h135.908a80 80 0 0 0 77.119-101.274Zm-20.682 116.5A47.638 47.638 0 0 1 323.954 440H188.046a48 48 0 0 1-46.272-60.765l18.248-66.149a99.563 99.563 0 0 1 191.956 0l18.248 66.149a47.636 47.636 0 0 1-8.083 41.845ZM146.1 230.31c2.784-17.4-.908-36.027-10.4-52.463s-23.78-28.947-40.237-35.236c-17.624-6.731-35.6-5.659-50.634 3.017c-29.887 17.256-37.752 59.785-17.529 94.805c9.489 16.436 23.778 28.95 40.235 35.236a64.058 64.058 0 0 0 22.863 4.371a55.133 55.133 0 0 0 27.771-7.389c15.025-8.677 24.945-23.714 27.931-42.341m-31.6-5.058c-1.43 8.929-5.81 15.92-12.333 19.686S87.4 249 78.95 245.775c-9.613-3.671-18.115-11.251-23.941-21.342c-11.2-19.4-8.538-42.8 5.82-51.092a23.483 23.483 0 0 1 11.847-3.058a31.951 31.951 0 0 1 11.368 2.217c9.613 3.673 18.115 11.252 23.941 21.343s8.139 21.248 6.515 31.409m35.066-61.235c11.362 9.083 24.337 13.813 37.458 13.812a54.965 54.965 0 0 0 11.689-1.261c33.723-7.331 54.17-45.443 45.58-84.958c-4.03-18.546-13.828-34.817-27.588-45.818c-14.735-11.78-32.189-16.239-49.147-12.551c-33.722 7.33-54.169 45.442-45.58 84.957c4.031 18.547 13.829 34.818 27.588 45.819m24.788-99.506a22.258 22.258 0 0 1 4.732-.5c5.948 0 12.066 2.327 17.637 6.781c8.037 6.425 13.826 16.234 16.3 27.621c4.76 21.895-4.906 43.368-21.107 46.89c-7.361 1.6-15.305-.628-22.367-6.275c-8.037-6.426-13.826-16.235-16.3-27.621c-4.761-21.901 4.905-43.374 21.105-46.896m292.817 81.117c-15.028-8.676-33.013-9.748-50.634-3.017c-16.457 6.287-30.746 18.8-40.235 35.236s-13.182 35.067-10.4 52.463c2.982 18.627 12.9 33.664 27.931 42.341a55.123 55.123 0 0 0 27.771 7.389a64.054 64.054 0 0 0 22.863-4.371c16.457-6.286 30.746-18.8 40.235-35.236c20.221-35.02 12.356-77.549-17.531-94.805m-10.18 78.805c-5.826 10.091-14.328 17.671-23.941 21.342c-8.446 3.228-16.692 2.931-23.215-.837s-10.9-10.757-12.333-19.686c-1.626-10.161.686-21.314 6.513-31.4s14.328-17.67 23.941-21.343a31.955 31.955 0 0 1 11.368-2.221a23.483 23.483 0 0 1 11.847 3.058c14.358 8.285 17.023 31.682 5.82 51.087m-143.704-47.865a54.965 54.965 0 0 0 11.689 1.261c13.12 0 26.1-4.729 37.458-13.812c13.759-11 23.557-27.272 27.588-45.818c8.589-39.515-11.858-77.627-45.58-84.957c-16.957-3.686-34.412.77-49.147 12.551c-13.76 11-23.558 27.272-27.588 45.817c-8.59 39.515 11.857 77.627 45.58 84.958m-14.31-78.16c2.474-11.387 8.263-21.2 16.3-27.621c5.572-4.454 11.689-6.781 17.637-6.781a22.258 22.258 0 0 1 4.732.5c16.2 3.522 25.866 25 21.107 46.89c-2.476 11.387-8.265 21.2-16.3 27.622c-7.061 5.646-15 7.874-22.367 6.275c-16.203-3.517-25.869-24.993-21.109-46.885"></path></svg>
        <span className="font-extrabold text-white">HOW TO BUY WOLF OF LINEA</span>
      </div>
      <div className="flex gap-3 px-6 md:px-16 lg:px-28 py-5 text-lg md:text-xl font-bold text-white">
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 2, // 2 slides for screens >= 640px
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3, // 3 slides for screens >= 768px
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 4, // 4 slides for screens >= 1024px
              spaceBetween: 10,
            },
          }}
        >
          {step.map((value, index) => (
            <SwiperSlide key={index}>
              <motion.div 
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={slideVariants}
                transition={{ duration: 0.5 }}
                className="flex flex-col justify-between h-[150px] items-center opacity-80 border rounded-lg p-3 bg-[#1e1e2f]"
              >
                <p className="flex justify-between items-center">
                  <span className="flex text-center">{value.step}{"."}</span>
                  <span className="text-sm text-thin"> {value.title}</span>
                </p>
                <p className="text-white text-thin text-sm">
                  {value.content}
                </p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
const FaqSection: React.FC = () => {
  return (
    <div className="bg-[#0e1238] grid grid-cols-1 md:grid-cols-2 gap-5 w-full px-6 md:px-36 py-10">
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
const ShowImage: React.FC = () => {
  return (
    <div className="flex flex-col w-full gap-4 sm:gap-6 md:gap-10 py-8 md:py-12 lg:py-16 bg-[#0e1238]">
      <div className="grid sm:grid-cols-1 md:px-24 gap-10 md:grid-cols-5">
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
      </div>
    </div>
  )
}
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
              draggable="false"
              role="img"
              className="emoji w-3 h-3"
              alt="🌕"
              src="https://s.w.org/images/core/emoji/15.0.3/svg/1f315.svg"
            />
            <Image
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
        <Image className="relative rounded-full w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48" src="/image/logo.png"  width={128} height={128}  alt="wolfofliner logo" />
      </div>
    </div>
  )
}
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
  Header,
  About,
  BuySection,
  FaqSection,
  ShowImage,
  ListSection,
  Bigwin,
  Howtobuy,
  Footer
};
