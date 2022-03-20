import React from 'react';
import { ProductCard } from '../../components';
import { ICategory, IProduct } from '../../types';
import styles from './Store.module.scss';

interface IStore {
    currentCategoryProducts: IProduct[];
}

const Store = ({ currentCategoryProducts }: IStore) => {
    console.log('Store - currentCategoryProducts: ', currentCategoryProducts);
    const productElements = currentCategoryProducts.map((item: IProduct) => {
        return (
            <ProductCard
                key={`${item.productId}_${item.parentId}`}
                productCategory={item.productCategory}
                productName={item.productName}
                productWeight={item.productWeight}
                productPrice={item.productPrice}
                productImage={item.productImage}
                productIngredients={item.productIngredients}
            />
        );
    });

    return (
        <div className={styles['store']}>
            <div className={styles['store__cards-box']}>
                {!productElements.length
                    ?
                    <p className={styles['store__message']}>
                        Choose category
                    </p>
                    :
                    productElements
                }
            </div>
        </div>
    );
};

export default React.memo(Store);