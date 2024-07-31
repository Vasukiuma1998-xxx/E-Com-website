import React, { useState, useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import './SearchBar.css';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const { searchProducts } = useContext(ShopContext);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    searchProducts(query);
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
