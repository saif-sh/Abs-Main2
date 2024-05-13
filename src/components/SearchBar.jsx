import React from 'react';

const SearchBar = ({ formSubmit, value, handleSearchKey, clearSearch }) => (
  <div className="mb-8">
    <form onSubmit={formSubmit} className="flex items-center">
      <input
        type="text"
        placeholder="Search By Category"
        value={value}
        onChange={handleSearchKey}
        className="border border-gray-300 rounded-l-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {value && (
        <button
          type="button"
          onClick={clearSearch}
          className="bg-gray-200 text-gray-500 rounded-r-md px-4 py-2 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
        >
          X
        </button>
      )}
    </form>
  </div>
);

export default SearchBar;