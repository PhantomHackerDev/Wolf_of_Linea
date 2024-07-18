"use client";

import React, { useState, useEffect, useRef } from 'react';

type CarouselProps = {
  images: string[];
};

const AutoCarousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const previewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(intervalId);
  }, [images.length]);

  useEffect(() => {
    const previewElement = previewRef.current;
    if (previewElement) {
      const thumbnailWidth = 72; // 64px width + 8px margin
      const previewWidth = previewElement.clientWidth;
      const scrollPosition = currentIndex * thumbnailWidth - previewWidth / 2 + thumbnailWidth / 2;
      previewElement.scrollTo({
        left: scrollPosition,
        behavior: 'smooth',
      });
    }
  }, [currentIndex]);

  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <img src={image} alt={`Slide ${index}`} className="w-full" />
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center p-2 space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-gray-800' : 'bg-gray-400'}`}
          ></div>
        ))}
      </div>
      <div
        ref={previewRef}
        className="flex justify-center mt-4 space-x-2 overflow-x-auto"
        style={{ scrollbarWidth: 'none' }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index}`}
            className={`w-16 h-16 cursor-pointer ${currentIndex === index ? 'border-2 border-blue-500' : 'border-2 border-transparent'}`}
            onClick={() => handleThumbnailClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default AutoCarousel;

