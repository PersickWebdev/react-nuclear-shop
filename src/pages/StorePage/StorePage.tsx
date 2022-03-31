import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Store, ControlPanel } from '../../components';
import { useUtils } from '../../utils';
import styles from './StorePage.module.scss';

const StorePage = () => {
    const { getProducts } = useUtils();
    // @ts-ignore
    const { data } = useSelector((state) => state.DataReducer);
    // @ts-ignore
    const { filteredData } = useSelector((state) => state.DataReducer);
    const [ currentCategory, setCurrentCategory ] = useState<string>('');
    const [ currentCategoryProducts, setCurrentCategoryProducts ] = useState<any>([]);

    useEffect(() => {
        document.body.style.overflow = '';

        if (filteredData.length) {
            setCurrentCategoryProducts(filteredData);
        } else {
            setCurrentCategoryProducts(getProducts(data, currentCategory));
        }

    }, [currentCategory, filteredData]);

    console.log('StorePage - data: ', data);
    console.log('StorePage - filteredData: ', filteredData);
    console.log('StorePage - currentCategory: ', currentCategory);

    return (
        <div className={styles['store-page']}>
            <ControlPanel
                data={data}
                currentCategory={currentCategory}
                setCurrentCategory={setCurrentCategory}
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