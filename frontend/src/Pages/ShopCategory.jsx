import React, { useState, useContext } from "react";
import './CSS/ShopCategory.css';
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from '../Components/Assets/dropdown_icon.png';
import Item from "../Components/Item/Item";

const ShopCategory = (props) => {
    const { all_product } = useContext(ShopContext);
    const [sortOrder, setSortOrder] = useState('asc'); // State to manage sorting order
    const [sortedProducts, setSortedProducts] = useState(all_product); // State to manage sorted products

    // Function to handle sorting
    const handleSort = () => {
        const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
        const sorted = [...sortedProducts].sort((a, b) => {
            if (newSortOrder === 'asc') {
                return a.new_price - b.new_price;
            } else {
                return b.new_price - a.new_price;
            }
        });
        setSortedProducts(sorted);
        setSortOrder(newSortOrder);
    };

    // Filter products by category
    const filteredProducts = sortedProducts.filter(item => item.category === props.category);

    return (
        <div className="shop-category">
            <img className='shopcategory-banner' src={props.banner} alt="" />
            <div className="shopcategory-indexSort">
                <p>
                    <span>Showing 1-12</span> out of {filteredProducts.length} products
                </p>
                <div className="shopcategory-sort" onClick={handleSort}>
                    sort by <img src={dropdown_icon} alt="" />
                </div>
            </div>
            <div className="shopcategory-products">
                {filteredProducts.slice(0, 12).map((item, i) => (
                    <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                ))}
            </div>
            <div className="shopcategory-loadmore">
                Explore More
            </div>
        </div>
    );
};

export default ShopCategory;
