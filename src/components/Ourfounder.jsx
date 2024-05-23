import React from 'react';
import styles from '../style';
import {rect} from '../assets';

const About = () => (
  <section className={`text-center ${styles.flexStart} sm:my-12 my-2 sm:pr-16 sm:pl-[120px] px-6 sm:py-12 py-4 pl-4 pb-8 sm:flex-row flex-col bg-gray-800 bg-opacity-45 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col sm:pt-12 pt-12 ">
      <h1 className={`${styles.heading2} sm:text-left text-center`}>Our  <br className="sm:block hidden" /><span className='text-gradient font-bold text-[52px]'> Dedicated Team</span></h1>
      <p className={`${styles.paragraph} max-w-[720px] mt-6 sm:text-left text-center`}>
        At A Business Studio, we take pride in our team of highly skilled professionals who bring a wealth of expertise and passion to their work. Our team is dedicated to delivering exceptional results and providing top-notch service to our clients.
      </p>
      <p className={`${styles.paragraph} max-w-[720px] mt-4 sm:text-left text-center`}>
        With a diverse range of backgrounds and experiences, our team members collaborate seamlessly to tackle complex challenges and develop innovative solutions tailored to your unique needs. Whether you're seeking to optimize your business operations, enhance your digital presence, or explore new growth opportunities, our team is here to support you every step of the way.
      </p>
    </div>
    <div className="flex justify-center items-center sm:ml-10 sm:mt-0 mt-10">
      <img src={rect} alt="A business team collaborating" className="w-[500px]" />
    </div>
  </section>
);

export default About;