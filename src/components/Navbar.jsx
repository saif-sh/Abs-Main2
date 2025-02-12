import { useState } from "react";

import { close, menu, logo } from "../assets";
import { navLinks } from "../constants";
import styles from "../style";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-[70rem] flex px-8 py-1 pl-2 navbar backdrop-opacity-5 bg-black/50 rounded-2xl mt-6">
      <a href="/" className="flex items-center">
        <img 
          src={logo} 
          alt="ABS" 
          className="w-[56px] h-[56px] rounded-lg transition-transform duration-300 hover:scale-105" 
        />
        <h2 className="sm:flex hidden font-outfit mb-1.5 text-[24px] font-bold text-white text-center pt-[8px] pl-[14px]">
          A Business Studio
        </h2>
      </a>
      
      {/* Desktop Navigation */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            onClick={() => setActive(nav.title)}
            className={`font-poppins font-normal cursor-pointer text-[20px] transition-transform duration-300 ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"} hover:scale-105`}
          >
            <a href={`${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      {/* Mobile Navigation */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain transition-transform duration-300 hover:scale-110"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${!toggle ? "hidden" : "flex"} p-6 bg-black absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                onClick={() => setActive(nav.title)}
                className={`font-poppins font-medium cursor-pointer text-[16px] transition-transform duration-300 ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"} hover:scale-105`}
              >
                <a href={`${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
