import { Fragment } from 'react';
import styles from './Header.module.css';

import HeaderCartButton from '../UI/HeaderCartButton';

const Header = () => {

    return (
        <Fragment>
            <div className={styles.header}>
                <h1>React Meals</h1>
                <HeaderCartButton>Button</HeaderCartButton>
            </div>
            <div className={styles['main-image']}>
                <img src={require('./meals.jpg').default} />
            </div>
        </Fragment>
    )
}

export default Header