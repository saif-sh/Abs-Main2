import styles from "../style";
import { Navbar, TextSlider, Footer, Ourfounder,Team} from '../components';

const Aboutpg = () => (
  <div className="bg-[url('./assets/bgimg.png')] bg-cover p-0">
    <div className=" w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>

        <Navbar />

      </div>

      <div className={` ${styles.paddingY} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth} `}>
          <div className={`${styles.flexCenter} flex-col`}>
            <h1 className="text-[#D9D9D9] font-bold text-[52px] tracking-[8px] sm:text-left text-center">About Us</h1>
            <p className="text-white/75 xs:ml-10 sm:text-left text-center">Welcome to A Business Studio. One Stop For All Your Business Needs</p>
          </div>
          <Ourfounder />
          <Team/>
          <section className={`${styles.flexStart} sm:mb-6 sm:mt-[80px] my-20 sm:px-16 px-1 sm:py-20 py-4  sm:flex-row flex-col bg-[#D9D9D9] rounded-[100px] box-shadow lg:mx-40 group sm:mx-0 mx-4`}>
            <div className="flex-1 flex flex-col text-black  ">
              <h2 className={`font-outfit font-semibold xs:text-[48px] text-[24px] text-[#161616] xs:leading-[76.8px] leading-[66.8px] w-full text-center group-hover:scale-[1.03] ease-in-out duration-300 group-hover:text-[#2632A1]`}>Our Mission</h2>
              <p className={`font-outfit font-semibold sm:text-[24px] text-[18px] leading-[30.8px] mt-5 text-center group-hover:scale-[1.03] ease-in-out duration-300 group-hover:text-[#2632A1] lg:mx-20 md:mx-20 mx-12 sm:pb-0 pb-10 `}>
              A Business Studio is your trusted partner for premium outsourcing solutions. We specialize in optimizing processes, enhancing efficiency, and driving growth for businesses across diverse industries. Let us handle the details while you focus on what matters most – your core business goals. Connect with us today and experience the power of strategic outsourcing!              </p>
            </div>
          </section>
          <div className="lg:mt-32">
          <TextSlider/>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  </div>
);

export default Aboutpg