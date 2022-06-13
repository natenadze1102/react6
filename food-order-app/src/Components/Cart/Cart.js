import Modal from '../UI/Modal';
import classes from './Cart.module.css';
// import { useModal, useModalUpdate } from '../store/modalContext';

const cartItems = [{ id: 'C1', name: 'Sushi', amount: 2, price: 12.99 }].map(
  (item) => {
    return (
      <ul>
        <li>{item.name}</li>
      </ul>
    );
  }
);

const Cart = (props) => {
  return (
    <div className={classes.total}>
      <Modal onClose={props.onClose}>
        {cartItems}
        <div className={classes.total}>
          <span>Total amount</span>
          <span>35.62</span>
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
