import React, { useState } from 'react';
import PartnershipModal from './PartnershipModal'; // Import the modal component
import { footerLinks, socialMedia } from '../constants';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [showModal, setShowModal] = useState(false); // State variable to control modal visibility

  // Function to toggle modal visibility
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  // Function to scroll to top
  const scrollToTop = () => {
    document.documentElement.style.scrollBehavior = 'smooth';
    window.scrollTo({ top: 0 });
    // Reset scroll behavior to auto after the animation
    setTimeout(() => {
      document.documentElement.style.scrollBehavior = 'auto';
    }, 1000);
  };

  return (
    <section className=" py-6 flex flex-col bg-primary px-6">
      {/* Render modal component */}
      <PartnershipModal showModal={showModal} setShowModal={setShowModal} />

      <div className="flex flex-col md:flex-row mb-8 w-full">
        <div className="flex-1 flex flex-col justify-start pl-3">
          <h2 className="p-2 sm:font-[12px] flex font-outfit text-[42px] font-[500] text-white align-text-bottom ">A Business Studio</h2>
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
                    {/* Updated to use Link component */}
                    {link.link.startsWith("/") ? (
                      <Link to={link.link} onClick={scrollToTop}>
                        {link.name}
                      </Link>
                    ) : (
                      <span onClick={link.name === "Become a Partner" ? toggleModal : () => window.open(link.link)}>{link.name}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[4px] border-t-[#3F3E45] px-5 pb-0">
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
  );
};

export default Footer;
