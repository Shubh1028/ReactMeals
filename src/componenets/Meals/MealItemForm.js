import React, {useContext, useState} from 'react'
import classes from './MealItemForm.module.css'
import CartContext from '../../Store/cart-context'


const MealItemForm = (props) => {

    const ctx = useContext(CartContext)
    const addItemToCart = (event) => {
        event.preventDefault();
        const quantity = document.getElementById(props.id).value;
       ctx.addItem({...props.item, quantity: Number(quantity)})
    //    console.log(props)
    }


    return (<form className={classes.form}>
        <div className={classes.input}>
        <label htmlFor="amount">Amount</label>
        <input id={props.id} type='number'/>
        </div>
        <button className={classes.btn} onClick={addItemToCart}>+ Add</button>
    </form>)
}
export default MealItemForm