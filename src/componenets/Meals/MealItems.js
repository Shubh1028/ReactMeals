import classes from './MealItems.module.css'
import MealItemForm from './MealItemForm'

const MealItems = (props) => {
    const price = `$${props.price}`
return (
    <li className={classes['food-item']}>
        <div>
        <div className={classes.name}>{props.name}</div>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
        </div>
        <div>
            <MealItemForm/>
        </div>
    </li>

)
}

export default MealItems