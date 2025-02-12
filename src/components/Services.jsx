import React from 'react';
import { motion } from 'framer-motion';
import styles from "../style";
import CTA from './CTA';
import { ani1, finpic, marpic, modev, recpic, webdev } from '../assets';

const Services = () => {
  // Define animation variants for the service cards.
  // Cards with even indices slide in from the left, odd indices from the right.
  const cardVariants = {
    hidden: (index) => ({
      opacity: 0,
      x: index % 2 === 0 ? -100 : 100,
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.1, // Fast animation duration
        ease: "easeOut",
      },
    },
  };

  // Array of services
  const servicesList = [
    {
      title: "Recruitment",
      description:
        "Streamline your hiring process with A Business Studio’s expert recruitment services. We connect you with top-tier talent that aligns with your company’s culture and vision, ensuring a seamless and efficient hiring experience. Let us help you build a strong and dynamic team.",
      img: recpic,
    },
    {
      title: "Marketing",
      description:
        "Boost your brand’s impact with A Business Studio’s innovative marketing strategies. From digital campaigns to content creation and social media management, we craft data-driven solutions that enhance visibility, engage audiences, and drive business growth.",
      img: marpic,
    },
    {
      title: "Finance",
      description:
        "Optimize your financial strategy with A Business Studio’s comprehensive finance services. Whether it’s budgeting, risk management, or financial planning, our experts provide tailored solutions that empower your business to thrive in a competitive landscape.",
      img: finpic,
    },
    {
      title: "Web Application Development",
      description:
        "Transform your business with cutting-edge web applications designed by A Business Studio. We specialize in creating secure, scalable, and high-performance web solutions that enhance user experience and streamline operations, helping you stay ahead in the digital world.",
      img: webdev,
    },
    {
      title: "Mobile Application Development",
      description:
        "Bring your app ideas to life with A Business Studio’s expert mobile development team. From intuitive UI/UX design to seamless functionality, we build dynamic mobile applications that enhance customer engagement and drive business success.",
      img: modev,
    },
];


  return (
    <div className={`sm:mx-0 mx-6 sm:text-center text-center`}>
      <div className={`font-outfit font-semibold xs:text-[48px] text-[40px] xs:leading-[76.8px] leading-[66.8px] w-full text-center p-2 mb-6 text-black`}>
        <h2>
          Our{" "}
          <span className="text-white [-webkit-text-stroke:1.5px_black]">
            Services
          </span>
        </h2>
      </div>

      {servicesList.map((service, index) => (
        <motion.section
          key={index}
          custom={index}
          initial="hidden"
          whileInView="visible"
          // Trigger animation when ~30% of the card is visible
          viewport={{ once: true, amount: 0.3 }}
          variants={cardVariants}
          className={`${styles.flexStart} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-[#D9D9D9] rounded-[20px] box-shadow transition-all ease-in-out duration-300 cursor-pointer hover:bg-black hover:text-white hover:scale-[1.05]`}
        >
          <div className="flex-1 flex flex-col">
            <h2 className="font-outfit font-semibold xs:text-[48px] text-[40px] xs:leading-[76.8px] leading-[66.8px] w-full">
              {service.title}
            </h2>
            <p className="font-outfit text-justify font-normal text-[18px] leading-[30.8px] max-w-[870px] mt-5">
              {service.description}
            </p>
          </div>

          <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
            <img
              src={service.img}
              alt={service.title}
              className="w-full max-w-[300px] h-auto rounded-2xl border-[6px] border-black object-cover"
            />
          </div>
        </motion.section>
      ))}
    </div>
  );
};

export default Services;
