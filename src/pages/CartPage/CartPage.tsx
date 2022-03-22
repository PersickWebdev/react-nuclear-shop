import React from 'react';
import styles from './CartPage.module.scss';
import { useSelector } from 'react-redux';
import { Cart } from '../../components';

const CartPage = () => {
    // @ts-ignore
    const { products, totalItemsCount, totalItemsPrice } = useSelector((state) => state.CartReducer);

    console.log('CartPage - products: ', products);

    return (
        <div className={styles['cart-page']}>
            <div className={styles['container']}>
                <Cart
                    products={products}
                    totalItemsCount={totalItemsCount}
                    totalItemsPrice={totalItemsPrice}
                />
            </div>
        </div>
    );
};

export default CartPage;