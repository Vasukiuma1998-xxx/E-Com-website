import React, { useState, useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import './SearchBar.css';
import '@fortawesome/fontawesome-free/css/all.css'; // Import Font Awesome CSS

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const { searchProducts } = useContext(ShopContext);

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
        onKeyDown={(e) => e.key === 'Enter' && handleSearch()} // Optional: trigger search on Enter key press
      />
      <i className="fas fa-search search-icon"></i>
    </div>
    
  );
};

export default SearchBar;
