import React from 'react';


const Footer = () => {
  return (
    <div className="flex flex-col">
      <div
        className="flex w-full h-screen bg-cover bg-center bg-blue-500"
        style={{ backgroundImage: 'url("/image/top_background.jpg")' }}
      >
      </div>
      <div
        className="flex w-full h-screen bg-cover bg-center bg-blue-500"
        style={{ backgroundImage: 'url("/image/wolf.jpg")' }}
      >
      </div>  
      <div
        className="flex w-full h-screen bg-cover bg-center bg-blue-500"
        style={{ backgroundImage: 'url("/image/bottom_background.png")' }}
      >
      </div>  
      <div
        className="flex w-full h-screen bg-cover bg-center bg-blue-500"
        style={{ backgroundImage: 'url("/image/bottom_background.png")' }}
      >
      </div>  
    </div>
  );
};

export default Footer;
