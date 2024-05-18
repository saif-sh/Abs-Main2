import styless from "./style";
import { Navbar, Hero, Stats, About, Services, Testimonials, Blogcard, Footer } from './components';
import { whatslogo } from "./assets";
import { Navigate } from "react-router-dom";


const App = () => (
  <div className="bg-[url('./assets/bgimg.png')] bg-cover p-0">
    <div className=" w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>

        <Navbar />

      </div>

      <div className={` ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <Stats />
      <div className={` ${styles.paddingY} ${styles.flexStart} `}>
        <div className={`${styles.boxWidth} lg:mx-24`}>
          <About />
          <Services />
        </div>
      </div>
      <div className={`${styles.flexCenter}`}>
        <Testimonials />
      </div>
      <Blogcard />
      <Footer />
    </div>
    <div className="fixed bottom-0 right-0 p-5 z-6 mb-20 left-auto ">
      <a href="https://wa.me/919969764738?text=Hi,%20I'm%20interested%20in%20your%20[service]%20for%20my%20[business%20type/size].%20Could%20you%20please%20provide%20pricing%20and%20details?" target="_blank" rel="noopener noreferrer">
        <img src={whatslogo} width="80" alt="Business Studio WhatsApp" />
      </a>
    </div>
  </div>
);

export default App
