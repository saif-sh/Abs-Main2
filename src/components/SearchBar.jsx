import React from 'react';

const SearchBar = ({ formSubmit, value, handleSearchKey, clearSearch }) => (
  <div className="mb-8">
    <form onSubmit={formSubmit} className="flex items-center shadow-sm">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search By Category"
        value={value}
        onChange={handleSearchKey}
        className="border border-gray-200 rounded-l-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent bg-white text-gray-700"
      />

      {/* Clear Button (visible only when there's input) */}
      {value && (
        <button
          type="button"
          onClick={clearSearch}
          className="bg-gray-100 text-gray-600 rounded-r-md px-4 py-2 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-colors duration-300"
        >
          X
        </button>
      )}
    </form>
  </div>
);

export default SearchBar;