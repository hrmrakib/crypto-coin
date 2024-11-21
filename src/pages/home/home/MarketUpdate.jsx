import React from "react";
import Container from "../../../container/Container";

const MarketUpdate = () => {
  return (
    <section className='mt-24'>
      <Container>
        <h1 className='text-white text-6xl font-bold text-center leading-[50px]'>
          Market
          <span className='bg-gradient-to-r from-[#A869FF] via-[#FF77BA] to-[#FFBB8C] bg-clip-text text-transparent text-6xl font-bold'>
            {" "}
            Update
          </span>
        </h1>

        <p className='max-w-[690px] mx-auto text-center text-[#B6B6B6] mt-5'>
          Frequently asked questions cover topics like wallet setup, security
          features, transaction processes, private key management, and
          multi-currency compatibility within the crypto wallet system.
        </p>

        {/* table  */}

        <div className='relative mt-20 pb-2 overflow-x-auto overflow-y-auto'>
          <table className='w-[98%] text-sm text-left rtl:text-right text-gray-500 '>
            <thead className='sticky top-0 text-xs text-black uppercase bg-white *:text-[14px] py-8'>
              <tr className='border border-[#1f1f27] bg-[#13141b] h-[60px] *:text-center'>
                <th className='px-6 py-3 text-[#F3BA2F] text-sm font-bold'>
                  #
                </th>
                <th className='px-6 py-3 text-[#F3BA2F] text-sm font-bold'>
                  NAME
                </th>
                <th className='px-6 py-3 text-[#F3BA2F] text-sm font-bold'>
                  PRICE
                </th>
                <th className='px-6 py-3 text-[#F3BA2F] text-sm font-bold'>
                  24h %
                </th>
                <th className='px-6 py-3 text-[#F3BA2F] text-sm font-bold'>
                  7d %
                </th>
                <th className='px-6 py-3 text-[#F3BA2F] text-sm font-bold'>
                  MARKETCAP
                </th>
                <th className='px-6 py-3 text-[#F3BA2F] text-sm font-bold'>
                  VOLUME
                </th>
                <th className='px-6 py-3 text-[#F3BA2F] text-sm font-bold'>
                  CIRCULATING SUPPLY
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className='border border-[#1f1f27] bg-[#13141b]'>
                <td className='px-6 py-4 rounded-l-lg'>1</td>
                <td className='px-6 flex items-center h-[70px] gap-2 text-[#B6B6B6]'>
                  <img src='/assets/icons/table/bitcoin.png' alt='' />
                  <span>Bitcoin (BTC)</span>
                </td>
                <td className='px-6 py-4 text-[#B6B6B6] font-bold'>
                  $60,852.41
                </td>
                <td className='px-10 py-4 items-center gap-1 text-[#0BC355] font-bold'>
                  <img
                    className='inline'
                    src='/assets/icons/table/chevron.png'
                    alt=''
                  />
                  <span className='ml-1'>2.67</span>
                </td>
                <td className='px-10 py-4 text-[#0BC355] font-bold'>
                  <img
                    className='inline'
                    src='/assets/icons/table/chevron.png'
                    alt=''
                  />
                  <span className='ml-1'>2.67</span>
                </td>
                <td className='px-6 py-4 text-[#B6B6B6] font-bold'>
                  $1,201,206,380,883
                </td>
                <td className='px-6 py-4 text-[#B6B6B6] font-bold'>
                  $29.01,206,380,883
                  <br />
                  478,592 BTC
                </td>
                <td className='px-6 py-4 text-[#B6B6B6] font-bold'>
                  $29.01,206,380,883
                </td>
              </tr>
              <tr className='border border-[#1f1f27] bg-[#13141b]'>
                <td className='px-6 py-4 rounded-l-lg'>2</td>
                <td className='px-6 flex items-center h-[70px] gap-2 text-[#B6B6B6]'>
                  <img src='/assets/icons/table/binance.png' alt='' />
                  <span>Binance (BNB)</span>
                </td>
                <td className='px-6 py-4 text-[#B6B6B6] font-bold'>
                  $60,852.41
                </td>
                <td className='px-10 py-4 items-center gap-1 text-[#0BC355] font-bold'>
                  <img
                    className='inline'
                    src='/assets/icons/table/chevron.png'
                    alt=''
                  />
                  <span className='ml-1'>2.67</span>
                </td>
                <td className='px-10 py-4 text-[#0BC355] font-bold'>
                  <img
                    className='inline'
                    src='/assets/icons/table/chevron.png'
                    alt=''
                  />
                  <span className='ml-1'>2.67</span>
                </td>
                <td className='px-6 py-4 text-[#B6B6B6] font-bold'>
                  $1,201,206,380,883
                </td>
                <td className='px-6 py-4 text-[#B6B6B6] font-bold'>
                  $29.01,206,380,883
                  <br />
                  478,592 BTC
                </td>
                <td className='px-6 py-4 text-[#B6B6B6] font-bold'>
                  $29.01,206,380,883
                </td>
              </tr>
              <tr className='border border-[#1f1f27] bg-[#13141b]'>
                <td className='px-6 py-4 rounded-l-lg'>3</td>
                <td className='px-6 flex items-center h-[70px] gap-2 text-[#B6B6B6]'>
                  <img src='/assets/icons/table/Ethereum.png' alt='' />
                  <span>Ethereum (ETH)</span>
                </td>
                <td className='px-6 py-4 text-[#B6B6B6] font-bold'>
                  $60,852.41
                </td>
                <td className='px-10 py-4 items-center gap-1 text-[#0BC355] font-bold'>
                  <img
                    className='inline'
                    src='/assets/icons/table/chevron.png'
                    alt=''
                  />
                  <span className='ml-1'>2.67</span>
                </td>
                <td className='px-10 py-4 text-[#0BC355] font-bold'>
                  <img
                    className='inline'
                    src='/assets/icons/table/chevron.png'
                    alt=''
                  />
                  <span className='ml-1'>2.67</span>
                </td>
                <td className='px-6 py-4 text-[#B6B6B6] font-bold'>
                  $1,201,206,380,883
                </td>
                <td className='px-6 py-4 text-[#B6B6B6] font-bold'>
                  $29.01,206,380,883
                  <br />
                  478,592 BTC
                </td>
                <td className='px-6 py-4 text-[#B6B6B6] font-bold'>
                  $29.01,206,380,883
                </td>
              </tr>
              <tr className='border border-[#1f1f27] bg-[#13141b]'>
                <td className='px-6 py-4 rounded-l-lg'>4</td>
                <td className='px-6 flex items-center h-[70px] gap-2 text-[#B6B6B6]'>
                  <img src='/assets/icons/table/tether.png' alt='' />
                  <span>Tether (USDT)</span>
                </td>
                <td className='px-6 py-4 text-[#B6B6B6] font-bold'>
                  $60,852.41
                </td>
                <td className='px-10 py-4 items-center gap-1 text-[#0BC355] font-bold'>
                  <img
                    className='inline'
                    src='/assets/icons/table/chevron.png'
                    alt=''
                  />
                  <span className='ml-1'>2.67</span>
                </td>
                <td className='px-10 py-4 text-[#0BC355] font-bold'>
                  <img
                    className='inline'
                    src='/assets/icons/table/chevron.png'
                    alt=''
                  />
                  <span className='ml-1'>2.67</span>
                </td>
                <td className='px-6 py-4 text-[#B6B6B6] font-bold'>
                  $1,201,206,380,883
                </td>
                <td className='px-6 py-4 text-[#B6B6B6] font-bold'>
                  $29.01,206,380,883
                  <br />
                  478,592 BTC
                </td>
                <td className='px-6 py-4 text-[#B6B6B6] font-bold'>
                  $29.01,206,380,883
                </td>
              </tr>
              <tr className='border border-[#1f1f27] bg-[#13141b]'>
                <td className='px-6 py-4 rounded-l-lg'>5</td>
                <td className='px-6 flex items-center h-[70px] gap-2 text-[#B6B6B6]'>
                  <img src='/assets/icons/table/sol.png' alt='' />
                  <span>Coin (SOL)</span>
                </td>
                <td className='px-6 py-4 text-[#B6B6B6] font-bold'>
                  $60,852.41
                </td>
                <td className='px-10 py-4 items-center gap-1 text-[#0BC355] font-bold'>
                  <img
                    className='inline'
                    src='/assets/icons/table/chevron.png'
                    alt=''
                  />
                  <span className='ml-1'>2.67</span>
                </td>
                <td className='px-10 py-4 text-[#0BC355] font-bold'>
                  <img
                    className='inline'
                    src='/assets/icons/table/chevron.png'
                    alt=''
                  />
                  <span className='ml-1'>2.67</span>
                </td>
                <td className='px-6 py-4 text-[#B6B6B6] font-bold'>
                  $1,201,206,380,883
                </td>
                <td className='px-6 py-4 text-[#B6B6B6] font-bold'>
                  $29.01,206,380,883
                  <br />
                  478,592 BTC
                </td>
                <td className='px-6 py-4 text-[#B6B6B6] font-bold'>
                  $29.01,206,380,883
                </td>
              </tr>
              <tr className='border border-[#1f1f27] bg-[#13141b]'>
                <td className='px-6 py-4 rounded-l-lg'>6</td>
                <td className='px-6 flex items-center h-[70px] gap-2 text-[#B6B6B6]'>
                  <img src='/assets/icons/table/xrp.png' alt='' />
                  <span>XRP (XRP)</span>
                </td>
                <td className='px-6 py-4 text-[#B6B6B6] font-bold'>
                  $60,852.41
                </td>
                <td className='px-10 py-4 items-center gap-1 text-[#0BC355] font-bold'>
                  <img
                    className='inline'
                    src='/assets/icons/table/chevron.png'
                    alt=''
                  />
                  <span className='ml-1'>2.67</span>
                </td>
                <td className='px-10 py-4 text-[#0BC355] font-bold'>
                  <img
                    className='inline'
                    src='/assets/icons/table/chevron.png'
                    alt=''
                  />
                  <span className='ml-1'>2.67</span>
                </td>
                <td className='px-6 py-4 text-[#B6B6B6] font-bold'>
                  $1,201,206,380,883
                </td>
                <td className='px-6 py-4 text-[#B6B6B6] font-bold'>
                  $29.01,206,380,883
                  <br />
                  478,592 BTC
                </td>
                <td className='px-6 py-4 text-[#B6B6B6] font-bold'>
                  $29.01,206,380,883
                </td>
              </tr>
              <tr className='border border-[#1f1f27] bg-[#13141b]'>
                <td className='px-6 py-4 rounded-l-lg'>7</td>
                <td className='px-6 flex items-center h-[70px] gap-2 text-[#B6B6B6]'>
                  <img src='/assets/icons/table/usd.png' alt='' />
                  <span>USD Coin (USDC)</span>
                </td>
                <td className='px-6 py-4 text-[#B6B6B6] font-bold'>
                  $60,852.41
                </td>
                <td className='px-10 py-4 items-center gap-1 text-[#0BC355] font-bold'>
                  <img
                    className='inline'
                    src='/assets/icons/table/chevron.png'
                    alt=''
                  />
                  <span className='ml-1'>2.67</span>
                </td>
                <td className='px-10 py-4 text-[#0BC355] font-bold'>
                  <img
                    className='inline'
                    src='/assets/icons/table/chevron.png'
                    alt=''
                  />
                  <span className='ml-1'>2.67</span>
                </td>
                <td className='px-6 py-4 text-[#B6B6B6] font-bold'>
                  $1,201,206,380,883
                </td>
                <td className='px-6 py-4 text-[#B6B6B6] font-bold'>
                  $29.01,206,380,883
                  <br />
                  478,592 BTC
                </td>
                <td className='px-6 py-4 text-[#B6B6B6] font-bold'>
                  $29.01,206,380,883
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
};

export default MarketUpdate;
