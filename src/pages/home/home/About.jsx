import React from "react";
import Container from "../../../container/Container";

const About = () => {
  return (
    <section class='relative'>
      <Container>
        <div class='grid grid-cols-1 md:grid-cols-2 gap-8 py-20'>
          <div>
            <h1 class='text-white text-5xl font-bold text-left leading-[50px]'>
              <span class='bg-gradient-to-r from-[#A869FF] via-[#FF77BA] to-[#FFBB8C] bg-clip-text text-transparent text-5xl font-bold'>
                Who
              </span>
              we are
            </h1>

            <p class='text-[#B6B6B6] mt-5 text-wrap'>
              Cryptocurrency is a digital currency secured by cryptography,
              operating on decentralized blockchain networks. It enables secure,
              peer-to-peer transactions without intermediaries like banks.
            </p>

            <div class='grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16'>
              <div class='max-w-60 mx-auto border border-[#313136] rounded-2xl px-5 pb-10'>
                <div class='relative w-36 mx-auto h-24 flex flex-col'>
                  <img
                    class='w-36 h-16'
                    src='/assets/icons/down.png'
                    alt='who'
                  />
                  <img
                    class='absolute top-4 left-1/2 -translate-x-1/2 z-10 size-14'
                    src='/assets/icons/sqr1.png'
                    alt='who'
                  />
                  <img class='w-36 h-16' src='/assets/icons/up.png' alt='who' />
                </div>
                <h2 class='text-white text-lg font-medium text-center mt-5'>
                  Secure Transaction
                </h2>
                <p class='text-[#B6B6B6] text-sm text-center mt-3'>
                  Printing and typesetting. Lorem has been the standard.
                </p>
              </div>
              <div class='max-w-60 mx-auto border border-[#313136] rounded-2xl px-5 pb-10'>
                <div class='relative w-36 mx-auto h-24 flex flex-col'>
                  <img
                    class='w-36 h-16'
                    src='/assets/icons/down.png'
                    alt='who'
                  />
                  <img
                    class='absolute top-4 left-1/2 -translate-x-1/2 z-10 size-14'
                    src='/assets/icons/sqr2.png'
                    alt='who'
                  />
                  <img class='w-36 h-16' src='/assets/icons/up.png' alt='who' />
                </div>
                <h2 class='text-white text-lg font-medium text-center mt-5'>
                  Simple way Transfer
                </h2>
                <p class='text-[#B6B6B6] text-sm text-center mt-3'>
                  Printing and typesetting. Lorem has been the standard.
                </p>
              </div>
              <div class='max-w-60 mx-auto border border-[#313136] rounded-2xl px-5 pb-10'>
                <div class='relative w-36 mx-auto h-24 flex flex-col'>
                  <img
                    class='w-36 h-16'
                    src='/assets/icons/down.png'
                    alt='who'
                  />
                  <img
                    class='absolute top-4 left-1/2 -translate-x-1/2 z-10 size-14'
                    src='/assets/icons/sqr3.png'
                    alt='who'
                  />
                  <img class='w-36 h-16' src='/assets/icons/up.png' alt='who' />
                </div>
                <h2 class='text-white text-lg font-medium text-center mt-5'>
                  Save Trading
                </h2>
                <p class='text-[#B6B6B6] text-sm text-center mt-3'>
                  Printing and typesetting. Lorem has been the standard.
                </p>
              </div>
              <div class='max-w-60 mx-auto border border-[#313136] rounded-2xl px-5 pb-10'>
                <div class='relative w-36 mx-auto h-24 flex flex-col'>
                  <img
                    class='w-36 h-16'
                    src='/assets/icons/down.png'
                    alt='who'
                  />
                  <img
                    class='absolute top-4 left-1/2 -translate-x-1/2 z-10 size-14'
                    src='/assets/icons/sqr4.png'
                    alt='who'
                  />
                  <img class='w-36 h-16' src='/assets/icons/up.png' alt='who' />
                </div>
                <h2 class='text-white text-lg font-medium text-center mt-5'>
                  Trusted platform
                </h2>
                <p class='text-[#B6B6B6] text-sm text-center mt-3'>
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
        class='absolute top-0 left-0'
        src='/assets/images/greer-blur2.png'
        alt=''
      />

      <img
        class='absolute w-12 h-12 top-1/2 right-28'
        src='/assets/images/who-we-are-star.png'
        alt=''
      />
    </section>
  );
};

export default About;
