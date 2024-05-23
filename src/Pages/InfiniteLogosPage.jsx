import React from 'react';
import LogoSlideredit from '../components/Logoslideredit';
import styles from '../style';
import { Navbar, Footer } from '../components';

const InfiniteLogosPage = () => {
  return (
    <div className="bg-[url('./assets/bgimg.png')] bg-cover p-0">
      <div className="w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <Navbar />
        </div>
        <div className="mx-auto max-w-[100rem] px-4 py-10">
          <div className={`${styles.heading2} text-center p-2 pb-6 mb-6 sm:ml-[-28rem]`}>
            <h2>
              Our<span className='text-gradient'>Partners</span>
            </h2>
          </div>
          <div className="flex flex-col items-center justify-center">
            <LogoSlideredit speed={500} delay='-1' logoSize='h-42' fullWidth />
            <LogoSlideredit speed={500} direction="left" delay='-2' logoSize='h-42' fullWidth />
            <LogoSlideredit speed={500} direction="right" delay='-2' logoSize='h-42' fullWidth />
            <LogoSlideredit speed={500} direction="left" delay='-3' logoSize='h-42' fullWidth />
            {/* Add more LogoSlider instances as needed */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default InfiniteLogosPage;