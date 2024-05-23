import React from 'react';
import styles from '../style';
import { useNavigate } from 'react-router-dom';

const CTA = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/CTA');
  };

  return (
    <div
      className={`group ${styles.flexCenter} w-[240px] h-[75px] rounded-xl bg-blue-gradient p-[2px] cursor-pointer mt-1`}
      onClick={handleClick}
    >
      <div
        className={`${styles.flexCenter} flex-col bg-blue-gradient w-[100%] h-[100%] rounded-xl group-hover:bg-white z-[]`}
      >
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-outfit font-bold text-[24px] leading-[23.4px] text-white group-hover:text-blue-500">
            Connect Now
          </p>
        </div>
      </div>
    </div>
  );
};

export default CTA;