// import React, { useState, useEffect, useRef } from 'react';
// import { partnerLogos } from '../constants';

// const PartnerSlideshow = () => {
//   const [position, setPosition] = useState(0);
//   const containerRef = useRef(null);
//   const logosPerRow = 3; // Adjust this value to control logos per line

//   useEffect(() => {
//     const container = containerRef.current;
//     const containerWidth = container.offsetWidth;
//     const logoWidth = containerWidth / logosPerRow; // Calculate individual logo width

//     const intervalId = setInterval(() => {
//       setPosition((prevPosition) => (prevPosition - logoWidth) % (partnerLogos.length * logoWidth));
//     }, 50); // Adjust the delay (in milliseconds) to control the speed

//     return () => clearInterval(intervalId);
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       className="relative overflow-hidden h-fit flex items-center" // Adjust height as needed
//     >
//       <div
//         className="absolute top-0 flex flex-wrap items-start" // Adjust alignment and wrapping
//         style={{ transform: `translateX(${position}px)` }}
//       >
//         {[...partnerLogos, ...partnerLogos].map((logo) => (
//           <img
//             key={logo.id} // Use unique ID from partnerLogos
//             src={logo.src}
//             alt={logo.alt}
//             className={`w-${100 / logosPerRow}% h-auto mb-8 mr-4`} // Adjust spacing as needed
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PartnerSlideshow;
