import React from 'react';

const Chip = ({ label, onClick }) => (
  <span
    className="bg-gray-100 text-gray-600 text-sm px-3 py-1 rounded-full cursor-pointer hover:bg-gray-200 transition-colors duration-300"
    onClick={onClick}
  >
    {label}
  </span>
);

export default Chip;