import './MealItems.css'

const MealItems = (props) => {
    const price = `$${props.price}`
return (
    <li className='food-item'>
        <div>{props.name}</div>
        <div>{props.description}</div>
        <div>{price}</div>
        <hr/>
    </li>

)
}

export default MealItems