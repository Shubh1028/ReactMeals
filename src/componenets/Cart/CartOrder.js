import React, {useContext} from 'react';
import Modal from '../UI/Modal';
import classes from './CartOrder.module.css';
import CartContext from '../../Store/cart-context';
import CartItem from './CartItem';

const CartOrder = (props) => {

  const ctx = useContext(CartContext)

  const removeHandler = (id) => {
    ctx.removeItem(id);
  }


  // console.log(ctx.items)
  // const amount = ctx.totalAmount
  const cartItems = (
    <ul className={classes['cart-items']}>
      {ctx.items.map((item) => ( ctx.totalAmount += item.quantity * item.price,
       <CartItem key={item.id} name={item.name} price={item.price} quantity={item.quantity} onRemove={removeHandler.bind(null,item.id)}/>
      ))}
    </ul>
  );



  return (
    <Modal onHideCart={props.onHideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>Rs {ctx.totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onHideCart}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default CartOrder;