import styles from "../style";
import { Navbar, Sercard, Footer } from '../components';

const Servicespg = () => (
  <div className="bg-[url('./assets/bgimg.png')] bg-cover p-0">
    <div className=" w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <Navbar />
      </div>
      <div className={` ${styles.paddingY} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth} lg:mx-24`}>
          <Sercard />
        </div>
      </div>
      <Footer />
    </div>
  </div>
);

export default Servicespg;