import React from "react";
import Container from "../../../container/Container";

const About = () => {
  return (
    <section className='relative'>
      <Container>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 py-20'>
          <div>
            <h1 className='text-white text-5xl font-bold text-left leading-[50px]'>
              <span className='bg-gradient-to-r from-[#A869FF] via-[#FF77BA] to-[#FFBB8C] bg-clip-text text-transparent text-5xl font-bold'>
                Who
              </span>
              we are
            </h1>

            <p className='text-[#B6B6B6] mt-5 text-wrap'>
              Cryptocurrency is a digital currency secured by cryptography,
              operating on decentralized blockchain networks. It enables secure,
              peer-to-peer transactions without intermediaries like banks.
            </p>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16'>
              <div className='max-w-60 mx-auto border border-[#313136] rounded-2xl px-5 pb-10'>
                <div className='relative w-36 mx-auto h-24 flex flex-col'>
                  <img
                    className='w-36 h-16'
                    src='/assets/icons/down.png'
                    alt='who'
                  />
                  <img
                    className='absolute top-4 left-1/2 -translate-x-1/2 z-10 size-14'
                    src='/assets/icons/sqr1.png'
                    alt='who'
                  />
                  <img
                    className='w-36 h-16'
                    src='/assets/icons/up.png'
                    alt='who'
                  />
                </div>
                <h2 className='text-white text-lg font-medium text-center mt-5'>
                  Secure Transaction
                </h2>
                <p className='text-[#B6B6B6] text-sm text-center mt-3'>
                  Printing and typesetting. Lorem has been the standard.
                </p>
              </div>
              <div className='max-w-60 mx-auto border border-[#313136] rounded-2xl px-5 pb-10'>
                <div className='relative w-36 mx-auto h-24 flex flex-col'>
                  <img
                    className='w-36 h-16'
                    src='/assets/icons/down.png'
                    alt='who'
                  />
                  <img
                    className='absolute top-4 left-1/2 -translate-x-1/2 z-10 size-14'
                    src='/assets/icons/sqr2.png'
                    alt='who'
                  />
                  <img
                    className='w-36 h-16'
                    src='/assets/icons/up.png'
                    alt='who'
                  />
                </div>
                <h2 className='text-white text-lg font-medium text-center mt-5'>
                  Simple way Transfer
                </h2>
                <p className='text-[#B6B6B6] text-sm text-center mt-3'>
                  Printing and typesetting. Lorem has been the standard.
                </p>
              </div>
              <div className='max-w-60 mx-auto border border-[#313136] rounded-2xl px-5 pb-10'>
                <div className='relative w-36 mx-auto h-24 flex flex-col'>
                  <img
                    className='w-36 h-16'
                    src='/assets/icons/down.png'
                    alt='who'
                  />
                  <img
                    className='absolute top-4 left-1/2 -translate-x-1/2 z-10 size-14'
                    src='/assets/icons/sqr3.png'
                    alt='who'
                  />
                  <img
                    className='w-36 h-16'
                    src='/assets/icons/up.png'
                    alt='who'
                  />
                </div>
                <h2 className='text-white text-lg font-medium text-center mt-5'>
                  Save Trading
                </h2>
                <p className='text-[#B6B6B6] text-sm text-center mt-3'>
                  Printing and typesetting. Lorem has been the standard.
                </p>
              </div>
              <div className='max-w-60 mx-auto border border-[#313136] rounded-2xl px-5 pb-10'>
                <div className='relative w-36 mx-auto h-24 flex flex-col'>
                  <img
                    className='w-36 h-16'
                    src='/assets/icons/down.png'
                    alt='who'
                  />
                  <img
                    className='absolute top-4 left-1/2 -translate-x-1/2 z-10 size-14'
                    src='/assets/icons/sqr4.png'
                    alt='who'
                  />
                  <img
                    className='w-36 h-16'
                    src='/assets/icons/up.png'
                    alt='who'
                  />
                </div>
                <h2 className='text-white text-lg font-medium text-center mt-5'>
                  Trusted platform
                </h2>
                <p className='text-[#B6B6B6] text-sm text-center mt-3'>
                  Printing and typesetting. Lorem has been the standard.
                </p>
              </div>
            </div>
          </div>

          <div>
            <img src='/assets/images/who-we-are.png' alt='who-we-are' />
          </div>
        </div>
      </Container>
      {/* green blue  */}
      <img
        className='absolute top-0 left-0'
        src='/assets/images/greer-blur2.png'
        alt=''
      />

      <img
        className='absolute w-12 h-12 top-1/2 right-28'
        src='/assets/images/who-we-are-star.png'
        alt=''
      />
    </section>
  );
};

export default About;
