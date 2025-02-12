import React from 'react';
import Marquee from 'react-fast-marquee';
import styles from "../style";
import { 
  log1, log2, log3, log4, log5, 
  log6, log7, log8, log9, log10, log11 
} from '../assets';

// Define logos with their source and display name.
const logos = [
  { src: log1, name: 'Logo 1' },
  { src: log2, name: 'Logo 2' },
  { src: log3, name: 'Logo 3' },
  { src: log4, name: 'Logo 4' },
  { src: log5, name: 'Logo 5' },
  { src: log6, name: 'Logo 6' },
  { src: log7, name: 'Logo 7' },
  { src: log8, name: 'Logo 8' },
  { src: log9, name: 'Logo 9' },
  { src: log10, name: 'Logo 10' },
  { src: log11, name: 'Logo 11' }
];

const LogoSlider = ({
  direction = 'right',
  speed = 100,
  logoHeightClass = 'h-24'
}) => {
  // Fixed container width for each logo (adjust as needed)
  const logoContainerWidth = 150;

  return (
    <div className="py-10 bg-transparent">
<div className={`${styles.heading2} text-center pb-6 mb-6`}>
  <h2 className="text-black">
    Our{" "}
    <span className="text-white [-webkit-text-stroke:1.5px_black]">
      Partners
    </span>
  </h2>
</div>


      <div className="relative overflow-hidden">
        <Marquee
          direction={direction}
          speed={speed}
          gradient={false}
          loop={0}  // 0 means infinite looping
        >
          {logos.map((logo, index) => (
            <div
              key={index}
              className="mx-4 flex-shrink-0"
              style={{ width: logoContainerWidth }}
            >
              <img
                src={logo.src}
                alt={logo.name}
                title={logo.name}  // Displays the logo's name on hover
                className={`${logoHeightClass} w-full object-contain`}
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default LogoSlider;
