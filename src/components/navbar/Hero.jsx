import Container from "../../container/Container";

const Hero = () => {
  return (
    <div className='relative'>
      <Container>
        <div className='mt-10 lg:mt-0 h-[calc(100vh-64px)] flex flex-col lg:flex-row items-center justify-between gap-2'>
          <div>
            <button className='py-1.5 px-2 flex items-center gap-2 font-medium rounded-md bg-[#26212f]'>
              <img src='/assets/icons/star-img.png' alt='star' />
              <span className='text-white'>Sign Up now & get up to $5,000</span>
            </button>

            <h1 className='mt-5 lg:mt-0 text-white text-3xl lg:text-6xl font-bold max-w-[550px] leading-10 lg:leading-[90px]'>
              Trusted and Secure Digital Currency
              <span className='bg-gradient-to-r from-[#A869FF] via-[#FF77BA] to-[#FFBB8C] bg-clip-text text-transparent texxl font-bold'>
                Exchange
              </span>
            </h1>

            <p className='text-[#B6B6B6] max-w-[480px] mt-5'>
              Try first if you get best experience to buying selling & exchange
              Digital Currency from our platform.
            </p>
            <button className='mt-4 bg-gradient-to-l from-[#FFBB8C] via-[#FF77BA] to-[#A869FF] flex items-center gap-2 text-white px-2.5 py-2 rounded-md cursor-pointer'>
              Get Started
              <img
                className='w-4 h-4'
                src='/assets/icons/arrow-up-right.png'
                alt='arrow'
              />
            </button>
          </div>
          <div className='relative'>
            <img src='/assets/images/hero-right.png' alt='hero' />
            <img
              className='absolute left-0 top-0'
              src='/assets/images/bitcoin-1.png'
              alt='bitcoin-1'
            />
          </div>
        </div>
      </Container>

      <img
        class='absolute -top-20 right-0'
        src='./assets/images/Ellipse 2.png'
        alt=''
      />
      <img
        class='absolute left-0 bottom-0'
        src='./assets/images/blue-blur.png'
        alt=''
      />
    </div>
  );
};

export default Hero;
