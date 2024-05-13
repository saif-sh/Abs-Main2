import React, { useState, useEffect, useRef } from 'react';
import { useSwipeable } from 'react-swipeable';
import { useMediaQuery } from 'react-responsive';
import { mis1, mis2, mis3, mis4, mis5 } from '../assets';

const slidesData = [mis1, mis2, mis3, mis4, mis5];

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const goToPrevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slidesData.length - 1 : currentSlide - 1);
  };

  const goToNextSlide = () => {
    setCurrentSlide(currentSlide === slidesData.length - 1 ? 0 : currentSlide + 1);
  };

  const handlers = useSwipeable({
    onSwipedLeft: goToNextSlide,
    onSwipedRight: goToPrevSlide,
  });

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  useEffect(() => {
    if (slideRef.current) {
      slideRef.current.style.transition = 'transform 0.5s ease-in-out';
      slideRef.current.style.transform = `translateX(-${currentSlide * 100}vw)`;
    }
  }, [currentSlide]);

  return (
    <div className="relative h-96 w-full overflow-hidden" {...handlers}>
      <div ref={slideRef} className="flex h-full whitespace-nowrap absolute">
        {slidesData.map((slide, index) => (
          <div key={index} className="h-full w-screen flex-none">
            <img src={slide} alt={`Slide ${index + 1}`} className="lg:ml-[300px]" />
          </div>
        ))}
      </div>
      {!isMobile && (
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 space-x-2">
          {slidesData.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`lg:h-4 lg:w-4 h-1 w-1 rounded-full ${
                index === currentSlide ? 'bg-white' : 'bg-gray-400'
              }`}
            />
          ))}
        </div>
      )}
      {isMobile ? null : (
        <button onClick={goToPrevSlide} className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400 hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="lg:h-32 lg:w-32 h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}
      {isMobile ? null : (
        <button onClick={goToNextSlide} className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-400 hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="lg:h-32 lg:w-32 h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default ImageSlider;