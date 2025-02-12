import React from "react";
import styles from "../style";
import { motion } from "framer-motion";
import { Navbar, Sercard, Footer } from '../components';

const Servicespg = () => {
  // Animation variants for fade-in
  const fadeInVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-[url('./assets/bgimg.png')] bg-cover p-0"
    >
      <div className="w-full overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`${styles.paddingX} ${styles.flexCenter}`}
        >
          <Navbar />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants}
          className={`${styles.paddingY} ${styles.flexStart}`}
        >
          <div className={`${styles.boxWidth} lg:mx-24`}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.7,
                delay: 0.2
              }}
            >
              <Sercard />
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ 
            duration: 0.5,
            delay: 0.8 
          }}
        >
          <Footer />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Servicespg;