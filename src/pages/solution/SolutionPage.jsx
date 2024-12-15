import React from "react";
import Banner from "../../components/common/Banner";

const services = [
  {
    title: "Blockchain Development:",
    description: "Building and maintaining blockchain networks.",
  },
  {
    title: "Smart Contract Development:",
    description: "Writing, testing, and deploying smart contracts.",
  },
  {
    title: "Cryptocurrency Wallet Development:",
    description:
      "Creating secure digital wallets for storing cryptocurrencies.",
  },
  {
    title: "Token Creation:",
    description: "Developing and launching new cryptocurrencies or tokens.",
  },
  {
    title: "Blockchain Consulting:",
    description: "Advising on blockchain technology and its implementation.",
  },
  {
    title: "Crypto Trading Bots Development:",
    description:
      "Developing automated trading bots for cryptocurrency markets.",
  },
];

const SolutionPage = () => {
  return (
    <div>
      <Banner>Solution</Banner>
      <div className='min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden'>
        {/* Decorative stars */}
        <div className='absolute top-20 left-10 text-white/20 text-2xl'>✧</div>
        <div className='absolute top-40 right-20 text-white/20 text-2xl'>✧</div>
        <div className='absolute bottom-20 left-20 text-white/20 text-2xl'>
          ✧
        </div>

        <div className='max-w-6xl mx-auto px-4 py-12 space-y-20'>
          {/* Hero Section */}
          <section className='relative'>
            <div className='bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-3xl overflow-hidden'>
              <div className='aspect-[16/9] relative'>
                <img
                  src='/placeholder.svg?height=400&width=800'
                  alt='Freelancer working at night'
                  className='object-cover w-full h-full'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent' />
              </div>
              <div className='p-8'>
                <h1 className='text-4xl font-bold mb-4'>Freelancer</h1>
                <p className='text-gray-300 max-w-3xl'>
                  Cryptocurrency freelancers offer services like blockchain
                  development, smart contract creation, wallet development,
                  ICO/STO consulting, dApp development, security audits, crypto
                  trading bots, whitepaper writing, community management,
                  marketing, token creation, DeFi development, NFT creation,
                  market analysis, legal consultation, tax advisory, content
                  creation, and crypto payment integration.
                </p>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className='space-y-6'>
            <h2 className='text-2xl font-semibold'>Our Services</h2>
            <div className='grid md:grid-cols-2 gap-6'>
              {services.map((service, index) => (
                <div
                  key={index}
                  className='bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm'
                >
                  <h3 className='text-xl font-semibold mb-2'>
                    {service.title}
                  </h3>
                  <p className='text-gray-300'>{service.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Benefits Section */}
          <section className='space-y-6'>
            <h2 className='text-2xl font-semibold'>Service Benefits:</h2>
            <div className='bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm'>
              <p className='text-gray-300'>
                Content is king in the digital world. Agencies produce
                high-quality content, including blog posts, videos,
                infographics, and more, to engage and educate the target
                audience. Content marketing builds trust and authority for the
                brand. Agencies manage and grow a brands presence on social
                media platforms such as Facebook, Twitter, LinkedIn, and
                Instagram.
              </p>
            </div>
          </section>

          {/* Pricing Section */}
          <section className='space-y-6'>
            <h2 className='text-2xl font-semibold'>Low Cost Our Fee:</h2>
            <div className='bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm'>
              <p className='text-gray-300'>
                Content is king in the digital world. Agencies produce
                high-quality content, including blog posts, videos,
                infographics, and more, to engage and educate the target
                audience. Content marketing builds trust and authority for the
                brand. Agencies manage and grow a brands presence on social
                media platforms such as Facebook, Twitter, LinkedIn, and
                Instagram.
              </p>
            </div>
          </section>

          {/* Tips Section */}
          <section className='space-y-6'>
            <h2 className='text-2xl font-semibold'>Tips & tricks:</h2>
            <div className='bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm'>
              <p className='text-gray-300'>
                Content is king in the digital world. Agencies produce
                high-quality content, including blog posts, videos,
                infographics, and more, to engage and educate the target
                audience. Content marketing builds trust and authority for the
                brand. Agencies manage and grow a brands presence on social
                media platforms such as Facebook, Twitter, LinkedIn, and
                Instagram.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default SolutionPage;
