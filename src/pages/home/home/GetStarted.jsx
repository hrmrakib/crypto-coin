import React from "react";

const GetStarted = () => {
  return (
    <section className='mt-24'>
      <div className='w-[94%] xl:w-[1200px] mx-auto'>
        <div className='relative bg-[#14161D] lg:h-[200px] px-5 lg:px-16 flex flex-col lg:flex-row items-center justify-between rounded-lg'>
          <h1 className='max-w-md text-white text-3xl font-bold leading-[36px]'>
            Join the Evolution of
            <span className='bg-gradient-to-r from-[#A869FF] via-[#FF77BA] to-[#FFBB8C] bg-clip-text text-transparent text-3xl font-bold'>
              Cryptocurrency
            </span>
            with Money Exchange
          </h1>

          <button className='mt-4 bg-gradient-to-l from-[#FFBB8C] via-[#FF77BA] to-[#A869FF] flex items-center gap-2 text-white px-2.5 py-2 rounded-md'>
            Get Started
            <img
              className='w-4 h-4'
              src='./assets/icons/arrow-up-right.png'
              alt='arrow'
            />
          </button>

          <img
            className='absolute right-0 h-[200px]'
            src='./assets/images/bg-get-start.png'
            alt=''
          />
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
