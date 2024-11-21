import Hero from "../../components/navbar/Hero";
import About from "./home/About";
import Feature from "./home/Feature";

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
    </div>
  );
};

export default Home;
