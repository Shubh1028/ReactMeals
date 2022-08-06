import React, {Fragment} from 'react'
import classes from './Header.module.css'
import meals from '../../Assets/meals.jpg'
import HeaderCart from './HeaderCart'

const Header = (props) => {
    return (
       <Fragment>
        <header className={classes.header}>
           <h1> ReactMeals</h1>
           {/* <button>Cart</button> */}
           <HeaderCart/>
        </header>
        <div className={classes['main-image']}>
            <img src={meals}/>
        </div>
       </Fragment>
    )
}

export default Header