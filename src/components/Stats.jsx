import React, { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';
import { stats } from '../constants';
import styles from '../style';

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const statsElement = statsRef.current;
      if (statsElement) {
        const rect = statsElement.getBoundingClientRect();
        const isInViewport = rect.top >= 0 && rect.bottom <= window.innerHeight;
        setIsVisible(isInViewport);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={statsRef}
      className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6 pl-12 pt-2 backdrop-opacity-5 bg-black/30 rounded-2xl mt-3 lg:mx-40`}
    >
      {stats.map((stat) => (
        <div
          key={stat.id}
          className={`flex-1 flex justify-start items-center flex-row m-3 mt-0`}
        >
          <div className="font-outfit font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white">
            <CountUp
              start={isVisible ? 0 : null}
              end={stat.value.replace(/[^0-9]/g, '')}
              duration={2.5}
              separator=","
              decimal="."
            />
            {stat.title === 'Transaction' ? 'M+' : '+'}
          </div>
          <p className="font-outfit font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
            {stat.title}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Stats;