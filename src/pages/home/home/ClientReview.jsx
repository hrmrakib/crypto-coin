import React from "react";
import Container from "../../../container/Container";

const ClientReview = () => {
  return (
    <section className='relative mt-24'>
      <Container>
        <h1 className='text-white text-6xl font-bold text-center leading-[50px]'>
          <span className='bg-gradient-to-r from-[#A869FF] via-[#FF77BA] to-[#FFBB8C] bg-clip-text text-transparent text-6xl font-bold'>
            Client
          </span>
          Say
        </h1>

        <p className='max-w-[500px] mx-auto text-center text-[#B6B6B6] mt-5'>
          Clients praise the crypto wallet system for its ease of use, robust
          security, seamless transactions, and reliable multi-currency support.
        </p>

        <div className='mt-24 grid grid-cols-1 md:grid-cols-4 gap-8'>
          <div className='relative max-w-[308px] mx-auto border border-purple-950 rounded-2xl px-5 pb-5'>
            <img
              className='mx-auto w-[90px] h-[90px] -mt-12 rounded-full'
              src='/assets/images/jhon.png'
              alt='jhon'
            />

            <h2 className='mt-8 text-xl font-bold text-white text-center'>
              Jhon Smith
            </h2>
            <p className='mt-4 max-w-[250px] mx-auto text-sm leading-[20px] text-center text-[#B6B6B6]'>
              Designers need to have a strong understanding of the principles of
              design in order to create effective solutions. They must also be
              aware of the latest trends and technologies the curve.
            </p>
            <h3 className='text-center text-white text-sm font-medium mt-4'>
              CEO of Inkyy.com
            </h3>
            <div className='flex items-center justify-center gap-1.5 mt-4'>
              <img src='/assets/icons/review-star.png' alt='' />
              <img src='/assets/icons/review-star.png' alt='' />
              <img src='/assets/icons/review-star.png' alt='' />
              <img src='/assets/icons/review-star.png' alt='' />
              <img src='/assets/icons/review-star.png' alt='' />
            </div>
          </div>
          <div className='relative max-w-[308px] mx-auto border border-purple-950 rounded-2xl px-5 pb-5'>
            <img
              className='mx-auto w-[90px] h-[90px] -mt-12 rounded-full'
              src='/assets/images/smith.png'
              alt='jhon'
            />

            <h2 className='mt-8 text-xl font-bold text-white text-center'>
              Smith
            </h2>
            <p className='mt-4 max-w-[250px] mx-auto text-sm leading-[20px] text-center text-[#B6B6B6]'>
              Designers need to have a strong understanding of the principles of
              design in order to create effective solutions. They must also be
              aware of the latest trends and technologies the curve.
            </p>
            <h3 className='text-center text-white text-sm font-medium mt-4'>
              CEO of Inkyy.com
            </h3>
            <div className='flex items-center justify-center gap-1.5 mt-4'>
              <img src='/assets/icons/review-star.png' alt='' />
              <img src='/assets/icons/review-star.png' alt='' />
              <img src='/assets/icons/review-star.png' alt='' />
              <img src='/assets/icons/review-star.png' alt='' />
              <img src='/assets/icons/review-star.png' alt='' />
            </div>
          </div>
          <div className='relative max-w-[308px] mx-auto border border-purple-950 rounded-2xl px-5 pb-5'>
            <img
              className='mx-auto w-[90px] h-[90px] -mt-12 rounded-full'
              src='/assets/images/smithiya.png'
              alt='jhon'
            />

            <h2 className='mt-8 text-xl font-bold text-white text-center'>
              Smithiya
            </h2>
            <p className='mt-4 max-w-[250px] mx-auto text-sm leading-[20px] text-center text-[#B6B6B6]'>
              Designers need to have a strong understanding of the principles of
              design in order to create effective solutions. They must also be
              aware of the latest trends and technologies the curve.
            </p>
            <h3 className='text-center text-white text-sm font-medium mt-4'>
              CEO of Inkyy.com
            </h3>
            <div className='flex items-center justify-center gap-1.5 mt-4'>
              <img src='/assets/icons/review-star.png' alt='' />
              <img src='/assets/icons/review-star.png' alt='' />
              <img src='/assets/icons/review-star.png' alt='' />
              <img src='/assets/icons/review-star.png' alt='' />
              <img src='/assets/icons/review-star.png' alt='' />
            </div>
          </div>
          <div className='relative max-w-[308px] mx-auto border border-purple-950 rounded-2xl px-5 pb-5'>
            <img
              className='mx-auto w-[90px] h-[90px] -mt-12 rounded-full'
              src='/assets/images/jhon2.png'
              alt='jhon'
            />

            <h2 className='mt-8 text-xl font-bold text-white text-center'>
              Jhon
            </h2>
            <p className='mt-4 max-w-[250px] mx-auto text-sm leading-[20px] text-center text-[#B6B6B6]'>
              Designers need to have a strong understanding of the principles of
              design in order to create effective solutions. They must also be
              aware of the latest trends and technologies the curve.
            </p>
            <h3 className='text-center text-white text-sm font-medium mt-4'>
              CEO of Inkyy.com
            </h3>
            <div className='flex items-center justify-center gap-1.5 mt-4'>
              <img src='/assets/icons/review-star.png' alt='' />
              <img src='/assets/icons/review-star.png' alt='' />
              <img src='/assets/icons/review-star.png' alt='' />
              <img src='/assets/icons/review-star.png' alt='' />
              <img src='/assets/icons/review-star.png' alt='' />
            </div>
          </div>
        </div>
      </Container>

      {/* effect */}
      <img
        className='absolute top-0 left-0'
        src='/assets/images/client-left.png'
        alt='effect'
      />
      <img
        className='absolute top-0 right-0'
        src='/assets/images/client-right.png'
        alt='effect'
      />
    </section>
  );
};

export default ClientReview;
