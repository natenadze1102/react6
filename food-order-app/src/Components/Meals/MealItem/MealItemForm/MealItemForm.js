import React, { useRef } from 'react';
import classes from './MealItemForm.module.css';
import Input from '../../../UI/Input';
import { CartContext } from '../../../store/cart-context';

const MealItemForm = (props, ref) => {
  let ctx = React.useContext(CartContext);

  const inputRef = useRef();

  const addItemHandler = (e) => {
    e.preventDefault();
    const enteredAmount = +inputRef.current.value;

    if (enteredAmount < 1 || enteredAmount === 0) {
      return;
    }

    props.onAddToCart(enteredAmount);

    return ctx.addItem();
  };

  return (
    <form className={classes.form} onSubmit={addItemHandler}>
      <Input
        label="Amount"
        ref={inputRef}
        input={{
          name: 'amount',
          id: `amount_${props.id}`,
          type: 'number',
          min: '1',
          max: '5',
          step: 1,
          defaultValue: 1,
        }}
      />
      <button type="submit">+ Add</button>
    </form>
  );
};

export default MealItemForm;
