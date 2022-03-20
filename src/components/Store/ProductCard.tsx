import React from 'react';
import styles from './Store.module.scss';
import { Icons } from '../../ui';
import { useUtils } from '../../utils';

interface IProductCard {
    parentId?: number,
    productId?: number,
    productCategory?: string,
    productName: string,
    productWeight: number,
    productPrice: number,
    productImage: string,
    productIngredients: string[]
}

const ProductCard = ({
    productCategory,
    productName,
    productWeight,
    productPrice,
    productImage,
    productIngredients
}:IProductCard) => {
    const { processArrayToString } = useUtils();

    const addProductHandler = () => {
        console.log('Icon add clicked');
    }

    return (
        <div className={styles['store__card']}>
            <div className={styles['store__card-image-box']}>
                <img
                    className={styles['store__card-image']}
                    src={productImage}
                    alt="burger"
                />
            </div>
            <div className={`${styles['store__card-section']} ${styles['heading']}`}>
                <h3 className={styles['store__card-heading']}>
                    {productName}
                </h3>
                <span className={styles['store__card-weight']}>
                    {`${productWeight} ${productCategory === 'burgers' ? 'gr' : 'ml'}`}
                </span>
            </div>
            <div className={`${styles['store__card-section']} ${styles['ingredients']}`}>
                <p className={styles['store__card-paragraph']}>
                    Ingredients:
                </p>
                <p className={styles['store__card-paragraph']}>
                    {processArrayToString(productIngredients, 'element')}
                </p>
            </div>
            <div className={`${styles['store__card-section']} ${styles['actions']}`}>
                <span className={styles['store__card-price']}>
                    {`$ ${productPrice}`}
                </span>
                <div
                    className={styles['store__card-icon-box']}
                    onClick={addProductHandler}
                >
                    {Icons.add({
                        className: `${styles['store__card-icon']}`
                    })}
                </div>
            </div>
        </div>
    );
};

export default ProductCard;