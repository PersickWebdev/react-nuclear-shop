import React from 'react';
import styles from './Cart.module.scss';
import { IProduct } from '../../types';

interface ICart {
    products: IProduct[]
}

const Cart = ({ products }: ICart) => {
    console.log('Cart - products: ', products);

    return (
        <div className={styles['cart']}>
            Cart
        </div>
    );
};

export default Cart;