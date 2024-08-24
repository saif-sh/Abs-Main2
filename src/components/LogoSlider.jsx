import React, { useEffect, useState } from 'react';
import styles from "../style";
import Marquee from 'react-fast-marquee';
import { log1, log2, log3, log4, log5, log6 ,log7,log8,log9,log10,log11} from '../assets';

// Temporary default images
const images = [log1, log2, log3, log4, log5, log6,log7,log8,log9,log10,log11];

const LogoSlider = ({ direction = 'right',speed = '100', isInfinite = false, logoSize ='h-24' }) => {
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      // Calculate the width of each logo container based on the number of logos and screen width
      const numLogos = images.length;
      const screenWidth = window.innerWidth;
      const containerWidth = (screenWidth / numLogos) - 10; // 8 is the margin between logos
      setContainerWidth(containerWidth);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="py-10 bg-black bg-opacity-5">
      <div className={`${styles.heading2} text-center p-2 pb-6 mb-6 sm:ml-[-28rem]`}>
        <h2>
          Our<span className='text-gradient'> Partners</span>
        </h2>
      </div>
      <div className="relative overflow-hidden">
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background: 'linear-gradient(90deg, rgba(6, 12, 34, 1) 0%, rgba(6, 12, 34, 0) 10%, rgba(6, 12, 34, 0) 90%, rgba(6, 12, 34, 1) 100%)',
          }}
        ></div>
        <Marquee direction={direction} speed={speed} gradient={false} loop={isInfinite}>
          {images.map((img, index) => (
            <div key={index} className={`mx-4 w-full}`} style={{ width: containerWidth }}>
              <img src={img} alt={`Logo ${index + 1}`} className={`mx-auto ${logoSize}`} />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default LogoSlider;