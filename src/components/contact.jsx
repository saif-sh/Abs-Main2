import React, { useState } from "react";
import { contactConfig } from "../constants";
import { motion } from "framer-motion";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First Name is required";
    if (!formData.lastName) newErrors.lastName = "Last Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.phone) newErrors.phone = "Phone is required";
    if (!formData.message) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-transparent p-4 sm:p-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-6xl bg-black/10 dark:bg-black/30 backdrop-blur-sm rounded-2xl border border-black dark:border-white p-6 lg:p-12"
      >
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-5xl font-bold text-black dark:text-white mb-4">
            Contact Us
          </h1>
          <p className="text-black dark:text-white text-sm sm:text-lg max-w-2xl mx-auto">
            We'd love to hear from you! Whether you have a question, feedback, or
            just want to say hello, feel free to reach out.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:w-5/12 bg-black/5 dark:bg-black/20 backdrop-blur-sm p-6 sm:p-8 rounded-xl border border-black dark:border-white"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-4 sm:mb-6">
              Get in touch
            </h3>
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-black dark:bg-white rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 sm:h-5 sm:w-5 text-white dark:text-black"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div className="ml-3 sm:ml-4">
                  <p className="text-black dark:text-white text-sm sm:text-base">Email us at</p>
                  <a
                    href={`mailto:${contactConfig.YOUR_EMAIL}`}
                    className="text-black dark:text-white font-semibold text-sm sm:text-base hover:underline"
                  >
                    {contactConfig.YOUR_EMAIL}
                  </a>
                </div>
              </div>

              {contactConfig.hasOwnProperty("YOUR_FONE") && (
                <div className="flex items-center">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-black dark:bg-white rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 sm:h-5 sm:w-5 text-white dark:text-black"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div className="ml-3 sm:ml-4">
                    <p className="text-black dark:text-white text-sm sm:text-base">Call us at</p>
                    <p className="text-black dark:text-white font-semibold text-sm sm:text-base">
                      {contactConfig.YOUR_FONE}
                    </p>
                  </div>
                </div>
              )}

              <div className="flex items-center">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-black dark:bg-white rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 sm:h-5 sm:w-5 text-white dark:text-black"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="ml-3 sm:ml-4">
                  <p className="text-black dark:text-white text-sm sm:text-base">Visit us at</p>
                  <p className="text-black dark:text-white font-semibold text-sm sm:text-base">
                    {contactConfig.description}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:w-7/12 bg-black/5 dark:bg-black/20 backdrop-blur-sm p-6 sm:p-8 rounded-xl border border-black dark:border-white"
          >
            <form className="w-full" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <input
                    className="w-full bg-white/50 dark:bg-black/50 border border-black dark:border-white rounded-lg py-2 sm:py-3 px-3 sm:px-4 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent placeholder-black/70 dark:placeholder-white/70 text-sm sm:text-base"
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                  {errors.firstName && (
                    <p className="text-black dark:text-white text-xs sm:text-sm mt-1">{errors.firstName}</p>
                  )}
                </div>

                <div>
                  <input
                    className="w-full bg-white/50 dark:bg-black/50 border border-black dark:border-white rounded-lg py-2 sm:py-3 px-3 sm:px-4 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent placeholder-black/70 dark:placeholder-white/70 text-sm sm:text-base"
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name"
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                  {errors.lastName && (
                    <p className="text-black dark:text-white text-xs sm:text-sm mt-1">{errors.lastName}</p>
                  )}
                </div>

                <div>
                  <input
                    className="w-full bg-white/50 dark:bg-black/50 border border-black dark:border-white rounded-lg py-2 sm:py-3 px-3 sm:px-4 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent placeholder-black/70 dark:placeholder-white/70 text-sm sm:text-base"
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  {errors.email && (
                    <p className="text-black dark:text-white text-xs sm:text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <input
                    className="w-full bg-white/50 dark:bg-black/50 border border-black dark:border-white rounded-lg py-2 sm:py-3 px-3 sm:px-4 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent placeholder-black/70 dark:placeholder-white/70 text-sm sm:text-base"
                    id="phone"
                    name="phone"
                    placeholder="Mobile Number"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                  {errors.phone && (
                    <p className="text-black dark:text-white text-xs sm:text-sm mt-1">{errors.phone}</p>
                  )}
                </div>
              </div>

              <div className="mt-4 sm:mt-6">
                <textarea
                  className="w-full bg-white/50 dark:bg-black/50 border border-black dark:border-white rounded-lg py-2 sm:py-3 px-3 sm:px-4 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent placeholder-black/70 dark:placeholder-white/70 text-sm sm:text-base"
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
                {errors.message && (
                  <p className="text-black dark:text-white text-xs sm:text-sm mt-1">{errors.message}</p>
                )}
              </div>

              <div className="mt-6 sm:mt-8">
                <button
                  className="w-full bg-black dark:bg-white text-white dark:text-black font-semibold py-2 sm:py-3 px-6 sm:px-8 rounded-lg hover:opacity-90 transition-opacity duration-300 text-sm sm:text-base"
                  type="submit"
                >
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}