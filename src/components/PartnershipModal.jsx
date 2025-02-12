import React, { useState, useRef, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { motion, AnimatePresence } from 'framer-motion';

const PartnershipModal = ({ showModal, setShowModal }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowModal(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [setShowModal]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.phoneNumber) newErrors.phoneNumber = 'Phone number is required';
    if (!formData.message) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const serviceId = 'your_service_id_here';
    const templateId = 'your_template_id_here';
    const userId = 'your_user_id_here';

    emailjs.send(serviceId, templateId, formData, userId)
      .then(() => {
        setFormData({ name: '', email: '', phoneNumber: '', message: '' });
        setShowModal(false);
      })
      .catch((error) => console.error('Failed to send email:', error));
  };

  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-80 backdrop-blur-md"
        >
          <motion.div
            ref={modalRef}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 250, damping: 20 }}
            className="bg-black text-white rounded-xl w-full max-w-lg p-8 shadow-xl"
          >
            <h1 className="text-2xl font-semibold text-center mb-6">Let's Connect</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              {['name', 'email', 'phoneNumber', 'message'].map((field) => (
                <div key={field}>
                  <label className="block text-sm font-medium mb-1 capitalize">{field}</label>
                  {field !== 'message' ? (
                    <input
                      type={field === 'email' ? 'email' : 'text'}
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      className="w-full bg-transparent border border-gray-600 rounded-lg py-2 px-4 focus:ring-2 focus:ring-gray-400 outline-none"
                      placeholder={`Enter your ${field}`}
                    />
                  ) : (
                    <textarea
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      className="w-full bg-transparent border border-gray-600 rounded-lg py-2 px-4 focus:ring-2 focus:ring-gray-400 outline-none"
                      rows="4"
                      placeholder="Enter your message"
                    ></textarea>
                  )}
                  {errors[field] && <p className="text-red-500 text-sm mt-1">{errors[field]}</p>}
                </div>
              ))}
              <div className="flex justify-end space-x-3 mt-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="border border-gray-600 text-white py-2 px-6 rounded-lg hover:bg-gray-800 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-white text-black py-2 px-6 rounded-lg hover:bg-gray-300 transition"
                >
                  Submit
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PartnershipModal;
