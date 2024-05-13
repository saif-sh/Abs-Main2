// src/components/Chip.jsx
import React from 'react';

const Chip = ({ label, onClick }) => (
  <span
    className="bg-gradient-to-r from-blue-500 to-blue-300 text-white text-sm px-2 py-1 rounded-full cursor-pointer"
    onClick={onClick}
  >
    {label}
  </span>
);

export default Chip;