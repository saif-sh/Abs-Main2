import React from 'react';

const Logo = ({ src, alt }) => (
  <li>
    <img src={src} alt={alt} />
  </li>
);

const logosData = [
  { src: 'https://via.placeholder.com/150', alt: 'Facebook' },
  { src: 'https://via.placeholder.com/150', alt: 'Disney' },
  { src: 'https://via.placeholder.com/150', alt: 'Airbnb' },
  { src: 'https://unsplash.com/photos/statue-of-woman-jyE-TqbRy3Y', alt: 'Apple' },
  { src: 'https://via.placeholder.com/150', alt: 'Spark' },
  { src: 'https://via.placeholder.com/150', alt: 'Samsung' },
  { src: 'https://via.placeholder.com/150', alt: 'Quora' },
  { src: 'https://via.placeholder.com/150', alt: 'Sass' },
];

const LogoCarousel = () => {
  return (
    <div className="font-inter antialiased">
      <main className=" flex flex-col justify-center overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 py-24">
          <div className="text-center">
            <div className="w-full flex flex-nowrap overflow-hidden">
              <ul className="flex items-center justify-center md:justify-start mx-8 animate-infinite-scroll">
                {logosData.map((logo, index) => (
                  <Logo key={index} src={logo.src} alt={logo.alt} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LogoCarousel;
