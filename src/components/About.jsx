import React from 'react'
import styles from '../style';
import { bldng,about ,newabt} from '../assets';
import CTA from './CTA'

const About = () =>(
  <section className={` text-center ${styles.flexStart} sm:my-12 my-2 sm:pr-16 sm:pl-2 px-6 sm:py-12 py-4 pl-4 pb-8 sm:flex-row flex-col bg-gray-800 bg-opacity-45 rounded-[20px] box-shadow sm:mx-0 mx-6`}>
 
 <div className={`${styles.flexCenter} sm:ml-10 sm:mt-0 mt-10 p-10 `}>
  <img
            src={newabt}
            alt="About Image"
            className="w-full h-full object-cover animate-ping"
          />
  </div>

  <div className="flex-1 flex flex-col lg:mt-12 lg:pl-20">
    <h2 className={styles.heading2}>About Us</h2>
    <p className={`${styles.paragraph} text-center max-w-[] mt-5`}>
    At the Business Studio, we collaborate with clients to understand their unique challenges and develop tailored solutions. Our comprehensive services span marketing strategies, staffing solutions, and operational frameworks – driving customer satisfaction and fueling sustainable growth. For entrepreneurs and established businesses, we offer a powerful business module leveraging our expertise to ensure enduring success through a client-centric approach.    </p>
    <div className={`${styles.flexCenter} pt-10`}>
    <CTA/>
    </div>
  </div>



</section>
    
  )


export default About