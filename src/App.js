import React, {Fragment, useState} from 'react';
import Header from './componenets/Layout/Header'
import Meals from './componenets/Meals/Meals'
import CartOrder from './componenets/Cart/CartOrder';

function App(props) {

  const [cartItem, showCartItem] = useState(false)

  const showCartHandler = () => {
    showCartItem(true);
  }

  const hideCartHandler = () => {
    showCartItem(false);
  }


  return (
   <Fragment>
   {cartItem && <CartOrder onHideCart={hideCartHandler}/>  }
    <Header onShowCart={showCartHandler}/>
    <main>
    <Meals/>
    </main>

   </Fragment>
  );
}

export default App;
