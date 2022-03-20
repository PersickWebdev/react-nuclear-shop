import React from 'react';
import styles from './Store.module.scss';
import { IProduct } from '../../types';

interface IStore {
    currentCategoryProducts: IProduct[];
}

const Store = ({ currentCategoryProducts }: IStore) => {
    console.log('Store - currentCategoryProducts: ', currentCategoryProducts);

    return (
        <div className={styles['store']}>
            <ul className={styles['store__list']}>
                Store
            </ul>
        </div>
    );
};

export default Store;