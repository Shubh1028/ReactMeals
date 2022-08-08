import React, {useContext} from 'react';
import Modal from '../UI/Modal';
import classes from './CartOrder.module.css';
import CartContext from '../../Store/cart-context';

const CartOrder = (props) => {
  const ctx = useContext(CartContext)
  const cartItems = (
    <ul className={classes['cart-items']}>
      {ctx.items.map((item) => (
        <li>Name: {item.name} Price: {item.price} Quantity: {item.quantity}</li>
      ))}
    </ul>
  );



  return (
    <Modal onHideCart={props.onHideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onHideCart}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default CartOrder;