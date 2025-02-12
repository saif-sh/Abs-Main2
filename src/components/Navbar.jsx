import { useState, useEffect } from "react";
import { close, menu, logo } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false); // Hide on scroll down
      } else {
        setShowNavbar(true); // Show on scroll up
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full mt-4 pb-20">
      <nav
        className={`fixed w-full flex px-6 py-3 navbar backdrop-blur-md bg-black/50 rounded-xl shadow-lg max-w-6xl z-50 left-1/2 transform -translate-x-1/2 transition-transform duration-300 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img src={logo} alt="A Business Studio" className="w-12 h-12 rounded-lg transition-transform duration-300 hover:scale-105" />
          <h2 className="sm:flex hidden font-outfit text-lg font-semibold text-white pl-3">A Business Studio</h2>
        </a>

        {/* Desktop Navigation */}
        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              onClick={() => setActive(nav.title)}
              className={`font-poppins font-normal cursor-pointer text-lg transition duration-300 ${
                active === nav.title ? "text-white" : "text-gray-400"
              } ${index === navLinks.length - 1 ? "mr-0" : "mr-8"} hover:text-white hover:scale-105`}
            >
              <a href={nav.id}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <button
            onClick={() => setToggle(!toggle)}
            className="z-50 relative focus:outline-none"
          >
            <img src={toggle ? close : menu} alt="menu" className="w-8 h-8 transition-transform duration-300 hover:scale-110" />
          </button>

          {/* Background Blur Effect */}
          {toggle && (
            <div 
              className="fixed inset-0 bg-black/50 backdrop-blur-md z-40"
              onClick={() => setToggle(false)}
            ></div>
          )}

          {/* Sidebar Menu */}
          <div
            className={`fixed top-0 right-0 w-[75%] h-screen bg-black z-50 p-6 flex flex-col justify-between transform transition-transform duration-300 ease-in-out ${
              toggle ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-white text-2xl focus:outline-none"
              onClick={() => setToggle(false)}
            >
              &times;
            </button>

            {/* Header */}
            <h2 className="text-white text-2xl font-bold text-center mt-4 tracking-wide">
              A Business Studio
            </h2>

            {/* Navigation Links */}
            <ul className="list-none flex flex-col gap-6 mt-6">
              {navLinks.map((nav, index) => (
                <li key={nav.id} className="text-center">
                  <a
                    href={nav.id}
                    onClick={() => {
                      setActive(nav.title);
                      setToggle(false);
                    }}
                    className={`block text-lg font-poppins font-medium cursor-pointer transition-colors duration-300 ${
                      active === nav.title ? "text-white" : "text-gray-400"
                    } hover:text-white`}
                  >
                    {nav.title}
                  </a>
                  {index !== navLinks.length - 1 && (
                    <hr className="border-gray-600 w-3/4 mx-auto my-2" />
                  )}
                </li>
              ))}
            </ul>

            {/* CTA Button - WhatsApp */}
            <div className="mb-6">
              <a
                href="https://wa.me/918368679354"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-3/4 mx-auto text-center bg-green-500 text-white py-3 rounded-lg font-semibold text-lg transition-transform duration-300 hover:scale-105"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
