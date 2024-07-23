import React from "react";

const Header = () => {
  return (
    <div className="bg-[#0d0b30] flex items-center justify-between px-44 py-6 top-0 sticky">
      <a
        href="/"
        className="text-white text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFF61C] to-[#EA0070] font-helvetica"
      >
        WOLFOFLINEA
      </a>
      <ul className="flex space-x-6 text-lg text-white">
        {["HOME", "HOW TO BUY", "ABOUT WOL", "FAQ", "Blog"].map((item, index) => (
          <li key={index}>
            <a href={`#${item.toLowerCase()}`} className="hover:underline">
              {item}
            </a>
          </li>
        ))}
      </ul>
      <a
        href="/"
        className="text-white text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFF61C] to-[#EA0070] font-helvetica"
      >
        CONNECT
      </a>
    </div>
  );
};

export default Header;
