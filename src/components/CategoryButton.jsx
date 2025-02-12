import React from 'react';

const CategoryButton = ({ category, isActive, onClick }) => {
  const buttonClass = `px-6 py-3 rounded-full text-base font-semibold transition-colors duration-300 ${
    isActive
      ? 'bg-black text-white shadow-lg' // Active state
      : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:shadow-md' // Inactive state
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