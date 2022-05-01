import React from 'react';
import { ProductCard } from '../../components';
import { IProduct } from '../../types';
import styles from './Store.module.scss';

interface IStore {
    currentCategoryProducts: IProduct[];
}

const Store = ({ currentCategoryProducts }: IStore) => {

    const productElements = currentCategoryProducts.map((item: IProduct) => {
        return (
            <ProductCard
                key={`${item.productId}_${item.parentId}`}
                parentId={item.parentId}
                productId={item.productId}
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