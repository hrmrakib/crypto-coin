import React from "react";
import Banner from "../../components/common/Banner";
import Container from "../../container/Container";
import GetStarted from "../home/home/GetStarted";
import About from "../home/home/About";

const AboutPage = () => {
  return (
    <div>
      <Banner>About</Banner>

      <Container>
        <div className='mt-20'>
          <div className='bg-gray-800 text-white font-semibold px-2.5 py-2 inline-block rounded-lg'>
            Our Mission
          </div>
          <h1 className='text-white text-4xl font-bold leading-[50px] mt-2.5'>
            Cryptocurrency is the Best Crowdsale <br />
            <span className='bg-gradient-to-r from-[#A869FF] via-[#FF77BA] to-[#FFBB8C] bg-clip-text text-transparent text-4xl font-bold'>
              Service!
            </span>
          </h1>
          <p className='text-[#BABABA] leading-6 mt-5'>
            Steelhead trumpeter, zingel saury grouper swallower threadfin
            pencilsmelt pufferfish hoki. <br />
            Unicorn fish salmon shark: elasmobranch rohu wasp fish; yellowfin
            surgeonfish
          </p>
          <p className='text-[#BABABA] max-w-[930px] leading-6 mt-3'>
            Halfbeak, "tiger shark long-finned char gar yellowfin tuna blue
            whiting, cavefish Redfish murray cod." Squirrelfish lungfish gudgeon
            Sevan trout luminous hake bleak bocaccio glassfish gulf menhaden.
            Chum salmon mooneye pleco bango blue-redstripe danio. Driftwood
            catfish lemon shark arowana; wormfish sailfish sand dab! Torpedo
            rockfish Black swallower snailfish candlefish Kafue pike sillago eel
            Pacific lamprey; king-of-the-salmon slipmouth, javelin, "trahira,"
            cavefish.
          </p>
        </div>

        <About />
        <GetStarted />
      </Container>
    </div>
  );
};

export default AboutPage;
