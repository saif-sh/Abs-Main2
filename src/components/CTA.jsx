import React from 'react'
import styles from '../style'

const CTA = () => (
  <div className={`group ${styles.flexCenter} w-[240px] h-[75px] rounded-xl bg-blue-gradient p-[2px] cursor-pointer mt-1 `}>
    <div className={`${styles.flexCenter} flex-col bg-blue-gradient w-[100%] h-[100%] rounded-xl group-hover:bg-primary z-[] `}>
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-outfit font-bold text-[24px] leading-[23.4px] text-white group-hover:text-black">
          Connect Now
        </p>

      </div>
    </div>
  </div>
)

export default CTA