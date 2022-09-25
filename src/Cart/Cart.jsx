import React from 'react';
import Modal from '../UI/Modal';
import styles from './Cart.module.css';

const Cart = (props) => {

    const cartItems = <ul className={styles['cart-items']}>{[{ id: 'c1', name: 'Chilito', amount: 3, price: 2.17}, ].map((item) => <li>{item.name}</li>)}</ul>;

  return (
    <Modal>
        {cartItems}
        <div className={styles.total}>
            <span>Total Amount</span>
            <span>6.91</span>
        </div>
        <div className={styles.actions}>
            <button className={styles['button--alt']}>Close</button>
            <button className={styles.button}>Order</button>
        </div>
    </Modal>
  );
};

export default Cart;