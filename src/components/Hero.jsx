import React from 'react'
import { bldng,bgimg } from '../assets';
import styles from '../style'
import CTA from './CTA'
import { Navigate } from 'react-router-dom';
import Contactpg from '../Pages/Contactpg';

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY} text-center lg:mr-38`}>
    <div className={`flex-1 ${styles.flexCenter} flex-col xl:pl-0 sm:px-16 px-10 lg:{pl-0 pr-10}`}>

      <div className="flex flex-row justify-between ">
        <h1 className="flex-1 text-center font-outfit font-bold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
          CONNECTING <br className="sm:block hidden" />{" "}
          <span className="text-gradient"> BUSINESSES</span>{" "}
        </h1>
      </div>
      <p className={`font-outfit font-thin text-dimWhite text-[24px] leading-[30.8px] max-w-[670px] mt-2 `}>
      A Business Studio provides entrepreneurs and small businesses an all-encompassing ecosystem to grow. Our collaborative workspace, mentorship services, and business support solutions are tailored for your success.
      </p>
      <div className='mt-8 sm:content-center ss:flex hidden md:mr-4 mr-0' > 
        <CTA />
      </div>
    </div>

    <div className='mx-20 mr-32'>
      <img src={bldng} alt="building"
        className={` relative z-[5] animate-bounce-slow  flex mt-20 ${styles.flexCenter}`}/>
    </div>
    <div className={`ss:hidden ${styles.flexCenter}`}>
        <CTA />
      </div>
  </section>
);


export default Hero