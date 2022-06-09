import Card from '../UI/Card';
import classes from './Cart.module.css';

const Cart = () => {
    return (

        <div className={classes['cart-items']}>
            <Card>
                <div className={classes.total}></div>
                <div className={classes.actions}>
                    <div className={classes.actions}>
                        <button className={classes.button}></button>
                        <button className={`${classes.button} ${classes['button--alt']}`}></button>
                    </div>
                </div>
            </Card>
        </div>

    )
}

export default Cart;