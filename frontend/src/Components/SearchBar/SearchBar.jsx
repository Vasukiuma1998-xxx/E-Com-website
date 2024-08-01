import React, { useState, useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import './SearchBar.css';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const { searchProducts } = useContext(ShopContext);
  console.log('searchProducts:', searchProducts); // Add this line to debug

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    if (typeof searchProducts === 'function') {
      searchProducts(query);
    } else {
      console.error('searchProducts is not a function:', searchProducts);
    }
  };
  return (
    <div className="search-bar">
      <input 
        type="text" 
        value={query} 
        onChange={handleInputChange} 
        placeholder="Search for products..." 
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
