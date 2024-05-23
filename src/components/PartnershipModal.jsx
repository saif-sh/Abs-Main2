import React, { useState, useRef, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { modfor } from '../assets';

const PartnershipModal = ({ showModal, setShowModal }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    message: '',
  });

  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowModal(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setShowModal]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = 'your_service_id_here';
    const templateId = 'your_template_id_here';
    const userId = 'your_user_id_here';

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phoneNumber: formData.phoneNumber,
      message: formData.message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, userId)
      .then(
        (response) => {
          console.log('Email sent successfully!', response.status, response.text);
          setFormData({ name: '', email: '', phoneNumber: '', message: '' });
          setShowModal(false);
        },
        (error) => {
          console.error('Failed to send email:', error);
        }
      );
  };

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm">
      <div ref={modalRef} className="bg-gray-100 rounded-lg max-w-4xl w-full mx-4">
        <div className="bg-gray-100 text-gray-500 rounded-lg shadow-xl overflow-hidden" style={{ maxHeight: '80vh' }}>
          <div className="md:flex w-full">
            <div className="hidden md:block w-1/2 bg-blue-500 py-10 px-10">
              <img src={modfor} alt="" className='mt-12'/>
            </div>

            <div className="w-full md:w-1/2 py-5 px-5 md:px-10">
              <div className="text-center mb-5">
                <h1 className="font-bold text-2xl text-gray-900">Contact Us</h1>
                <p>Please fill out the form below</p>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col space-y-4">
                  <div>
                    <label htmlFor="" className="text-xs font-semibold px-1">
                      Name
                    </label>
                    <div className="flex">
                      {/* Input field for name */}
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="" className="text-xs font-semibold px-1">
                      Email
                    </label>
                    <div className="flex">
                      {/* Input field for email */}
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500"
                        placeholder="johndoe@example.com"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="" className="text-xs font-semibold px-1">
                      Phone Number
                    </label>
                    <div className="flex">
                      {/* Input field for phone number */}
                      <input
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        className="w-full py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500"
                        placeholder="123-456-7890"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="" className="text-xs font-semibold px-1">
                      Message
                    </label>
                    <div className="flex">
                      {/* Textarea for message */}
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-blue-500"
                        rows="4"
                        placeholder="Enter your message here..."
                        required
                      ></textarea>
                    </div>
                  </div>
                  <div className="flex justify-center space-x-4">
                    <button
                      type="button"
                      onClick={() => setShowModal(false)}
                      className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnershipModal;

