import React from 'react';
import styles from './Cart.module.scss';

interface ICartItem {

}

const CartItem = () => {
    return (
        <div className={styles['cart__item']}>
            Cart Item
        </div>
    );
};

export default CartItem;