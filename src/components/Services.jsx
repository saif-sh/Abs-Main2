import React from 'react'
import styles from "../style"
import CTA from './CTA';
import { ani1, finpic, marpic, modev, recpic, webdev } from '../assets';

const Services = () => (
  <div className={`sm:mx-0 mx-6 sm:text-center text-center`}>
     <div className={`${styles.heading2} text-center p-2 mb-6`}>
        <h2>
          Our<span className='text-gradient'> Services</span>
        </h2>
      </div>
  <section className={`${styles.flexStart} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-[#D9D9D9] rounded-[20px] box-shadow hover:bg-[#91ebee] hover:scale-[1.03] ease-in-out duration-300 cursor-pointer`}>
  <div className="flex-1 flex flex-col">
    <h2 className={`font-outfit font-semibold xs:text-[48px] text-[40px] text-[#161616] xs:leading-[76.8px] leading-[66.8px] w-full`}>Recruitment</h2>
    <p className={`font-outfit font-normal text-[#161616] text-[18px] leading-[30.8px] max-w-[870px] mt-5`}>
    Discover top talent effortlessly with A Business Studio's Recruitment Services. We streamline your hiring process with personalized solutions, connecting you with qualified candidates that fit your company culture and goals. Let us find the perfect match for your team.
    </p>
  </div>

  <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
  <img src={recpic} alt="" style={{ width: '300px' }} />
  </div>
</section>

<section className={`${styles.flexStart} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-[#D9D9D9] rounded-[20px] box-shadow hover:bg-[#91ebee] hover:scale-[1.03] ease-in-out duration-300 cursor-pointer`}>
    <div className="flex-1 flex flex-col">
      <h2 className={`font-outfit font-semibold xs:text-[48px] text-[40px] text-[#161616] xs:leading-[76.8px] leading-[66.8px] w-full`}>Marketing</h2>
      <p className={`font-outfit font-normal text-[#161616] text-[18px] leading-[30.8px] max-w-[870px] mt-5`}>
      Elevate your brand with A Business Studio's Marketing Services. From strategy to execution, we offer digital, social, and content solutions to amplify your presence and drive results.
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
    <img src={marpic} alt="" style={{ width: '300px' }} />
    </div>
  </section>
  <section className={`${styles.flexStart} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-[#D9D9D9] rounded-[20px] box-shadow hover:bg-[#91ebee] hover:scale-[1.03] ease-in-out duration-300 cursor-pointer`}>
  <div className="flex-1 flex flex-col">
    <h2 className={`font-outfit font-semibold xs:text-[48px] text-[40px] text-[#161616] xs:leading-[76.8px] leading-[66.8px] w-full`}>Finance</h2>
    <p className={`font-outfit font-normal text-[#161616] text-[18px] leading-[30.8px] max-w-[870px] mt-5`}>
    Maximize financial potential with A Business Studio's expert Finance Services. From budgeting to risk management, we tailor solutions for your success.
    </p>
  </div>

  <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
   <img src={finpic} alt="" style={{width: '300px'}} />
      </div>
</section>

<section className={`${styles.flexStart} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-[#D9D9D9] rounded-[20px] box-shadow hover:bg-[#91ebee] hover:scale-[1.03] ease-in-out duration-300 cursor-pointer`}>
  <div className="flex-1 flex flex-col">
    <h2 className={`font-outfit font-semibold xs:text-[48px] text-[40px] text-[#161616] xs:leading-[76.8px] leading-[66.8px] w-full`}>Web Application Development</h2>
    <p className={`font-outfit font-normal text-[#161616] text-[18px] leading-[30.8px] max-w-[870px] mt-5`}>
    Empower your business with our Web App Development service at A Business Studio. Our skilled team crafts bespoke web applications to fit your needs perfectly. From design to deployment, we ensure a seamless journey, delivering cutting-edge solutions for your digital success.
    </p>
  </div>
  <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
  <img src={webdev} alt="" style={{ width: '300px' }} />
</div>
</section>

<section className={`${styles.flexStart} sm:my-6 my-6 ${styles.padding} sm:flex-row flex-col bg-[#D9D9D9] rounded-[20px] box-shadow hover:bg-[#91ebee] hover:scale-[1.03] ease-in-out duration-300 cursor-pointer`}>
    <div className="flex-1 flex flex-col text-black ">
      <h2 className={`font-outfit font-semibold xs:text-[48px] text-[40px] text-[#161616] xs:leading-[76.8px] leading-[66.8px] w-full`}>Mobile Application Development</h2>
      <p className={`font-outfit font-normal text-[#161616] text-[18px] leading-[30.8px] max-w-[870px] mt-5`}>
      Transform your app dreams into reality with A Business Studio. Our seasoned team creates tailored mobile applications from start to finish. From concept to launch, we've got you covered. Let's make your app idea a success together.
      </p>
    </div>
    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
    <img src={modev} alt="" style={{ width: '300px' }}/>
    </div>
  </section>






  </div>
);

export default Services