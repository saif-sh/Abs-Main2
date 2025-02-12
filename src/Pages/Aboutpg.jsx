import React from "react";
import styles from "../style";
import { motion } from "framer-motion";
import { Navbar, TextSlider, Footer, Ourfounder, Team } from '../components';

const Aboutpg = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const missionVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.03,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <div className="bg-[url('./assets/bgimg.png')] bg-cover p-0">
      <div className="w-full overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`${styles.paddingX} ${styles.flexCenter}`}
        >
          <Navbar />
        </motion.div>

        <div className={`${styles.paddingY} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className={`${styles.flexCenter} flex-col`}
            >
              <motion.h1
                variants={fadeInUp}
                className="text-black font-bold text-[52px] tracking-[8px] sm:text-left text-center"
              >
                About Us
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="text-black/75 xs:ml-10 sm:text-left text-center"
              >
                Welcome to A Business Studio. One Stop For All Your Business Needs
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Ourfounder />
            </motion.div>

            <motion.section
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, amount: 0.3 }}
              variants={missionVariants}
              className={`${styles.flexStart} sm:mb-6 sm:mt-[80px] my-20 sm:px-16 px-1 sm:py-20 py-4 sm:flex-row flex-col bg-[#D9D9D9] rounded-[100px] box-shadow lg:mx-40 group sm:mx-0 mx-4`}
            >
              <div className="flex-1 flex flex-col text-black">
                <motion.h2
                  variants={fadeInUp}
                  className={`font-outfit font-semibold xs:text-[48px] text-[24px] text-[#161616] xs:leading-[76.8px] leading-[66.8px] w-full text-center ease-in-out duration-300 group-hover:text-[#2632A1]`}
                >
                  Our Mission
                </motion.h2>
                <motion.p
                  variants={fadeInUp}
                  className={`font-outfit font-semibold sm:text-[24px] text-[18px] leading-[30.8px] mt-5 text-center ease-in-out duration-300 group-hover:text-[#2632A1] lg:mx-20 md:mx-20 mx-12 sm:pb-0 pb-10`}
                >
                  A Business Studio is your trusted partner for premium outsourcing solutions. We specialize in optimizing processes, enhancing efficiency, and driving growth for businesses across diverse industries. Let us handle the details while you focus on what matters most – your core business goals. Connect with us today and experience the power of strategic outsourcing!
                </motion.p>
              </div>
            </motion.section>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:mt-32"
            >
              <TextSlider />
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Footer />
        </motion.div>
      </div>
    </div>
  );
};

export default Aboutpg;