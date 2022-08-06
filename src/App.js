import React, {Fragment} from 'react';
import Header from './componenets/Layout/Header'
import MealsSummary from './componenets/Meals/MealsSummary';
import AvailableMeals from './componenets/Meals/AvailableMeals';

function App() {
  return (
   <Fragment>
    <Header/>
    <MealsSummary/>
    <AvailableMeals/>

   </Fragment>
  );
}

export default App;
