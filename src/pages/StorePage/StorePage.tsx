import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Store, ControlPanel } from '../../components';
import { ICategory, IProduct } from '../../types';
import styles from './StorePage.module.scss';

const getProducts = (categories: ICategory[], targetCategory: string) => {
    const array: IProduct[] = [];
    categories.forEach((item: ICategory) => {
        if (item.categoryName === targetCategory) {
            array.push(...item.categoryProducts);
        }
        return;
    });
    return array;
};

const getAllProducts = (categories: ICategory[]) => {
    const array: IProduct[] = [];
    categories.forEach((item: ICategory) => {
        if (item.categoryProducts.length) {
            array.push(...item.categoryProducts);
        } else {
            return;
        }
    });
    return array;
}

const StorePage = () => {
    // @ts-ignore
    const { data } = useSelector((state) => state.DataReducer);
    const [ currentCategory, setCurrentCategory ] = useState<string>('');
    const [ currentCategoryProducts, setCurrentCategoryProducts ] = useState<any>([]);

    useEffect(() => {
        setCurrentCategoryProducts(getProducts(data, currentCategory));
    }, [currentCategory]);

    useEffect(() => {
        setCurrentCategoryProducts((state: IProduct[]) => {
            return [
                ...state, ...getAllProducts(data)
            ]
        })
    }, []);

    console.log('StorePage - currentCategoryProducts: ', currentCategoryProducts);

    return (
        <div className={styles['store-page']}>
            <ControlPanel
                data={data}
                currentCategory={currentCategory}
                setCurrentCategory={setCurrentCategory}
            />
            <div className={styles['container']}>
                <Store />
            </div>
        </div>
    );
};

export default StorePage;