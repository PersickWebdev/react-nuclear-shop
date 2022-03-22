import React from 'react';
import styles from './Cart.module.scss';
import { CartItem } from '../../components';
import { IProduct } from '../../types';

interface ICart {
    products: IProduct[];
    totalItemsPrice: number;
}

const Cart = ({ products, totalItemsPrice }: ICart) => {

    const cartItems: any = [];

    for (let array in products) {
        // @ts-ignore
        products[array].forEach((item: any) => {
            for (let obj of cartItems) {
                if (item.productId === obj.productId) {
                    return;
                }
            }
            cartItems.push(item);
        });
    }

    const cartItemElements = cartItems.map((item: any) => {
        return (
            <CartItem
                key={`${item.parentId}_${item.productId}`}
                products={products}
                itemId={item.productId}
                itemName={item.productName}
                itemImage={item.productImage}
            />
        );
    });

    return (
        <div className={styles['cart']}>
            {cartItemElements}
        </div>
    );
};

export default Cart;