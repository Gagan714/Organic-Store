import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchClick = () => {
    onSearch(searchTerm); // Trigger search on button click
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSearch(searchTerm); // Trigger search on "Enter" key press
    }
  };

  return (
    <div className='w-full flex justify-center items-center mb-4 ml-5'>
      <input
        type='text'
        placeholder='Search products...'
        value={searchTerm}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}  /* Handle Enter key */
        className='border border-gray-300 rounded-lg p-2 w-80'
      />
      <button
        onClick={handleSearchClick}
        className='ml-2 bg-green-600 text-white px-4 py-2 rounded-lg'>
        Search
      </button>
    </div>
  );
}

export default SearchBar;
