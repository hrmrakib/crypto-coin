import Hero from "../../components/navbar/Hero";
import Feature from "./Feature";

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
    </div>
  );
};

export default Home;
