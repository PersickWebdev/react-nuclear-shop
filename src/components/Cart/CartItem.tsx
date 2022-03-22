import React from 'react';
import styles from './Cart.module.scss';
import { IProduct } from '../../types';

interface ICartItem {
    products: IProduct[]
    itemId: number;
    itemName: string;
    itemImage: string;
}

const CartItem = ({ products, itemId, itemName, itemImage }: ICartItem) => {

    return (
        <div className={styles['cart__item']}>
            <div className={styles['cart__item-image-box']}>
                <img
                    className={styles['cart__item-image']}
                    src={itemImage}
                    alt="item-image"
                />
            </div>
            <p className={styles['cart__item-name']}>
                {itemName}
            </p>
            <div className={styles['cart__item-controls']}>
                <div className={styles['cart__item-decrease']}>
                    -
                </div>
                <p className={styles['cart__item-quantity']}>
                    {/*@ts-ignore*/}
                    {products[itemId].length}
                </p>
                <div className={styles['cart__item-increase']}>
                    +
                </div>
            </div>
            <p className={styles['cart__item-price']}>
                {/*@ts-ignore*/}
                {`$ ${products[itemId].reduce((sum, item) => sum + item.productPrice, 0)}`}
            </p>
        </div>
    );
};

export default CartItem;