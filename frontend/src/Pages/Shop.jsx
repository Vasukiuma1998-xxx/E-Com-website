import React from "react";
import { ShopContext } from '../../Context/ShopContext';
import Item from '../Item/Item';
import Hero from "../Components/Hero/Hero";
import Popular from "../Components/Popular/Popular";
import Offer from "../Components/Offers/Offer";
import NewCollections from "../Components/NewCollections/NewCollections";
import NewsLetter from "../Components/NewsLetter/NewsLetter";

const Shop=()=>{
    const { filteredProducts } = useContext(ShopContext);
    return(
        <div>
            <Hero/>
            <Popular/>
            <Offer/>
            <NewCollections/>
            <NewsLetter/>
            <div className="product-list">
                {filteredProducts.map(product => (
                    <Item key={product.id} product={product} />
                ))}
            </div>
           
        </div>
    )
}
export default Shop