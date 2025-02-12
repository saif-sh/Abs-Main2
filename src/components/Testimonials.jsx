import React from 'react';
import { feedback } from '../constants';
import styles from '../style';
import FeedbackCard from './FeedbackCard';

const Testimonials = () => (
  <section
    id="clients"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative bg-transparent text-black overflow-hidden`}
  >
    {/* Background gradient (subtle and modern) */}
    <div className="absolute z-[0] w-[70%] h-[70%] -right-[40%] rounded-full bg-gradient-to-r from-gray-900 to-black opacity-5 bottom-40 blur-lg" />

    {/* Diagonal pattern background (transparent and modern) */}
    <div className="absolute inset-0 -z-10 opacity-10 pointer-events-none">
      <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <pattern id="diagonalPattern" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M0 10 L10 0" stroke="black" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#diagonalPattern)" />
      </svg>
    </div>

    {/* Content container */}
    <div className="w-full flex flex-col md:flex-row justify-between items-center mb-16 relative z-[1] px-6 sm:px-16">
      <div className="flex-1 flex flex-col justify-start items-start">
        <h2 className={`${styles.heading2} text-black mb-4`}>
          Voices Of Our
          <br className="block sm:hidden" />
          <span className="text-black font-bold"> Valued Clients</span>
        </h2>
        <p className={`${styles.paragraph} text-left max-w-[550px] font-medium text-gray-700`}>
          Discover how our innovative solutions have transformed businesses. Hear directly from our clients about their success stories.
        </p>
      </div>
    </div>

    {/* Testimonials grid */}
    <div className="w-full flex flex-wrap justify-center gap-8 px-6 sm:px-16 relative z-[1]">
      {feedback.map((card) => (
        <div
          key={card.id}
          className="w-full sm:w-[45%] lg:w-[30%] transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
        >
          <FeedbackCard {...card} />
        </div>
      ))}
    </div>

    {/* Decorative line (modern and subtle) */}
    <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-16 opacity-50" />

    {/* Call to action (modern and sleek) */}
    <div className="w-full flex justify-center items-center relative z-[1] px-6 sm:px-16">
      <p className={`${styles.paragraph} text-center max-w-[800px] font-medium text-gray-700`}>
        Ready to transform your business?{' '}
        <span className="text-black font-bold underline underline-offset-4 hover:text-gray-900 transition-colors duration-300">
          Let’s work together.
        </span>
      </p>
    </div>
  </section>
);

export default Testimonials;