import React, { useContext } from "react";
import { FaShoppingCart } from 'react-icons/fa'

import "./HeaderCart.css";

const HeaderCart = (props) => {


  return (
    <button className="button-header">
      <span className="icon">
        {/* <CartIcon /> */}
        <FaShoppingCart/>
      </span>
      <span>Your Cart</span>
      <span className="badge">0</span>
    </button>
  );
};

export default HeaderCart;