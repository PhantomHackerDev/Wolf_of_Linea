"use client";

import React,  { useState, useEffect } from "react";

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    // scrollToBottom(); // Scroll to the bottom when the component mounts
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`fixed bottom-4 animate-bounce right-4 z-50 bg-blue-500 text-white p-2 rounded-full shadow-lg transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <svg
        className="opacity-100"
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="-2 -2 24 24"
      >
        <g fill="currentColor">
          <path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4"></path>
          <path d="M11 8.414V14a1 1 0 0 1-2 0V8.414L6.464 10.95A1 1 0 1 1 5.05 9.536l4.243-4.243a.997.997 0 0 1 1.414 0l4.243 4.243a1 1 0 1 1-1.414 1.414z"></path>
        </g>
      </svg>
    </button>
  );
};

export default ScrollToTopButton;
