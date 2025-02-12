import React from 'react';
import styles from '../style';
import { rect } from '../assets';
import { motion } from 'framer-motion';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      className={`text-center ${styles.flexStart} sm:my-12 my-2 lg:mx-20 sm:mx-2 sm:pr-16 sm:pl-[120px] px-6 sm:py-12 py-4 pl-4 pb-8 sm:flex-row flex-col bg-white/40 bg-opacity-45 rounded-[20px] box-shadow`}
    >
      <motion.div 
        className="flex-1 flex flex-col sm:pt-4 pt-12"
        variants={containerVariants}
      >
        <motion.h1 
          className={`${styles.heading2} sm:text-left text-center`}
          variants={itemVariants}
        >
          Our <br className="sm:block hidden" />
          <span className='text-black font-bold text-[52px]'> Dedicated Team</span>
        </motion.h1>
        
        <motion.p 
          className={`font-outfit font-semibold text-black text-[18px] leading-[30.8px] max-w-[720px] mt-6 sm:text-left text-center text-semibold`}
          variants={itemVariants}
        >
          At A Business Studio, we take pride in our team of highly skilled professionals who bring a wealth of expertise and passion to their work. Our team is dedicated to delivering exceptional results and providing top-notch service to our clients.
        </motion.p>
        
        <motion.p 
          className={`font-outfit font-semibold text-black text-[18px] leading-[30.8px] max-w-[720px] mt-4 sm:text-left text-center`}
          variants={itemVariants}
        >
          With a diverse range of backgrounds and experiences, our team members collaborate seamlessly to tackle complex challenges and develop innovative solutions tailored to your unique needs. Whether you're seeking to optimize your business operations, enhance your digital presence, or explore new growth opportunities, our team is here to support you every step of the way.
        </motion.p>
      </motion.div>

      <motion.div 
        className="flex justify-center items-center sm:ml-10 sm:mt-0 mt-10"
        variants={imageVariants}
      >
        <motion.img 
          src={rect} 
          alt="A business team collaborating" 
          className="w-[500px]"
          whileHover={{ 
            scale: 1.01,
            transition: { duration: 0.2 }
          }}
        />
      </motion.div>
    </motion.section>
  );
};

export default About;