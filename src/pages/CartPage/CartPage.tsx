import React from 'react';
import styles from './CartPage.module.scss';
import { useSelector } from 'react-redux';
import { Cart } from '../../components';

const CartPage = () => {
    // @ts-ignore
    const { products } = useSelector((state) => state.CartReducer);

    console.log('CartPage - products: ', products);

    return (
        <div className={styles['cart-page']}>
            <div className={styles['container']}>
                <Cart products={products}/>
            </div>
        </div>
    );
};

export default CartPage;