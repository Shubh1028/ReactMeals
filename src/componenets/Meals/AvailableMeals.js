import React from 'react'
import classes from './AvailableMeals.module.css'

import MealItems from './MealItems';

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];


  const AvailableMeals = (props) => {
    const mealsItems = DUMMY_MEALS.map((item) => <MealItems name={item.name} description={item.description} price={item.price}/>)
    return (
        <section className={classes['meals-container']}>
            <ul>{mealsItems}</ul>
        </section>

    )

  }

  export default AvailableMeals;