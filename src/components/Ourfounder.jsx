import React from 'react'
import styles from '../style';
import { rect } from '../assets';
import CTA from './CTA'

const About = () =>(
  <section className={` text-center ${styles.flexStart} sm:my-12 my-2 sm:pr-16 sm:pl-[120px] px-6 sm:py-12 py-4 pl-4 pb-8 sm:flex-row flex-col bg-gray-800 bg-opacity-45 rounded-[20px] box-shadow `}>
 
 <div className={`flex justify-center items-center sm:ml-10 sm:mt-0 mt-10 `}>
  <img
            src={rect}
            alt="About Image"
            className="w-full h-full object-cover"
          />
  </div>

  <div className="flex-1 flex flex-col lg:mt-12 lg:pl-20">
    <h2 className={styles.heading2}>Meet the Team</h2>
    <p className={`${styles.paragraph} text-left max-w-[720px] mt-10 ml-12`}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum molestie urna ac libero luctus lobortis. Donec ac ipsum scelerisque, interdum ipsum quis, dapibus dui.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum molestie urna ac libero luctus lobortis. Donec ac ipsum scelerisque, interdum ipsum quis, dapibus dui.
    </p>
  </div>

</section>
    
  )


export default About