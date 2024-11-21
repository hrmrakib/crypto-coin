import React from "react";

const Solution = () => {
  return (
    <section class='relative'>
      <div class='w-[94%] xl:w-[1200px] mx-auto'>
        <h1 class='text-white text-6xl font-bold text-center leading-[50px]'>
          <span class='bg-gradient-to-r from-[#A869FF] via-[#FF77BA] to-[#FFBB8C] bg-clip-text text-transparent text-6xl font-bold'>
            Solution
          </span>{" "}
          for
        </h1>

        <p class='max-w-[640px] mx-auto text-center text-[#B6B6B6] mt-5'>
          A crypto wallet system solution provides secure, user-friendly digital
          asset management, enabling safe transactions, private key protection,
          and multi-currency support.
        </p>

        <div class='mt-16 flex flex-col lg:flex-row justify-center gap-12'>
          <div class='border-l max-h-max border-[#313136]'>
            <div class='relative'>
              <div class='flex flex-col gap-5 px-14 py-8'>
                <img
                  class='size-12'
                  src='/assets/icons/freelancer.png'
                  alt='freelancer'
                />
                <h2 class='text-white text-2xl'>Freelancer</h2>
                <p class='max-w-[370px] text-[#B6B6B6]'>
                  Buy crypto using your credit or debit cards, bank transfers,
                  and over 70 other payment methods tailored to suit your
                  individual needs.Buy crypto using credit or debit cards,
                  transfers,an
                </p>
              </div>
              <img
                class='absolute top-5 -left-5'
                src='/assets/icons/solution1.png'
                alt='solution1'
              />
            </div>
            <div class='relative'>
              <div class='flex flex-col gap-5 px-14 py-8'>
                <img
                  class='size-12'
                  src='/assets/icons/online-professional.png'
                  alt='freelancer'
                />
                <h2 class='text-white text-2xl'>Freelancer</h2>
                <p class='max-w-[370px] text-[#B6B6B6]'>
                  Buy crypto using your credit or debit cards, bank transfers,
                  and over 70 other payment methods tailored to suit your
                  individual needs.Buy crypto using credit or debit cards,
                  transfers,an
                </p>
              </div>
              <img
                class='absolute top-5 -left-5'
                src='/assets/icons/solution2.png'
                alt='solution2'
              />
            </div>
          </div>
          <div class='mt-28 border-l border-[#313136]'>
            <div class='relative'>
              <div class='flex flex-col gap-5 px-14 py-8'>
                <img
                  class='size-12'
                  src='/assets/icons/internet-retailer.png'
                  alt='freelancer'
                />
                <h2 class='text-white text-2xl'>Interner Retailer</h2>
                <p class='max-w-[370px] text-[#B6B6B6]'>
                  Buy crypto using your credit or debit cards, bank transfers,
                  and over 70 other payment methods tailored to suit your
                  individual needs.Buy crypto using credit or debit cards,
                  transfers,an
                </p>
              </div>
              <img
                class='absolute top-5 -left-5'
                src='/assets/icons/solution3.png'
                alt='solution1'
              />
            </div>
            <div class='relative'>
              <div class='flex flex-col gap-5 px-14 py-8'>
                <img
                  class='size-12'
                  src='/assets/icons/affiliate-marketer.png'
                  alt='freelancer'
                />
                <h2 class='text-white text-2xl'>Affiliate Marketer</h2>
                <p class='max-w-[370px] text-[#B6B6B6]'>
                  Buy crypto using your credit or debit cards, bank transfers,
                  and over 70 other payment methods tailored to suit your
                  individual needs.Buy crypto using credit or debit cards,
                  transfers,an
                </p>
              </div>
              <img
                class='absolute top-5 -left-5'
                src='/assets/icons/solution4.png'
                alt='solution2'
              />
            </div>
          </div>
        </div>
      </div>

      {/* blur color effect */}
      <img
        class='absolute -top-96 right-0 z-10'
        src='/assets/images/solution-blur.png'
        alt=''
      />
      <img
        class='absolute top-20 right-20 z-20'
        src='/assets/images/solution-star.png'
        alt=''
      />
      <img
        class='absolute bottom-60 left-10 z-20'
        src='/assets/images/etherium-2.png'
        alt=''
      />
    </section>
  );
};

export default Solution;
