import React from 'react';
import styles from './Cart.module.scss';
import { Icons } from '../../ui';
import { IProduct } from '../../types';

interface ICartItem {
    products: IProduct[]
    itemId: number;
    itemName: string;
    itemImage: string;
    itemDecreaseHandler: () => void;
    itemIncreaseHandler: (itemId: number) => void;
}

const CartItem = ({ products, itemId, itemName, itemImage, itemDecreaseHandler, itemIncreaseHandler }: ICartItem) => {

    return (
        <div className={styles['cart__item']}>
            <div className={styles['cart__section']}>
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
            </div>
            <div className={styles['cart__section']}>
                <div className={styles['cart__item-controls']}>
                    <div
                        className={styles['cart__item-icon-box']}
                        onClick={itemDecreaseHandler}
                    >
                        {Icons.decrease({
                            className: `${styles['cart__item-icon']}`
                        })}
                    </div>
                    <p className={styles['cart__item-quantity']}>
                        {/*@ts-ignore*/}
                        {products[itemId].length}
                    </p>
                    <div
                        className={styles['cart__item-icon-box']}
                        onClick={() => itemIncreaseHandler(itemId)}
                    >
                        {Icons.increase({
                            className: `${styles['cart__item-icon']}`
                        })}
                    </div>
                </div>
                <p className={styles['cart__item-price']}>
                    {/*@ts-ignore*/}
                    {`$ ${products[itemId].reduce((sum, item) => sum + item.productPrice, 0)}`}
                </p>
            </div>
        </div>
    );
};

export default CartItem;