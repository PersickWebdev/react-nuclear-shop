import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Store, ControlPanel } from '../../components';
import { useUtils } from '../../utils';
import { IProduct } from '../../types';
import styles from './StorePage.module.scss';

const StorePage = () => {
    const { getProducts } = useUtils();
    // @ts-ignore
    const { data } = useSelector((state) => state.DataReducer);
    // @ts-ignore
    const { filteredData } = useSelector((state) => state.DataReducer);
    const [ currentCategory, setCurrentCategory ] = useState<string>('');
    const [ currentCategoryProducts, setCurrentCategoryProducts ] = useState<any>([]);
    const [ filterValue, setFilterValue ] = useState<string>('');

    useEffect(() => {
        document.body.style.overflow = '';

        if (filteredData.length) {
            setCurrentCategoryProducts(filteredData);
        } else {
            setCurrentCategoryProducts(getProducts(data, currentCategory));
        }

    }, [ currentCategory, filteredData ]);

    useEffect(() => {
        const filterByPrice = (valueToFilterBy: string, itemsToFilter: IProduct[]) => {
            if (valueToFilterBy === '') return;

            if (valueToFilterBy === 'from lowest to highest') {
                return itemsToFilter.sort((a, b) => a.productPrice - b.productPrice);
            }

            if (valueToFilterBy === 'from highest to lowest') {
                return itemsToFilter.sort((a, b) => a.productPrice - b.productPrice).reverse();
            }
        };

        if (filterValue === '') return;

        setCurrentCategoryProducts(() => {
            //@ts-ignore
            return [...filterByPrice(filterValue, currentCategoryProducts)];
        });

    }, [ filterValue ]);

    return (
        <div className={styles['store-page']}>
            <ControlPanel
                data={data}
                currentCategory={currentCategory}
                setCurrentCategory={setCurrentCategory}
                setFilterValue={setFilterValue}
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