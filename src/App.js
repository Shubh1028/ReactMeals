import React, {useState} from 'react';
import Header from './componenets/Layout/Header'
import Meals from './componenets/Meals/Meals'
import CartOrder from './componenets/Cart/CartOrder';
import CartProvider from './Store/CartProvider';

function App(props) {

  const [cartItem, showCartItem] = useState(false)

  const showCartHandler = () => {
    showCartItem(true);
  }

  const hideCartHandler = () => {
    showCartItem(false);
  }


  return (
   <CartProvider>
   {cartItem && <CartOrder onHideCart={hideCartHandler}/>  }
    <Header onShowCart={showCartHandler}/>
    <main>
    <Meals/>
    </main>

   </CartProvider>
  );
}

export default App;
