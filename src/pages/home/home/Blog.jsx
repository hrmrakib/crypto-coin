import React from "react";

const Blog = () => {
  return (
    <section class='relative mt-24'>
      <div class='w-[94%] xl:w-[1200px] mx-auto'>
        <h1 class='text-white text-6xl font-bold text-center leading-[50px]'>
          Our
          <span class='bg-gradient-to-r from-[#A869FF] via-[#FF77BA] to-[#FFBB8C] bg-clip-text text-transparent text-6xl font-bold'>
            Blog
          </span>
        </h1>

        <p class='text-center text-[#B6B6B6] mt-5'>
          It is long established fact that a reader will be Distracted
        </p>

        <div class='grid grid-cols-1 md:grid-cols-3 gap-8 mt-16'>
          <div class='bg-[#12141B] rounded-2xl'>
            <img src='/assets/images/blog1.png' alt='blog-img' />

            <div class='px-5 pb-12'>
              <p class='w-max bg-[#212229] px-1.5 py-1.5 mt-5 text-[#B6B6B6] text-sm font-medium rounded'>
                CRYPTO BASIC
              </p>
              <h2 class='text-lg font-bold text-white leading-[24px] mt-3 pr-5'>
                The fact about bitcoin must you know
              </h2>
              <p class='text-[#B6B6B6] leading-[24px] mt-4'>
                From direct deposit to earning yield, key ways crypto can help
                you take control..
              </p>
            </div>
          </div>
          <div class='bg-[#12141B] rounded-2xl'>
            <img src='/assets/images/blog2.png' alt='blog-img' />

            <div class='px-5 pb-12'>
              <p class='w-max bg-[#212229] px-1.5 py-1.5 mt-5 text-[#B6B6B6] text-sm font-medium rounded'>
                CRYPTO BASIC
              </p>
              <h2 class='text-lg font-bold text-white leading-[24px] mt-3 pr-5'>
                Can crypto really replace your bank account?
              </h2>
              <p class='text-[#B6B6B6] leading-[24px] mt-4'>
                From direct deposit to earning yield, key ways crypto can help
                you take control..
              </p>
            </div>
          </div>
          <div class='bg-[#12141B] rounded-2xl'>
            <img src='/assets/images/blog3.png' alt='blog-img' />

            <div class='px-5 pb-12'>
              <p class='w-max bg-[#212229] px-1.5 py-1.5 mt-5 text-[#B6B6B6] text-sm font-medium rounded'>
                CRYPTO BASIC
              </p>
              <h2 class='text-lg font-bold text-white leading-[24px] mt-3 pr-5'>
                Can crypto really replace your bank account?
              </h2>
              <p class='text-[#B6B6B6] leading-[24px] mt-4'>
                From direct deposit to earning yield, key ways crypto can help
                you take control..
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- effect --> */}
      <img
        class='absolute -top-28 left-5'
        src='/assets/images/blog-left.png'
        alt='effect'
      />
      <img
        class='absolute top-0 right-0'
        src='/assets/images/blog-right.png'
        alt='effect'
      />
    </section>
  );
};

export default Blog;
