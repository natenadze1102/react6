import { Fragment } from 'react';
import mealsImage from '../../../assets/meals.jpg'
import styles from './Header.module.css';

import HeaderCartButton from './HeaderCartButton';


const Header = () => {
    return (
        <Fragment>
            <header className={styles.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton />
            </header>
            <div className={styles['main-image']}>
                {/* <img src={require('./../../../assets/meals.jpg').default} /> */}
                <img src={mealsImage} alt='main-meal-image' />
            </div>
        </Fragment>
    )
}

export default Header