import React, { useState } from "react";
import { serviceapi } from "../constants";
import { motion} from "framer-motion";

const Sercard = () => {
  const [serviceData, setServiceData] = useState(serviceapi);

  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger animations for each child
        delayChildren: 0.3, // Delay before starting animations
      },
    },
  };

  // Animation variants for each card
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: { scale: 1.05, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.15)" },
  };

  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-[#f5f5f5] rounded-xl"
      >
        <div className="container mx-auto px-6">
          {/* Section Heading */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl font-black font-poppins text-center mb-12 text-black tracking-tight"
          >
            OUR SERVICES
          </motion.h1>

          {/* Services Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {serviceData.map((curElem) => {
              const { id, logo, title, info } = curElem;
              return (
                <motion.div
                  key={id}
                  variants={cardVariants}
                  whileHover="hover"
                  className="bg-white border border-gray-200 rounded-lg p-8 relative overflow-hidden group"
                >
                  {/* Icon */}
                  <motion.i
                    className={`${logo} text-4xl mb-6 text-black group-hover:text-white transition-colors duration-500`}
                  ></motion.i>

                  {/* Title */}
                  <motion.h2 className="text-2xl font-bold mb-6 text-black group-hover:text-white transition-colors duration-500">
                    {title}
                  </motion.h2>

                  {/* Description */}
                  <motion.p className="text-gray-700 font-normal group-hover:text-gray-200 transition-colors duration-500">
                    {info}
                  </motion.p>

                  {/* Hover Background */}
                  <motion.div
                    className="absolute inset-0 bg-black opacity-0 rounded-lg transition-opacity duration-500 group-hover:opacity-100 -z-10"
                  ></motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default Sercard;