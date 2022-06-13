import { useContext } from 'react';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm/MealItemForm';
import { CartContext } from '../../store/cart-context';

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  const ctx = useContext(CartContext);

  const addToCartHandler = (amount) => {
    console.log(`Amount is ${amount}`);

    ctx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <li key={props.id} className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
    </li>
  );
};

export default MealItem;
