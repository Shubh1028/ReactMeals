import classes from './MealItems.module.css'
import MealItemForm from './MealItemForm'

const MealItems = (props) => {
    const price = `Rs. ${props.price}`
return (
    <li className={classes['food-item']}>
        <div>
        <div className={classes.name}>{props.name}</div>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
       
        </div>
        <div>
            <MealItemForm key={props.id} id={props.id} item={props}/>
        </div>
    </li>

)
}

export default MealItems