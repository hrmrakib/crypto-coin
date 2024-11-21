import React from "react";

const Solution = () => {
  return (
    <section className='relative'>
      <div className='w-[94%] xl:w-[1200px] mx-auto'>
        <h1 className='text-white text-6xl font-bold text-center leading-[50px]'>
          <span className='bg-gradient-to-r from-[#A869FF] via-[#FF77BA] to-[#FFBB8C] bg-clip-text text-transparent text-6xl font-bold'>
            Solution
          </span>{" "}
          for
        </h1>

        <p className='max-w-[640px] mx-auto text-center text-[#B6B6B6] mt-5'>
          A crypto wallet system solution provides secure, user-friendly digital
          asset management, enabling safe transactions, private key protection,
          and multi-currency support.
        </p>

        <div className='mt-16 flex flex-col lg:flex-row justify-center gap-12'>
          <div className='border-l max-h-max border-[#313136]'>
            <div className='relative'>
              <div className='flex flex-col gap-5 px-14 py-8'>
                <img
                  className='size-12'
                  src='/assets/icons/freelancer.png'
                  alt='freelancer'
                />
                <h2 className='text-white text-2xl'>Freelancer</h2>
                <p className='max-w-[370px] text-[#B6B6B6]'>
                  Buy crypto using your credit or debit cards, bank transfers,
                  and over 70 other payment methods tailored to suit your
                  individual needs.Buy crypto using credit or debit cards,
                  transfers,an
                </p>
              </div>
              <img
                className='absolute top-5 -left-5'
                src='/assets/icons/solution1.png'
                alt='solution1'
              />
            </div>
            <div className='relative'>
              <div className='flex flex-col gap-5 px-14 py-8'>
                <img
                  className='size-12'
                  src='/assets/icons/online-professional.png'
                  alt='freelancer'
                />
                <h2 className='text-white text-2xl'>Freelancer</h2>
                <p className='max-w-[370px] text-[#B6B6B6]'>
                  Buy crypto using your credit or debit cards, bank transfers,
                  and over 70 other payment methods tailored to suit your
                  individual needs.Buy crypto using credit or debit cards,
                  transfers,an
                </p>
              </div>
              <img
                className='absolute top-5 -left-5'
                src='/assets/icons/solution2.png'
                alt='solution2'
              />
            </div>
          </div>
          <div className='mt-28 border-l border-[#313136]'>
            <div className='relative'>
              <div className='flex flex-col gap-5 px-14 py-8'>
                <img
                  className='size-12'
                  src='/assets/icons/internet-retailer.png'
                  alt='freelancer'
                />
                <h2 className='text-white text-2xl'>Interner Retailer</h2>
                <p className='max-w-[370px] text-[#B6B6B6]'>
                  Buy crypto using your credit or debit cards, bank transfers,
                  and over 70 other payment methods tailored to suit your
                  individual needs.Buy crypto using credit or debit cards,
                  transfers,an
                </p>
              </div>
              <img
                className='absolute top-5 -left-5'
                src='/assets/icons/solution3.png'
                alt='solution1'
              />
            </div>
            <div className='relative'>
              <div className='flex flex-col gap-5 px-14 py-8'>
                <img
                  className='size-12'
                  src='/assets/icons/affiliate-marketer.png'
                  alt='freelancer'
                />
                <h2 className='text-white text-2xl'>Affiliate Marketer</h2>
                <p className='max-w-[370px] text-[#B6B6B6]'>
                  Buy crypto using your credit or debit cards, bank transfers,
                  and over 70 other payment methods tailored to suit your
                  individual needs.Buy crypto using credit or debit cards,
                  transfers,an
                </p>
              </div>
              <img
                className='absolute top-5 -left-5'
                src='/assets/icons/solution4.png'
                alt='solution2'
              />
            </div>
          </div>
        </div>
      </div>

      {/* blur color effect */}
      <img
        className='absolute -top-96 right-0 z-10'
        src='/assets/images/solution-blur.png'
        alt=''
      />
      <img
        className='absolute top-20 right-20 z-20'
        src='/assets/images/solution-star.png'
        alt=''
      />
      <img
        className='absolute bottom-60 left-10 z-20'
        src='/assets/images/etherium-2.png'
        alt=''
      />
    </section>
  );
};

export default Solution;
