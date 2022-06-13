import React, { useContext } from 'react';
import classes from './HeaderCart.module.css';
import CartIcon from '../../Cart/CartIcon';
import { CartContext } from '../../store/cart-context';

const HeaderCartButton = (props) => {
  const ctx = useContext(CartContext);

  console.log(ctx);
  const numberOfCartItems = ctx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button className={`${classes.button}`} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
