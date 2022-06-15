import Modal from '../UI/Modal';
import classes from './Cart.module.css';
// import { useModal, useModalUpdate } from '../store/modalContext';
import CartContext from '../store/cart-context';
import { useContext } from 'react';

const Cart = (props) => {
  const ctx = useContext(CartContext);
  const totalAmount = `${ctx.totalAmount.toFixed(2)}`;

  const cartItems = (
    <ul className={classes['cart-items']}>
      {ctx.items.map((item) => {
        return <li>{item.name}</li>;
      })}
    </ul>
  );

  return (
    <div className={classes.total}>
      <Modal onClose={props.onClose}>
        {cartItems}
        <div className={classes.total}>
          <span>Total amount</span>
          <span>{totalAmount}</span>
        </div>
        <div className={classes.actions}>
          <button className={classes['button--alt']} onClick={props.onClose}>
            Close
          </button>
          <button className={classes.button}>Order</button>
        </div>
      </Modal>
    </div>
  );
};

export default Cart;
