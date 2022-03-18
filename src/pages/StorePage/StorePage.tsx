import React from 'react';
import { useSelector } from 'react-redux';
import { Store } from '../../components';
import styles from './StorePage.module.scss';

const StorePage = () => {
    // @ts-ignore
    const { data } = useSelector((state) => state.DataReducer);

    console.log('StorePage - data: ', data);

    return (
        <div className={styles['store-page']}>
            <div className={styles['container']}>
                <Store/>
            </div>
        </div>
    );
};

export default StorePage;