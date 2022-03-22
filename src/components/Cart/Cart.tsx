import React from 'react';
import styles from './Cart.module.scss';
import { CartItem } from '../../components';
import { Button } from '../../ui';
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
                if (item.productId === obj.productId && item.parentId === obj.parentId) {
                    return;
                }
            }
            cartItems.push(item);
        });
    }

    const itemDecreaseHandler = () => {
        console.log('itemDecreaseHandler')
    };

    const itemIncreaseHandler = () => {
        console.log('itemIncreaseHandler')
    };

    const cartItemElements = cartItems.map((item: any) => {
        return (
            <CartItem
                key={`${item.parentId}_${item.productId}`}
                products={products}
                itemId={item.productId}
                itemName={item.productName}
                itemImage={item.productImage}
                itemDecreaseHandler={itemDecreaseHandler}
                itemIncreaseHandler={itemIncreaseHandler}
            />
        );
    });

    return (
        <div className={styles['cart']}>
            <>
                {cartItemElements}
            </>
            <div className={styles['cart__actions']}>
                {!cartItemElements.length
                    ?
                    <p className={styles['cart__message']}>
                        No items
                    </p>
                    :
                    <Button
                        id="button-order"
                        name="button-order"
                        stylesPreset="success"
                    >
                        Order for ${totalItemsPrice}
                    </Button>
                }
            </div>
        </div>
    );
};

export default Cart;