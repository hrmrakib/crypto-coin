import React from "react";
import Container from "../../../container/Container";

const Feature = () => {
  return (
    <section class='mt-10 lg:mt-0 relative'>
      <Container>
        <div class='py-20'>
          <h1 class='text-white text-4xl font-bold text-center leading-[50px]'>
            Crypto <br />
            Wallet System
            <span class='bg-gradient-to-r from-[#A869FF] via-[#FF77BA] to-[#FFBB8C] bg-clip-text text-transparent text-4xl font-bold'>
              Features
            </span>
          </h1>

          <p class='text-[#B6B6B6] text-center max-w-[620px] mx-auto mt-5'>
            A crypto wallet system offers secure storage, transaction
            management, private key protection, multi-currency support, and
            seamless integration with blockchain networks.
          </p>

          <div class='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto gap-8 mt-10'>
            <div class='max-w-[308px] mx-auto bg-[#18191E] border border-[#313136] rounded-2xl p-5'>
              <img src='/assets/icons/user-panel.png' alt='user-panel' />
              <h2 class='text-white text-2xl font-bold mt-5'>User Panel</h2>
              <p class='text-[#B6B6B6] leading-[20px] mt-3'>
                Lorem Ipsum is simply dummy text of printing and industry..
              </p>
            </div>
            <div class='max-w-[308px] mx-auto bg-[#18191E] border border-[#313136] rounded-2xl p-5'>
              <img src='/assets/icons/add-money.png' alt='add-money' />
              <h2 class='text-white text-2xl font-bold mt-5'>Add Money</h2>
              <p class='text-[#B6B6B6] leading-[20px] mt-3'>
                Lorem Ipsum is simply dummy text of printing and industry..
              </p>
            </div>
            <div class='max-w-[308px] mx-auto bg-[#18191E] border border-[#313136] rounded-2xl p-5'>
              <img src='/assets/icons/send-money.png' alt='send-money' />
              <h2 class='text-white text-2xl font-bold mt-5'>Send Money</h2>
              <p class='text-[#B6B6B6] leading-[20px] mt-3'>
                Lorem Ipsum is simply dummy text of printing and industry..
              </p>
            </div>
            <div class='max-w-[308px] mx-auto bg-[#18191E] border border-[#313136] rounded-2xl p-5'>
              <img src='/assets/icons/exchange.png' alt='exchange' />
              <h2 class='text-white text-2xl font-bold mt-5'>Exchange</h2>
              <p class='text-[#B6B6B6] leading-[20px] mt-3'>
                Lorem Ipsum is simply dummy text of printing and industry..
              </p>
            </div>
            <div class='max-w-[308px] mx-auto bg-[#18191E] border border-[#313136] rounded-2xl p-5'>
              <img src='/assets/icons/req-money.png' alt='request-money' />
              <h2 class='text-white text-2xl font-bold mt-5'>Request Money</h2>
              <p class='text-[#B6B6B6] leading-[20px] mt-3'>
                Lorem Ipsum is simply dummy text of printing and industry..
              </p>
            </div>
            <div class='max-w-[308px] mx-auto bg-[#18191E] border border-[#313136] rounded-2xl p-5'>
              <img src='/assets/icons/user-to-user.png' alt='user-to-user' />
              <h2 class='text-white text-2xl font-bold mt-5'>User to User</h2>
              <p class='text-[#B6B6B6] leading-[20px] mt-3'>
                Lorem Ipsum is simply dummy text of printing and industry..
              </p>
            </div>
            <div class='max-w-[308px] mx-auto bg-[#18191E] border border-[#313136] rounded-2xl p-5'>
              <img src='/assets/icons/withdraw.png' alt='withdraw' />
              <h2 class='text-white text-2xl font-bold mt-5'>Withdraw</h2>
              <p class='text-[#B6B6B6] leading-[20px] mt-3'>
                Lorem Ipsum is simply dummy text of printing and industry..
              </p>
            </div>
            <div class='max-w-[308px] mx-auto bg-[#18191E] border border-[#313136] rounded-2xl p-5'>
              <img src='/assets/icons/referal.png' alt='referal' />
              <h2 class='text-white text-2xl font-bold mt-5'>Referal</h2>
              <p class='text-[#B6B6B6] leading-[20px] mt-3'>
                Lorem Ipsum is simply dummy text of printing and industry..
              </p>
            </div>
          </div>
        </div>
      </Container>

      {/*  bitcoin icon  */}
      <div class='absolute top-[30%] left-0'>
        <img
          class='opacity-70 size-32'
          src='/assets/images/bitcoin-2.png'
          alt='bitcoin-2'
        />
      </div>
    </section>
  );
};

export default Feature;
