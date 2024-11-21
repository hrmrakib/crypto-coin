import Hero from "../../components/navbar/Hero";
import About from "./home/About";
import Blog from "./home/Blog";
import ClientReview from "./home/ClientReview";
import FAQ from "./home/FAQ";
import Feature from "./home/Feature";
import GetStarted from "./home/GetStarted";
import MarketUpdate from "./home/MarketUpdate";
import Solution from "./home/Solution";

const Home = () => {
  return (
    <div className='relative'>
      <img
        className='absolute -top-[550px] right-0'
        src='/assets/images/greer-blur.png'
        alt=''
      />

      <Hero />
      <Feature />
      <About />
      <Solution />
      <FAQ />
      <MarketUpdate />
      <ClientReview />
      <Blog />
      <GetStarted />
    </div>
  );
};

export default Home;
