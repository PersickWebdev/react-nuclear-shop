import React from 'react';
import styles from './Cart.module.scss';
import { CartItem } from '../../components';
import { IProduct } from '../../types';

interface ICart {
    products: IProduct[];
    totalItemsCount: number;
    totalItemsPrice: number;
}

const Cart = ({ products, totalItemsCount, totalItemsPrice }: ICart) => {

    const cartItems = products.map((item: IProduct) => {
        return (
            <CartItem

            />
        )
    });

    return (
        <div className={styles['cart']}>
            {cartItems}
        </div>
    );
};

export default Cart;