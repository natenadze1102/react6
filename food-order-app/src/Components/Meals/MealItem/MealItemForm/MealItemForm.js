import classes from './MealItemForm.module.css';

const MealItemForm = () => {
    return (
        <form className={classes.form}>
            <label for="amount">Amount</label>
            <input name='amount' id="amount"></input>
        </form>
    )
}

export default MealItemForm;