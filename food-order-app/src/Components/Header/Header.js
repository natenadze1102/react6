import { Fragment } from 'react';
import styles from './Header.module.css';

import HeaderCartButton from '../UI/HeaderCartButton';
import CartIcon from '../UI/CartIcon';

const Header = () => {

    return (
        <Fragment>
            <div className={styles.header}>
                <h1>React Meals</h1>
                <HeaderCartButton>
                    <div className='icon'>
                        <CartIcon />
                    </div>

                </HeaderCartButton>
            </div>
            <div className={styles['main-image']}>
                <img src={require('./meals.jpg').default} />
            </div>
        </Fragment>
    )
}

export default Header