"use client";
import React, {useState} from "react";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount } from "wagmi";
import { toast } from "react-toastify";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { open } = useWeb3Modal();
  const account = useAccount();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const dispHeroButton = () => {
    switch (account.status) {
      case "connecting":
        return (
          <svg className="h-6 w-6 animate-spin m-auto" viewBox="0 0 100 100">
            <circle
              fill="none"
              stroke-width="10"
              className="stroke-current opacity-40"
              cx="50"
              cy="50"
              r="40"
            />
            <circle
              fill="none"
              stroke-width="10"
              className="stroke-current"
              stroke-dasharray="250"
              stroke-dashoffset="210"
              cx="50"
              cy="50"
              r="40"
            />
          </svg>
        );
      case "disconnected":
        return "Wallet Connect";
      case "connected":
        return (
          account.address.substring(0, 5) +
          "..." +
          account.address.substring(
            account.address.length - 5,
            account.address.length
          )
        );
    }
  };
  return (
    <nav className="bg-[#0d0b30] sticky top-0 z-20 md:px-28 sm:p-4 w-full">
      <div className="flex flex-row justify-between py-4">
        <div className="flex">
          <a
            href="/"
            className="text-white text-lg md:text-2xl font-bold"
          >
            Wolf of Linea
          </a>
        </div>
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
        <div className={`items-center justify-between hidden w-full md:flex md:w-auto md:order-1`}>
          <ul className="flex flex-col md:flex-row md:space-y-0 md:space-x-6 text-md md:text-lg  gap-5 text-white">
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
            <li>
              <button onClick={()=>open()} className="text-xl md:text-2xl flex justify-between font-bold">            
                {dispHeroButton()}
                {account.status === "connecting" ? (
                  <p className="m-auto">Connecting</p>
                ) : (
                  ""
                )}
              </button>
            </li>
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
            <li>
              <button onClick={()=>open()} className="text-xl md:text-2xl font-bold">            
                {dispHeroButton()}
                {account.status === "connecting" ? (
                  <p className="m-auto">Connecting</p>
                ) : (
                  ""
                )}
              </button>
            </li>
        </ul>
      </div>
    </nav>
  )
}
export {
  Header
};
