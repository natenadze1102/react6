import classes from './HeaderCart.module.css';
import CartIcon from '../../Cart/CartIcon'
import { useModal, useModalUpdate } from '../../store/modalContext';
import ModalContext from '../../store/modalContext';

const HeaderCartButton = (props) => {
    const toggleModal = useModalUpdate();
    const ctx = useContext(ModalContext);
    return (
        <button className={`${classes.button}`} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>2</span>
        </button>
    )
}

export default HeaderCartButton