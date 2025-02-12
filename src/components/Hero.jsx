import React from 'react';
import { motion } from 'framer-motion';
import { bldng } from '../assets';
import styles from '../style';
import CTA from './CTA';

const Hero = () => {
  // Variants for text: slide in from left with slight rotation
  const textVariants = {
    hidden: { opacity: 0, x: -50, rotate: -2 },
    visible: { 
      opacity: 1, 
      x: 0, 
      rotate: 0, 
      transition: { duration: 0.5, ease: 'easeOut' } 
    },
  };

  // Variant for the image: slide in from right with scale & slight rotation
  const imageVariants = {
    hidden: { opacity: 0, x: 50, scale: 0.9, rotate: 2 },
    visible: { 
      opacity: 1, 
      x: 0, 
      scale: 1, 
      rotate: 0, 
      transition: { duration: 0.6, ease: 'easeOut' } 
    },
  };

  // Variant for the CTA: bounce in from below
  const ctaVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.4, ease: 'easeOut' } 
    },
  };

  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY} text-center lg:mr-38`}>
      {/* Left side: Text and CTA */}
      <motion.div
        className={`flex-1 ${styles.flexCenter} flex-col xl:pl-0 sm:px-16 px-10 lg:{pl-0 pr-10}`}
        initial="hidden"
        animate="visible"
        variants={textVariants}
      >
        <motion.div
          className="flex flex-row justify-between"
          initial={{ opacity: 0, x: -30 }}
          animate={{ 
            opacity: 1, 
            x: 0, 
            transition: { delay: 0.05, duration: 0.5, ease: 'easeOut' } 
          }}
        >
          <motion.h1
            className="flex-1 text-center font-outfit font-bold ss:text-[72px] text-[52px] text-black ss:leading-[100.8px] leading-[75px]"
            initial={{ opacity: 0, x: -30 }}
            animate={{ 
              opacity: 1, 
              x: 0, 
              transition: { delay: 0.1, duration: 0.5, ease: 'easeOut' } 
            }}
          >
            Your Business, <br className="sm:block hidden" />{" "}
            <span className="text-white [-webkit-text-stroke:1.5px_black]"> Our Expertise.</span>{" "}
          </motion.h1>
        </motion.div>
        <motion.p
          className={`font-outfit font-[350] text-black text-[24px] leading-[30.8px] max-w-[670px] mt-2`}
          initial={{ opacity: 0, x: -30 }}
          animate={{ 
            opacity: 1, 
            x: 0, 
            transition: { delay: 0.15, duration: 0.5, ease: 'easeOut' } 
          }}
        >
          A Business Studio provides entrepreneurs and small businesses an all-encompassing ecosystem to grow. Our collaborative workspace, mentorship services, and business support solutions are tailored for your success.
        </motion.p>
        <motion.div
          className="mt-8 sm:content-center ss:flex hidden md:mr-4 mr-0"
          initial="hidden"
          animate="visible"
          variants={ctaVariants}
        >
          <CTA />
        </motion.div>
      </motion.div>

      {/* Right side: Animated Image */}
      <motion.div
        className="w-full lg:w-2/5 mx-auto px-4"
        initial="hidden"
        animate="visible"
        variants={imageVariants}
      >
        <img
          src={bldng}
          alt="building"
          className={`w-full relative z-[5] animate-bounce-slow mt-20 ${styles.flexCenter}`}
        />
      </motion.div>

      {/* Mobile CTA */}
      <motion.div
        className={`ss:hidden ${styles.flexCenter}`}
        initial="hidden"
        animate="visible"
        variants={ctaVariants}
      >
        <CTA />
      </motion.div>
    </section>
  );
};

export default Hero;
