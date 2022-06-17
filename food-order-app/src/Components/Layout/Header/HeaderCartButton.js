import { useContext, useEffect, useState } from 'react';
import CartIcon from '../../Cart/CartIcon';
import CartContext from '../../store/cart-context';
import classes from './HeaderCart.module.css';

const HeaderCartButton = (props) => {
  const ctx = useContext(CartContext);

  const numberOfCartItems = ctx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false)

  const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`

  useEffect(() => {
    if (ctx.items.length === 0) {
      return
    }
    console.log('12S')
    setBtnIsHighlighted(true)
    const timer = setTimeout(() => {

      setBtnIsHighlighted(false)
    }, 300)

    return () => {
      clearTimeout(timer)
    }
  }, [ctx.items])

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
