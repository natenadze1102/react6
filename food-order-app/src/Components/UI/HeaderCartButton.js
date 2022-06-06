import { Fragment } from 'react';
import styles from './HeaderCart.module.css';

const HeaderCartButton = (props) => {
    return (
        <Fragment>
            <button className={styles.button}>{props.children}</button>
        </Fragment>
    )
}

export default HeaderCartButton