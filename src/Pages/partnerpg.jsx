import React from 'react'
import { Navbar, Hero, Stats, About, Services, Testimonials, Blogcard, Footer, ContactUs } from '../components';
import PartnerLogo from '../components/PartnerLogo';

const partnerpg = () => (
    <div className="bg-[url('./assets/bgimg.png')] bg-cover p-0">
      <div className=" w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
  
          <Navbar />
  
        </div>
  
        <div className={` ${styles.paddingY} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
          <PartnerLogo/>
          </div>
        </div>
        <Footer />
      </div>
    </div>

  )


export default partnerpg