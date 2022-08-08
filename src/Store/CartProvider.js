import React, {useState} from 'react';

import CartContext from "./cart-context";

const CartProvider = (props) => {
    const [items, updateItem] = useState([])
    const addItemToCartHandler = (item) => {
        updateItem([...items, item])

    }

    const removeItemToCartHandler = (id) => {}

    const cartContext = {
        items: items,
        totalAmount: 0,
        addItem: addItemToCartHandler,
        removeItem: removeItemToCartHandler

    }

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider;