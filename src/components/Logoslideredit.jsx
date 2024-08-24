import React, { useEffect, useState } from 'react';
import styles from "../style";
import Marquee from 'react-fast-marquee';
import { log1, log2, log3, log4, log5,log6,log7,log8,log9,log10,log11 } from '../assets';

// Temporary default images
const images = [log1, log2, log3, log4, log5,log6,log7,log8,log9,log10,log11];

const LogoSlideredit = ({ direction = 'right', speed = '60', delay = '1', isInfinite = false, logoSize = 'h-16', fullWidth = false }) => {
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      // Calculate the width of each logo container based on the number of logos and screen width
      const numLogos = images.length;
      const screenWidth = window.innerWidth;
      const containerWidth = fullWidth ? screenWidth / numLogos : (screenWidth / numLogos) - 8; // 8 is the margin between logos
      setContainerWidth(containerWidth);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [fullWidth]);

  return (
    <div className={`py-10 bg-black  bg-opacity-5 ${fullWidth ? 'w-full' : ''}`}>
      <div className="relative overflow-hidden">
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background: 'linear-gradient(90deg, rgba(6, 12, 34, 1) 0%, rgba(6, 12, 34, 0) 10%, rgba(6, 12, 34, 0) 90%, rgba(6, 12, 34, 1) 100%)',
          }}
        ></div>
        <Marquee direction={direction} speed={speed} delay={delay} gradient={false} loop={isInfinite}>
          {images.map((img, index) => (
            <div key={index} className={`mx-4 ${fullWidth ? 'w-full' : ''}`} style={{ width: containerWidth }}>
              <img src={img} alt={`Logo ${index + 1}`} className={`mx-auto ${logoSize}`} />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default LogoSlideredit;