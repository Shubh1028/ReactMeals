import React, { useContext } from "react";
import { FaShoppingCart } from 'react-icons/fa'
import CartContext from "../../Store/cart-context";

import "./HeaderCart.css";

const HeaderCart = (props) => {
  const ctx = useContext(CartContext)
  // console.log(ctx.items)
  // console.log(ctx.items.quantity)
  let quantity = 0;
  ctx.items.map(item => {
    quantity += Number(item.quantity)
  })


  return (
    <button className="button-header" onClick={props.onClick}>
      <span className="icon">
        <FaShoppingCart/>
      </span>
      <span>Your Cart</span>
      <span className="badge">{quantity}</span>
    </button>
  );
};

export default HeaderCart;