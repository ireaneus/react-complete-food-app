import React, { Fragment } from 'react';

import styles from './Header.module.css';
// import mealsImg from 'https://github.com/academind/react-complete-guide-code/blob/11-practice-food-order-app/extra-files/meals.jpg';

const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <button>Cart</button>
      </header>
      <div className={styles['main-image']}></div>
    </Fragment>
  );
};

export default Header;
