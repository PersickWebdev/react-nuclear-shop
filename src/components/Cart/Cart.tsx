import React from 'react';
import styles from './Cart.module.scss';
import { useDispatch } from 'react-redux';
import { CartItem } from '../../components';
import { Button } from '../../ui';
import { IProduct } from '../../types';
import { CartActions } from '../../redux/actionCreators';

interface ICart {
    products: IProduct[];
    totalItemsPrice: number;
}

const Cart = ({ products, totalItemsPrice }: ICart) => {
    const dispatch = useDispatch();

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

    const itemDecreaseHandler = (itemId: number) => {
        dispatch(CartActions.decrease(itemId));
    };

    const itemIncreaseHandler = (itemId: number) => {
        dispatch(CartActions.increase(itemId));
    };

    const itemRemoveHandler = (itemId: number) => {
        dispatch(CartActions.remove(itemId));
    }

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
                itemRemoveHandler={itemRemoveHandler}
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