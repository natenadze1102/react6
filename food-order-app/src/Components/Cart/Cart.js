import Modal from '../UI/Modal';
import classes from './Cart.module.css';

const cartItems = [{ id: 'C1', name: 'Sushi', amount: 2, price: 12.99 }].map(
  (item) => {
    return (
      <ul>
        <li>{item.name}</li>
      </ul>
    );
  }
);

const Cart = () => {
  return (
    <div className={classes.total}>
      <Modal>
        {cartItems}
        <div className={classes.total}>
          <span>Total amount</span>
          <span>35.62</span>
        </div>
        <div className={classes.actions}>
          <button className={`${classes.button} ${classes['button--alt']}`}>
            Close
          </button>
          <button className={classes.button}>Order</button>
        </div>
      </Modal>
    </div>
  );
};

export default Cart;
