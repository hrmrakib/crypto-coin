import React from "react";

const Footer = () => {
  return (
    <footer class='hidden relative mt-24'>
      <div class='w-[1200px] mx-auto pb-9'>
        <div class='grid grid-cols-1 lg:grid-cols-6 items-start gap-4'>
          <div class=''>
            <a href='#'>
              <img src='./assets/icons/logo.png' alt='logo' />
            </a>
            <div class='flex items-center gap-2 mt-5'>
              <a href='#'>
                <img src='./assets/icons/instragram.png' alt='instragram' />
              </a>
              <a href='#'>
                <img src='./assets/icons/facebook.png' alt='facebook' />
              </a>
              <a href='#'>
                <img src='./assets/icons/twitter.png' alt='twitter' />
              </a>
              <a href='#'>
                <img src='./assets/icons/youtybe.png' alt='youtybe' />
              </a>
            </div>
          </div>

          <div class='flex flex-col items-center justify-center'>
            <h2 class='text-base font-bold text-white'>Buy Crypto</h2>

            <ul class='flex flex-col gap-2 mt-2.5 *:text-[#B6B6B6]'>
              <li>
                <a href='#'>Exchanges</a>
              </li>
              <li>
                <a href='#'>Watchlist</a>
              </li>
              <li>
                <a href='#'>Portfolio</a>
              </li>
              <li>
                <a href='#'>NFT</a>
              </li>
            </ul>
          </div>

          <div class='flex flex-col items-center justify-center border-x border-x-[#1e222a] -mt-10 py-8'>
            <h2 class='text-base font-bold text-white'>About Us</h2>

            <ul class='flex flex-col gap-2 mt-2.5 *:text-[#B6B6B6]'>
              <li>
                <a href='#'>About</a>
              </li>
              <li>
                <a href='#'>Carrers</a>
              </li>
              <li>
                <a href='#'>Blog</a>
              </li>
              <li>
                <a href='#'>Security</a>
              </li>
              <li>
                <a href='#'>Developer</a>
              </li>
            </ul>
          </div>

          <div class='flex flex-col items-center justify-center border-r border-x-[#1e222a] -mt-12 py-[54px]'>
            <h2 class='w-full text-base font-bold text-white pl-7'>
              Help Center
            </h2>

            <ul class='flex flex-col gap-2 mt-2.5 *:text-[#B6B6B6]'>
              <li>
                <a href='#'>Contact US</a>
              </li>
              <li>
                <a href='#'>System Status</a>
              </li>
              <li>
                <a href='#'>Area of Avalibility</a>
              </li>
              <li>
                <a href='#'>Privacy Policy</a>
              </li>
            </ul>
          </div>

          <div class='lg:col-span-2'>
            <h2 class='text-base font-bold text-white'>Newsletter</h2>
            <p class='max-w-[250px] text-[#B6B6B6] leading-5 mt-2'>
              Never miss anything crypto when you’re on go
            </p>

            <div class='max-w-[355px] mt-4 flex items-center gap-2 border border-purple-950 rounded-xl p-2'>
              <input
                class='bg-transparent text-white w-[70%] outline-none border-none'
                type='text'
                placeholder='Your Email'
              />
              <button class='bg-gradient-to-l from-[#FFBB8C] via-[#FF77BA] to-[#A869FF] flex items-center gap-2 text-white px-2.5 py-2 rounded-md'>
                <img class='w-4 h-4' src='./assets/icons/bell.svg' alt='bell' />
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* copyright  */}
        <div class='w-[70%] h-1 mx-auto border-b border-b-[#1e222a]'></div>
        <p class='pt-10 pb-6 text-sm text-[#B6B6B6] text-center'>
          Copyright © 2024. Moneychain . All rights reserved.
        </p>
      </div>

      <img
        class='absolute w-[227px] h-[232px] -left-12 bottom-0'
        src='./assets/images/bitcoin-2.png'
        alt=''
      />
      <img
        class='absolute left-1/2 transform -translate-x-1/2 bottom-0'
        src='./assets/images/footer-blur.png'
        alt=''
      />
      <img
        class='absolute right-0 -bottom-0'
        src='./assets/images/footer-boll.png'
        alt=''
      />
    </footer>
  );
};

export default Footer;
