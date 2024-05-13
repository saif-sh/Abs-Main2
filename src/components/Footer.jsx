import styles from "../style";
import { logol } from "../assets";
import { footerLinks, socialMedia } from "../constants"

const Footer = () => (
  <section className={`${styles.flexCenter} sm:flex,py-16 py-6  flex-col bg-primary `}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-1 flex flex-col justify-start pl-3">
        {/* <img src={logol} alt="Logo"
          className="w-[473px] h-[138px] object-contain" /> */}
        <h2 className="p-2 sm:font-[12px] flex font-outfit text-[42px] font-[500] text-white align-text-bottom ">A Business Studio</h2>
        {/* <p className={`${styles.paragraph} mt-2 max-w-[412px] ml-10`}>A Business Studio is a platform where business challenges are accepted and solution is delivered in exchange of client satisfaction and growth acceleration to your business.</p>*/}

      </div>
      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10  mr-8">
        {footerLinks.map((footerlink) => (
          <div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                    }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[4px] border-t-[#3F3E45] px-5 pb-o">
      <p className="font-poppins font-normal text-center text-[14px] leading-[27px] text-white">
        Copyright Ⓒ 2022 A Business Studio. All Rights Reserved.
      </p>

      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[32px] h-[32px] object-contain cursor-pointer hover:fill-[#91ebee] ${index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
              }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  </section>
)


export default Footer