import React from "react";
import { contactConfig } from "../constants";

export default function ContactUs() {
  return (
    <div className="container mx-auto px-4">
      <div className="mb-20 mt-12">
        <div className="lg:w-2/3">
          <h1 className="text-5xl mb-4 text-dimWhite font-bold">Contact Us</h1>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row lg:items-center mb-20">
        <div className="lg:w-5/12 mb-10 lg:mb-0  text-dimWhite font-semibold">
          <h3 className="text-2xl py-4 ">Get in touch</h3>
          <address>
            <strong>Email:</strong>{" "}
            <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>
              {contactConfig.YOUR_EMAIL}
            </a>
            <br />
            <br />
            {contactConfig.hasOwnProperty("YOUR_FONE") ? (
              <p>
                <strong>Phone:</strong> {contactConfig.YOUR_FONE}
              </p>
            ) : (
              ""
            )}
          </address>
          <p>{contactConfig.description}</p>
        </div>

        <div className="lg:w-7/12">
          <form className="contact__form w-full">
            <div className="flex flex-wrap -mx-3">
              <div className="w-1/2 px-3 mb-6">
                <input
                  className="appearance-none block w-full bg-gray-200 bg-opacity-5 text-gray-700 border border-b border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="name"
                  name="name"
                  placeholder="First Name"
                  type="text"
                  required
                />
              </div>
              <div className="w-1/2 px-3 mb-6">
                <input
                  className="appearance-none block w-full bg-gray-200 bg-opacity-5 text-gray-700 border border-b-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="name"
                  name="name"
                  placeholder="Last Name"
                  type="text"
                  required
                />
              </div>
              <div className="w-1/2 px-3 mb-6">
                <input
                  className="appearance-none block w-full bg-gray-200 bg-opacity-5 text-gray-700 border border-b-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="email"
                  name="email"
                  placeholder="Email"
                  type="email"
                  required
                />
              </div>
              <div className="w-1/2 px-3 mb-6">
                <input
                  className="remove-arrow appearance-none block w-full bg-gray-200 bg-opacity-5 text-gray-700 border border-b-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="phone"
                  name="number"
                  placeholder="Mobile Number"
                  type="number"
                  required
                />
              </div>
            </div>
            <textarea
              className="appearance-none block w-full bg-gray-200 bg-opacity-5 text-gray-700 border border-r-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="message"
              name="message"
              placeholder="Message"
              rows="5"
              required
            ></textarea>
            <br />
            <div className="flex flex-wrap -mx-3 justify-center items-center">
              <div className="w-full px-3 flex justify-center items-center">
                <button
                  className="bg-[#D9D9D9] hover:bg-blue-700 text-black font-bold py-2 px-4 rounded-lg w-36"
                  type="submit"
                >
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}