import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Store, ControlPanel } from '../../components';
import { ICategory, IProduct } from '../../types';
import styles from './StorePage.module.scss';

const getProducts = (categories: ICategory[], targetCategory: string) => {
    let array: IProduct[] = [];

    categories.forEach((item: ICategory) => {
        if (item.categoryName === targetCategory) {
            array.push(...item.categoryProducts);
            return;
        } else if (targetCategory === 'all') {
            array.push(...item.categoryProducts);
            return;
        }
        return;
    });

    return array;
};

const StorePage = () => {
    // @ts-ignore
    const { data } = useSelector((state) => state.DataReducer);
    const [ currentCategory, setCurrentCategory ] = useState<string>('');
    const [ currentCategoryProducts, setCurrentCategoryProducts ] = useState<any>([]);
    const [ searchValue, setSearchValue ] = useState<string>('');

    useEffect(() => {
        setCurrentCategoryProducts(getProducts(data, currentCategory));
        document.body.style.overflow = '';
    }, [currentCategory]);

    console.log('StorePage - searchValue: ', searchValue);

    return (
        <div className={styles['store-page']}>
            <ControlPanel
                data={data}
                currentCategory={currentCategory}
                setCurrentCategory={setCurrentCategory}
                setSearchValue={setSearchValue}
            />
            <div className={styles['container']}>
                <Store
                    currentCategoryProducts={currentCategoryProducts}
                />
            </div>
        </div>
    );
};

export default StorePage;