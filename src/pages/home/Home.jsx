import Hero from "../../components/navbar/Hero";
import About from "./home/About";
import FAQ from "./home/FAQ";
import Feature from "./home/Feature";
import Solution from "./home/Solution";

const Home = () => {
  return (
    <div className='relative'>
      <img
        class='absolute -top-[550px] right-0'
        src='/assets/images/greer-blur.png'
        alt=''
      />

      <Hero />
      <Feature />
      <About />
      <Solution />
      <FAQ />
    </div>
  );
};

export default Home;
