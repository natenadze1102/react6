import { DUMMY_MEALS } from "./dummy-meals";
import classes from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';
import Card from "../UI/Card/Card";

const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map(meal => <MealItem key={meal.id} name={meal.name} description={meal.description} price={meal.price} />)

    return (
        <Card>
            <div className={classes.meals}>
                <ul>
                    {mealsList}
                </ul>
            </div>
        </Card>
    )
}

export default AvailableMeals;