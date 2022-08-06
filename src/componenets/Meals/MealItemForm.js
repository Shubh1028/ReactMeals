import classes from './MealItemForm.module.css'

const MealItemForm = (props) => {
    return (<form className={classes.form}>
        <div className={classes.input}>
        <label htmlFor="amount">Amount</label>
        <input id='amount' type='number' min='1' max='5' step='1'/>
        </div>
        <button className={classes.btn}>+ Add</button>
    </form>)
}
export default MealItemForm