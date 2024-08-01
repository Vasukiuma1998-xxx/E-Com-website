import React, { createContext, useEffect, useState } from "react";
import { toast } from 'react-toastify';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < 300 + 1; index++) {
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {
    const [all_product, setAll_Product] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [cartItems, setCartItems] = useState(getDefaultCart());
    const [isUserSignedIn, setIsUserSignedIn] = useState(false);

    useEffect(() => {
        fetch('https://e-com-website-backend.onrender.com/allproducts')
            .then((response) => response.json())
            .then((data) => {
                setAll_Product(data);
                setFilteredProducts(data);

     } )
     .catch(error => console.error('Error fetching products:', error));

        const authToken = localStorage.getItem('auth-token');
        if (authToken) {
            setIsUserSignedIn(true);

            fetch('https://e-com-website-backend.onrender.com/getcart', {
                method: 'POST',
                headers: {
                    Accept: 'application/form-data',
                    'auth-token': authToken,
                    'Content-Type': 'application/json',
                },
                body: "",
            })
                .then((response) => response.json())
                .then((data) => setCartItems(data))
                .catch(error => console.error('Error fetching cart:', error));
        }
    }, []);

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        if (isUserSignedIn) {
            fetch('https://e-com-website-backend.onrender.com/addtocart', {
                method: 'POST',
                headers: {
                    Accept: 'application/form-data',
                    'auth-token': localStorage.getItem('auth-token'),
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ "itemId": itemId }),
            })
                .then((response) => response.json())
                .then((data) => console.log(data));

            toast.success("Added to cart Successfully");
        }
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
        if (isUserSignedIn) {
            fetch('https://e-com-website-backend.onrender.com/removefromcart', {
                method: 'POST',
                headers: {
                    Accept: 'application/form-data',
                    'auth-token': localStorage.getItem('auth-token'),
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ "itemId": itemId }),
            })
                .then((response) => response.json())
                .then((data) => console.log(data));
        }
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(item));
                totalAmount += itemInfo.new_price * cartItems[item];
            }
        }
        return totalAmount;
    }

    const getTotalCartItems = () => {
        let totalItem = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    }
    const searchProducts = (query) => {
        if (query) {
            const results = all_product.filter(product =>
                product.name.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredProducts(results);
        } else {
            setFilteredProducts(all_product);
        }
    }
    const contextvalue = {
        getTotalCartAmount,
        getTotalCartItems,
        all_product,
        filteredProducts,
        cartItems,
        addToCart,
        removeFromCart,
        searchProducts,
        isUserSignedIn
    };

    return (
        <ShopContext.Provider value={contextvalue}>
            {props.children}
        </ShopContext.Provider>
    );
}

export default ShopContextProvider;
