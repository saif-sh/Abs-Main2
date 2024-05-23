import React from 'react'
import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => (
  <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className="w-full flex justify-center items-center md:flex-row flex-col mb-16 ml-42 relative z-[1] sm:pl-0 pl-[30px] ">
      <h2 className={styles.heading2}>
        Voices Of Our<br className="block sm:hidden" /><span className='text-gradient'> Clients</span>
      </h2>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[550px] font-semibold`}>
        Explore our clients' testimonials for firsthand accounts of our transformative solutions.        </p>
      </div>
    </div>

    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}
    </div>
  </section>
);

export default Testimonials