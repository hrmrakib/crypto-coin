import React from "react";
import Container from "../../../container/Container";

const FAQ = () => {
  return (
    <section class='relative mt-28'>
      <Container>
        <h1 class='text-white text-6xl font-bold text-center leading-[50px]'>
          Frequently Asked
          <span class='bg-gradient-to-r from-[#A869FF] via-[#FF77BA] to-[#FFBB8C] bg-clip-text text-transparent text-6xl font-bold'>
            Questions
          </span>
        </h1>

        <p class='max-w-[690px] mx-auto text-center text-[#B6B6B6] mt-5'>
          Frequently asked questions cover topics like wallet setup, security
          features, transaction processes, private key management, and
          multi-currency compatibility within the crypto wallet system.
        </p>

        <div class='mt-14 grid grid-cols-1 md:grid-cols-2 gap-12'>
          <div>
            <img src='/assets/images/faq.svg' alt='' />
          </div>

          <div class='flex flex-col gap-5'>
            {/* <!-- Question 1 --> */}
            <div class='bg-[#23303e] rounded-lg'>
              <button
                class='w-full flex justify-between text-left p-4 font-medium text-lg text-gray-100 focus:outline-none'
                onclick='toggleAnswer(0)'
              >
                How promote the product?
                <img src='/assets/icons/toggle-down.png' alt='' />
              </button>
              <div class='p-4 text-[#BABABA] leading-[33px]' id='answer-0'>
                Printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an
                unknown printer took. Printing.
              </div>
            </div>

            {/* <!-- Question 2 --> */}
            <div class='bg-[#23303e] rounded-lg'>
              <button
                class='w-full flex justify-between text-left p-4 font-medium text-lg text-gray-100 focus:outline-none'
                onclick='toggleAnswer(1)'
              >
                What is Cryptocurrency
                <img src='/assets/icons/toggle-down.png' alt='' />
              </button>
              <div
                class='p-4 text-[#BABABA] leading-[33px] hidden'
                id='answer-1'
              >
                We offer a 30-day return policy. Please make sure the product is
                in its original condition.
              </div>
            </div>

            {/* <!-- Question 3 --> */}
            <div class='bg-[#23303e] rounded-lg'>
              <button
                class='w-full flex justify-between text-left p-4 font-medium text-lg text-gray-100 focus:outline-none'
                onclick='toggleAnswer(2)'
              >
                How can I track my order?
                <img src='/assets/icons/toggle-down.png' alt='' />
              </button>
              <div
                class='p-4 text-[#BABABA] leading-[33px] hidden'
                id='answer-2'
              >
                We offer a 30-day return policy. Please make sure the product is
                in its original condition.
              </div>
            </div>
            {/* <!-- Question 4 --> */}
            <div class='bg-[#23303e] rounded-lg'>
              <button
                class='w-full flex justify-between text-left p-4 font-medium text-lg text-gray-100 focus:outline-none'
                onclick='toggleAnswer(3)'
              >
                I received the wrong item, what do I do?
                <img src='/assets/icons/toggle-down.png' alt='' />
              </button>
              <div
                class='p-4 text-[#BABABA] leading-[33px] hidden'
                id='answer-3'
              >
                We offer a 30-day return policy. Please make sure the product is
                in its original condition.
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* <!-- effect --> */}
      <img
        class='absolute left-0 -bottom-[600px]'
        src='/assets/images/faq-left-blur.png'
        alt=''
      />
      {/* <!-- <img class="absolute right-0 bottom-2 rotate-180" src="/assets/images/faq-left-blur2.png" alt=""/> --> */}
      <img
        class='absolute w-44 h-48 right-5 -bottom-44'
        src='/assets/images/faq-coin.png'
        alt=''
      />
    </section>
  );
};

export default FAQ;
