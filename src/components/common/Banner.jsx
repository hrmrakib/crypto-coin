import React from "react";

const Banner = ({ children }) => {
  return (
    <div className='w-full h-48 flex items-center justify-center bg-[url("/assets/images/banner.png")] bg-no-repeat bg-cover bg-center'>
      <h2 className='text-white text-xl lg:text-4xl font-bold'>{children}</h2>
    </div>
  );
};

export default Banner;
