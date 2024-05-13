// src/components/CategoryButton.jsx
import React from 'react';

const CategoryButton = ({ category, isActive, onClick }) => {
  const buttonClass = `px-4 py-2 rounded-md ${
    isActive
      ? 'bg-blue-500 text-white'
      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
  }`;

  return (
    <button
      className={buttonClass}
      onClick={() => onClick(category)}
    >
      {category}
    </button>
  );
};

export default CategoryButton;