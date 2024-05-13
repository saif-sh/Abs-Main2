// PartnerLogos.jsx
import React, { useState, useEffect } from 'react';
import partnerLogos from '../constants';

const PartnerLogos = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const numAnimatingLogos = 4; // Number of logos to animate simultaneously

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % partnerLogos.length);
      setIsAnimating(true);
    }, 3000); // Change the interval time as desired

    return () => clearInterval(interval);
  }, []);

  const handleAnimationEnd = () => {
    setIsAnimating(false);
  };

  return (
    <div className="flex flex-col items-center overflow-hidden">
      {Array(numAnimatingLogos)
        .fill(null)
        .map((_, index) => (
          <div
            key={index}
            className={`flex items-center justify-center w-1/3 sm:w-1/4 md:w-1/5 p-4 opacity-50 hover:opacity-75 transition-opacity duration-300 ${
              isAnimating ? 'animate-downwards' : ''
            }`}
            onAnimationEnd={handleAnimationEnd}
          >
            <img
              src={partnerLogos[(currentIndex + index) % partnerLogos.length].logo}
              alt={partnerLogos[(currentIndex + index) % partnerLogos.length].alt}
              className="max-h-20 max-w-full"
            />
          </div>
        ))}
    </div>
  );
};

export default PartnerLogos;